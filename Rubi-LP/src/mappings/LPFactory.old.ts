import { BigInt } from '@graphprotocol/graph-ts';
import { LPCreated } from '../../generated/LPFactory/LPFactory'
import { ArenaToken, Position } from '../../generated/schema';
import { getUser } from '../utils/entities/user'

export function handleLPCreated(event: LPCreated): void {
  
  let user = getUser(event.params.owner);

  let position = new Position(event.params.lpAddress);

  // token0 = lower alphabetically token
  let token0 = event.params.baseToken.toHexString() < event.params.quoteToken.toHexString() ? event.params.baseToken : event.params.quoteToken

  // token1 = higher alphabetically token
  let token1 = event.params.baseToken.toHexString() > event.params.quoteToken.toHexString() ? event.params.baseToken : event.params.quoteToken

  position.token1 = token1;
  position.token0 = token0;
  position.user = user.id;
  position.token0Amount = BigInt.fromI32(0);
  position.token1Amount = BigInt.fromI32(0);
  position.timestamp = event.block.timestamp;
  position.open = false;
  position.save();
}