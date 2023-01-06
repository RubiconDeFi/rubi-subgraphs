import { ZERO_BD, ZERO_BI } from "../utils/constants"
import { Bytes, ethereum, BigDecimal } from "@graphprotocol/graph-ts"
import { Offer, Take } from "../../generated/schema"
import { fetchRubicon } from '../utils/entities/rubicon'
import { fetchUser } from "../utils/entities/user"
import { fetchTransaction } from "../utils/entities/transaction"
import { fetchToken, toBigDecimal } from "../utils/entities/token"
import { getUsdPricePerToken } from "../prices"
import { fetchHourVolume, fetchDayVolume, fetchTokenHourData, fetchTokenDayData } from "../utils/aggregates/volume"
import { LogMake, LogTake, LogKill, OfferDeleted } from "../../generated/RubiconMarket/RubiconMarket"

export function handleLogMake(event: LogMake): void {

    // decode the offer ID
    let offerID = event.params.id.toHexString()
    let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id)
    if (!decoded) {
        offerID = event.params.id.toHexString()
    } else {
        offerID = decoded.toBigInt().toString()
    }

    // get the transaction entity
    let transaction = fetchTransaction(event)

    // get the user entity
    let maker = fetchUser(event.params.maker)  

    // get the token entities
    let payGem = fetchToken(event.params.pay_gem)
    let buyGem = fetchToken(event.params.buy_gem)

    // format the amounts based on the token decimals
    let payAmtFormatted = toBigDecimal(event.params.pay_amt, payGem.decimals)
    let buyAmtFormatted = toBigDecimal(event.params.buy_amt, buyGem.decimals)

    // get the USD price of the gems and calculate the USD amounts
    let payGemPrice: BigDecimal
    let buyGemPrice: BigDecimal
    let fetchPayGemPrice = getUsdPricePerToken(event.params.pay_gem)
    let fetchBuyGemPrice = getUsdPricePerToken(event.params.buy_gem)

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

    let offer = new Offer(offerID)
    offer.transaction = transaction.id
    offer.maker = maker.id
    offer.pay_gem = payGem.id
    offer.buy_gem = buyGem.id
    offer.pay_amt = event.params.pay_amt
    offer.buy_amt = event.params.buy_amt
    offer.pay_amt_formatted = payAmtFormatted
    offer.buy_amt_formatted = buyAmtFormatted
    offer.pay_amt_usd = payAmtUsd
    offer.buy_amt_usd = buyAmtUsd
    offer.paid_amt = ZERO_BI
    offer.bought_amt = ZERO_BI
    offer.paid_amt_formatted = ZERO_BD
    offer.bought_amt_formatted = ZERO_BD
    offer.paid_amt_usd = ZERO_BD
    offer.bought_amt_usd = ZERO_BD
    offer.filled = false
    offer.cancelled = false
    offer.live = true
    offer.save()
}

export function handleLogTake(event: LogTake): void {

    // decode the offer ID
    let offerID = event.params.id.toHexString()
    let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id)
    if (!decoded) {
        offerID = event.params.id.toHexString()
    } else {
        offerID = decoded.toBigInt().toString()
    }

    let offer = Offer.load(offerID)
    if (offer == null) {
        return
    }

    // get the transaction entity
    let transaction = fetchTransaction(event)

    // get the user entity
    let taker = fetchUser(event.transaction.from)

    // get the token entities
    let payGem = fetchToken(event.params.pay_gem)
    let buyGem = fetchToken(event.params.buy_gem)

    // format the amounts based on the token decimals
    let payAmtFormatted = toBigDecimal(event.params.take_amt, payGem.decimals)
    let buyAmtFormatted = toBigDecimal(event.params.give_amt, buyGem.decimals)

    // get the USD price of the gems and calculate the USD amounts
    let payGemPrice: BigDecimal
    let buyGemPrice: BigDecimal
    let fetchPayGemPrice = getUsdPricePerToken(event.params.pay_gem)
    let fetchBuyGemPrice = getUsdPricePerToken(event.params.buy_gem)

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

    // update the offer entity
    offer.paid_amt = offer.paid_amt.plus(event.params.take_amt)
    offer.bought_amt = offer.bought_amt.plus(event.params.give_amt)
    offer.paid_amt_formatted = offer.paid_amt_formatted.plus(payAmtFormatted)
    offer.bought_amt_formatted = offer.bought_amt_formatted.plus(buyAmtFormatted)
    offer.paid_amt_usd = offer.paid_amt_usd.plus(payAmtUsd)
    offer.bought_amt_usd = offer.bought_amt_usd.plus(buyAmtUsd)
    
    // add a check for if the offer is filled
    if (offer.pay_amt.equals(offer.paid_amt) && offer.buy_amt.equals(offer.bought_amt)) {
        offer.removed_timestamp = event.block.timestamp
        offer.filled = true
        offer.live = false
    }

    offer.save()

    // update the rubicon entity 
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
    buyGem.total_volume = buyGem.total_volume.plus(event.params.give_amt)
    buyGem.total_volume_usd = buyGem.total_volume_usd.plus(buyAmtUsd)
    buyGem.save()

    // update the binned token aggregate statistics for the buy gem
    let hourBuyGem = fetchTokenHourData(event.params.buy_gem, event)
    hourBuyGem.total_volume = hourBuyGem.total_volume.plus(event.params.give_amt)
    hourBuyGem.total_volume_usd = hourBuyGem.total_volume_usd.plus(buyAmtUsd)
    hourBuyGem.save()

    let dayBuyGem = fetchTokenDayData(event.params.buy_gem, event)
    dayBuyGem.total_volume = dayBuyGem.total_volume.plus(event.params.give_amt)
    dayBuyGem.total_volume_usd = dayBuyGem.total_volume_usd.plus(buyAmtUsd)
    dayBuyGem.save()

    // create and update the take entity
    let take = new Take(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
    take.transaction = transaction.id
    take.taker = taker.id
    take.pay_gem = payGem.id
    take.buy_gem = buyGem.id
    take.pay_amt = event.params.take_amt
    take.buy_amt = event.params.give_amt
    take.pay_amt_formatted = payAmtFormatted
    take.buy_amt_formatted = buyAmtFormatted
    take.pay_amt_usd = payAmtUsd
    take.buy_amt_usd = buyAmtUsd
    take.pay_gem_price = payGemPrice
    take.buy_gem_price = buyGemPrice
    take.offer = offer.id
    take.save()
}

export function handleLogKill(event: LogKill): void {

    // decode the offer ID
    let offerID = event.params.id.toHexString()
    let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id)
    if (!decoded) {
        offerID = event.params.id.toHexString()
    } else {
        offerID = decoded.toBigInt().toString()
    }

    let offer = Offer.load(offerID)
    if (offer == null) {
        return
    }

    // update the offer entity
    offer.cancelled = true
    offer.live = false
    offer.save()
}

export function handleOfferDeleted(event: OfferDeleted): void {

    // decode the offer ID
    let offerID = event.params.id.toHexString()
    let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id)
    if (!decoded) {
        offerID = event.params.id.toHexString()
    } else {
        offerID = decoded.toBigInt().toString()
    }

    let offer = Offer.load(offerID)
    if (offer == null) {
        return
    }

    // update the offer entity
    offer.live = false
    offer.save()
}