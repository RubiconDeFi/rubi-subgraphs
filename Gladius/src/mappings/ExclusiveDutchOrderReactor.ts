import { BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import { updateCandles } from "../utils/entities/candles";
import { getTransaction } from "../utils/entities/transaction";
import { Take } from "../../generated/schema";
import { Fill } from '../../generated/ExclusiveDutchOrderReactor/ExclusiveDutchOrderReactor';
import { getUser } from "../utils/entities/user";
import { getPair } from "../utils/entities/pair";

export function handleTake(event: Fill): void {
    
    // get the transaction entity 
    const transaction = getTransaction(event)

    const receipt = event.receipt

    if (receipt === null) return;

    const logs = receipt.logs.filter(l => l.topics[0] === Bytes.fromHexString("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"))

    let inputTransfer: ethereum.Log | null = null;
    let outputTransfer: ethereum.Log | null = null;

    for (let i = 0; i < logs.length; i++) {
        if (logs[i].topics[1] === event.params.swapper && logs[i].topics[2] === event.params.filler)
            inputTransfer = logs[i]
        if (logs[i].topics[1] === event.params.filler && logs[i].topics[2] === event.params.swapper)
            outputTransfer = logs[i]
    }

    if (inputTransfer === null || outputTransfer === null) return;

    // get the taker and from entities (users)
    const taker = getUser(event.params.filler)
    const from = getUser(event.params.swapper)

    // get the pair associated with the take 
    const pair = getPair(inputTransfer.address, outputTransfer.address)

    // create the take entity
    let take = new Take(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex))))
    take.transaction = transaction.id
    take.timestamp = event.block.timestamp
    take.index = event.logIndex
    take.taker = taker.id
    take.from_address = from.id
    take.pair = pair.id
    take.take_gem = inputTransfer.address
    take.give_gem = outputTransfer.address
    take.take_amt = new BigInt(inputTransfer.data.toI32())
    take.give_amt = new BigInt(outputTransfer.data.toI32())
    take.save()

    // update the candle entities 
    updateCandles(take)
}
