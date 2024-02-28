import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import { ZERO_BD, ZERO_BI } from "../constants"
import { fetchToken } from "../entities/token"
import { HourVolume, DayVolume, TokenHourData, TokenDayData, UserPairVolume, Token } from "../../../generated/schema"

export function fetchHourVolume(event: ethereum.Event): HourVolume {

    // create the entity id 
    let timestamp = event.block.timestamp.toI32()
    let hourID = timestamp / 3600

    // load the entity
    let hourVolume = HourVolume.load(hourID.toString())

    // if the entity doesn't exist, create it
    if (hourVolume == null) {
        hourVolume = new HourVolume(hourID.toString())
        hourVolume.hourStartUnix = event.block.timestamp
        hourVolume.volume_usd = ZERO_BD
        hourVolume.save()
    } 
    return hourVolume as HourVolume
}

export function fetchDayVolume(event: ethereum.Event): DayVolume {

    // create the entity id
    let timestamp = event.block.timestamp.toI32()
    let dayID = timestamp / 86400

    // load the entity
    let dayVolume = DayVolume.load(dayID.toString())

    // if the entity doesn't exist, create it
    if (dayVolume == null) {
        dayVolume = new DayVolume(dayID.toString())
        dayVolume.dayStartUnix = event.block.timestamp
        dayVolume.volume_usd = ZERO_BD
        dayVolume.save()
    }
    return dayVolume as DayVolume
}

export function fetchUserPairVolume(user: Bytes, tokenZero: Bytes, tokenOne: Bytes): UserPairVolume {

    let token0 = tokenZero.toHexString() < tokenOne.toHexString() ? tokenZero : tokenOne

    // token1 = higher alphabetically token
    let token1 = tokenZero.toHexString() > tokenOne.toHexString() ? tokenZero : tokenOne

    let pairID = user.concat(token0).concat(token1)

    // load the entity
    let userPairVolume = UserPairVolume.load(pairID)

    // if the entity doesn't exist, create it
    if (userPairVolume == null) {
        userPairVolume = new UserPairVolume(pairID)
        userPairVolume.token0 = token0
        userPairVolume.token1 = token1
        userPairVolume.total_volume_token0 = ZERO_BI
        userPairVolume.total_volume_token1 = ZERO_BI
        userPairVolume.total_volume_usd = ZERO_BD
        userPairVolume.save()
    }
    return userPairVolume as UserPairVolume;
}


export function fetchTokenHourData(asset: Address, event: ethereum.Event): TokenHourData {

    // create the entity id
    let timestamp = event.block.timestamp.toI32()
    let hourID = timestamp / 3600
    let tokenHourID = asset.concat(Bytes.fromI32(hourID))

    // load the entity
    let tokenHourData = TokenHourData.load(event.address.concat(Bytes.fromI32(hourID)))

    // if the entity doesn't exist, create it
    if (tokenHourData == null) {

        // fetch the token entity
        let token = fetchToken(asset)

        tokenHourData = new TokenHourData(tokenHourID)
        tokenHourData.token = token.id
        tokenHourData.hour_start_unix = event.block.timestamp
        tokenHourData.total_volume = ZERO_BI
        tokenHourData.total_volume_usd = ZERO_BD
        tokenHourData.save()
    }
    return tokenHourData as TokenHourData
}

export function fetchTokenDayData(asset: Address, event: ethereum.Event): TokenDayData {

    // create the entity id
    let timestamp = event.block.timestamp.toI32()
    let dayID = timestamp / 86400
    let tokenDayID = asset.concat(Bytes.fromI32(dayID))

    // load the entity
    let tokenDayData = TokenDayData.load(event.address.concat(Bytes.fromI32(dayID)))

    // if the entity doesn't exist, create it
    if (tokenDayData == null) {

        // fetch the token entity
        let token = fetchToken(asset)

        tokenDayData = new TokenDayData(tokenDayID)
        tokenDayData.token = token.id
        tokenDayData.day_start_unix = event.block.timestamp
        tokenDayData.total_volume = ZERO_BI
        tokenDayData.total_volume_usd = ZERO_BD
        tokenDayData.save()
    }
    return tokenDayData as TokenDayData
}

/*
type TokenHourData @entity {
    " the token address and the hour unix timestamp divided by 3600 "
    id: Bytes!
    " the start of the hour in unix timestamp "
    hour_start_unix: BigInt!
    " the total volume of the token in the token denomination "
    total_volume: BigInt!
    " the total volume of the token in USD "
    total_volume_usd: BigDecimal!
}

type TokenDayData @entity {
    " the token address and the day unix timestamp divided by 86400 "
    id: Bytes!
    " the start of the day in unix timestamp "
    day_start_unix: BigInt!
    " the total volume of the token in the token denomination "
    total_volume: BigInt!
    " the total volume of the token in USD "
    total_volume_usd: BigDecimal!
}
*/