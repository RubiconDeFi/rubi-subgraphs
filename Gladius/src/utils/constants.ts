import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts';

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)
export let BI_9 = BigInt.fromI32(9)

export const FILL_SIGNATURE = "0x78ad7ec0e9f89e74012afa58738b6b661c024cb0fd185ee2f616c0a28924bd66";
export const TRANSFER_SIGNATURE = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
