/* eslint-disable prefer-const */
import { Address, BigDecimal, BigInt, Bytes } from '@graphprotocol/graph-ts'
import { CandleFifteenMinute, CandleFiveMinute, CandleOneDay, CandleOneHour, CandleOneMinute, Pair, Swap, Token, User } from '../../generated/schema'

export const ADDRESS_ZERO = Address.fromHexString('0x0000000000000000000000000000000000000000')

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

// rebass tokens, dont count in tracked volume
export let UNTRACKED_PAIRS: string[] = ['0x9ea3b5b4ec044b70375236a281986106457b20ef']

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
  let bd = BigDecimal.fromString('1')
  for (let i = ZERO_BI; i.lt(decimals as BigInt); i = i.plus(ONE_BI)) {
    bd = bd.times(BigDecimal.fromString('10'))
  }
  return bd
}

export function bigDecimalExp18(): BigDecimal {
  return BigDecimal.fromString('1000000000000000000')
}

export function convertEthToDecimal(eth: BigInt): BigDecimal {
  return eth.toBigDecimal().div(exponentToBigDecimal(new BigInt(18)))
}

export function convertTokenToDecimal(tokenAmount: BigInt, exchangeDecimals: BigInt): BigDecimal {
  if (exchangeDecimals == ZERO_BI) {
    return tokenAmount.toBigDecimal()
  }
  return tokenAmount.toBigDecimal().div(exponentToBigDecimal(exchangeDecimals))
}

export function equalToZero(value: BigDecimal): boolean {
  const formattedVal = parseFloat(value.toString())
  const zero = parseFloat(ZERO_BD.toString())
  if (zero == formattedVal) {
    return true
  }
  return false
}

export function isNullEthValue(value: string): boolean {
  return value == '0x0000000000000000000000000000000000000000000000000000000000000001'
}

export function createUser(address: Address): User {
  let user = User.load(address)
  if (user === null) {
    user = new User(address)
    user.usdSwapped = ZERO_BD
    user.save()
  }
  return user;
}

export function fetchToken(tokenAddress: Address): Token {
    // attempt to load the token from the store
    let token = Token.load(tokenAddress)

    // if the token is null, create it
    if (token == null) {
        token = new Token(tokenAddress)
        token.currentPrice = ZERO_BD
        token.tradeVolume = ZERO_BI
        token.tradeVolumeUSD = ZERO_BD
        // token0.untrackedVolumeUSD = ZERO_BD
        token.totalLiquidity = ZERO_BI
        token.txCount = ZERO_BI
        token.save()
    }
    return token as Token
}

export function toBigDecimal(quantity: BigInt, decimals: BigInt): BigDecimal {
    return quantity.divDecimal(
      BigInt.fromI32(10)
        .pow(decimals.toU32() as u8)
        .toBigDecimal(),
    );
}

