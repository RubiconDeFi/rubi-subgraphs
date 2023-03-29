import { describe, test, beforeAll, afterAll, beforeEach, clearStore, afterEach, assert } from "matchstick-as/assembly/index"
import { logStore } from "matchstick-as/assembly/store";
import { handleSwap } from "../src/mappings/RubiconRouter"
import { handleOffer, handleTake, handleCancel, handleFee, handleDelete } from "../src/mappings/RubiconMarket"
import { store, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import { WETH, DAI, USER_ONE, USER_TWO, TXN_ONE, TXN_TWO, TXN_THREE, TXN_FOUR, TXN_FIVE } from "./constants"
import { createEmitOffer, createEmitTake, createEmitCancel, createEmitFee, createEmitDelete, createEmitSwap } from "./utils"

// export to allow for test coverage
export { handleOffer, handleTake, handleCancel, handleFee, handleDelete, handleSwap }

describe("hello defi cowboy 🦖", () => {
    
    afterEach(() => {
        clearStore()
    })
    
    test("can create offers from custom events", () => {

        // create an offer event
        let offerOne = createEmitOffer(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value 
            USER_ONE, // maker 
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(100), // pay_amt
            BigInt.fromI64(1000) // buy_amt
        )
        
        // handle the event
        handleOffer(offerOne)

        // check that an offer entity was created
        assert.entityCount("Offer", 1)

        // check the offer was properly created
        assert.fieldEquals("Offer", "0x01000000", "id", "0x01000000")
        assert.fieldEquals("Offer", "0x01000000", "pay_gem", "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1")
        assert.fieldEquals("Offer", "0x01000000", "buy_gem", "0x4200000000000000000000000000000000000006")
        assert.fieldEquals("Offer", "0x01000000", "pay_amt", "100")
        assert.fieldEquals("Offer", "0x01000000", "buy_amt", "1000")
        assert.fieldEquals("Offer", "0x01000000", "paid_amt", "0")
        assert.fieldEquals("Offer", "0x01000000", "bought_amt", "0")
        assert.fieldEquals("Offer", "0x01000000", "maker", "0xb0be5d911e3bd4ee2a8706cf1fac8d767a550497")
        assert.fieldEquals("Offer", "0x01000000", "price", "0.1")
        // TODO: determine how to check the boolean value
        // assert.booleanEquals()
    })

    test("can create trades from custom events", () => {

        // create an offer event
        let offerOne = createEmitOffer(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value 
            USER_ONE, // maker 
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(100), // pay_amt
            BigInt.fromI64(1000) // buy_amt
        )
        
        // handle the event
        handleOffer(offerOne)

        // create a trade event
        let takeOne = createEmitTake(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_TWO, // taker
            USER_ONE, // maker
            DAI, // pay_gem (take_gem)
            WETH, // buy_gem (give_gem)
            BigInt.fromI64(10), // take_amt (pay_amt)
            BigInt.fromI64(100) // give_amt (buy_amt)
        )

        // handle the event
        handleTake(takeOne)

        // check that a trade entity was created
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "id", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000")
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "offer", "0x01000000")
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "take_gem", "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1")
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "give_gem", "0x4200000000000000000000000000000000000006")
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "take_amt", "10")
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "give_amt", "100")

        // check that the offer entity was updated
        assert.fieldEquals("Offer", "0x01000000", "paid_amt", "10")
        assert.fieldEquals("Offer", "0x01000000", "bought_amt", "100")
    })

    test("can cancel offers from custom events", () => {

        // create an offer event
        let offerOne = createEmitOffer(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_ONE, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(100), // pay_amt
            BigInt.fromI64(1000) // buy_amt
        )

        // handle the event
        handleOffer(offerOne)

        // create a cancel event for the offer
        let cancelOne = createEmitCancel(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_ONE, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(100), // pay_amt
            BigInt.fromI64(1000) // buy_amt
        )

        // handle the event
        handleCancel(cancelOne)

        // check that the offer entity was updated
        assert.fieldEquals("Offer", "0x01000000", "open", "false")
    })

    test("can create fees from custom events", () => {

        // create an offer event
        let offerOne = createEmitOffer(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_ONE, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(100), // pay_amt
            BigInt.fromI64(1000) // buy_amt
        )

        // handle the event
        handleOffer(offerOne)

        // create a fee event
        let feeOne = createEmitFee(
            Bytes.fromI32(1), // the hypothetical offer id the fee is from 
            USER_TWO, // the taker
            USER_ONE, // a hypothetical taker pay maker fee scenario
            Bytes.fromI32(420), // filler pair value
            WETH, // buy_gem of the offer (what the taker is paying)
            BigInt.fromI64(1) // fee amount
        )

        // handle the event
        handleFee(feeOne)

        // check that a fee entity was created
        assert.fieldEquals("Fee", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "id", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000")
        assert.fieldEquals("Fee", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "offer", "0x01000000")
    })

    test("can delete offers from custom events", () => {

        // create an offer event
        let offerOne = createEmitOffer(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_ONE, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(100), // pay_amt
            BigInt.fromI64(1000) // buy_amt
        )

        // handle the event
        handleOffer(offerOne)

        // create a delete event for the offer
        let deleteOne = createEmitDelete(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_ONE, // maker
        )

        // handle the event
        handleDelete(deleteOne) 

        // check that the offer entity was updated
        assert.fieldEquals("Offer", "0x01000000", "open", "false")
    })

    test("can create swaps from custom events", () => {

        // create a swap event
        let swapOne = createEmitSwap(
            USER_ONE, // the recipient of the swap
            DAI, // the input token of the swap
            WETH, // the output token of the swap
            Bytes.fromI32(420), // filler pair value
            BigInt.fromI64(100), // the input amount of the swap
            BigInt.fromI64(1000), // the output amount of the swap
            BigInt.fromI64(900) // the slippage amount of the swap
        )

        // handle the event
        handleSwap(swapOne)

        // check that a swap entity was created
        assert.fieldEquals("Swap", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "id", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000")
        assert.fieldEquals("Swap", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "swapper", "0xb0be5d911e3bd4ee2a8706cf1fac8d767a550497")
        assert.fieldEquals("Swap", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "input_gem", "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1")
        assert.fieldEquals("Swap", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "output_gem", "0x4200000000000000000000000000000000000006")
        assert.fieldEquals("Swap", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "input_amt", "100")
        assert.fieldEquals("Swap", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "output_amt", "1000")
    })

    test("can we convert event metadata to be in the correct block, tx, and log order?", () => {

        // create an offer event
        let offerOne = createEmitOffer(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_ONE, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(100), // pay_amt
            BigInt.fromI64(1000) // buy_amt
        )

        // create a take event for the offer
        let takeOne = createEmitTake(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_ONE, // maker
            USER_TWO, // taker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(100), // pay_amt
            BigInt.fromI64(1000) // buy_amt
        )

        // update the offer event to use txn one, block one, and log one
        offerOne.block.number = BigInt.fromString("1")
        offerOne.transaction.hash = Address.fromString(TXN_ONE)
        offerOne.logIndex = BigInt.fromString("1")

        // update the take event to use txn two, block two, and log one
        takeOne.block.number = BigInt.fromString("2")
        takeOne.transaction.hash = Address.fromString(TXN_TWO)
        takeOne.logIndex = BigInt.fromString("1")

        // process the events
        handleOffer(offerOne)
        handleTake(takeOne)

        // check that the two transactions were properly created 
        assert.fieldEquals("Transaction", TXN_ONE, "id", TXN_ONE)
        assert.fieldEquals("Transaction", TXN_ONE, "block_number", "1")
        assert.fieldEquals("Transaction", TXN_TWO, "id", TXN_TWO)
        assert.fieldEquals("Transaction", TXN_TWO, "block_number", "2")
    })

    test("can we have multiple trades properly update an offer entity?", () => {

        // create an offer event
        let offerOne = createEmitOffer(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_ONE, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(100), // pay_amt
            BigInt.fromI64(1000) // buy_amt
        )

        // create a take event for the offer
        let takeOne = createEmitTake(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_TWO, // taker
            USER_ONE, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(10), // pay_amt
            BigInt.fromI64(100) // buy_amt
        )

        // create a take event for the offer
        let takeTwo = createEmitTake(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_TWO, // taker
            USER_ONE, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(20), // pay_amt
            BigInt.fromI64(200) // buy_amt
        )

        // update the event metadata to be in the correct block, tx, and log order
        offerOne.block.number = BigInt.fromString("1")
        offerOne.transaction.hash = Address.fromString(TXN_ONE)
        offerOne.logIndex = BigInt.fromString("1")
        takeOne.block.number = BigInt.fromString("2")
        takeOne.transaction.hash = Address.fromString(TXN_TWO)
        takeOne.logIndex = BigInt.fromString("1")
        takeTwo.block.number = BigInt.fromString("3")
        takeTwo.transaction.hash = Address.fromString(TXN_THREE)
        takeTwo.logIndex = BigInt.fromString("1")

        // process the events
        handleOffer(offerOne)
        handleTake(takeOne)
        handleTake(takeTwo)

        // check that the offer entity was properly updated
        assert.fieldEquals("Offer", "0x01000000", "id", "0x01000000")
        assert.fieldEquals("Offer", "0x01000000", "maker", USER_ONE.toLowerCase())
        assert.fieldEquals("Offer", "0x01000000", "pay_gem", DAI.toLowerCase())
        assert.fieldEquals("Offer", "0x01000000", "buy_gem", WETH.toLowerCase())
        assert.fieldEquals("Offer", "0x01000000", "pay_amt", "100")
        assert.fieldEquals("Offer", "0x01000000", "buy_amt", "1000")
        assert.fieldEquals("Offer", "0x01000000", "paid_amt", "30")
        assert.fieldEquals("Offer", "0x01000000", "bought_amt", "300")
        assert.fieldEquals("Offer", "0x01000000", "open", "true")

        // check that the two trades were properly created
        assert.fieldEquals("Take", "0x510e8308fe82836fd793336910ab01ff0242b24001", "id", "0x510e8308fe82836fd793336910ab01ff0242b24001") // txn two, log one
        assert.fieldEquals("Take", "0x510e8308fe82836fd793336910ab01ff0242b24001", "offer", "0x01000000")
        assert.fieldEquals("Take", "0x510e8308fe82836fd793336910ab01ff0242b24001", "taker", USER_TWO.toLowerCase())
        assert.fieldEquals("Take", "0x510e8308fe82836fd793336910ab01ff0242b24001", "take_gem", DAI.toLowerCase())
        assert.fieldEquals("Take", "0x510e8308fe82836fd793336910ab01ff0242b24001", "give_gem", WETH.toLowerCase())
        assert.fieldEquals("Take", "0x510e8308fe82836fd793336910ab01ff0242b24001", "take_amt", "10")
        assert.fieldEquals("Take", "0x510e8308fe82836fd793336910ab01ff0242b24001", "give_amt", "100")
        assert.fieldEquals("Take", "0x491e59c255c790d4e3a53cec2632524088f1aaa401", "id", "0x491e59c255c790d4e3a53cec2632524088f1aaa401") // txn three, log one
        assert.fieldEquals("Take", "0x491e59c255c790d4e3a53cec2632524088f1aaa401", "offer", "0x01000000")
        assert.fieldEquals("Take", "0x491e59c255c790d4e3a53cec2632524088f1aaa401", "taker", USER_TWO.toLowerCase())
        assert.fieldEquals("Take", "0x491e59c255c790d4e3a53cec2632524088f1aaa401", "take_gem", DAI.toLowerCase())
        assert.fieldEquals("Take", "0x491e59c255c790d4e3a53cec2632524088f1aaa401", "give_gem", WETH.toLowerCase())
        assert.fieldEquals("Take", "0x491e59c255c790d4e3a53cec2632524088f1aaa401", "take_amt", "20")
        assert.fieldEquals("Take", "0x491e59c255c790d4e3a53cec2632524088f1aaa401", "give_amt", "200")
    })

    test("can we have multiple trades that properly update the candle entities?", () => {

        // create an offer event
        let offerOne = createEmitOffer(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_ONE, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(100), // pay_amt
            BigInt.fromI64(200) // buy_amt
        )
        
        // create an offer event to buy weth at a higher price
        let offerTwo = createEmitOffer(
            Bytes.fromI32(2), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_ONE, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(1000), // pay_amt
            BigInt.fromI64(8000) // buy_amt
        )

        // create a take event for the offer
        let takeOne = createEmitTake(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_TWO, // taker
            USER_ONE, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(100), // pay_amt
            BigInt.fromI64(200) // buy_amt
        )

        // create a take event for the offer
        let takeTwo = createEmitTake(
            Bytes.fromI32(2), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_TWO, // taker
            USER_ONE, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(1000), // pay_amt
            BigInt.fromI64(8000) // buy_amt
        )

        // update the event metadata to be in the correct block, tx, and log order
        offerOne.block.number = BigInt.fromString("1")
        offerOne.block.timestamp = BigInt.fromString("14210151600")
        offerOne.transaction.hash = Address.fromString(TXN_ONE)
        offerOne.logIndex = BigInt.fromString("1")
        offerTwo.block.number = BigInt.fromString("2")
        offerTwo.transaction.hash = Address.fromString(TXN_TWO)
        offerTwo.block.timestamp = BigInt.fromString("14210151660")
        offerTwo.logIndex = BigInt.fromString("1")
        takeOne.block.number = BigInt.fromString("3")
        takeOne.transaction.hash = Address.fromString(TXN_THREE)
        takeOne.block.timestamp = BigInt.fromString("14210151720")
        takeOne.logIndex = BigInt.fromString("1")
        takeTwo.block.number = BigInt.fromString("4")
        takeTwo.transaction.hash = Address.fromString(TXN_FOUR)
        takeTwo.block.timestamp = BigInt.fromString("14210151780")
        takeTwo.logIndex = BigInt.fromString("1")

        // process the events
        handleOffer(offerOne)
        handleOffer(offerTwo)
        handleTake(takeOne)
        handleTake(takeTwo)

        // check that the candle entities were properly updated
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da116d41d0e", "id", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da116d41d0e")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da116d41d0e", "token0", "0x4200000000000000000000000000000000000006")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da116d41d0e", "token1", "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da116d41d0e", "open", "0x491e59c255c790d4e3a53cec2632524088f1aaa401")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da116d41d0e", "high", "0x491e59c255c790d4e3a53cec2632524088f1aaa401")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da116d41d0e", "low", "0x491e59c255c790d4e3a53cec2632524088f1aaa401")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da116d41d0e", "close", "0x491e59c255c790d4e3a53cec2632524088f1aaa401")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da116d41d0e", "high_ratio", "2")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da116d41d0e", "low_ratio", "2")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da116d41d0e", "open_timestamp", "14210151720")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da116d41d0e", "close_timestamp", "14210151720")

        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da117d41d0e", "id", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da117d41d0e")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da117d41d0e", "token0", "0x4200000000000000000000000000000000000006")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da117d41d0e", "token1", "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da117d41d0e", "open", "0x6887246668a3b87f54deb3b94ba47a6f63f3298501")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da117d41d0e", "high", "0x6887246668a3b87f54deb3b94ba47a6f63f3298501")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da117d41d0e", "low", "0x6887246668a3b87f54deb3b94ba47a6f63f3298501")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da117d41d0e", "close", "0x6887246668a3b87f54deb3b94ba47a6f63f3298501")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da117d41d0e", "high_ratio", "8")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da117d41d0e", "low_ratio", "8")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da117d41d0e", "open_timestamp", "14210151780")
        assert.fieldEquals("CandleOneMinute", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da117d41d0e", "close_timestamp", "14210151780")

        assert.fieldEquals("CandleOneHour", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da1003b3c", "id", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da1003b3c")
        assert.fieldEquals("CandleOneHour", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da1003b3c", "token0", "0x4200000000000000000000000000000000000006")
        assert.fieldEquals("CandleOneHour", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da1003b3c", "token1", "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1")
        assert.fieldEquals("CandleOneHour", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da1003b3c", "open", "0x491e59c255c790d4e3a53cec2632524088f1aaa401")
        assert.fieldEquals("CandleOneHour", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da1003b3c", "high", "0x6887246668a3b87f54deb3b94ba47a6f63f3298501")
        assert.fieldEquals("CandleOneHour", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da1003b3c", "low", "0x491e59c255c790d4e3a53cec2632524088f1aaa401")
        assert.fieldEquals("CandleOneHour", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da1003b3c", "close", "0x6887246668a3b87f54deb3b94ba47a6f63f3298501")
        assert.fieldEquals("CandleOneHour", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da1003b3c", "high_ratio", "8")
        assert.fieldEquals("CandleOneHour", "0x4200000000000000000000000000000000000006da10009cbd5d07dd0cecc66161fc93d7c9000da1003b3c", "low_ratio", "2")
    })

    test('check that we are properly creating transaction and user entities', () => {

        // create an offer event
        let offerOne = createEmitOffer(
            Bytes.fromI32(1), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_ONE, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(100), // pay_amt
            BigInt.fromI64(200) // buy_amt
        )
        
        // create an offer event to buy weth at a higher price
        let offerTwo = createEmitOffer(
            Bytes.fromI32(2), // offer id
            Bytes.fromI32(420), // filler pair value
            USER_TWO, // maker
            DAI, // pay_gem
            WETH, // buy_gem
            BigInt.fromI64(1000), // pay_amt
            BigInt.fromI64(8000) // buy_amt
        )

        // update the event metadata to be in the correct block, tx, and log order
        offerOne.block.number = BigInt.fromString("1")
        offerOne.block.timestamp = BigInt.fromString("14210151600")
        offerOne.transaction.hash = Address.fromString(TXN_ONE)
        offerOne.logIndex = BigInt.fromString("1")
        offerTwo.block.number = BigInt.fromString("2")
        offerTwo.transaction.hash = Address.fromString(TXN_TWO)
        offerTwo.block.timestamp = BigInt.fromString("14210151660")
        offerTwo.logIndex = BigInt.fromString("1")

        // process the offer events
        handleOffer(offerOne)
        handleOffer(offerTwo)

        // check that the user entities were created
        assert.fieldEquals("User", "0xb0be5d911e3bd4ee2a8706cf1fac8d767a550497", "id", "0xb0be5d911e3bd4ee2a8706cf1fac8d767a550497")
        assert.fieldEquals("User", "0x9cbd5d07dd0cecc66161fc93d7c9000da1da1000", "id", "0x9cbd5d07dd0cecc66161fc93d7c9000da1da1000")

        // check that the transaction entities were created
        assert.fieldEquals("Transaction", "0x764ef8aba8e67af506fa65bad1342bf34571ec3e", "id", "0x764ef8aba8e67af506fa65bad1342bf34571ec3e")
        assert.fieldEquals("Transaction", "0x764ef8aba8e67af506fa65bad1342bf34571ec3e", "block_index", "1")
        assert.fieldEquals("Transaction", "0x764ef8aba8e67af506fa65bad1342bf34571ec3e", "block_number", "1")
        assert.fieldEquals("Transaction", "0x764ef8aba8e67af506fa65bad1342bf34571ec3e", "timestamp", "14210151600")

        assert.fieldEquals("Transaction", "0x510e8308fe82836fd793336910ab01ff0242b240", "id", "0x510e8308fe82836fd793336910ab01ff0242b240")
        assert.fieldEquals("Transaction", "0x510e8308fe82836fd793336910ab01ff0242b240", "block_index", "1")
        assert.fieldEquals("Transaction", "0x510e8308fe82836fd793336910ab01ff0242b240", "block_number", "2")
        assert.fieldEquals("Transaction", "0x510e8308fe82836fd793336910ab01ff0242b240", "timestamp", "14210151660")
    })
})