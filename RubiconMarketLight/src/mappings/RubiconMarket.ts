import { ZERO_BI } from "../utils/constants"
import { ethereum } from "@graphprotocol/graph-ts"
import { Offer, Take } from "../../generated/schema"
import { fetchUser } from "../utils/entities/user"
import { fetchTransaction } from "../utils/entities/transaction"
import { fetchToken } from "../utils/entities/token"
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

    let offer = new Offer(offerID)
    offer.transaction = transaction.id
    offer.timestamp = event.block.timestamp
    offer.maker = maker.id
    offer.pay_gem = payGem.id
    offer.buy_gem = buyGem.id
    offer.pay_amt = event.params.pay_amt
    offer.buy_amt = event.params.buy_amt
    offer.paid_amt = ZERO_BI
    offer.bought_amt = ZERO_BI
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

    // update the offer entity
    offer.paid_amt = offer.paid_amt.plus(event.params.take_amt)
    offer.bought_amt = offer.bought_amt.plus(event.params.give_amt)
    offer.save()

    let take = new Take(event.transaction.hash.toHexString().concat(event.transaction.index.toHexString()))
    take.transaction = transaction.id
    take.timestamp = event.block.timestamp
    take.taker = taker.id
    take.pay_gem = payGem.id
    take.buy_gem = buyGem.id
    take.pay_amt = event.params.take_amt
    take.buy_amt = event.params.give_amt
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