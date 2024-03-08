/* eslint-disable prefer-const */
import { Pool as PoolTemplate } from '../../generated/templates'
import { Address, ethereum } from '@graphprotocol/graph-ts'
import {
  Swap as SwapEvent
} from '../../generated/templates/Pool/Pool'
import { pools } from '../utils/arbitrum.pools.config'
import { handleSwap as handleUniSwap, handlePoolCreated as handleUniPoolCreated } from './common'
import { PoolCreated } from '../../generated/Factory/Factory'

export function handleSwap(event: SwapEvent): void {
  handleUniSwap(event, pools)
}

export function handlePoolCreated(event: PoolCreated): void {
  // handleUniPoolCreated(event)
}

export function handleOnce(block: ethereum.Block): void {
  const thisIsAnArray = pools.keys()
  
  let counter = 0;

  for (let i = 0; i < thisIsAnArray.length; i++) {
    counter += 1;
    PoolTemplate.create(Address.fromString(thisIsAnArray[i]))
  }
}