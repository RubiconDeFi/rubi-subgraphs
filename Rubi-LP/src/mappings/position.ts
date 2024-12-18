import { BigInt } from '@graphprotocol/graph-ts'
import { Position } from '../../generated/schema'
import { Withdrawn, Deposited } from '../../generated/templates/Position/Position'

export function handleWithdraw(event: Withdrawn): void {
  let position = Position.load(event.address)
  if (!position) throw "Something is very wrong. Position not found."
  
  if (event.params.token == position.token0) {
    position.token0Amount = position.token0Amount.minus(event.params.amount)
  } else {
    position.token1Amount = position.token1Amount.minus(event.params.amount)
  }

  if (position.token0Amount == BigInt.fromI32(0) && position.token1Amount == BigInt.fromI32(0)) {
    position.open = false;
  }

  position.save()
}

export function handleDeposit(event: Deposited): void {
  let position = Position.load(event.address)

  if (!position) throw "Something is very wrong. Position not found."

  if (event.params.token == position.token0) {
    position.token0Amount = position.token0Amount.plus(event.params.amount)
  } else {
    position.token1Amount = position.token1Amount.plus(event.params.amount)
  }

  position.open = true;

  position.save();

}
