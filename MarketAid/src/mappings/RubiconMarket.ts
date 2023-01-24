import { Aid, AidToken, AidTokenHistory, Offer, Take} from "../../generated/schema"
import { LogMake, LogTake, LogKill, OfferDeleted } from "../../generated/RubiconMarket/RubiconMarket"
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
    
    // so we need to cover two scenarios here, the one where the offer was created by an aid contract, and the one where the aid contract is the taker
    let takerAid = Aid.load(event.params.taker)
    let makerAid = Aid.load(event.params.maker)

    // if either are not null, lets load in their shared data 
    if (takerAid || makerAid) {
        var transaction = fetchTransaction(event)
        var payGem = fetchToken(event.params.pay_gem)
        var buyGem = fetchToken(event.params.buy_gem)
    } else {
        return
    }

    // deal with the scenario where the aid contract is the taker first
    if (takerAid) {
        
        // try to load the token the user is buying, if they don't have it, create it 
        // the pay_gem is what the maker is paying with, the buy_gem is what the maker is buying. so for the taker, the pay_gem is what they are buying in exchange for the buy_gem
        let buyToken = AidToken.load(takerAid.id.concat(event.params.pay_gem))
        if (!buyToken) {
            buyToken = new AidToken(takerAid.id.concat(event.params.pay_gem))
            buyToken.aid = takerAid.id
            buyToken.token = payGem.id
            buyToken.balance = event.params.take_amt
            buyToken.save()
        } else {
            buyToken.balance = buyToken.balance.plus(event.params.take_amt)
            buyToken.save()
        }


        // load in the token history entities or create them if they don't exist
        let buyTokenHistory = AidTokenHistory.load(takerAid.id.concat(event.params.pay_gem).concat(transaction.id))
        if (!buyTokenHistory) {
            buyTokenHistory = new AidTokenHistory(takerAid.id.concat(event.params.pay_gem).concat(transaction.id))
            buyTokenHistory.aid_token = buyToken.id
            buyTokenHistory.balance = buyToken.balance
            buyTokenHistory.balance_change = event.params.take_amt
            buyTokenHistory.transaction = transaction.id
            buyTokenHistory.save()
        } else {
            buyTokenHistory.balance = buyToken.balance
            buyTokenHistory.balance_change = buyTokenHistory.balance_change.plus(event.params.take_amt)
            buyTokenHistory.save()
        }
        
        // so the thing here is if the user is paying with a token that is not registered, then they should already have an entity for this 
        // so, what we really should do here if the entity does not exist is query the chain state and populate a new entity 
        // for now, we are just going to return
        // TODO: query the chain state and populate a new entity if it does not exist
        let payToken = AidToken.load(takerAid.id.concat(event.params.buy_gem))
        if (!payToken) {
            return
        } else {
            payToken.balance = payToken.balance.minus(event.params.give_amt)
            payToken.save()

            let payTokenHistory = AidTokenHistory.load(takerAid.id.concat(event.params.buy_gem).concat(transaction.id))
            if (!payTokenHistory) {
                payTokenHistory = new AidTokenHistory(takerAid.id.concat(event.params.buy_gem).concat(transaction.id))
                payTokenHistory.aid_token = payToken.id
                payTokenHistory.balance = payToken.balance
                payTokenHistory.balance_change = ZERO_BI.minus(event.params.give_amt)
                payTokenHistory.transaction = transaction.id
                payTokenHistory.save()
            } else {
                payTokenHistory.balance = payToken.balance
                payTokenHistory.balance_change = payTokenHistory.balance_change.minus(event.params.give_amt)
                payTokenHistory.save()
            }
        }


    }

    if (makerAid) {

        // try to load the token the user is buying, if they don't have it, create it
        let buyToken = AidToken.load(makerAid.id.concat(event.params.buy_gem))
        if (!buyToken) {
            buyToken = new AidToken(makerAid.id.concat(event.params.buy_gem))
            buyToken.aid = makerAid.id
            buyToken.token = buyGem.id
            buyToken.balance = event.params.give_amt
            buyToken.save()
        }

        // load in the token history entities or create them if they don't exist
        let buyTokenHistory = AidTokenHistory.load(makerAid.id.concat(event.params.buy_gem).concat(transaction.id))
        if (!buyTokenHistory) {
            buyTokenHistory = new AidTokenHistory(makerAid.id.concat(event.params.buy_gem).concat(transaction.id))
            buyTokenHistory.aid_token = buyToken.id
            buyTokenHistory.balance = buyToken.balance
            buyTokenHistory.balance_change = event.params.give_amt
            buyTokenHistory.transaction = transaction.id
            buyTokenHistory.save()
        } else {
            buyTokenHistory.balance = buyToken.balance
            buyTokenHistory.balance_change = buyTokenHistory.balance_change.plus(event.params.give_amt)
            buyTokenHistory.save()
        }

        // so the thing here is if the user is paying with a token that is not registered, then they should already have an entity for this
        // so, what we really should do here if the entity does not exist is query the chain state and populate a new entity
        // for now, we are just going to return
        // TODO: query the chain state and populate a new entity if it does not exist
        let payToken = AidToken.load(makerAid.id.concat(event.params.pay_gem))
        if (!payToken) {
            return
        } else {
            payToken.balance = payToken.balance.minus(event.params.take_amt)
            payToken.save()

            let payTokenHistory = AidTokenHistory.load(makerAid.id.concat(event.params.pay_gem).concat(transaction.id))
            if (!payTokenHistory) {
                payTokenHistory = new AidTokenHistory(makerAid.id.concat(event.params.pay_gem).concat(transaction.id))
                payTokenHistory.aid_token = payToken.id
                payTokenHistory.balance = payToken.balance
                payTokenHistory.balance_change = ZERO_BI.minus(event.params.take_amt)
                payTokenHistory.transaction = transaction.id
                payTokenHistory.save()
            } else {
                payTokenHistory.balance = payToken.balance
                payTokenHistory.balance_change = payTokenHistory.balance_change.minus(event.params.take_amt)
                payTokenHistory.save()
            }

        }


        // decode the offer ID
        let offerID = event.params.id.toHexString()
        let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id)
        if (!decoded) {
            offerID = event.params.id.toHexString()
        } else {
            offerID = decoded.toBigInt().toString()
        }

        // if the offer does not exist, it was not created by an aid contract, return
        let offer = Offer.load(offerID)
        if (!offer) {
            return
        }

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

        // update the take entity
        let take = new Take(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
        take.transaction = transaction.id
        take.taker = event.transaction.from
        take.pay_gem = payGem.id
        take.buy_gem = buyGem.id
        take.pay_amt = event.params.take_amt
        take.buy_amt = event.params.give_amt
        take.offer = offer.id
        take.save()
    }
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