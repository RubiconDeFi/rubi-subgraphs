import { _ERC20 } from '../../../generated/GladiusOrderReactor/_ERC20' 
import { Token } from '../../../generated/schema' 
import { ZERO_BI, ZERO_BD } from '../constants'
import { BigInt, Address, BigDecimal } from '@graphprotocol/graph-ts'


export function fetchToken(tokenAddress: Address): Token {

    // attempt to load the token from the store
    let token = Token.load(tokenAddress)

    // if the token is null, create it
    if (token == null) {
        token = new Token(tokenAddress)
        token.address = tokenAddress.toHexString()
        token.total_volume = ZERO_BI
        token.total_volume_usd = ZERO_BD
        token.currentPrice = ZERO_BD
        token.save()
    }
    return token as Token
}

export function toBigDecimal(quantity: BigInt, decimals: BigInt): BigDecimal {
    return quantity.divDecimal(
      BigInt.fromI32(10)
        .pow(decimals.toU32() as u8)
        .toBigDecimal(),
    );
}