import { BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts"
import { getUser } from "../utils/entities/user"
import { updateCandles } from "../utils/entities/candles"
import { getTransaction } from "../utils/entities/transaction"
import { Offer, Take, Fee } from "../../generated/schema"
import { ZERO_BI } from "../utils/constants"
import { emitOffer, emitTake, emitCancel, emitFee, emitDelete, LogMake, LogTake, LogKill, OfferDeleted, FeeTake } from '../../generated/RubiconMarket/RubiconMarket'

export function handleOffer(event: emitOffer): void {
    
    // get the transaction entity
    let transaction = getTransaction(event)

    // load the maker and from entities (users)
    let maker = getUser(event.params.maker)
    let from = event.transaction.from == event.params.maker ? maker : getUser(event.transaction.from)

    // calculate the price of the offer (pay_amt / buy_amt)
    let price = event.params.pay_amt.toBigDecimal().div(event.params.buy_amt.toBigDecimal())

    // make the offer entity
    let offer = new Offer(event.params.id)
    offer.transaction = transaction.id
    offer.timestamp = event.block.timestamp
    offer.index = event.logIndex
    offer.maker = maker.id
    offer.from_address = from.id
    offer.pay_gem = event.params.pay_gem
    offer.buy_gem = event.params.buy_gem
    offer.pay_amt = event.params.pay_amt
    offer.buy_amt = event.params.buy_amt
    offer.paid_amt = ZERO_BI
    offer.bought_amt = ZERO_BI
    offer.price = price
    offer.open = true
    offer.save()
}

export function handleTake(event: emitTake): void {
    
    // get the transaction entity 
    let transaction = getTransaction(event)

    // get the taker and from entities (users)
    let taker = getUser(event.params.taker)
    let from = event.transaction.from == event.params.taker ? taker : getUser(event.transaction.from)

    // load the offer entity
    let offer = Offer.load(event.params.id)
    if (!offer) {
        return
    }

    // update the offer entity
    offer.paid_amt = offer.paid_amt.plus(event.params.take_amt)
    offer.bought_amt = offer.bought_amt.plus(event.params.give_amt)

    // TODO: at some point in time (very early on) the delete/cancel event was not being emitted.
    // so, if an offer is filled, we are going to assume it was deleted/cancelled and mark it as such at the log_index + 1
    // if there was a delete/cancel event, it will overwrite this data
    if (offer.paid_amt.equals(offer.pay_amt)) {
        offer.open = false
        offer.removed_timestamp = event.block.timestamp
        offer.removed_block = event.block.number
        offer.removed_block_index = event.transaction.index;
        offer.removed_log_index = event.logIndex.plus(BigInt.fromString('1'))
    }    
    offer.save() 

    // create the take entity
    let take = new Take(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex))))
    take.transaction = transaction.id
    take.timestamp = event.block.timestamp
    take.index = event.logIndex
    take.taker = taker.id
    take.from_address = from.id
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
    
    // load the offer entity
    let offer = Offer.load(event.params.id)
    if (!offer) {
        return
    }

    // update the offer entity
    offer.open = false
    offer.removed_timestamp = event.block.timestamp
    offer.removed_block = event.block.number
    offer.removed_block_index = event.transaction.index;
    offer.removed_log_index = event.logIndex
    offer.save()
}

export function handleFee(event: emitFee): void {

    // get the transaction entity
    let transaction = getTransaction(event)

    // get the user entity (paid the fee)
    let user = getUser(event.params.taker)

    // load the fee recipient entity
    let recipient = getUser(event.params.feeTo)

    // load the offer entity
    let offer = Offer.load(event.params.id)
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
    
    // load the offer entity
    let offer = Offer.load(event.params.id)
    if (!offer) {
        return
    }

    // update the offer entity
    offer.open = false
    offer.removed_timestamp = event.block.timestamp
    offer.removed_block = event.block.number
    offer.removed_block_index = event.transaction.index;
    offer.removed_log_index = event.logIndex
    offer.save()
}

// this handles the v1 contract to ensure data continuity
export function handleLogMake(event: LogMake): void {

    // get the transaction entity
    let transaction = getTransaction(event)

    // load the maker and from entities (users)
    let maker = getUser(event.params.maker)
    let from = event.transaction.from == event.params.maker ? maker : getUser(event.transaction.from)

    // calculate the price of the offer (pay_amt / buy_amt)
    let price = event.params.pay_amt.toBigDecimal().div(event.params.buy_amt.toBigDecimal())

    // make the offer entity
    let offer = new Offer(event.params.id)
    offer.transaction = transaction.id
    offer.timestamp = event.block.timestamp
    offer.index = event.logIndex
    offer.maker = maker.id
    offer.from_address = from.id
    offer.pay_gem = event.params.pay_gem
    offer.buy_gem = event.params.buy_gem
    offer.pay_amt = event.params.pay_amt
    offer.buy_amt = event.params.buy_amt
    offer.paid_amt = ZERO_BI
    offer.bought_amt = ZERO_BI
    offer.price = price
    offer.open = true
    offer.save()
}

export function handleLogTake(event: LogTake): void {
    
    // get the transaction entity 
    let transaction = getTransaction(event)

    // get the taker and from entities (users)
    let taker = getUser(event.params.taker)
    let from = event.transaction.from == event.params.taker ? taker : getUser(event.transaction.from)

    // load the offer entity
    let offer = Offer.load(event.params.id)
    if (!offer) {
        return
    }

    // update the offer entity
    offer.paid_amt = offer.paid_amt.plus(event.params.take_amt)
    offer.bought_amt = offer.bought_amt.plus(event.params.give_amt)

    // TODO: at some point in time (very early on) the delete/cancel event was not being emitted.
    // so, if an offer is filled, we are going to assume it was deleted/cancelled and mark it as such at the log_index + 1
    // if there was a delete/cancel event, it will overwrite this data
    if (offer.paid_amt.equals(offer.pay_amt)) {
        offer.open = false
        offer.removed_timestamp = event.block.timestamp
        offer.removed_block = event.block.number
        offer.removed_block_index = event.transaction.index;
        offer.removed_log_index = event.logIndex.plus(BigInt.fromString('1'))
    }
    offer.save() 

    // create the take entity
    let take = new Take(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex))))
    take.transaction = transaction.id
    take.timestamp = event.block.timestamp
    take.index = event.logIndex
    take.taker = taker.id
    take.from_address = from.id
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
    
    // load the offer entity
    let offer = Offer.load(event.params.id)
    if (!offer) {
        return
    }

    // update the offer entity
    offer.open = false
    offer.removed_timestamp = event.block.timestamp
    offer.removed_block = event.block.number
    offer.removed_block_index = event.transaction.index;
    offer.removed_log_index = event.logIndex
    offer.save()
}

export function handleFeeTake(event: FeeTake): void {

    // get the transaction entity
    let transaction = getTransaction(event)

    // get the user entity (paid the fee)
    let user = getUser(event.params.taker)

    // load the fee recipient entity
    let recipient = getUser(event.params.feeTo)

    // load the offer entity
    let offer = Offer.load(event.params.id)
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

    // load the offer entity
    let offer = Offer.load(event.params.id)
    if (!offer) {
        return
    }

    // update the offer entity
    offer.open = false
    offer.removed_timestamp = event.block.timestamp
    offer.removed_block = event.block.number
    offer.removed_block_index = event.transaction.index;
    offer.removed_log_index = event.logIndex
    offer.save()
}