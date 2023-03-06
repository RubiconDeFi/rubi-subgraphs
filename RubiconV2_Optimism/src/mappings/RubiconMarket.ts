import { Bytes, ethereum } from "@graphprotocol/graph-ts"
import { getUser } from "../utils/entities/user"
import { updateCandles } from "../utils/entities/candles"
import { getTransaction } from "../utils/entities/transaction"
import { Offer, Take, Fee } from "../../generated/schema"
import { ZERO_BI } from "../utils/constants"
import { emitOffer, emitTake, emitCancel, emitFee, emitDelete, LogMake, LogTake, LogKill, OfferDeleted, FeeTake } from '../../generated/RubiconMarket/RubiconMarket'

export function handleOffer(event: emitOffer): void {
    
    // decode the offer ID
    let offerID = event.params.id.toHexString()
    let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id)
    if (!decoded) {
        offerID = event.params.id.toHexString()
    } else {
        offerID = decoded.toBigInt().toString()
    }

    // get the transaction entity
    let transaction = getTransaction(event)

    // load the maker entity (user)
    let maker = getUser(event.params.maker)

    // make the offer entity
    let offer = new Offer(offerID)
    offer.transaction = transaction.id
    offer.timestamp = event.block.timestamp
    offer.index = event.logIndex
    offer.maker = maker.id
    offer.pay_gem = event.params.pay_gem
    offer.buy_gem = event.params.buy_gem
    offer.pay_amt = event.params.pay_amt
    offer.buy_amt = event.params.buy_amt
    offer.paid_amt = ZERO_BI
    offer.bought_amt = ZERO_BI
    offer.open = true
    offer.save()
}

export function handleTake(event: emitTake): void {
    
    // get the transaction entity 
    let transaction = getTransaction(event)

    // get the taker entity (user)
    let taker = getUser(event.params.taker)

    // decode the offer ID
    let offerID = event.params.id.toHexString()
    let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id)
    if (!decoded) {
        offerID = event.params.id.toHexString()
    } else {
        offerID = decoded.toBigInt().toString()
    }

    // load the offer entity
    let offer = Offer.load(offerID)
    if (!offer) {
        return
    }

    // update the offer entity
    offer.paid_amt = offer.paid_amt.plus(event.params.take_amt)
    offer.bought_amt = offer.bought_amt.plus(event.params.give_amt)

    // if the offer is filled, mark it as inactive and update the entity 
    if (offer.paid_amt.equals(offer.pay_amt)) {
        offer.open = false
        offer.removed_timestamp = event.block.timestamp
        offer.removed_block = event.block.number
    }
    offer.save()

    // create the take entity
    let take = new Take(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex))))
    take.transaction = transaction.id
    take.timestamp = event.block.timestamp
    take.index = event.logIndex
    take.taker = taker.id
    take.offer = offer.id
    take.take_gem = offer.pay_gem
    take.give_gem = offer.buy_gem
    take.take_amt = event.params.take_amt
    take.give_amt = event.params.give_amt
    take.save()

    // update the candle entities 
    updateCandles(take)
}

export function handleCancel(event: emitCancel): void {
    
    // decode the offer ID
    let offerID = event.params.id.toHexString()
    let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id)
    if (!decoded) {
        offerID = event.params.id.toHexString()
    } else {
        offerID = decoded.toBigInt().toString()
    }

    // load the offer entity
    let offer = Offer.load(offerID)
    if (!offer) {
        return
    }

    // update the offer entity
    offer.open = false
    offer.removed_timestamp = event.block.timestamp
    offer.removed_block = event.block.number
    offer.save()
}

export function handleFee(event: emitFee): void {

    // get the transaction entity
    let transaction = getTransaction(event)

    // get the user entity (paid the fee)
    let user = getUser(event.params.taker)

    // load the fee recipient entity
    let recipient = getUser(event.params.feeTo)
    
    // decode the offer ID
    let offerID = event.params.id.toHexString()
    let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id)
    if (!decoded) {
        offerID = event.params.id.toHexString()
    } else {
        offerID = decoded.toBigInt().toString()
    }

    // load the offer entity
    let offer = Offer.load(offerID)
    if (!offer) {
        return
    }

    // create the fee entity
    let fee = new Fee(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex))))
    fee.transaction = transaction.id
    fee.timestamp = event.block.timestamp
    fee.index = event.logIndex
    fee.user = user.id
    fee.recipient = recipient.id
    fee.offer = offer.id
    fee.fee_gem = event.params.asset
    fee.fee_amt = event.params.feeAmt
    fee.save()
}

