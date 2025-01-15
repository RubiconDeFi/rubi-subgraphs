/* eslint-disable prefer-const */
import { Address, BigDecimal, BigInt, Bytes, store } from '@graphprotocol/graph-ts'
import { log } from '@graphprotocol/graph-ts'

import {
  Burn as BurnEvent,
  Mint as MintEvent,
  Pair,
  Swap as SwapEvent,
  Token,
  Transaction,
  UniswapFactory,
} from '../../generated/schema'
import { Burn, Mint, Swap, Sync, Transfer } from '../../generated/templates/Pair/Pair'
import { updatePairDayData, updatePairHourData, updateTokenDayData, updateUniswapDayData } from './dayUpdates'
import { ADDRESS_ZERO, BI_18, convertTokenToDecimal, createUser, ONE_BI, toBigDecimal, ZERO_BD, ZERO_BI } from './helpers'
import { decimals, feedToTokenConfig } from '../config'
// import { findEthPerToken, getEthPriceInUSD, getTrackedLiquidityUSD, getTrackedVolumeUSD } from './pricing'

function isCompleteMint(mintId: Bytes): boolean {
  return MintEvent.load(mintId)!.sender !== null // sufficient checks
}

export function handleTransfer(event: Transfer): void {
  // ignore initial transfers for first adds
  if (event.params.to == ADDRESS_ZERO && event.params.value.equals(BigInt.fromI32(1000))) {
    return
  }

  let factory = UniswapFactory.load(Bytes.fromI32(1))!
  let transactionHash = event.transaction.hash

  // user stats
  let from = event.params.from
  let sender = createUser(from)
  let to = event.params.to
  let recipient = createUser(to)

  // get pair and load contract
  let pair = Pair.load(event.address)!

  // liquidity token amount being transfered
  let value = convertTokenToDecimal(event.params.value, BI_18)

  // get or create transaction
  let transaction = Transaction.load(transactionHash)
  if (transaction === null) {
    transaction = new Transaction(transactionHash)
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp
    transaction.swaps = []
  }

  if (to == ADDRESS_ZERO && from == pair.id) return;
  if (from == ADDRESS_ZERO && to == pair.id) return;

  // update user balance of this lp token somehow

  transaction.save()
}

export function handleSync(event: Sync): void {
  let pair = Pair.load(event.address)!
  let token0 = Token.load(pair.token0)
  let token1 = Token.load(pair.token1)
  if (token0 === null || token1 === null) {
    return
  }
  let uniswap = UniswapFactory.load(Bytes.fromI32(1))!

  // reset factory liquidity by subtracting onluy tarcked liquidity
  // uniswap.totalLiquidityETH = uniswap.totalLiquidityETH.minus(pair.trackedReserveETH as BigDecimal)

  // reset token total liquidity amounts
  token0.totalLiquidity = token0.totalLiquidity.minus(pair.reserve0)
  token1.totalLiquidity = token1.totalLiquidity.minus(pair.reserve1)

  pair.reserve0 = event.params.reserve0
  pair.reserve1 = event.params.reserve1

  if (pair.reserve1.notEqual(ZERO_BI)) {
    pair.token0Price = pair.reserve0.toBigDecimal().div(pair.reserve1.toBigDecimal())
  } else {
    pair.token0Price = ZERO_BD
  }

  if (pair.reserve0.notEqual(ZERO_BI)) {
    pair.token1Price = pair.reserve1.toBigDecimal().div(pair.reserve0.toBigDecimal())
  } else {
    pair.token1Price = ZERO_BD
  }

  // now correctly set liquidity amounts for each token
  token0.totalLiquidity = token0.totalLiquidity.plus(pair.reserve0)
  token1.totalLiquidity = token1.totalLiquidity.plus(pair.reserve1)

  uniswap.save()
  token0.save()
  token1.save()

  if (token0.currentPrice == ZERO_BD && token1.currentPrice == ZERO_BD) {
    pair.save();
  } else if (token0.currentPrice != ZERO_BD && token1.currentPrice != ZERO_BD) {
    pair.reserve0USD = token0.currentPrice.times(pair.reserve0.toBigDecimal())
    pair.reserve1USD = token1.currentPrice.times(pair.reserve1.toBigDecimal())
    pair.save()
  } else if (token0.currentPrice != ZERO_BD && token0.decimals) {
    pair.reserve0USD = token0.currentPrice.times(pair.reserve0.toBigDecimal())
      .div(BigInt.fromI32(10)
        .pow(token0.decimals.toU32() as u8)
        .toBigDecimal())
    pair.reserve1USD = pair.reserve0USD
    pair.save()
  } else if (token1.currentPrice != ZERO_BD && token1.decimals)  {
    pair.reserve1USD = token1.currentPrice.times(pair.reserve1.toBigDecimal())
      .div(BigInt.fromI32(10)
        .pow(token1.decimals!.toU32() as u8)
        .toBigDecimal())
    pair.reserve0USD = pair.reserve1USD
    pair.save()
  }
}

