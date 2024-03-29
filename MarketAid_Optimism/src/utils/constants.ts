import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')
export const WETH = Address.fromString('0x4200000000000000000000000000000000000006')

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let NEG_ONE_BI = BigInt.fromI32(-1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)
export let BI_9 = BigInt.fromI32(9)
export let BI_6 = BigInt.fromI32(6)