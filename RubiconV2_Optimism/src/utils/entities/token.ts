import { ERC20 } from '../../../generated/RubiconMarket/ERC20'
import { ERC20SymbolBytes } from '../../../generated/RubiconMarket/ERC20SymbolBytes'
import { ERC20NameBytes } from '../../../generated/RubiconMarket/ERC20NameBytes'
import { Token } from '../../../generated/schema'
import { Address, BigInt } from '@graphprotocol/graph-ts'

function fetchTokenSymbol(tokenAddress: Address): string | null {

    let contract = ERC20.bind(tokenAddress)
    let contractSymbolBytes = ERC20SymbolBytes.bind(tokenAddress)

    // try to get the symbol from the contract
    let symbolValue = contract.try_symbol()
    if (!symbolValue.reverted) {
        return symbolValue.value
    }

    // try to get the symbol from the contract bytes
    let symbolBytesValue = contractSymbolBytes.try_symbol()
    if (!symbolBytesValue.reverted) {
        return symbolBytesValue.value.toString()
    }

    return null
}

function fetchTokenName(tokenAddress: Address): string | null {

    let contract = ERC20.bind(tokenAddress)
    let contractNameBytes = ERC20NameBytes.bind(tokenAddress)

    // try to get the name from the contract
    let nameValue = contract.try_name()
    if (!nameValue.reverted) {
        return nameValue.value
    }

    // try to get the name from the contract bytes
    let nameBytesValue = contractNameBytes.try_name()
    if (!nameBytesValue.reverted) {
        return nameBytesValue.value.toString()
    }

    return null
}

function fetchTokenDecimal(tokenAddress: Address): BigInt | null {

    let contract = ERC20.bind(tokenAddress)

    // try to get the decimal from the contract
    let decimalValue = contract.try_decimals()
    if (!decimalValue.reverted) {
        return BigInt.fromString(decimalValue.value.toString())
    }

    return null
}

export function getToken(tokenAddress: Address): Token { 

    let token = Token.load(tokenAddress)

    if (!token) {
        token = new Token(tokenAddress)
        token.address = tokenAddress.toHexString()
        token.symbol = fetchTokenSymbol(tokenAddress)
        token.name = fetchTokenName(tokenAddress)
        token.decimals = fetchTokenDecimal(tokenAddress)
        token.save()
    }

    return token as Token
}