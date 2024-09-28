import { Position } from '../../generated/schema'
import { Withdrawn, Deposited } from '../../generated/templates/Position/Position'

export function handleWithdraw(event: Withdrawn) {
  let position = Position.load(event.address)
  if (!position) throw "Something is very wrong. Position not found."
  
  if (event.params.token == position.token0) {
    position.token0Amount = position.token0Amount.minus(event.params.amount)
  } else {
    position.token1Amount = position.token1Amount.minus(event.params.amount)
  }
}

export function handleDeposit(event: Deposited) {
  let position = Position.load(event.address)

  if (!position) throw "Something is very wrong. Position not found."

  if (event.params.token == position.token0) {
    position.token0Amount = position.token0Amount.plus(event.params.amount)
  } else {
    position.token1Amount = position.token1Amount.plus(event.params.amount)
  }

}
