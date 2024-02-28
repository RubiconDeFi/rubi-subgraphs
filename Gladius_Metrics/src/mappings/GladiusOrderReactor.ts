import { BigInt, Bytes, ethereum, log, Address } from "@graphprotocol/graph-ts";
import { Take, Transaction } from "../../generated/schema";
import { BigInt as HexBigInt } from "as-bigint"
import { fetchToken, toBigDecimal } from "../utils/entities/token";
import { BigDecimal } from "@graphprotocol/graph-ts";
import { getUsdPricePerToken } from "../prices";
import { Fill } from "../../generated/GladiusOrderReactor/GladiusOrderReactor"
import { fetchUser } from "../utils/entities/user"
import { fetchRubicon } from "../utils/entities/rubicon";
import { fetchDayVolume, fetchHourVolume, fetchTokenDayData, fetchTokenHourData } from "../utils/aggregates/volume";


export const FILL_SIGNATURE = "0x78ad7ec0e9f89e74012afa58738b6b661c024cb0fd185ee2f616c0a28924bd66";
export const TRANSFER_SIGNATURE = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";

export function handleFill(event: Fill): void {

    let transaction = Transaction.load(event.transaction.hash);

    if (transaction) {
        log.info("Transaction ({}) already processed", [event.transaction.hash.toHexString()])
        return;
    }

    log.info("Processing transaction {}", [event.transaction.hash.toHexString()])

    transaction = new Transaction(event.transaction.hash);
    transaction.timestamp = event.block.timestamp;
    transaction.block = event.block.number;
    transaction.save();

    const receipt = event.receipt

    if (receipt == null) return;

    let inputTransfers: ethereum.Log[] = [];
    let outputTransfers: ethereum.Log[][] = [];
    let firstOutputTransferIndex: i32 = -1;
    let fills: ethereum.Log[] = [];

    for (let i: i32 = 0; i < receipt.logs.length; i++) {
        if (receipt.logs[i].topics[0] == Bytes.fromHexString(FILL_SIGNATURE)) {
            fills.push(receipt.logs[i])
        }
    }

    let currentFillIndex = 0

    for (let i: i32 = 0; i < receipt.logs.length; i++) {
        if (
            receipt.logs[i].topics[0] == Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            HexBigInt.fromString(receipt.logs[i].topics[1].toHexString()) == HexBigInt.fromString(fills[currentFillIndex].topics[3].toHexString()) &&
            HexBigInt.fromString(receipt.logs[i].topics[2].toHexString()) == HexBigInt.fromString(fills[currentFillIndex].topics[2].toHexString())
        ) {
            inputTransfers.push(receipt.logs[i])
            currentFillIndex += 1;
            continue;
        }

        if (
            receipt.logs[i].topics[0] == Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            HexBigInt.fromString(receipt.logs[i].topics[1].toHexString()) == HexBigInt.fromString(fills[0].topics[2].toHexString()) &&
            HexBigInt.fromString(receipt.logs[i].topics[2].toHexString()) == HexBigInt.fromString(fills[0].topics[3].toHexString()) &&
            firstOutputTransferIndex == -1
        ) {
            firstOutputTransferIndex = i
            break
        }
    }

    if (firstOutputTransferIndex == -1) return;

    let outputTransfersTemp: ethereum.Log[] = [];

    currentFillIndex = 0;

    for (let i: i32 = firstOutputTransferIndex; i < receipt.logs.length; i++) {

        if (
            receipt.logs[i].topics[0] == Bytes.fromHexString(TRANSFER_SIGNATURE) &&
            HexBigInt.fromString(receipt.logs[i].topics[1].toHexString()) == HexBigInt.fromString(fills[currentFillIndex].topics[2].toHexString()) &&
            HexBigInt.fromString(receipt.logs[i].topics[2].toHexString()) == HexBigInt.fromString(fills[currentFillIndex].topics[3].toHexString())
        ) {
            outputTransfersTemp.push(receipt.logs[i])
            continue;
        }

        if (receipt.logs[i].topics[0] == Bytes.fromHexString(FILL_SIGNATURE)) {
            outputTransfers.push(outputTransfersTemp)
            outputTransfersTemp = []
            currentFillIndex += 1
        }
    }

    for (let i: i32 = 0; i < fills.length; i++) {
        // multi output is borked
        if (outputTransfers[i].length > 1) continue;

        // get the pair associated with the take

        const id = event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(fills[i].logIndex)));
        const take = new Take(id);

        let payGem = fetchToken(inputTransfers[i].address)
        let buyGem = fetchToken(outputTransfers[i][0].address)

        let take_amt = BigInt.fromString(HexBigInt.fromString(inputTransfers[i].data.toHexString()).toString())
        let give_amt = BigInt.fromString(HexBigInt.fromString(outputTransfers[i][0].data.toHexString()).toString())

        // format the amounts based on the token decimals
        let payAmtFormatted = toBigDecimal(take_amt, payGem.decimals)
        let buyAmtFormatted = toBigDecimal(give_amt, buyGem.decimals)

        // get the USD price of the gems and calculate the USD amounts
        let payGemPrice: BigDecimal
        let buyGemPrice: BigDecimal
        let fetchPayGemPrice = getUsdPricePerToken(inputTransfers[i].address)
        let fetchBuyGemPrice = getUsdPricePerToken(outputTransfers[i][0].address)

        if (!fetchPayGemPrice.reverted) {
            payGemPrice = fetchPayGemPrice.usdPrice.div(fetchPayGemPrice.decimalsBaseTen)
        } else {
            payGemPrice = fetchPayGemPrice.usdPrice
        }

        if (!fetchBuyGemPrice.reverted) {
            buyGemPrice = fetchBuyGemPrice.usdPrice.div(fetchBuyGemPrice.decimalsBaseTen)
        } else {
            buyGemPrice = fetchBuyGemPrice.usdPrice
        }

        let payAmtUsd = payAmtFormatted.times(payGemPrice)
        let buyAmtUsd = buyAmtFormatted.times(buyGemPrice)

        let rubicon = fetchRubicon()
        rubicon.total_volume_usd = rubicon.total_volume_usd.plus(buyAmtUsd)
        rubicon.save()
    
        // update the USD aggregate statistic entities 
        let hourVolume = fetchHourVolume(event)
        hourVolume.volume_usd = hourVolume.volume_usd.plus(buyAmtUsd)
        hourVolume.save()
    
        let dayVolume = fetchDayVolume(event)
        dayVolume.volume_usd = dayVolume.volume_usd.plus(buyAmtUsd)
        dayVolume.save()
    
        // update the token aggregate statistics for the buy gem
        buyGem.total_volume = buyGem.total_volume.plus(give_amt)
        buyGem.total_volume_usd = buyGem.total_volume_usd.plus(buyAmtUsd)
        buyGem.save()
    
        // update the binned token aggregate statistics for the buy gem
        let hourBuyGem = fetchTokenHourData(Address.fromBytes(buyGem.id), event)
        hourBuyGem.total_volume = hourBuyGem.total_volume.plus(give_amt)
        hourBuyGem.total_volume_usd = hourBuyGem.total_volume_usd.plus(buyAmtUsd)
        hourBuyGem.save()
    
        let dayBuyGem = fetchTokenDayData(Address.fromBytes(buyGem.id), event)
        dayBuyGem.total_volume = dayBuyGem.total_volume.plus(give_amt)
        dayBuyGem.total_volume_usd = dayBuyGem.total_volume_usd.plus(buyAmtUsd)
        dayBuyGem.save()

        let swapper = fetchUser(Address.fromUint8Array(fills[i].topics[3].slice(12)))
        let filler = fetchUser(Address.fromUint8Array(fills[i].topics[2].slice(12)))

        // create the take entity
        take.taker = filler.id
        take.maker = swapper.id
        take.transaction = transaction.id
        take.pay_gem = payGem.id
        take.buy_gem = buyGem.id
        take.pay_amt = take_amt
        take.buy_amt = give_amt
        take.pay_amt_formatted = payAmtFormatted
        take.buy_amt_formatted = buyAmtFormatted
        take.pay_amt_usd = payAmtUsd
        take.buy_amt_usd = buyAmtUsd
        take.pay_gem_price = payGemPrice
        take.buy_gem_price = buyGemPrice
        take.save()
    }
}
