import { Aid, AidToken, AidTokenHistory, Offer, Take, Transaction, FeeTakeEntity } from "../../generated/schema"
import { LogMake, LogTake, LogKill, OfferDeleted, FeeTake } from "../../generated/RubiconMarket/RubiconMarket"
import { Bytes, ethereum } from "@graphprotocol/graph-ts"
import { fetchToken } from "../utils/entities/token"
import { fetchTransaction } from "../utils/entities/transaction"
import { ZERO_BI, NEG_ONE_BI } from "../utils/constants"

export function handleLogMake(event: LogMake): void {

    // get the aid entity, if the maker was not an aid contract, return
    let aid = Aid.load(event.params.maker)
    if (!aid) {
        return
    }

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
    transaction.aid = aid.id
    transaction.save()

    // get the token entities
    let payGem = fetchToken(event.params.pay_gem)
    let buyGem = fetchToken(event.params.buy_gem)

    let offer = new Offer(offerID)
    offer.transaction = transaction.id
    offer.maker = aid.id
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

    let takerAid = Aid.load(event.params.taker)
    let makerAid = Aid.load(event.params.maker)

    // if both are null, then we don't care about this event
    if (!takerAid && !makerAid) {
        return
    } else {
        var transaction = fetchTransaction(event)
        var payGem = fetchToken(event.params.pay_gem)
        var buyGem = fetchToken(event.params.buy_gem)

        // decode the offer ID
        var offerID = event.params.id.toHexString()
        let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id)
        if (!decoded) {
            offerID = event.params.id.toHexString()
        } else {
            offerID = decoded.toBigInt().toString()
        }
        // update the take entity
        var take = new Take(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
        take.transaction = transaction.id
        take.taker = event.transaction.from
        take.pay_gem = payGem.id
        take.buy_gem = buyGem.id
        take.pay_amt = event.params.take_amt
        take.buy_amt = event.params.give_amt
        take.offer_id = offerID
        take.save()
    }

    // if the taker and maker are the same, then all we need to do is update the take and offer entities 
    if (takerAid === makerAid) {
    
        let offer = Offer.load(offerID)
        if (offer) {
            // update the offer entity
            offer.paid_amt = offer.paid_amt.plus(event.params.take_amt)
            offer.bought_amt = offer.bought_amt.plus(event.params.give_amt)

            // add a check for if the offer is filled
            if (offer.pay_amt.equals(offer.paid_amt) && offer.buy_amt.equals(offer.bought_amt)) {
                offer.removed_timestamp = event.block.timestamp
                offer.filled = true
                offer.live = false
            }
            offer.save()

            take.offer = offer.id
            take.save()
        }
        return
    }

    // if the taker is an aid contract, then update the balances accordingly 
    if (takerAid) {

        // load the token entities and their history entities
        let assetSold = AidToken.load(takerAid.id.concat(event.params.buy_gem))
        let assetReceived = AidToken.load(takerAid.id.concat(event.params.pay_gem))

        let assetSoldHistory = AidTokenHistory.load(takerAid.id.concat(event.params.buy_gem).concat(transaction.id).concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
        let assetReceivedHistory = AidTokenHistory.load(takerAid.id.concat(event.params.pay_gem).concat(transaction.id).concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))

        let amountSold = event.params.give_amt
        let amountReceived = event.params.take_amt

        // update the token entities
        if (assetSold) {
            assetSold.balance = assetSold.balance.minus(amountSold)
            assetSold.save()
        } else {
            assetSold = new AidToken(takerAid.id.concat(event.params.buy_gem))
            assetSold.aid = takerAid.id
            assetSold.token = event.params.buy_gem
            assetSold.balance = NEG_ONE_BI.times(amountSold)
            assetSold.save()
        }

        if (assetSoldHistory) {
            assetSoldHistory.balance = assetSold.balance
            assetSoldHistory.balance_change = assetSoldHistory.balance_change.minus(amountSold)
            assetSoldHistory.save()
        } else {
            assetSoldHistory = new AidTokenHistory(takerAid.id.concat(event.params.buy_gem).concat(transaction.id).concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
            assetSoldHistory.timestamp = event.block.timestamp
            assetSoldHistory.aid = takerAid.id
            assetSoldHistory.aid_token = assetSold.id
            assetSoldHistory.transaction = transaction.id
            assetSoldHistory.balance = assetSold.balance
            assetSoldHistory.balance_change = NEG_ONE_BI.times(amountSold)
            assetSoldHistory.transaction = transaction.id
            assetSoldHistory.index = event.transaction.index
            assetSoldHistory.save()
        }

        if (assetReceived) {
            assetReceived.balance = assetReceived.balance.plus(amountReceived)
            assetReceived.save()
        } else {
            assetReceived = new AidToken(takerAid.id.concat(event.params.pay_gem))
            assetReceived.aid = takerAid.id
            assetReceived.token = event.params.pay_gem
            assetReceived.balance = amountReceived
            assetReceived.save()
        }

        if (assetReceivedHistory) {
            assetReceivedHistory.balance = assetReceived.balance
            assetReceivedHistory.balance_change = assetReceivedHistory.balance_change.plus(amountReceived)
            assetReceivedHistory.save()
        } else {
            assetReceivedHistory = new AidTokenHistory(takerAid.id.concat(event.params.pay_gem).concat(transaction.id).concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
            assetReceivedHistory.timestamp = event.block.timestamp
            assetReceivedHistory.aid = takerAid.id
            assetReceivedHistory.aid_token = assetReceived.id
            assetReceivedHistory.transaction = transaction.id
            assetReceivedHistory.balance = assetReceived.balance
            assetReceivedHistory.balance_change = amountReceived
            assetReceivedHistory.transaction = transaction.id
            assetReceivedHistory.index = event.transaction.index
            assetReceivedHistory.save()
        }
    }

    // if the maker is an aid contract, then update the balances accordingly
    if (makerAid) {

        // load the token entities and their history entities
        let assetSold = AidToken.load(makerAid.id.concat(event.params.pay_gem))
        let assetReceived = AidToken.load(makerAid.id.concat(event.params.buy_gem))

        let assetSoldHistory = AidTokenHistory.load(makerAid.id.concat(event.params.pay_gem).concat(transaction.id).concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
        let assetReceivedHistory = AidTokenHistory.load(makerAid.id.concat(event.params.buy_gem).concat(transaction.id).concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))

        let amountSold = event.params.take_amt
        let amountReceived = event.params.give_amt

        // update the token entities
        if (assetSold) {
            assetSold.balance = assetSold.balance.minus(amountSold)
            assetSold.save()
        } else {
            assetSold = new AidToken(makerAid.id.concat(event.params.pay_gem))
            assetSold.aid = makerAid.id
            assetSold.token = event.params.pay_gem
            assetSold.balance = NEG_ONE_BI.times(amountSold)
            assetSold.save()
        } 

        if (assetSoldHistory) {
            assetSoldHistory.balance = assetSold.balance
            assetSoldHistory.balance_change = assetSoldHistory.balance_change.minus(amountSold)
            assetSoldHistory.save()
        } else {
            assetSoldHistory = new AidTokenHistory(makerAid.id.concat(event.params.pay_gem).concat(transaction.id).concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
            assetSoldHistory.timestamp = event.block.timestamp
            assetSoldHistory.aid = makerAid.id
            assetSoldHistory.aid_token = assetSold.id
            assetSoldHistory.transaction = transaction.id
            assetSoldHistory.balance = assetSold.balance
            assetSoldHistory.balance_change = NEG_ONE_BI.times(amountSold)
            assetSoldHistory.transaction = transaction.id
            assetSoldHistory.index = event.transaction.index
            assetSoldHistory.save()
        }

        if (assetReceived) {
            assetReceived.balance = assetReceived.balance.plus(amountReceived)
            assetReceived.save()
        } else {
            assetReceived = new AidToken(makerAid.id.concat(event.params.buy_gem))
            assetReceived.aid = makerAid.id
            assetReceived.token = event.params.buy_gem
            assetReceived.balance = amountReceived
            assetReceived.save()
        }

        if (assetReceivedHistory) {
            assetReceivedHistory.balance = assetReceived.balance
            assetReceivedHistory.balance_change = assetReceivedHistory.balance_change.plus(amountReceived)
            assetReceivedHistory.save()
        } else {
            assetReceivedHistory = new AidTokenHistory(makerAid.id.concat(event.params.buy_gem).concat(transaction.id).concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
            assetReceivedHistory.timestamp = event.block.timestamp
            assetReceivedHistory.aid = makerAid.id
            assetReceivedHistory.aid_token = assetReceived.id
            assetReceivedHistory.transaction = transaction.id
            assetReceivedHistory.balance = assetReceived.balance
            assetReceivedHistory.balance_change = amountReceived
            assetReceivedHistory.transaction = transaction.id
            assetReceivedHistory.index = event.transaction.index
            assetReceivedHistory.save()
        }

        // update the offer entity
        let offer = Offer.load(offerID)
        if (offer) {
            // update the offer entity
            offer.paid_amt = offer.paid_amt.plus(event.params.take_amt)
            offer.bought_amt = offer.bought_amt.plus(event.params.give_amt)

            // add a check for if the offer is filled
            if (offer.pay_amt.equals(offer.paid_amt) && offer.buy_amt.equals(offer.bought_amt)) {
                offer.removed_timestamp = event.block.timestamp
                offer.filled = true
                offer.live = false
            }
            offer.save()

            take.offer = offer.id
            take.save()
        }
    }
} 

export function handleFeeTake(event: FeeTake): void {

    // get the aid entity, if the taker was not an aid contract, return
    let aid = Aid.load(event.params.taker)
    if (!aid) {
        return
    }  
    var transaction = fetchTransaction(event)
    transaction.aid = aid.id
    transaction.save()    

    // get the token entity
    let feeAsset = fetchToken(event.params.asset)

    // save the fee take entity 
    let feeTake = new FeeTakeEntity(event.params.taker.concat(event.params.asset).concat(transaction.id).concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
    feeTake.timestamp = event.block.timestamp
    feeTake.aid = aid.id
    feeTake.asset = feeAsset.id
    feeTake.amount = event.params.feeAmt
    feeTake.transaction = transaction.id
    feeTake.save()

    // the fee is paid in the asset the taker is paying the maker, so in theory there should always be an aid token entity tracking this
    // if there is not, then we should query the chain state and populate a new entity
    // for now, we are just going to return
    // TODO: query the chain state and populate a new entity if it does not exist
    let feeToken = AidToken.load(aid.id.concat(event.params.asset))
    if (!feeToken) {
        return
    } else {
        feeToken.balance = feeToken.balance.minus(event.params.feeAmt)
        feeToken.save()

        // get the transaction entity and update the token history entity to include the fee
        let feeTokenHistory = AidTokenHistory.load(aid.id.concat(event.params.asset).concat(transaction.id).concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
        if (!feeTokenHistory) {
            feeTokenHistory = new AidTokenHistory(aid.id.concat(event.params.asset).concat(transaction.id).concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
            feeTokenHistory.timestamp = event.block.timestamp
            feeTokenHistory.aid = aid.id
            feeTokenHistory.aid_token = feeToken.id
            feeTokenHistory.balance = feeToken.balance
            feeTokenHistory.balance_change = ZERO_BI.minus(event.params.feeAmt)
            feeTokenHistory.transaction = transaction.id
            feeTokenHistory.index = event.transaction.index
            feeTokenHistory.save()
        } else {
            feeTokenHistory.timestamp = event.block.timestamp
            feeTokenHistory.balance = feeToken.balance
            feeTokenHistory.balance_change = feeTokenHistory.balance_change.minus(event.params.feeAmt)
            feeTokenHistory.save()
        }
    }
}

export function handleLogKill(event: LogKill): void {

    // if the maker is an aid contract, save the offer
    let aid = Aid.load(event.params.maker)
    if (!aid) {
        return
    } else {
        let transaction = fetchTransaction(event)
        transaction.aid = aid.id
        transaction.save()    
    }

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
    offer.removed_timestamp = event.block.timestamp
    offer.save()
}

export function handleOfferDeleted(event: OfferDeleted): void {
    // this event is only emitted when an offer is filled, so the transaction will be tracked for an aid contract already

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
    offer.removed_timestamp = event.block.timestamp
    offer.save()
}