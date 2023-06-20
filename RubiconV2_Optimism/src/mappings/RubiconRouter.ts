import { Swap } from "../../generated/schema";
import { Bytes } from "@graphprotocol/graph-ts";
import { getUser } from "../utils/entities/user";
import { getToken } from "../utils/entities/token";
import { getTransaction } from "../utils/entities/transaction";
import { emitSwap, LogSwap } from "../../generated/RubiconRouter/RubiconRouter";

export function handleSwap(event: emitSwap): void {

    // load the transaction entity
    let transaction = getTransaction(event)

    // load the swapper entity (user)
    let swapper = getUser(event.params.recipient)

    // load the token entities 
    let input_gem = getToken(event.params.inputERC20)
    let output_gem = getToken(event.params.targetERC20)

    // make the swap entity
    let swap = new Swap(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex))))
    swap.transaction = transaction.id
    swap.timestamp = event.block.timestamp
    swap.index = event.logIndex
    swap.swapper = swapper.id
    swap.input_gem = input_gem.id
    swap.output_gem = output_gem.id
    swap.input_amt = event.params.inputAmount
    swap.output_amt = event.params.realizedFill
    swap.save()
}

export function handleLogSwap(event: LogSwap): void {

    // load the transaction entity
    let transaction = getTransaction(event)

    // load the swapper entity (user)
    let swapper = getUser(event.params.recipient)

    // load the token entities
    let input_gem = getToken(event.params.inputERC20)
    let output_gem = getToken(event.params.targetERC20)

    // make the swap entity
    let swap = new Swap(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex))))
    swap.transaction = transaction.id
    swap.timestamp = event.block.timestamp
    swap.index = event.logIndex
    swap.swapper = swapper.id
    swap.input_gem = input_gem.id
    swap.output_gem = output_gem.id
    swap.input_amt = event.params.inputAmount
    swap.output_amt = event.params.realizedFill
    swap.save()
}