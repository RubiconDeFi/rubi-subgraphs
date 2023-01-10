import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)
export let BI_9 = BigInt.fromI32(9)
export let BI_6 = BigInt.fromI32(6)

// hardcoded erc20s for optimism 
// TODO: this should be dynamic based upon what network we are on 
export const WETH = Address.fromString('0x4200000000000000000000000000000000000006')
export const USDC = Address.fromString('0x7F5c764cBc14f9669B88837ca1490cCa17c31607')
export const DAI = Address.fromString('0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1')
export const USDT = Address.fromString('0x94b008aA00579c1307B0EF2c499aD98a8ce58e58')
export const USDC_DECIMALS = BigInt.fromI32(6)
export const DAI_DECIMALS = BigInt.fromI32(18)
export const USDT_DECIMALS = BigInt.fromI32(6) 