import { newMockEvent } from "matchstick-as/assembly/index"
import { Address, ethereum, JSONValue, Value, ipfs, json, Bytes, BigInt } from "@graphprotocol/graph-ts" 
import { emitSwap } from '../generated/RubiconRouter/RubiconRouter'
import { emitOffer, emitTake, emitCancel, emitFee, emitDelete } from '../generated/RubiconMarket/RubiconMarket'

export function createEmitOffer(id: Bytes, pair: Bytes, maker: string, pay_gem: string, buy_gem: string, pay_amt: BigInt, buy_amt: BigInt): emitOffer {
    
    let emitOfferEvent = changetype<emitOffer>(newMockEvent())
    emitOfferEvent.parameters = new Array()
    let idParam = new ethereum.EventParam("id", ethereum.Value.fromBytes(id))
    let pairParam = new ethereum.EventParam("pair", ethereum.Value.fromBytes(pair))
    let makerParam = new ethereum.EventParam("maker", ethereum.Value.fromAddress(Address.fromString(maker)))
    let pay_gemParam = new ethereum.EventParam("pay_gem", ethereum.Value.fromAddress(Address.fromString(pay_gem)))
    let buy_gemParam = new ethereum.EventParam("buy_gem", ethereum.Value.fromAddress(Address.fromString(buy_gem)))
    let pay_amtParam = new ethereum.EventParam("pay_amt", ethereum.Value.fromUnsignedBigInt(pay_amt))
    let buy_amtParam = new ethereum.EventParam("buy_amt", ethereum.Value.fromUnsignedBigInt(buy_amt))
  
    emitOfferEvent.parameters.push(idParam)
    emitOfferEvent.parameters.push(pairParam)
    emitOfferEvent.parameters.push(makerParam)
    emitOfferEvent.parameters.push(pay_gemParam)
    emitOfferEvent.parameters.push(buy_gemParam)
    emitOfferEvent.parameters.push(pay_amtParam)
    emitOfferEvent.parameters.push(buy_amtParam)
  
    return emitOfferEvent
}

export function createEmitTake(id: Bytes, pair: Bytes, maker: string, taker: string, pay_gem: string, buy_gem: string, take_amt: BigInt, give_amt: BigInt): emitTake {

    let emitTakeEvent = changetype<emitTake>(newMockEvent())
    emitTakeEvent.parameters = new Array()
    let idParam = new ethereum.EventParam("id", ethereum.Value.fromBytes(id))
    let pairParam = new ethereum.EventParam("pair", ethereum.Value.fromBytes(pair))
    let takerParam = new ethereum.EventParam("taker", ethereum.Value.fromAddress(Address.fromString(taker)))
    let makerParam = new ethereum.EventParam("maker", ethereum.Value.fromAddress(Address.fromString(maker)))
    let pay_gemParam = new ethereum.EventParam("pay_gem", ethereum.Value.fromAddress(Address.fromString(pay_gem)))
    let buy_gemParam = new ethereum.EventParam("buy_gem", ethereum.Value.fromAddress(Address.fromString(buy_gem)))
    let take_amtParam = new ethereum.EventParam("take_amt", ethereum.Value.fromUnsignedBigInt(take_amt))
    let give_amtParam = new ethereum.EventParam("give_amt", ethereum.Value.fromUnsignedBigInt(give_amt))

    emitTakeEvent.parameters.push(idParam)
    emitTakeEvent.parameters.push(pairParam)
    emitTakeEvent.parameters.push(takerParam)
    emitTakeEvent.parameters.push(makerParam)
    emitTakeEvent.parameters.push(pay_gemParam)
    emitTakeEvent.parameters.push(buy_gemParam)
    emitTakeEvent.parameters.push(take_amtParam)
    emitTakeEvent.parameters.push(give_amtParam)

    return emitTakeEvent
}

export function createEmitCancel(id: Bytes, pair: Bytes, maker: string, pay_gem: string, buy_gem: string, pay_amt: BigInt, buy_amt: BigInt): emitCancel {

    let emitCancelEvent = changetype<emitCancel>(newMockEvent())
    emitCancelEvent.parameters = new Array()
    let idParam = new ethereum.EventParam("id", ethereum.Value.fromBytes(id))
    let pairParam = new ethereum.EventParam("pair", ethereum.Value.fromBytes(pair))
    let makerParam = new ethereum.EventParam("maker", ethereum.Value.fromAddress(Address.fromString(maker)))
    let pay_gemParam = new ethereum.EventParam("pay_gem", ethereum.Value.fromAddress(Address.fromString(pay_gem)))
    let buy_gemParam = new ethereum.EventParam("buy_gem", ethereum.Value.fromAddress(Address.fromString(buy_gem)))
    let pay_amtParam = new ethereum.EventParam("pay_amt", ethereum.Value.fromUnsignedBigInt(pay_amt))
    let buy_amtParam = new ethereum.EventParam("buy_amt", ethereum.Value.fromUnsignedBigInt(buy_amt))

    emitCancelEvent.parameters.push(idParam)
    emitCancelEvent.parameters.push(pairParam)
    emitCancelEvent.parameters.push(makerParam)
    emitCancelEvent.parameters.push(pay_gemParam)
    emitCancelEvent.parameters.push(buy_gemParam)
    emitCancelEvent.parameters.push(pay_amtParam)
    emitCancelEvent.parameters.push(buy_amtParam)

    return emitCancelEvent
}

