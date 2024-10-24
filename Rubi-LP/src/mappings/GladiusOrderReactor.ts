import { BigInt, Bytes, ethereum, log } from "@graphprotocol/graph-ts";
import { Transaction, Trade as TradeEntity, ArenaToken } from "../../generated/schema";
import { Fill } from '../../generated/GladiusOrderReactor/GladiusOrderReactor';
import { TRANSFER_SIGNATURE, FILL_SIGNATURE } from "../utils/constants";
import { BigInt as HexBigInt } from "as-bigint"

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
    let currentFillIndex = 0;

    for (let i: i32 = 0; i < receipt.logs.length; i++) {
        if (receipt.logs[i].topics[0] == Bytes.fromHexString(FILL_SIGNATURE)) {
            fills.push(receipt.logs[i])
        }
    }

    for (let i: i32 = 0; i < receipt.logs.length; i++) {

        if (currentFillIndex == fills.length) break;

        if (
            receipt.logs[i].topics[0] == Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            HexBigInt.fromString(receipt.logs[i].topics[1].toHexString()) == HexBigInt.fromString(fills[currentFillIndex].topics[3].toHexString()) &&
            HexBigInt.fromString(receipt.logs[i].topics[2].toHexString()) == HexBigInt.fromString(fills[currentFillIndex].topics[2].toHexString())
        ) {
            inputTransfers.push(receipt.logs[i])
            currentFillIndex += 1;
            continue;
        }
    }

    for (let i: i32 = 0; i < receipt.logs.length; i++) {
        if (
            receipt.logs[i].topics[0] == Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            HexBigInt.fromString(receipt.logs[i].topics[1].toHexString()) == HexBigInt.fromString(fills[0].topics[2].toHexString()) &&
            HexBigInt.fromString(receipt.logs[i].topics[2].toHexString()) == HexBigInt.fromString(fills[0].topics[3].toHexString()) &&
            firstOutputTransferIndex == -1
        ) {
            firstOutputTransferIndex = i
            break;
        }
    }


    if (firstOutputTransferIndex == -1) return;

    let outputTransfersTemp: ethereum.Log[] = [];
    let feesTemp: ethereum.Log[] = [];
    currentFillIndex = 0;

    for (let i: i32 = firstOutputTransferIndex; i < receipt.logs.length; i++) {

        if (currentFillIndex == fills.length) break;

        if (
            receipt.logs[i].topics[0] == Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            HexBigInt.fromString(receipt.logs[i].topics[1].toHexString()) == HexBigInt.fromString(fills[currentFillIndex].topics[2].toHexString()) &&
            HexBigInt.fromString(receipt.logs[i].topics[2].toHexString()) == HexBigInt.fromString(fills[currentFillIndex].topics[3].toHexString())
        ) {
            outputTransfersTemp.push(receipt.logs[i])
            continue;
        }

        if (
            receipt.logs[i].topics[0] == Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            HexBigInt.fromString(receipt.logs[i].topics[1].toHexString()) == HexBigInt.fromString(fills[currentFillIndex].topics[2].toHexString()) &&
            HexBigInt.fromString(receipt.logs[i].topics[2].toHexString()) !== HexBigInt.fromString(fills[currentFillIndex].topics[3].toHexString())
        ) {
            feesTemp.push(receipt.logs[i])
            continue;
        }

        if (receipt.logs[i].topics[0] == Bytes.fromHexString(FILL_SIGNATURE)) {
            outputTransfers.push(outputTransfersTemp)
            fees.push(feesTemp)
            outputTransfersTemp = []
            feesTemp = []
            currentFillIndex += 1
        }
    }

    for (let i: i32 = 0; i < fills.length; i++) {
        // multi output is borked
        if (outputTransfers[i].length > 1) continue;

        const arenaToken1 = ArenaToken.load(inputTransfers[i].address)
        const arenaToken2 = ArenaToken.load(outputTransfers[i][0].address)

        let arenaToken = arenaToken1 != null ? arenaToken1 : arenaToken2;
        if (!arenaToken) continue;

        const trade = new TradeEntity(fills[i].topics[1]);
        trade.transaction = event.transaction.hash;
        trade.inputToken = inputTransfers[i].address
        trade.outputToken = outputTransfers[i][0].address
        trade.inputAmount = BigInt.fromString(HexBigInt.fromString(inputTransfers[i].data.toHexString()).toString())
        trade.outputAmount = BigInt.fromString(HexBigInt.fromString(outputTransfers[i][0].data.toHexString()).toString())
        trade.timestamp = event.block.timestamp
        trade.swapper = Bytes.fromUint8Array(fills[i].topics[3].slice(12))
        trade.filler = Bytes.fromUint8Array(fills[i].topics[2].slice(12))
        trade.save();

        arenaToken.lastTrade = trade.id
        arenaToken.save()
    }
}
