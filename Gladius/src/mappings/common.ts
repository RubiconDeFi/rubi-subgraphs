/* eslint-disable prefer-const */
import { PoolCreated } from '../../generated/Factory/Factory'
import { Pool } from '../../generated/schema'
import { Pool as PoolTemplate } from '../../generated/templates'
import { Address, BigDecimal, BigInt, Bytes, log } from '@graphprotocol/graph-ts'
import { Take } from '../../generated/schema'
import { updateCandles } from '../utils/entities/candles'
import {
  Swap as SwapEvent
} from '../../generated/templates/Pool/Pool'
import { getPair } from '../utils/entities/pair'
import { ZERO_BI } from '../utils/constants'
import Big from "as-big";

export class PoolShape {
  token0: Address;
  token1: Address;
}

export function handleSwap(event: SwapEvent, pools: Map<string, PoolShape>): void {
  let pool = Pool.load(event.address)

  // // hot fix for bad pricing
  if (event.address.toHexString() == '0x9663f2ca0454accad3e094448ea6f77443880454') {
    return
  }

  const token0 = (pool) ? pool.token0 : (pools.get(event.address.toHexString())) ? pools.get(event.address.toHexString())!.token0 : null
  const token1 = (pool) ? pool.token1 : (pools.get(event.address.toHexString())) ? pools.get(event.address.toHexString())!.token1 : null  

  if (!token0 || !token1) {
    log.error(`Pool ${event.address.toHexString()}`, [])
    throw "bail"
  }

  // amounts - 0/1 are token deltas: can be positive or negative
  let amount0 = event.params.amount0
  let amount1 = event.params.amount1

  if (amount0.lt(ZERO_BI)) {
    amount0 = amount0.times(BigInt.fromI32(-1))
  }
  if (amount1.lt(ZERO_BI)) {
    amount1 = amount1.times(BigInt.fromI32(-1))
  }

  if (amount0.equals(ZERO_BI) || amount1.equals(ZERO_BI)) return;

  const id = event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex)));
  const take = new Take(id);

  let pair = getPair(token0, token1)

  // create the take entity
  take.transaction = event.transaction.hash
  take.timestamp = event.block.timestamp
  take.index = event.logIndex
  take.taker = event.params.recipient
  take.from_address = event.params.sender
  take.pair = pair.id
  take.take_gem = token0
  take.give_gem = token1
  take.take_amt = amount0
  take.give_amt = amount1
  take.save()

  if (pair.latestPrices.length == 100) {
    // calculate std dev
    let sum = Big.of(0)
    let sumOfSquares = Big.of(0)

    for (let i: i32 = 0; i < pair.latestPrices.length; i++) {
      sum = sum.plus(Big.of(pair.latestPrices[i].toString()))
    }

    const mean = sum.div(Big.of(pair.latestPrices.length))

    for (let i: i32 = 0; i < pair.latestPrices.length; i++) {
      const distanceSquared = Big.of(pair.latestPrices[i].toString()).minus(mean).pow(2)
      sumOfSquares = sumOfSquares.plus(distanceSquared)
    }

    const sigma = sumOfSquares.div(Big.of(pair.latestPrices.length - 1)).sqrt()
    const currentPrice = Big.of(amount0.toString()).div(Big.of(amount1.toString()))

    // if within two std deviations: update

    if (currentPrice.gte(mean.minus(sigma.times(5))) && currentPrice.lte(mean.plus(sigma.times(5)))) {
      pair.latestPrices = pair.latestPrices.slice(1).concat([new BigDecimal(amount0).div(new BigDecimal(amount1))])
      pair.save()
      // update the candle entities
      updateCandles(take)
    }
  } else {
    pair.latestPrices = pair.latestPrices.concat([new BigDecimal(amount0).div(new BigDecimal(amount1))])
    pair.save()
  }
}

export function handlePoolCreated(event: PoolCreated): void {
  let pool = new Pool(event.params.pool) as Pool

  // log.error(`Pool created ${event.params.pool.toHexString()} ${pool.id.toHexString()}`, [])

  pool.token0 = event.params.token0
  pool.token1 = event.params.token1

  pool.save()
  // create the tracked contract based on the template
  PoolTemplate.create(event.params.pool)
}