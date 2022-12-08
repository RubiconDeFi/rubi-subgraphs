import { _ERC20 } from '../../../generated/RubiconMarket/_ERC20' 
import { Token } from '../../../generated/schema' 
import { BigInt, Address, BigDecimal } from '@graphprotocol/graph-ts'


export function fetchToken(tokenAddress: Address): Token {

    // attempt to load the token from the store
    let token = Token.load(tokenAddress)

    // if the token is null, create it
    if (token == null) {
        token = new Token(tokenAddress)
        token.address = tokenAddress.toHexString()

        // attempt to load the decimals from the contract
        let contract = _ERC20.bind(tokenAddress)

        // if the contract is null, set the decimals to 18
        if (contract == null) {

            token.decimals = BigInt.fromI32(18)

        } else {
            let decimalsResult = contract.try_decimals()
            if (decimalsResult.reverted) {
                token.decimals = BigInt.fromI32(18)
            } else {
                token.decimals = decimalsResult.value
            }
        }
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