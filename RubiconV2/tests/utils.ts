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

/*
event emitOffer(
    bytes32 indexed id,
    bytes32 indexed pair,
    address indexed maker, 
    ERC20 pay_gem, 
    ERC20 buy_gem, 
    uint128 pay_amt,
    uint128 buy_amt
);

    event emitTake(
    bytes32 indexed id,
    bytes32 indexed pair,
    address indexed taker,
    address maker,
    ERC20 pay_gem,
    ERC20 buy_gem,
    uint128 take_amt, 
    uint128 give_amt
);

    event emitCancel(
    bytes32 indexed id,
    bytes32 indexed pair,
    address indexed maker,
    ERC20 pay_gem,
    ERC20 buy_gem,
    uint128 pay_amt,
    uint128 buy_amt
);

    event emitFee(
    bytes32 indexed id,
    address indexed taker,
    address indexed feeTo,
    bytes32 pair, 
    ERC20 asset,
    uint256 feeAmt
);

event emitDelete(
    bytes32 indexed id, 
    bytes32 indexed pair, 
    address indexed maker
);

event emitSwap(
    address indexed recipient,
    address indexed inputERC20,
    address indexed targetERC20,
    bytes32 pair, 
    uint256 inputAmount,
    uint256 realizedFill,
    uint256 hurdleBuyAmtMin
);

*/