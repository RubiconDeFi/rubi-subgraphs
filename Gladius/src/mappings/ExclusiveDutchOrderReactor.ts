import { BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import { updateCandles } from "../utils/entities/candles";
import { getTransaction } from "../utils/entities/transaction";
import { Fee, Take } from "../../generated/schema";
import { Fill } from '../../generated/ExclusiveDutchOrderReactor/ExclusiveDutchOrderReactor';
import { getUser } from "../utils/entities/user";
import { getPair } from "../utils/entities/pair";

const FILL_SIGNATURE = "0x78ad7ec0e9f89e74012afa58738b6b661c024cb0fd185ee2f616c0a28924bd66";
const TRANSFER_SIGNATURE = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";

export function handleTake(event: Fill): void {

    // get the transaction entity 
    const transaction = getTransaction(event)

    const receipt = event.receipt

    if (receipt === null) return;

    let inputTransfers: ethereum.Log[] = [];
    let outputTransfers: ethereum.Log[][] = [];
    let fees: ethereum.Log[][] = [];
    let firstOutputTransferIndex: number | null = null;
    let fills: ethereum.Log[] = [];

    for (let i = receipt.logs.length - 1; i >= 0; i++) {
        if (
            receipt.logs[i].topics[0] === Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            receipt.logs[i].topics[1] === event.params.swapper &&
            receipt.logs[i].topics[2] === event.params.filler
        ) inputTransfers.push(receipt.logs[i])

        if (
            receipt.logs[i].topics[0] === Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            receipt.logs[i].topics[1] === event.params.filler &&
            receipt.logs[i].topics[2] === event.params.swapper &&
            firstOutputTransferIndex === null
        ) {
            firstOutputTransferIndex = i
            break
        }
    }

    if (firstOutputTransferIndex === null) return;

    for (let i = firstOutputTransferIndex; i < receipt.logs.length - 1; i++) {
        if (
            receipt.logs[i].topics[0] === Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            receipt.logs[i].topics[1] === event.params.filler &&
            receipt.logs[i].topics[2] === event.params.swapper
        ) {
            outputTransfers[fills.length] =
                outputTransfers[fills.length] ? outputTransfers[fills.length].concat(receipt.logs[i]) : [receipt.logs[i]]
        }

        if (
            receipt.logs[i].topics[0] === Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            receipt.logs[i].topics[1] === event.params.filler &&
            receipt.logs[i].topics[2] !== event.params.swapper
        ) fees[fills.length] =
            fees[fills.length] ? fees[fills.length].concat(receipt.logs[i]) : [receipt.logs[i]]

        if (receipt.logs[i].topics[0] === Bytes.fromHexString(FILL_SIGNATURE))
            fills.push(receipt.logs[i]);
    }

    // get the taker and from entities (users)
    const taker = getUser(event.params.filler)
    const from = getUser(event.params.swapper)

    for (let i = 0; i < inputTransfers.length - 1; i++) {
        for (let j = 0; j < outputTransfers[i].length - 1; j++) {

            const feeLog = fees[i][j]
            let fee = new Fee(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(feeLog.logIndex))))
            fee.amount = feeLog.data.toI32()
            fee.transaction = transaction.id
            fee.token = feeLog.address
            fee.recipient = feeLog.topics[2]
            fee.save()

            // get the pair associated with the take
            const pair = getPair(inputTransfers[i].address, outputTransfers[i][j].address)

            // create the take entity
            let take = new Take(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex))))
            take.transaction = transaction.id
            take.timestamp = event.block.timestamp
            take.index = event.logIndex
            take.taker = taker.id
            take.from_address = from.id
            take.pair = pair.id
            take.take_gem = inputTransfers[i].address
            take.give_gem = outputTransfers[i][j].address
            take.take_amt = inputTransfers[i].data.toI32()
            take.give_amt = outputTransfers[i][j].data.toI32()
            take.save()

            // update the candle entities
            updateCandles(take)
        }
    }
}
