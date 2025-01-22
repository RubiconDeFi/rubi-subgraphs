/* eslint-disable prefer-const */
import { Bytes, log } from '@graphprotocol/graph-ts'

import { PairCreated } from '../../generated/Factory/Factory'
import { Pair, Token, UniswapFactory } from '../../generated/schema'
import { Pair as PairTemplate } from '../../generated/templates'
import {
  fetchToken,
  ZERO_BD,
  ZERO_BI,
} from './helpers'

export function handleNewPair(event: PairCreated): void {
  // load factory (create if first exchange)
  let factory = UniswapFactory.load(Bytes.fromI32(1))
  if (factory === null) {
    factory = new UniswapFactory(Bytes.fromI32(1))
    factory.pairCount = 0
    factory.totalVolumeETH = ZERO_BD
    // factory.totalLiquidityETH = ZERO_BD
    factory.totalVolumeUSD = ZERO_BD
    // factory.untrackedVolumeUSD = ZERO_BD
    factory.totalLiquidityUSD = ZERO_BD
    factory.txCount = ZERO_BI
  }
  factory.pairCount = factory.pairCount + 1
  factory.save()

  // create the tokens
  let token0 = fetchToken(event.params.token0)
  let token1 = fetchToken(event.params.token1)

  let pair = new Pair(event.params.pair) as Pair
  pair.token0 = token0.id
  pair.token1 = token1.id
  pair.liquidityProviderCount = ZERO_BI
  pair.createdAtTimestamp = event.block.timestamp
  pair.createdAtBlockNumber = event.block.number
  pair.txCount = ZERO_BI
  pair.reserve0 = ZERO_BI
  pair.reserve1 = ZERO_BI
  // pair.trackedReserveETH = ZERO_BD
  // pair.reserveETH = ZERO_BD
  pair.reserve0USD = ZERO_BD
  pair.reserve1USD = ZERO_BD

  pair.totalSupply = ZERO_BD
  pair.volumeToken0 = ZERO_BD
  pair.volumeToken1 = ZERO_BD
  pair.volumeUSD = ZERO_BD
  // pair.untrackedVolumeUSD = ZERO_BD
  pair.token0Price = ZERO_BD
  pair.token1Price = ZERO_BD
  pair.tracked = false;

  // save updated values
  token0.save()
  token1.save()
  pair.save()
  factory.save()

  // create the tracked contract based on the template
  PairTemplate.create(event.params.pair)


}