export function createEmitFee(id: Bytes, taker: string, feeTo: string, pair: Bytes, asset: string, feeAmt: BigInt): emitFee {
    let emitFeeEvent = changetype<emitFee>(newMockEvent())
    emitFeeEvent.parameters = new Array()
    let idParam = new ethereum.EventParam("id", ethereum.Value.fromBytes(id))
    let takerParam = new ethereum.EventParam("taker", ethereum.Value.fromAddress(Address.fromString(taker)))
    let feeToParam = new ethereum.EventParam("feeTo", ethereum.Value.fromAddress(Address.fromString(feeTo)))
    let pairParam = new ethereum.EventParam("pair", ethereum.Value.fromBytes(pair))
    let assetParam = new ethereum.EventParam("asset", ethereum.Value.fromAddress(Address.fromString(asset)))
    let feeAmtParam = new ethereum.EventParam("feeAmt", ethereum.Value.fromUnsignedBigInt(feeAmt))

    emitFeeEvent.parameters.push(idParam)
    emitFeeEvent.parameters.push(takerParam)
    emitFeeEvent.parameters.push(feeToParam)
    emitFeeEvent.parameters.push(pairParam)
    emitFeeEvent.parameters.push(assetParam)
    emitFeeEvent.parameters.push(feeAmtParam)

    return emitFeeEvent
}

export function createEmitDelete(id: Bytes, pair: Bytes, maker: string): emitDelete {
    let emitDeleteEvent = changetype<emitDelete>(newMockEvent())
    emitDeleteEvent.parameters = new Array()
    let idParam = new ethereum.EventParam("id", ethereum.Value.fromBytes(id))
    let pairParam = new ethereum.EventParam("pair", ethereum.Value.fromBytes(pair))
    let makerParam = new ethereum.EventParam("maker", ethereum.Value.fromAddress(Address.fromString(maker)))

    emitDeleteEvent.parameters.push(idParam)
    emitDeleteEvent.parameters.push(pairParam)
    emitDeleteEvent.parameters.push(makerParam)

    return emitDeleteEvent
}

export function createEmitSwap(recipient: string, inputERC20: string, targetERC20: string, pair: Bytes, inputAmount: BigInt, realizedFill: BigInt, hurdleBuyAmtMin: BigInt): emitSwap {
    let emitSwapEvent = changetype<emitSwap>(newMockEvent())
    emitSwapEvent.parameters = new Array()
    let recipientParam = new ethereum.EventParam("recipient", ethereum.Value.fromAddress(Address.fromString(recipient)))
    let inputERC20Param = new ethereum.EventParam("inputERC20", ethereum.Value.fromAddress(Address.fromString(inputERC20)))
    let targetERC20Param = new ethereum.EventParam("targetERC20", ethereum.Value.fromAddress(Address.fromString(targetERC20)))
    let pairParam = new ethereum.EventParam("pair", ethereum.Value.fromBytes(pair))
    let inputAmountParam = new ethereum.EventParam("inputAmount", ethereum.Value.fromUnsignedBigInt(inputAmount))
    let realizedFillParam = new ethereum.EventParam("realizedFill", ethereum.Value.fromUnsignedBigInt(realizedFill))
    let hurdleBuyAmtMinParam = new ethereum.EventParam("hurdleBuyAmtMin", ethereum.Value.fromUnsignedBigInt(hurdleBuyAmtMin))

    emitSwapEvent.parameters.push(recipientParam)
    emitSwapEvent.parameters.push(inputERC20Param)
    emitSwapEvent.parameters.push(targetERC20Param)
    emitSwapEvent.parameters.push(pairParam)
    emitSwapEvent.parameters.push(inputAmountParam)
    emitSwapEvent.parameters.push(realizedFillParam)
    emitSwapEvent.parameters.push(hurdleBuyAmtMinParam)

    return emitSwapEvent
}