export function handleDelete(event: emitDelete): void {
    
    // decode the offer ID
    let offerID = event.params.id.toHexString()
    let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id)
    if (!decoded) {
        offerID = event.params.id.toHexString()
    } else {
        offerID = decoded.toBigInt().toString()
    }

    // load the offer entity
    let offer = Offer.load(offerID)
    if (!offer) {
        return
    }

    // update the offer entity
    offer.open = false
    offer.removed_timestamp = event.block.timestamp
    offer.removed_block = event.block.number
    offer.save()
}

// this handles the v1 contract to ensure data continuity
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
    let transaction = getTransaction(event)

    // load the maker entity (user)
    let maker = getUser(event.params.maker)

    // make the offer entity
    let offer = new Offer(offerID)
    offer.transaction = transaction.id
    offer.timestamp = event.block.timestamp
    offer.index = event.logIndex
    offer.maker = maker.id
    offer.pay_gem = event.params.pay_gem
    offer.buy_gem = event.params.buy_gem
    offer.pay_amt = event.params.pay_amt
    offer.buy_amt = event.params.buy_amt
    offer.paid_amt = ZERO_BI
    offer.bought_amt = ZERO_BI
    offer.open = true
    offer.save()
}

export function handleLogTake(event: LogTake): void {
    
    // get the transaction entity 
    let transaction = getTransaction(event)

    // get the taker entity (user)
    let taker = getUser(event.params.taker)

    // decode the offer ID
    let offerID = event.params.id.toHexString()
    let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id)
    if (!decoded) {
        offerID = event.params.id.toHexString()
    } else {
        offerID = decoded.toBigInt().toString()
    }

    // load the offer entity
    let offer = Offer.load(offerID)
    if (!offer) {
        return
    }

    // update the offer entity
    offer.paid_amt = offer.paid_amt.plus(event.params.take_amt)
    offer.bought_amt = offer.bought_amt.plus(event.params.give_amt)

    // if the offer is filled, mark it as inactive and update the entity 
    if (offer.paid_amt.equals(offer.pay_amt)) {
        offer.open = false
        offer.removed_timestamp = event.block.timestamp
        offer.removed_block = event.block.number
    }
    offer.save()

    // create the take entity
    let take = new Take(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex))))
    take.transaction = transaction.id
    take.timestamp = event.block.timestamp
    take.index = event.logIndex
    take.taker = taker.id
    take.offer = offer.id
    take.take_gem = offer.pay_gem
    take.give_gem = offer.buy_gem
    take.take_amt = event.params.take_amt
    take.give_amt = event.params.give_amt
    take.save()

    // update the candle entities 
    updateCandles(take)
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

    // load the offer entity
    let offer = Offer.load(offerID)
    if (!offer) {
        return
    }

    // update the offer entity
    offer.open = false
    offer.removed_timestamp = event.block.timestamp
    offer.removed_block = event.block.number
    offer.save()
}

export function handleFeeTake(event: FeeTake): void {

    // get the transaction entity
    let transaction = getTransaction(event)

    // get the user entity (paid the fee)
    let user = getUser(event.params.taker)

    // load the fee recipient entity
    let recipient = getUser(event.params.feeTo)
    
    // decode the offer ID
    let offerID = event.params.id.toHexString()
    let decoded = ethereum.decode(ethereum.ValueKind.BYTES.toString(), event.params.id)
    if (!decoded) {
        offerID = event.params.id.toHexString()
    } else {
        offerID = decoded.toBigInt().toString()
    }

    // load the offer entity
    let offer = Offer.load(offerID)
    if (!offer) {
        return
    }

    // create the fee entity
    let fee = new Fee(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex))))
    fee.transaction = transaction.id
    fee.timestamp = event.block.timestamp
    fee.index = event.logIndex
    fee.user = user.id
    fee.recipient = recipient.id
    fee.offer = offer.id
    fee.fee_gem = event.params.asset
    fee.fee_amt = event.params.feeAmt
    fee.save()
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

    // load the offer entity
    let offer = Offer.load(offerID)
    if (!offer) {
        return
    }

    // update the offer entity
    offer.open = false
    offer.removed_timestamp = event.block.timestamp
    offer.removed_block = event.block.number
    offer.save()
}