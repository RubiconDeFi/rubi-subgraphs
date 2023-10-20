import { BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import { updateCandles } from "../utils/entities/candles";
import { getTransaction } from "../utils/entities/transaction";
import { Fee, Take } from "../../generated/schema";
import { Fill } from '../../generated/ExclusiveDutchOrderReactor/ExclusiveDutchOrderReactor';
import { getUser } from "../utils/entities/user";
import { getPair } from "../utils/entities/pair";
import { TRANSFER_SIGNATURE, FILL_SIGNATURE } from "../utils/constants";
import { getTake } from "../utils/entities/take";

export function handleTake(event: Fill): void {

    // get the transaction entity 
    const transaction = getTransaction(event)

    const receipt = event.receipt

    if (receipt === null) return;

    let inputTransfers: ethereum.Log[] = [];
    let outputTransfers: ethereum.Log[][] = [];
    let fees: ethereum.Log[][] = [];
    let firstOutputTransferIndex: i32 = -1;
    let fills: ethereum.Log[] = [];

    for (let i: i32 = 0; i < receipt.logs.length; i++) {
        if (
            receipt.logs[i].topics[0] === Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            receipt.logs[i].topics[1] === event.params.swapper &&
            receipt.logs[i].topics[2] === event.params.filler
        ) inputTransfers.push(receipt.logs[i])

        if (
            receipt.logs[i].topics[0] === Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            receipt.logs[i].topics[1] === event.params.filler &&
            receipt.logs[i].topics[2] === event.params.swapper &&
            firstOutputTransferIndex === -1
        ) {
            firstOutputTransferIndex = i
            break
        }
    }

    if (firstOutputTransferIndex === -1) return;

    for (let i: i32 = firstOutputTransferIndex; i < receipt.logs.length; i++) {
        if (
            receipt.logs[i].topics[0] === Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            receipt.logs[i].topics[1] === event.params.filler &&
            receipt.logs[i].topics[2] === event.params.swapper
        ) {
            outputTransfers[fills.length] =
                outputTransfers[fills.length] ? outputTransfers[fills.length].concat([receipt.logs[i]]) : [receipt.logs[i]]
        }

        if (
            receipt.logs[i].topics[0] === Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            receipt.logs[i].topics[1] === event.params.filler &&
            receipt.logs[i].topics[2] !== event.params.swapper
        ) fees[fills.length] =
            fees[fills.length] ? fees[fills.length].concat([receipt.logs[i]]) : [receipt.logs[i]]

        if (receipt.logs[i].topics[0] === Bytes.fromHexString(FILL_SIGNATURE))
            fills.push(receipt.logs[i]);
    }

    // get the taker and from entities (users)
    const taker = getUser(event.params.filler)
    const from = getUser(event.params.swapper)

    for (let i: i32 = 0; i < inputTransfers.length; i++) {
        for (let j: i32 = 0; j < outputTransfers[i].length; j++) {

            // get the pair associated with the take
            const pair = getPair(inputTransfers[i].address, outputTransfers[i][j].address)

            const id = event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex)));
            const take = getTake(id);

            // create the take entity
            take.transaction = transaction.id
            take.timestamp = event.block.timestamp
            take.index = event.logIndex
            take.taker = taker.id
            take.from_address = from.id
            take.pair = pair.id
            take.take_gem = inputTransfers[i].address
            take.give_gem = outputTransfers[i][j].address
            take.take_amt = new BigInt(inputTransfers[i].data.toI32())
            take.give_amt = new BigInt(outputTransfers[i][j].data.toI32())
            take.save()

            // update the candle entities
            updateCandles(take)
        }
    }

    for (let i: i32 = 0; i < fees.length; i++) {
        for (let j: i32 = 0; j < fees[i].length; j++) {
            const feeLog = fees[i][j]
            let fee = new Fee(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(feeLog.logIndex))))
            fee.amount = new BigInt(feeLog.data.toI32())
            fee.transaction = transaction.id
            fee.token = feeLog.address
            fee.recipient = feeLog.topics[2]
            fee.save()
        }
    }
}
