/* eslint-disable prefer-const */
import { log } from '@graphprotocol/graph-ts'

import { PairCreated } from '../../generated/Factory/Factory'
import { Bundle, Pair, Token, UniswapFactory } from '../../generated/schema'
import { Pair as PairTemplate } from '../../generated/templates'
import {
  ZERO_BD,
  ZERO_BI,
} from './helpers'

export function handleNewPair(event: PairCreated): void {
  // load factory (create if first exchange)
  let factory = UniswapFactory.load('1')
  if (factory === null) {
    factory = new UniswapFactory('1')
    factory.pairCount = 0
    factory.totalVolumeETH = ZERO_BD
    factory.totalLiquidityETH = ZERO_BD
    factory.totalVolumeUSD = ZERO_BD
    // factory.untrackedVolumeUSD = ZERO_BD
    factory.totalLiquidityUSD = ZERO_BD
    factory.txCount = ZERO_BI
  }
  factory.pairCount = factory.pairCount + 1
  factory.save()

  // create the tokens
  let token0 = Token.load(event.params.token0.toHexString())
  let token1 = Token.load(event.params.token1.toHexString())

  // fetch info if null
  if (token0 === null) {
    token0 = new Token(event.params.token0.toHexString())
    token0.tradeVolume = ZERO_BD
    token0.tradeVolumeUSD = ZERO_BD
    // token0.untrackedVolumeUSD = ZERO_BD
    token0.totalLiquidity = ZERO_BD
    token0.txCount = ZERO_BI
  }

  // fetch info if null
  if (token1 === null) {
    token1 = new Token(event.params.token1.toHexString())
    token1.tradeVolume = ZERO_BD
    token1.tradeVolumeUSD = ZERO_BD
    // token1.untrackedVolumeUSD = ZERO_BD
    token1.totalLiquidity = ZERO_BD
    token1.txCount = ZERO_BI
  }

  let pair = new Pair(event.params.pair.toHexString()) as Pair
  pair.token0 = token0.id
  pair.token1 = token1.id
  pair.liquidityProviderCount = ZERO_BI
  pair.createdAtTimestamp = event.block.timestamp
  pair.createdAtBlockNumber = event.block.number
  pair.txCount = ZERO_BI
  // pair.reserve0 = ZERO_BD
  // pair.reserve1 = ZERO_BD
  pair.trackedReserveETH = ZERO_BD
  pair.reserveETH = ZERO_BD
  pair.reserveUSD = ZERO_BD
  pair.totalSupply = ZERO_BD
  pair.volumeToken0 = ZERO_BD
  pair.volumeToken1 = ZERO_BD
  pair.volumeUSD = ZERO_BD
  // pair.untrackedVolumeUSD = ZERO_BD
  pair.token0Price = ZERO_BD
  pair.token1Price = ZERO_BD

  // save updated values
  token0.save()
  token1.save()
  pair.save()
  factory.save()

  // create the tracked contract based on the template
  PairTemplate.create(event.params.pair)


}
