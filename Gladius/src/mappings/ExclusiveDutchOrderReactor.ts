import { BigDecimal, BigInt, Bytes, ethereum, log } from "@graphprotocol/graph-ts";
import { Fee, Take, Transaction, Fill as FillEntity } from "../../generated/schema";
import { Fill } from '../../generated/ExclusiveDutchOrderReactor/ExclusiveDutchOrderReactor';
import { getUser } from "../utils/entities/user";
import { getPair } from "../utils/entities/pair";
import { TRANSFER_SIGNATURE, FILL_SIGNATURE } from "../utils/constants";
import { BigInt as HexBigInt } from "as-bigint"
import { BigNumber } from "as-bignumber"
import { updateCandles } from "../utils/entities/candles";

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

        // get the pair associated with the take
        let pair = getPair(inputTransfers[i].address, outputTransfers[i][0].address)

        const id = event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(fills[i].logIndex)));
        const take = new Take(id);

        const taker = getUser(Bytes.fromUint8Array(fills[i].topics[2].slice(12)))
        const from = getUser(Bytes.fromUint8Array(fills[i].topics[3].slice(12)))

        const take_amt = BigInt.fromString(HexBigInt.fromString(inputTransfers[i].data.toHexString()).toString())
        const give_amt = BigInt.fromString(HexBigInt.fromString(outputTransfers[i][0].data.toHexString()).toString())
        // create the take entity
        take.transaction = event.transaction.hash
        take.timestamp = event.block.timestamp
        take.index = event.logIndex
        take.taker = taker.id
        take.from_address = from.id
        take.pair = pair.id
        take.take_gem = inputTransfers[i].address
        take.give_gem = outputTransfers[i][0].address
        take.take_amt = take_amt
        take.give_amt = give_amt
        take.save()

        if (pair.latestPrices.length == 100) {
            // calculate std dev
            let sum = BigNumber.from(0)
            let sumOfSquares = BigNumber.from(0)
        
            for (let i: i32 = 0; i < pair.latestPrices.length; i++) {
              sum = sum.add(BigNumber.from(pair.latestPrices[i].toString()))
            }
        
            const mean = sum.div(BigNumber.from(pair.latestPrices.length))
        
            for (let i: i32 = 0; i < pair.latestPrices.length; i++) {
              const distanceSquared = BigNumber.from(pair.latestPrices[i].toString()).sub(mean).pow(2)
              sumOfSquares = sumOfSquares.add(distanceSquared)
            }
        
            const sigma = sumOfSquares.div(BigNumber.from(pair.latestPrices.length - 1)).sqrt()
            const currentPrice = BigNumber.from(take_amt.toString()).div(BigNumber.from(give_amt.toString()))
        
            // if within two std deviations: update
            if (currentPrice.gte(mean.sub(sigma.mul(10))) && currentPrice.lte(mean.add(sigma.mul(10)))) {
              // update the candle entities
              updateCandles(take)
              pair.latestPrices = pair.latestPrices
                .slice(1)
                .concat([BigDecimal.fromString(take_amt.toString()).div(BigDecimal.fromString(give_amt.toString()))])
              pair.save()
            }
            
        } else {
            pair.latestPrices = pair.latestPrices.concat([BigDecimal.fromString(take_amt.toString()).div(BigDecimal.fromString(give_amt.toString()))])
            pair.save()
            updateCandles(take)
        }
        

        const fill = new FillEntity(fills[i].topics[1]);
        fill.transaction = event.transaction.hash;
        fill.inputToken = inputTransfers[i].address
        fill.outputToken = outputTransfers[i][0].address
        fill.inputAmount = BigInt.fromString(HexBigInt.fromString(inputTransfers[i].data.toHexString()).toString())
        fill.outputAmount = BigInt.fromString(HexBigInt.fromString(outputTransfers[i][0].data.toHexString()).toString())
        fill.timestamp = event.block.timestamp
        fill.swapper = Bytes.fromUint8Array(fills[i].topics[3].slice(12))
        fill.filler = Bytes.fromUint8Array(fills[i].topics[2].slice(12))
        fill.save();

        for (let j: i32 = 0; j < fees[i].length; j++) {
            const feeLog = fees[i][j]
            let fee = new Fee(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(feeLog.logIndex))))
            fee.amount = BigInt.fromString(HexBigInt.fromString(feeLog.data.toHexString()).toString())
            fee.transaction = transaction.id
            fee.token = feeLog.address
            fee.recipient = Bytes.fromUint8Array(feeLog.topics[2].slice(12))
            fee.save()
        }
    }
}
