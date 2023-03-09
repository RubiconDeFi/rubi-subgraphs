import { describe, test, beforeAll, afterAll, beforeEach, clearStore, afterEach, assert } from "matchstick-as/assembly/index"
import { logStore } from "matchstick-as/assembly/store";
import { handleOffer } from "../src/mappings/RubiconMarket"
import { store, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { WETH, DAI, USER_ONE, USER_TWO } from "./constants"
import { createEmitOffer } from "./utils"

describe("mock RubiconMarket events 🦖", () => {
    
    afterEach(() => {
        clearStore()
    })
    
    test("can create offers from custom events", () => {

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
        // TODO: determine how to check the boolean value
        // assert.booleanEquals()
    })
})