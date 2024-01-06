/* eslint-disable prefer-const */
import { PoolCreated } from '../../generated/Factory/Factory'
import { Pool } from '../../generated/schema'
import { Pool as PoolTemplate } from '../../generated/templates'
import { Address, BigInt, ByteArray, Bytes, ethereum, log } from '@graphprotocol/graph-ts'
import { Take } from '../../generated/schema'
import { updateCandles } from '../utils/entities/candles'
import {
  Swap as SwapEvent
} from '../../generated/templates/Pool/Pool'
import { getPair } from '../utils/entities/pair'
import { pools } from '../utils/pools.config'
import { ZERO_BI } from '../utils/constants'

export function handleSwap(event: SwapEvent): void {
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

  if (amount0.equals(ZERO_BI) || amount1.equals(ZERO_BI)) return;

  const id = event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex)));
  const take = new Take(id);

  const pair = getPair(token0, token1)

  // log.error(`Swapping ${token0.toHexString()} ${token1.toHexString()}`, [])


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

  // update the candle entities
  updateCandles(take)
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

export function handleOnce(block: ethereum.Block): void {
  const thisIsAnArray = pools.keys()
  
  let counter = 0;

  for (let i = 0; i < thisIsAnArray.length; i++) {
    counter += 1;
    PoolTemplate.create(Address.fromString(thisIsAnArray[i]))
  }
}