export function handleMint(event: Mint): void {
//   // loaded from a previous handler creating this transaction
//   // transfer event is emitted first and mint event is emitted afterwards, good to confirm with a protocol eng
//   let transaction = Transaction.load(event.transaction.hash)
//   if (transaction === null) {
//     return
//   }

//   let mints = transaction.mints
//   let mint = MintEvent.load(mints[mints.length - 1])

//   if (mint === null) {
//     return
//   }

//   let pair = Pair.load(event.address)!
//   let uniswap = UniswapFactory.load(Bytes.fromI32(1))!

//   let token0 = Token.load(pair.token0)
//   let token1 = Token.load(pair.token1)

//   if (token0 === null || token1 === null) {
//     return
//   }

//   // update exchange info (except balances, sync will cover that)

//   // let token0Amount = convertTokenToDecimal(event.params.amount0, BigInt.fromI32(18))
//   // let token1Amount = convertTokenToDecimal(event.params.amount1, BigInt.fromI32(18))

//   // update txn counts
//   token0.txCount = token0.txCount.plus(ONE_BI)
//   token1.txCount = token1.txCount.plus(ONE_BI)

//   let token0Price: BigDecimal = token0.currentPrice;
//   let token1Price: BigDecimal = token1.currentPrice;

//   let token0Decimals: i32;
//   let token1Decimals: i32;

//   let token0Formatted: BigDecimal = BigDecimal.fromString("0");
//   let token1Formatted: BigDecimal = BigDecimal.fromString("0");

//   if (decimals.has(token0.id)) {
//       token0Decimals = decimals.get(token0.id)
//       token0Formatted = toBigDecimal(event.params.amount0, BigInt.fromI32(token0Decimals))
//   }

//   if (decimals.has(token1.id)) {
//       token1Decimals = decimals.get(token1.id)
//       token1Formatted = toBigDecimal(event.params.amount1, BigInt.fromI32(token1Decimals))
//   }

//   let amtUsd: BigDecimal

//   if (token0Price.equals(ZERO_BD) && token1Price.equals(ZERO_BD)) {
//       amtUsd = ZERO_BD
//   } else if (token0Price.equals(ZERO_BD) && !token1Price.equals(ZERO_BD)) {
//       amtUsd = token1Formatted.times(token1Price)
//   } else if (!token0Price.equals(ZERO_BD) && token1Price.equals(ZERO_BD)) {
//       amtUsd = token0Formatted.times(token0Price)
//   } else {
//       amtUsd = token0Formatted.times(token0Price)
//   }

//   // let amountTotalUSD = token1.derivedETH.times(token1Amount)
//   //   .plus(token0.derivedETH.times(token0Amount))
//   //   .times(bundle.ethPrice)

//   // update txn counts
//   pair.txCount = pair.txCount.plus(ONE_BI)
//   uniswap.txCount = uniswap.txCount.plus(ONE_BI)

//   // save entities
//   token0.save()
//   token1.save()
//   pair.save()
//   uniswap.save()

//   mint.sender = event.params.sender
//   mint.amount0 = event.params.amount0
//   mint.amount1 = event.params.amount1
//   mint.logIndex = event.logIndex
//   mint.amountUSD = amtUsd as BigDecimal
//   mint.save()

//   // update day entities
//   updatePairDayData(event)
//   updatePairHourData(event)
//   updateUniswapDayData(event)
//   updateTokenDayData(token0, event, bundle.ethPrice, wethAmount.times(bundle.ethPrice))
//   updateTokenDayData(token1, event, wethAmount.times(bundle.ethPrice).div(tokenAmount), wethAmount.times(bundle.ethPrice))
}

