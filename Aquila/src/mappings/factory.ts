/* eslint-disable prefer-const */
import { log } from '@graphprotocol/graph-ts'

import { PairCreated } from '../../generated/Factory/Factory'
import { Bundle, Pair, Token, UniswapFactory } from '../../generated/schema'
import { Pair as PairTemplate } from '../../generated/templates'
import {
<<<<<<< Updated upstream
  fetchTokenDecimals,
  fetchTokenName,
  fetchTokenSymbol,
  fetchTokenTotalSupply,
=======
>>>>>>> Stashed changes
  ZERO_BD,
  ZERO_BI,
} from './helpers'

export function handleNewPair(event: PairCreated): void {
  // load factory (create if first exchange)
<<<<<<< Updated upstream
  let factory = UniswapFactory.load(event.address.toHexString())
  if (factory === null) {
    factory = new UniswapFactory(event.address.toHexString())
=======
  let factory = UniswapFactory.load('1')
  if (factory === null) {
    factory = new UniswapFactory('1')
>>>>>>> Stashed changes
    factory.pairCount = 0
    factory.totalVolumeETH = ZERO_BD
    factory.totalLiquidityETH = ZERO_BD
    factory.totalVolumeUSD = ZERO_BD
    factory.untrackedVolumeUSD = ZERO_BD
    factory.totalLiquidityUSD = ZERO_BD
    factory.txCount = ZERO_BI
<<<<<<< Updated upstream

    // create new bundle
    let bundle = new Bundle('1')
    bundle.ethPrice = ZERO_BD
    bundle.save()
=======
>>>>>>> Stashed changes
  }
  factory.pairCount = factory.pairCount + 1
  factory.save()

  // create the tokens
  let token0 = Token.load(event.params.token0.toHexString())
  let token1 = Token.load(event.params.token1.toHexString())

  // fetch info if null
  if (token0 === null) {
    token0 = new Token(event.params.token0.toHexString())
<<<<<<< Updated upstream
    // token0.symbol = fetchTokenSymbol(event.params.token0)
    // token0.name = fetchTokenName(event.params.token0)
    // token0.totalSupply = fetchTokenTotalSupply(event.params.token0)
    // let decimals = fetchTokenDecimals(event.params.token0)

    // // bail if we couldn't figure out the decimals
    // if (decimals === null) {
    //   log.debug('mybug the decimal on token 0 was null', [])
    //   return
    // }

    // token0.decimals = decimals
    token0.derivedETH = ZERO_BD
=======
>>>>>>> Stashed changes
    token0.tradeVolume = ZERO_BD
    token0.tradeVolumeUSD = ZERO_BD
    token0.untrackedVolumeUSD = ZERO_BD
    token0.totalLiquidity = ZERO_BD
<<<<<<< Updated upstream
    // token0.allPairs = []
=======
>>>>>>> Stashed changes
    token0.txCount = ZERO_BI
  }

  // fetch info if null
  if (token1 === null) {
    token1 = new Token(event.params.token1.toHexString())
<<<<<<< Updated upstream
    // token1.symbol = fetchTokenSymbol(event.params.token1)
    // token1.name = fetchTokenName(event.params.token1)
    // token1.totalSupply = fetchTokenTotalSupply(event.params.token1)
    // let decimals = fetchTokenDecimals(event.params.token1)

    // bail if we couldn't figure out the decimals
    // if (decimals === null) {
    //   return
    // }
    // token1.decimals = decimals
    token1.derivedETH = ZERO_BD
=======
>>>>>>> Stashed changes
    token1.tradeVolume = ZERO_BD
    token1.tradeVolumeUSD = ZERO_BD
    token1.untrackedVolumeUSD = ZERO_BD
    token1.totalLiquidity = ZERO_BD
<<<<<<< Updated upstream
    // token1.allPairs = []
=======
>>>>>>> Stashed changes
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
  pair.untrackedVolumeUSD = ZERO_BD
  pair.token0Price = ZERO_BD
  pair.token1Price = ZERO_BD

<<<<<<< Updated upstream
  // create the tracked contract based on the template
  PairTemplate.create(event.params.pair)

=======
>>>>>>> Stashed changes
  // save updated values
  token0.save()
  token1.save()
  pair.save()
  factory.save()
<<<<<<< Updated upstream
=======

  // create the tracked contract based on the template
  PairTemplate.create(event.params.pair)


>>>>>>> Stashed changes
}
