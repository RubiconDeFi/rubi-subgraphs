import { BigInt, ByteArray, Bytes, ethereum, log } from "@graphprotocol/graph-ts";
import { updateCandles } from "../utils/entities/candles";
import { getTransaction } from "../utils/entities/transaction";
import { Fee, Take, Transaction } from "../../generated/schema";
import { Fill } from '../../generated/ExclusiveDutchOrderReactor/ExclusiveDutchOrderReactor';
import { getUser } from "../utils/entities/user";
import { getPair } from "../utils/entities/pair";
import { TRANSFER_SIGNATURE, FILL_SIGNATURE } from "../utils/constants";
import { getTake } from "../utils/entities/take";

export function handleFill(event: Fill): void {

    let transaction = Transaction.load(event.transaction.hash);

    if (transaction) {
        log.info("Transaction ({}) already processed", [event.transaction.hash.toHexString()])
        return;
    }

    log.info("Processing transaction {}", [event.transaction.hash.toHexString()])

    transaction = new Transaction(event.transaction.hash);
    transaction.timestamp = event.block.timestamp;
    transaction.block_number = event.block.number;
    transaction.block_index = event.transaction.index;
    transaction.save();

    const receipt = event.receipt

    if (receipt == null) return;

    let inputTransfers: ethereum.Log[] = [];
    let outputTransfers: ethereum.Log[][] = [];
    let fees: ethereum.Log[][] = [];
    let firstOutputTransferIndex: i32 = -1;
    let fills: ethereum.Log[] = [];

    log.error(`Filler ${event.params.filler.toHexString()}`, [])
    log.error(`Swapper ${event.params.swapper.toHexString()}`, [])

    for (let i: i32 = 0; i < receipt.logs.length; i++) {

        if (
            receipt.logs[i].topics[0] == Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            receipt.logs[i].topics[1].toHexString().slice(26) == event.params.swapper.toHexString().slice(2) &&
            receipt.logs[i].topics[2].toHexString().slice(26) == event.params.filler.toHexString().slice(2)
        ) {
            inputTransfers.push(receipt.logs[i])
            continue;
        }

        if (
            receipt.logs[i].topics[0] == Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            receipt.logs[i].topics[1].toHexString().slice(26) == event.params.filler.toHexString().slice(2) &&
            receipt.logs[i].topics[2].toHexString().slice(26) == event.params.swapper.toHexString().slice(2) &&
            firstOutputTransferIndex == -1
        ) {
            firstOutputTransferIndex = i
            break
        }
    }

    if (firstOutputTransferIndex == -1) return;

    let outputTransfersTemp: ethereum.Log[] = [];
    let feesTemp: ethereum.Log[] = [];

    for (let i: i32 = firstOutputTransferIndex; i < receipt.logs.length; i++) {

        if (
            receipt.logs[i].topics[0] == Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            receipt.logs[i].topics[1].toHexString().slice(26) == event.params.filler.toHexString().slice(2) &&
            receipt.logs[i].topics[2].toHexString().slice(26) == event.params.swapper.toHexString().slice(2)
        ) {
            outputTransfersTemp.push(receipt.logs[i])
            continue;
        }

        if (
            receipt.logs[i].topics[0] == Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            receipt.logs[i].topics[1].toHexString().slice(26) == event.params.filler.toHexString().slice(2) &&
            receipt.logs[i].topics[2].toHexString().slice(26) !== event.params.swapper.toHexString().slice(2)
        ) {
            feesTemp.push(receipt.logs[i])
            continue;
        }

        if (receipt.logs[i].topics[0] == Bytes.fromHexString(FILL_SIGNATURE)) {
            fills.push(receipt.logs[i])
            outputTransfers.push(outputTransfersTemp)
            fees.push(feesTemp)
            outputTransfersTemp = []
            feesTemp = []
        }
    }

    log.error(`Inputs {}\nOutputs {}\nFees {}\nFills {}`, [
        inputTransfers.length.toString(),
        outputTransfers.length.toString(),
        fees.length.toString(),
        fills.length.toString()
    ])

    // get the taker and from entities (users)
    const taker = getUser(event.params.filler)
    const from = getUser(event.params.swapper)

    for (let i: i32 = 0; i < inputTransfers.length; i++) {
        for (let j: i32 = 0; j < outputTransfers[i].length; j++) {

            // get the pair associated with the take
            const pair = getPair(inputTransfers[i].address, outputTransfers[i][j].address)

            const id = event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex)));
            const take = new Take(id);

            log.error(`Input transfer address ${inputTransfers[i].address}`, [])
            log.error(`Input transfer amount ${inputTransfers[i].data.toHexString()}`, [])

            // create the take entity
            take.transaction = event.transaction.hash
            take.timestamp = event.block.timestamp
            take.index = event.logIndex
            take.taker = taker.id
            take.from_address = from.id
            take.pair = pair.id
            take.take_gem = inputTransfers[i].address
            take.give_gem = outputTransfers[i][j].address
            take.take_amt = BigInt.fromByteArray(ByteArray.fromHexString(inputTransfers[i].data.toHexString()))
            take.give_amt = BigInt.fromByteArray(ByteArray.fromHexString(outputTransfers[i][j].data.toHexString()))
            take.save()

            // update the candle entities
            updateCandles(take)
        }
    }

    for (let i: i32 = 0; i < fees.length; i++) {
        for (let j: i32 = 0; j < fees[i].length; j++) {
            const feeLog = fees[i][j]
            let fee = new Fee(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(feeLog.logIndex))))
            fee.amount = BigInt.fromByteArray(ByteArray.fromHexString(feeLog.data.toHexString()))
            fee.transaction = transaction.id
            fee.token = feeLog.address
            fee.recipient = feeLog.topics[2]
            fee.save()
        }
    }
}
