import { ZERO_BD, ZERO_BI } from "../utils/constants"
import { ethereum } from "@graphprotocol/graph-ts"
import { Offer } from "../../generated/schema"
import { fetchUser } from "../utils/entities/user"
import { fetchTransaction } from "../utils/entities/transaction"
import { fetchToken, toBigDecimal } from "../utils/entities/token"
import { getUsdPrice } from "../prices"
import { LogMake, LogTake, LogKill, OfferDeleted } from "../../generated/RubiconMarket/RubiconMarket"

export function handleLogMake(event: LogMake): void {

    // decode the offer ID
    let offerID = event.params.id.toHexString()
    let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id);
    if (!decoded) {
        offerID = event.params.id.toHexString();
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

    // get the USD amounts for the pay_amt and buy_amt
    let payAmtUsd = getUsdPrice(event.params.pay_gem, payAmtFormatted)
    let buyAmtUsd = getUsdPrice(event.params.buy_gem, buyAmtFormatted)

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