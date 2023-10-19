import { describe, test, clearStore, afterEach, assert } from "matchstick-as/assembly/index"
import { handleTake } from "../src/mappings/ExclusiveDutchOrderReactor"
import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import { WETH, DAI, USER_ONE, USER_TWO, TXN_ONE, TXN_TWO } from "./constants"
import { createEmitTake } from "./utils"

// export to allow for test coverage
export { handleTake }

describe("hello defi cowboy 🦖", () => {
    
    afterEach(() => {
        clearStore()
    })

    test("can create trades from custom events", () => {

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

        // update the take one event transaction from metadata
        takeOne.transaction.from = Address.fromString(USER_TWO)

        // handle the event
        handleTake(takeOne)

        // check that a trade entity was created
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "id", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000")
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "offer", "0x01000000")
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "take_gem", "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1")
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "give_gem", "0x4200000000000000000000000000000000000006")
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "take_amt", "10")
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "give_amt", "100")
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "taker", USER_TWO.toLowerCase())
        assert.fieldEquals("Take", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a01000000", "from_address", USER_TWO.toLowerCase())

        // check that the offer entity was updated
        assert.fieldEquals("Offer", "0x01000000", "paid_amt", "10")
        assert.fieldEquals("Offer", "0x01000000", "bought_amt", "100")
    })

    test("can we convert event metadata to be in the correct block, tx, and log order?", () => {

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

        // update the take event to use txn two, block two, and log one
        takeOne.block.number = BigInt.fromString("2")
        takeOne.transaction.hash = Address.fromString(TXN_TWO)
        takeOne.logIndex = BigInt.fromString("1")

        // process the events
        handleTake(takeOne)

        // check that the two transactions were properly created 
        assert.fieldEquals("Transaction", TXN_ONE, "id", TXN_ONE)
        assert.fieldEquals("Transaction", TXN_ONE, "block_number", "1")
        assert.fieldEquals("Transaction", TXN_TWO, "id", TXN_TWO)
        assert.fieldEquals("Transaction", TXN_TWO, "block_number", "2")
    })
})