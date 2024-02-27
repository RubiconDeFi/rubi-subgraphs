import { Pool, Token } from "../../../generated/schema"
import { toBigDecimal } from "./token"
import { ethereum, BigInt } from '@graphprotocol/graph-ts'

export function fetchPool(event: ethereum.Event, underlyingAsset: Token, underlyingBalance: BigInt, outstandingAmount: BigInt, totalSupply: BigInt, assetDecimals: BigInt, bathTokenDecimals: BigInt): Pool {

    // format the balances based on the decimals of the associated token
    let underlying_formatted = toBigDecimal(underlyingBalance, assetDecimals)
    let outstanding_formatted = toBigDecimal(outstandingAmount, assetDecimals)
    let shares_formatted = toBigDecimal(totalSupply, bathTokenDecimals)

    let pool = Pool.load(event.address)
    if (pool == null) {
        pool = new Pool(event.address)
        pool.asset = underlyingAsset.id
        pool.underlying = underlyingBalance
        pool.underlying_formatted = underlying_formatted
        pool.outstanding = outstandingAmount
        pool.outstanding_formatted = outstanding_formatted
        pool.shares = totalSupply
        pool.shares_formatted = shares_formatted
        pool.save()
    } else {
        pool.underlying = underlyingBalance
        pool.underlying_formatted = underlying_formatted
        pool.outstanding = outstandingAmount
        pool.outstanding_formatted = outstanding_formatted
        pool.shares = totalSupply
        pool.shares_formatted = shares_formatted
        pool.save()
    }
    return pool as Pool
}