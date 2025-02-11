import { LPCreated } from '../../generated/ArenaFactory/Arena'
import { ArenaToken } from '../../generated/schema';

export function handleLPCreated(event: LPCreated): void {
  let token = new ArenaToken(event.params.baseToken)
  token.ipfsHash = event.params.ipfsHash;
  token.createdAt = event.block.timestamp;
  token.position = event.params.lpAddress;
  token.user = event.params.owner;
  token.save();
}
