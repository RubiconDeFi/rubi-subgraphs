/* eslint-disable prefer-const */
import { PoolCreated } from '../../generated/Factory/Factory'
import { Pool, Token } from '../../generated/schema'
import { Pool as PoolTemplate } from '../../generated/templates'
import { fetchTokenSymbol, fetchTokenName, fetchTokenDecimals } from '../utils/entities/token'
import { log, Bytes } from '@graphprotocol/graph-ts'
import { Take } from '../../generated/schema'
import { updateCandles } from '../utils/entities/candles'
import {
  Swap as SwapEvent
} from '../../generated/templates/Pool/Pool'
import { getPair } from '../utils/entities/pair'

export function handleSwap(event: SwapEvent): void {
  let pool = Pool.load(event.address.toHexString())

  // // hot fix for bad pricing
  // if (pool.id == '0x9663f2ca0454accad3e094448ea6f77443880454') {
  //   return
  // }

  if (!pool) return;

  let token0 = Token.load(pool.token0)
  let token1 = Token.load(pool.token1)

  if (!token0 || !token1) return;

  // amounts - 0/1 are token deltas: can be positive or negative
  let amount0 = event.params.amount0
  let amount1 = event.params.amount1

  const id = event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex)));
  const take = new Take(id);

  const pair = getPair(Bytes.fromUTF8(token0.id), Bytes.fromUTF8(token1.id))

  // create the take entity
  take.transaction = event.transaction.hash
  take.timestamp = event.block.timestamp
  take.index = event.logIndex
  take.taker = event.params.recipient
  take.from_address = event.params.sender
  take.pair = pair.id
  take.take_gem = Bytes.fromUTF8(token0.id)
  take.give_gem = Bytes.fromUTF8(token1.id)
  take.take_amt = amount0
  take.give_amt = amount1

  // update the candle entities
  updateCandles(take)
}

export function handlePoolCreated(event: PoolCreated): void {
  let pool = new Pool(event.params.pool.toHexString()) as Pool
  let token0 = Token.load(event.params.token0.toHexString())
  let token1 = Token.load(event.params.token1.toHexString())

  // fetch info if null
  if (token0 === null) {
    token0 = new Token(event.params.token0.toHexString())
    token0.symbol = fetchTokenSymbol(event.params.token0)
    token0.name = fetchTokenName(event.params.token0)
    let decimals = fetchTokenDecimals(event.params.token0)

    // bail if we couldn't figure out the decimals
    if (decimals === null) {
      log.debug('mybug the decimal on token 0 was null', [])
      return
    }

    token0.decimals = decimals
  }

  if (token1 === null) {
    token1 = new Token(event.params.token1.toHexString())
    token1.symbol = fetchTokenSymbol(event.params.token1)
    token1.name = fetchTokenName(event.params.token1)
    let decimals = fetchTokenDecimals(event.params.token1)
    // bail if we couldn't figure out the decimals
    if (decimals === null) {
      log.debug('mybug the decimal on token 0 was null', [])
      return
    }
    token1.decimals = decimals
  }

  pool.token0 = token0.id
  pool.token1 = token1.id
  pool.createdAtTimestamp = event.block.timestamp
  pool.createdAtBlockNumber = event.block.number

  pool.save()
  // create the tracked contract based on the template
  PoolTemplate.create(event.params.pool)
  token0.save()
  token1.save()
}