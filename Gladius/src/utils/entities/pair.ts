import { Bytes } from "@graphprotocol/graph-ts";
import { Pair } from "../../../generated/schema"

export function getPair(tokenZero: Bytes, tokenOne: Bytes): Pair {

    // token0 = lower alphabetically token
    let token0 = tokenZero.toHexString() < tokenOne.toHexString() ? tokenZero : tokenOne

    // token1 = higher alphabetically token
    let token1 = tokenZero.toHexString() > tokenOne.toHexString() ? tokenZero : tokenOne

    let pairID = token0.concat(token1)

    let pair = Pair.load(pairID)
    if (pair == null) {
        pair = new Pair(pairID)
        pair.token0 = token0
        pair.token1 = token1
        pair.latestPrices = []
        pair.save()
    }

    return pair as Pair
}