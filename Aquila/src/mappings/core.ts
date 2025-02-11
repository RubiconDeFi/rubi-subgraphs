/* eslint-disable prefer-const */
import { Address, BigDecimal, BigInt, Bytes, store } from '@graphprotocol/graph-ts'
import { log } from '@graphprotocol/graph-ts'

import {
  Burn as BurnEvent,
  Mint as MintEvent,
  Pair,
  Swap as SwapEvent,
  Take,
  Token,
  Transaction,
  UniswapFactory,
} from '../../generated/schema'
import { Burn, Mint, Swap, Sync, Transfer } from '../../generated/templates/Pair/Pair'
import { updatePairDayData, updatePairHourData, updateTokenDayData, updateUniswapDayData } from './dayUpdates'
import { ADDRESS_ZERO, BI_18, convertTokenToDecimal, createUser, ONE_BI, toBigDecimal, updateCandles, ZERO_BD, ZERO_BI } from './helpers'

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
  let to = event.params.to

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

  uniswap.totalLiquidityUSD = uniswap.totalLiquidityUSD.minus(pair.reserve0USD).minus(pair.reserve1USD)

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

  if (token0.currentPrice != ZERO_BD && token1.currentPrice != ZERO_BD) {
    let reserve0AMTFormatted = pair.reserve0.toBigDecimal().div(
      BigInt.fromI32(10).pow(token0.decimals!.toU32() as u8).toBigDecimal()
    )
    let reserve1AMTFormatted = pair.reserve1.toBigDecimal().div(
      BigInt.fromI32(10).pow(token1.decimals!.toU32() as u8).toBigDecimal()
    )
    pair.reserve0USD = token0.currentPrice.times(reserve0AMTFormatted)
    pair.reserve1USD = token1.currentPrice.times(reserve1AMTFormatted)
  } else if (token0.currentPrice != ZERO_BD) {
    let reserve0AMTFormatted = pair.reserve0.toBigDecimal().div(
      BigInt.fromI32(10).pow(token0.decimals!.toU32() as u8).toBigDecimal()
    )
    pair.reserve0USD = token0.currentPrice.times(reserve0AMTFormatted)  
    pair.reserve1USD = pair.reserve0USD
  } else if (token1.currentPrice != ZERO_BD) {
    let reserve1AMTFormatted = pair.reserve1.toBigDecimal().div(
      BigInt.fromI32(10).pow(token1.decimals!.toU32() as u8).toBigDecimal()
    )
    pair.reserve1USD = token1.currentPrice.times(reserve1AMTFormatted)
    pair.reserve0USD = pair.reserve1USD
  } else {
    pair.reserve0USD = BigDecimal.zero()
    pair.reserve1USD = BigDecimal.zero()
  }

  uniswap.totalLiquidityUSD = uniswap.totalLiquidityUSD.plus(pair.reserve0USD).plus(pair.reserve1USD)

  uniswap.save()
  token0.save()
  token1.save()
  pair.save()
}

export function handleMint(event: Mint): void { }

export function handleBurn(event: Burn): void { }

export function handleSwap(event: Swap): void {
  let pair = Pair.load(event.address)!
  let token0 = Token.load(pair.token0)
  let token1 = Token.load(pair.token1)

  let from = event.params.sender
  let to = event.params.to

  let sender = createUser(from)
  let recipient = createUser(to)

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

  let trackedAmountUSD: BigDecimal; 

  if (token0.currentPrice == ZERO_BD && token1.currentPrice == ZERO_BD) {
    trackedAmountUSD = BigDecimal.zero();
  } else if (token0.currentPrice != ZERO_BD && token1.currentPrice != ZERO_BD) {
    trackedAmountUSD = amount0Total.times(token0.currentPrice).div(BigInt.fromI32(10)
      .pow(token0.decimals!.toU32() as u8)
      .toBigDecimal())
    trackedAmountUSD = trackedAmountUSD.plus(amount1Total.times(token1.currentPrice).div(BigInt.fromI32(10)
      .pow(token1.decimals!.toU32() as u8)
      .toBigDecimal()))
  } else if (token0.currentPrice != ZERO_BD) {
      trackedAmountUSD = amount0Total.times(token0.currentPrice).div(BigInt.fromI32(10)
      .pow(token0.decimals!.toU32() as u8)
      .toBigDecimal()).times(BigInt.fromI32(2).toBigDecimal())
  } else if (token1.currentPrice != ZERO_BD) {
      trackedAmountUSD = amount1Total.times(token1.currentPrice).div(BigInt.fromI32(10)
      .pow(token1.decimals!.toU32() as u8)
      .toBigDecimal()).times(BigInt.fromI32(2).toBigDecimal())
  } else {
    trackedAmountUSD = BigDecimal.zero()
  }

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

  // update global values, only used tracked amounts for volume
  let uniswap = UniswapFactory.load(Bytes.fromI32(1))!
  uniswap.totalVolumeUSD = uniswap.totalVolumeUSD.plus(trackedAmountUSD)
  uniswap.txCount = uniswap.txCount.plus(ONE_BI)



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
    event.transaction.hash.concat(Bytes.fromI32(event.logIndex.toI32())),
  )

  // update swap event
  swap.transaction = transaction.id
  swap.pair = pair.id
  swap.timestamp = transaction.timestamp
  swap.transaction = transaction.id
  swap.amount0In = amount0In
  swap.amount1In = amount1In
  swap.amount0Out = amount0Out
  swap.amount1Out = amount1Out
  swap.to = recipient.id
  swap.from = sender.id
  swap.logIndex = event.logIndex
  // use the tracked amount if we have it
  swap.amountUSD = trackedAmountUSD
  pair.lastTrade = swap.id

  // save entities
  pair.save()
  token0.save()
  token1.save()
  uniswap.save()
  swap.save()

  let token0isTake = swap.amount0In.gt(swap.amount0Out)

  let take = new Take(swap.id)
  take.transaction = event.transaction.hash
  take.timestamp = event.block.timestamp
  take.index = event.logIndex
  take.taker = swap.to
  take.from_address = swap.from
  take.pair = pair.id
  take.take_gem = token0isTake ? pair.token0 : pair.token1
  take.take_amt = token0isTake ? swap.amount0In.minus(swap.amount0Out) : swap.amount1In.minus(swap.amount1Out)
  take.give_gem = token0isTake ? pair.token1 : pair.token0
  take.give_amt = token0isTake ? swap.amount1Out.minus(swap.amount1In) : swap.amount0Out.minus(swap.amount0In)
  take.save()

  updateCandles(take)

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