export function handleBurn(event: Burn): void {
//   let transaction = Transaction.load(event.transaction.hash)

//   // safety check
//   if (transaction === null) {
//     return
//   }

//   let burns = transaction.burns
//   let burn = BurnEvent.load(burns[burns.length - 1])

//   if (burn === null) {
//     return
//   }

//   let pair = Pair.load(event.address)!
//   let uniswap = UniswapFactory.load(Bytes.fromI32(1))!

//   //update token info
//   let token0 = Token.load(pair.token0)
//   let token1 = Token.load(pair.token1)
//   if (token0 === null || token1 === null) {
//     return
//   }

//   let token0Amount = convertTokenToDecimal(event.params.amount0, BigInt.fromI32(18))
//   let token1Amount = convertTokenToDecimal(event.params.amount1, BigInt.fromI32(18))

//   // update txn counts
//   token0.txCount = token0.txCount.plus(ONE_BI)
//   token1.txCount = token1.txCount.plus(ONE_BI)

//   let tokenAmount = (token0.id == bundle.wethAddress) ? token1Amount : token0Amount
//   let wethAmount = (token0.id == bundle.wethAddress) ? token0Amount : token1Amount
//   let weth = (token0.id == bundle.wethAddress) ? token0 : token1
//   let token = (token0.id == bundle.wethAddress) ? token1 : token0
//   let amountTotalUSD = wethAmount.times(bundle.ethPrice).times(BigInt.fromI32(2).toBigDecimal())

//   // let amountTotalUSD = token1.derivedETH
//   //   .times(token1Amount)
//   //   .plus(token0.derivedETH.times(token0Amount))
//   //   .times(bundle.ethPrice)

//   // update txn counts
//   uniswap.txCount = uniswap.txCount.plus(ONE_BI)
//   pair.txCount = pair.txCount.plus(ONE_BI)

//   // update global counter and save
//   token0.save()
//   token1.save()
//   pair.save()
//   uniswap.save()

//   // update burn
//   burn.sender = event.params.sender
//   burn.amount0 = token0Amount as BigDecimal
//   burn.amount1 = token1Amount as BigDecimal
//   burn.to = event.params.to
//   burn.logIndex = event.logIndex
//   burn.amountUSD = amountTotalUSD as BigDecimal
//   burn.save()

//   // update day entities
//   updatePairDayData(event)
//   updatePairHourData(event)
//   updateUniswapDayData(event)
//   updateTokenDayData(weth as Token, event, bundle.ethPrice, wethAmount.times(bundle.ethPrice))
//   updateTokenDayData(token as Token, event, wethAmount.times(bundle.ethPrice).div(tokenAmount), wethAmount.times(bundle.ethPrice))
}