export function updateCandles(swap: Swap): void {

  let pair = Pair.load(swap.pair)!
  // token0 = lower alphabetically token
  let token0 = pair.token0
  
  // token1 = higher alphabetically token
  let token1 = pair.token1
  
  // token0_amount = amount of token0 in the trade
  let token0_amount = swap.amount0In.plus(swap.amount0Out)
  
  // token1_amount = amount of token1 in the trade
  let token1_amount = swap.amount1In.plus(swap.amount1Out)

  // let ratio = token0_amount / token1_amount
  let ratio = token0_amount.toBigDecimal().div(token1_amount.toBigDecimal())

  // get the relevant time periods for each candle 
  let one_minute = swap.timestamp.toI64() / 60
  let five_minute = swap.timestamp.toI64() / 300
  let fifteen_minute = swap.timestamp.toI64() / 900
  let one_hour = swap.timestamp.toI64() / 3600
  let one_day = swap.timestamp.toI64() / 86400

  // get the candle ids
  let candle_one_minute_id = token0.concat(token1).concat(Bytes.fromByteArray(Bytes.fromBigInt(BigInt.fromString(one_minute.toString()))))
  let candle_five_minute_id = token0.concat(token1).concat(Bytes.fromByteArray(Bytes.fromBigInt(BigInt.fromString(five_minute.toString()))))
  let candle_fifteen_minute_id = token0.concat(token1).concat(Bytes.fromByteArray(Bytes.fromBigInt(BigInt.fromString(fifteen_minute.toString()))))
  let candle_one_hour_id = token0.concat(token1).concat(Bytes.fromByteArray(Bytes.fromBigInt(BigInt.fromString(one_hour.toString()))))
  let candle_one_day_id = token0.concat(token1).concat(Bytes.fromByteArray(Bytes.fromBigInt(BigInt.fromString(one_day.toString()))))

  // load in the candles
  let candle_one_minute = CandleOneMinute.load(candle_one_minute_id)
  let candle_five_minute = CandleFiveMinute.load(candle_five_minute_id)
  let candle_fifteen_minute = CandleFifteenMinute.load(candle_fifteen_minute_id)
  let candle_one_hour = CandleOneHour.load(candle_one_hour_id)
  let candle_one_day = CandleOneDay.load(candle_one_day_id)

  if (candle_one_minute == null) {
      candle_one_minute = new CandleOneMinute(candle_one_minute_id)
      candle_one_minute.token0 = token0
      candle_one_minute.token1 = token1
      candle_one_minute.open_timestamp = swap.timestamp
      candle_one_minute.close_timestamp = swap.timestamp
      candle_one_minute.open = swap.id
      candle_one_minute.high = swap.id
      candle_one_minute.low = swap.id
      candle_one_minute.close = swap.id
      candle_one_minute.high_ratio = ratio
      candle_one_minute.low_ratio = ratio
      candle_one_minute.save()
  } else {
      if (ratio > candle_one_minute.high_ratio) {
          candle_one_minute.high = swap.id
          candle_one_minute.high_ratio = ratio
      }
      if (ratio < candle_one_minute.low_ratio) {
          candle_one_minute.low = swap.id
          candle_one_minute.low_ratio = ratio
      }
      candle_one_minute.close = swap.id
      candle_one_minute.close_timestamp = swap.timestamp
      candle_one_minute.save()
  }

  if (candle_five_minute == null) {
      candle_five_minute = new CandleFiveMinute(candle_five_minute_id)
      candle_five_minute.token0 = token0
      candle_five_minute.token1 = token1
      candle_five_minute.open_timestamp = swap.timestamp
      candle_five_minute.close_timestamp = swap.timestamp
      candle_five_minute.open = swap.id
      candle_five_minute.high = swap.id
      candle_five_minute.low = swap.id
      candle_five_minute.close = swap.id
      candle_five_minute.high_ratio = ratio
      candle_five_minute.low_ratio = ratio
      candle_five_minute.save()
  } else {
      if (ratio > candle_five_minute.high_ratio) {
          candle_five_minute.high = swap.id
          candle_five_minute.high_ratio = ratio
      }
      if (ratio < candle_five_minute.low_ratio) {
          candle_five_minute.low = swap.id
          candle_five_minute.low_ratio = ratio
      }
      candle_five_minute.close = swap.id
      candle_five_minute.close_timestamp = swap.timestamp
      candle_five_minute.save()
  }

  if (candle_fifteen_minute == null) {
      candle_fifteen_minute = new CandleFifteenMinute(candle_fifteen_minute_id)
      candle_fifteen_minute.token0 = token0
      candle_fifteen_minute.token1 = token1
      candle_fifteen_minute.open_timestamp = swap.timestamp
      candle_fifteen_minute.close_timestamp = swap.timestamp
      candle_fifteen_minute.open = swap.id
      candle_fifteen_minute.high = swap.id
      candle_fifteen_minute.low = swap.id
      candle_fifteen_minute.close = swap.id
      candle_fifteen_minute.high_ratio = ratio
      candle_fifteen_minute.low_ratio = ratio
      candle_fifteen_minute.save()
  } else {
      if (ratio > candle_fifteen_minute.high_ratio) {
          candle_fifteen_minute.high = swap.id
          candle_fifteen_minute.high_ratio = ratio
      }
      if (ratio < candle_fifteen_minute.low_ratio) {
          candle_fifteen_minute.low = swap.id
          candle_fifteen_minute.low_ratio = ratio
      }
      candle_fifteen_minute.close = swap.id
      candle_fifteen_minute.close_timestamp = swap.timestamp
      candle_fifteen_minute.save()
  }

  if (candle_one_hour == null) {
      candle_one_hour = new CandleOneHour(candle_one_hour_id)
      candle_one_hour.token0 = token0
      candle_one_hour.token1 = token1
      candle_one_hour.open_timestamp = swap.timestamp
      candle_one_hour.close_timestamp = swap.timestamp
      candle_one_hour.open = swap.id
      candle_one_hour.high = swap.id
      candle_one_hour.low = swap.id
      candle_one_hour.close = swap.id
      candle_one_hour.high_ratio = ratio
      candle_one_hour.low_ratio = ratio
      candle_one_hour.save()
  } else {
      if (ratio > candle_one_hour.high_ratio) {
          candle_one_hour.high = swap.id
          candle_one_hour.high_ratio = ratio
      }
      if (ratio < candle_one_hour.low_ratio) {
          candle_one_hour.low = swap.id
          candle_one_hour.low_ratio = ratio
      }
      candle_one_hour.close = swap.id
      candle_one_hour.close_timestamp = swap.timestamp
      candle_one_hour.save()
  }

  if (candle_one_day == null) {
      candle_one_day = new CandleOneDay(candle_one_day_id)
      candle_one_day.token0 = token0
      candle_one_day.token1 = token1
      candle_one_day.open_timestamp = swap.timestamp
      candle_one_day.close_timestamp = swap.timestamp
      candle_one_day.open = swap.id
      candle_one_day.high = swap.id
      candle_one_day.low = swap.id
      candle_one_day.close = swap.id
      candle_one_day.high_ratio = ratio
      candle_one_day.low_ratio = ratio
      candle_one_day.save()
  } else {
      if (ratio > candle_one_day.high_ratio) {
          candle_one_day.high = swap.id
          candle_one_day.high_ratio = ratio
      }
      if (ratio < candle_one_day.low_ratio) {
          candle_one_day.low = swap.id
          candle_one_day.low_ratio = ratio
      }
      candle_one_day.close = swap.id
      candle_one_day.close_timestamp = swap.timestamp
      candle_one_day.save()
  }
}
