import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import { ZERO_BD, ZERO_BI } from "../constants"
import { Pool } from "../../../generated/schema"
import { fetchToken } from "../entities/token"
import { PoolHourData, PoolDayData } from "../../../generated/schema"

// this is a helper function to get the pool entity given just its address and underlying asset
export function getPool(assetAddress: Address, poolAddress: Address): Pool {

    // load the entity
    let pool = Pool.load(poolAddress)

    // if the entity doesn't exist, create it
    if (pool == null) {

        // load in the token entity of the underlying asset
        let asset = fetchToken(assetAddress)

        pool = new Pool(poolAddress)
        pool.asset = asset.id
        pool.underlying = ZERO_BI
        pool.underlying_formatted = ZERO_BD
        pool.outstanding = ZERO_BI
        pool.outstanding_formatted = ZERO_BD
        pool.shares = ZERO_BI
        pool.shares_formatted = ZERO_BD
        pool.save()
    }
    return pool as Pool
}

export function fetchPoolHourData(asset: Address, event: ethereum.Event): PoolHourData {

    // create the entity id
    let timestamp = event.block.timestamp.toI32()
    let hourID = timestamp / 3600
    let poolHourID = asset.concat(Bytes.fromI32(hourID))

    // load the entity
    let poolHourData = PoolHourData.load(event.address.concat(Bytes.fromI32(hourID)))

    // if the entity doesn't exist, create it
    if (poolHourData == null) {

        // fetch the pool entity 
        let pool = getPool(asset, event.address)

        poolHourData = new PoolHourData(poolHourID)
        poolHourData.pool = pool.id
        poolHourData.hour_start_unix = event.block.timestamp
        poolHourData.total_deposit = ZERO_BI
        poolHourData.total_deposit_usd = ZERO_BD
        poolHourData.total_withdrawal = ZERO_BI
        poolHourData.total_withdrawal_usd = ZERO_BD
        poolHourData.save()
    }
    return poolHourData as PoolHourData
}

export function fetchPoolDayData(asset: Address, event: ethereum.Event): PoolDayData {

    // create the entity id
    let timestamp = event.block.timestamp.toI32()
    let dayID = timestamp / 86400
    let poolDayID = asset.concat(Bytes.fromI32(dayID))

    // load the entity
    let poolDayData = PoolDayData.load(event.address.concat(Bytes.fromI32(dayID)))

    // if the entity doesn't exist, create it
    if (poolDayData == null) {

        // fetch the pool entity
        let pool = getPool(asset, event.address)

        poolDayData = new PoolDayData(poolDayID)
        poolDayData.pool = pool.id
        poolDayData.day_start_unix = event.block.timestamp
        poolDayData.total_deposit = ZERO_BI
        poolDayData.total_deposit_usd = ZERO_BD
        poolDayData.total_withdrawal = ZERO_BI
        poolDayData.total_withdrawal_usd = ZERO_BD
        poolDayData.save()
    }
    return poolDayData as PoolDayData
}