export function handleSwap(event: Swap): void {
  let pair = Pair.load(event.address)!
  let token0 = Token.load(pair.token0)
  let token1 = Token.load(pair.token1)

  if (token0 === null || token1 === null) {
    return
  }

  // totals for volume updates
  let amount0In = event.params.amount0In;
  let amount0Out = event.params.amount0Out;
  let amount1In = event.params.amount1In;
  let amount1Out = event.params.amount1Out;
  let amount0Total = amount0Out.plus(amount0In).toBigDecimal();
  let amount1Total = amount1Out.plus(amount1In).toBigDecimal();

  // // get total amounts of derived USD and ETH for tracking
  // let derivedAmountETH = token1.derivedETH
  //   .times(amount1Total)
  //   .plus(token0.derivedETH.times(amount0Total))
  //   .div(BigDecimal.fromString('2'))
  // let derivedAmountUSD = derivedAmountETH.times(bundle.ethPrice)

  // only accounts for volume through white listed tokens

  let trackedAmountUSD: BigDecimal; 

  if (token0.currentPrice == ZERO_BD && token1.currentPrice == ZERO_BD) {
    trackedAmountUSD = BigDecimal.zero();
  } else if (token0.currentPrice != ZERO_BD) {
    if (!token0.decimals) {
      trackedAmountUSD = BigDecimal.zero()
    } else {
      trackedAmountUSD = amount0Total.times(token0.currentPrice).div(BigInt.fromI32(10)
      .pow(token0.decimals.toU32() as u8)
      .toBigDecimal())
    }
  } else {
    if (!token1.decimals) {
      trackedAmountUSD = BigDecimal.zero()
    } else {
      trackedAmountUSD = amount1Total.times(token1.currentPrice).div(BigInt.fromI32(10)
      .pow(token1.decimals.toU32() as u8)
      .toBigDecimal())
    }
  }

  // let trackedAmountUSD = getTrackedVolumeUSD(amount0Total, token0 as Token, amount1Total, token1 as Token, pair as Pair)

  // // update token0 global volume and token liquidity stats
  token0.tradeVolume = token0.tradeVolume.plus(amount0In.plus(amount0Out))
  token0.tradeVolumeUSD = token0.tradeVolumeUSD.plus(trackedAmountUSD)
  // token0.untrackedVolumeUSD = token0.untrackedVolumeUSD.plus(derivedAmountUSD)

  // // update token1 global volume and token liquidity stats
  token1.tradeVolume = token1.tradeVolume.plus(amount1In.plus(amount1Out))
  token1.tradeVolumeUSD = token1.tradeVolumeUSD.plus(trackedAmountUSD)
  // token1.untrackedVolumeUSD = token1.untrackedVolumeUSD.plus(derivedAmountUSD)

  // // update txn counts
  token0.txCount = token0.txCount.plus(ONE_BI)
  token1.txCount = token1.txCount.plus(ONE_BI)

  // // update pair volume data, use tracked amount if we have it as its probably more accurate
  pair.volumeUSD = pair.volumeUSD.plus(trackedAmountUSD)
  pair.volumeToken0 = pair.volumeToken0.plus(amount0Total)
  pair.volumeToken1 = pair.volumeToken1.plus(amount1Total)
  pair.txCount = pair.txCount.plus(ONE_BI)
  pair.save()

  // update global values, only used tracked amounts for volume
  let uniswap = UniswapFactory.load(Bytes.fromI32(1))!
  uniswap.totalVolumeUSD = uniswap.totalVolumeUSD.plus(trackedAmountUSD)
  // uniswap.totalVolumeETH = uniswap.totalVolumeETH.plus(wethAmount)
  uniswap.txCount = uniswap.txCount.plus(ONE_BI)

  // save entities
  pair.save()
  token0.save()
  token1.save()
  uniswap.save()

  let transaction = Transaction.load(event.transaction.hash)
  if (transaction === null) {
    transaction = new Transaction(event.transaction.hash)
    transaction.blockNumber = event.block.number
    transaction.timestamp = event.block.timestamp
    // transaction.mints = []
    transaction.swaps = []
    // transaction.burns = []
  }

  let swaps = transaction.swaps
  let swap = new SwapEvent(
    event.transaction.hash.concat(Bytes.fromI32(swaps.length)),
  )

  // update swap event
  swap.transaction = transaction.id
  swap.pair = pair.id
  swap.timestamp = transaction.timestamp
  swap.transaction = transaction.id
  swap.sender = event.params.sender
  swap.amount0In = amount0In
  swap.amount1In = amount1In
  swap.amount0Out = amount0Out
  swap.amount1Out = amount1Out
  swap.to = event.params.to
  swap.from = event.transaction.from
  swap.logIndex = event.logIndex
  // use the tracked amount if we have it
  swap.amountUSD = trackedAmountUSD
  swap.save()

  // update the transaction

  // TODO: Consider using .concat() for handling array updates to protect
  // against unintended side effects for other code paths.
  swaps.push(swap.id)
  transaction.swaps = swaps
  transaction.save()

  // update day entities
  let pairDayData = updatePairDayData(event)
  let pairHourData = updatePairHourData(event)
  let uniswapDayData = updateUniswapDayData(event)
  let token0DayData = updateTokenDayData(token0, event, trackedAmountUSD)
  let token1DayData = updateTokenDayData(token1, event, trackedAmountUSD)

  // // swap specific updating
  uniswapDayData.dailyVolumeUSD = uniswapDayData.dailyVolumeUSD.plus(trackedAmountUSD)
  // uniswapDayData.dailyVolumeETH = uniswapDayData.dailyVolumeETH.plus(wethAmount)
  // uniswapDayData.dailyVolumeUntracked = uniswapDayData.dailyVolumeUntracked.plus(derivedAmountUSD)
  uniswapDayData.save()

  // // swap specific updating for pair
  pairDayData.dailyVolumeToken0 = pairDayData.dailyVolumeToken0.plus(amount0Total)
  pairDayData.dailyVolumeToken1 = pairDayData.dailyVolumeToken1.plus(amount1Total)
  pairDayData.dailyVolumeUSD = pairDayData.dailyVolumeUSD.plus(trackedAmountUSD)
  pairDayData.save()

  // // update hourly pair data
  pairHourData.hourlyVolumeToken0 = pairHourData.hourlyVolumeToken0.plus(amount0Total)
  pairHourData.hourlyVolumeToken1 = pairHourData.hourlyVolumeToken1.plus(amount1Total)
  pairHourData.hourlyVolumeUSD = pairHourData.hourlyVolumeUSD.plus(trackedAmountUSD)
  pairHourData.save()

  // // swap specific updating for token0
  token0DayData.dailyVolumeToken = token0DayData.dailyVolumeToken.plus(amount0Total)
  // token0DayData.dailyVolumeETH = wethAmount
  token0DayData.dailyVolumeUSD = trackedAmountUSD
  token0DayData.save()

  // // swap specific updating
  token1DayData.dailyVolumeToken = token1DayData.dailyVolumeToken.plus(amount1Total)
  // token1DayData.dailyVolumeETH = wethAmount
  token1DayData.dailyVolumeUSD = trackedAmountUSD
  token1DayData.save()
}
