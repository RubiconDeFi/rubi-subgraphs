import { Address } from "@graphprotocol/graph-ts"

export const feedToTokenConfig = new Map<string, Address>();

// OP
// ETH / USD
feedToTokenConfig.set(
  Address.fromString("0x02f5E9e9dcc66ba6392f6904D5Fcf8625d9B19C9").toHexString(),
  Address.fromString("0x4200000000000000000000000000000000000006"),
)

// ARB
// ETH / USD
feedToTokenConfig.set(
  Address.fromString("0x3607e46698d218B3a5Cae44bF381475C0a5e2ca7").toHexString(),
  Address.fromString("0x82aF49447D8a07e3bd95BD0d56f35241523fBab1") // WETH
)

// MAINNET
// ETH / USD
feedToTokenConfig.set(
  Address.fromString("0xE62B71cf983019BFf55bC83B48601ce8419650CC").toHexString(),
  Address.fromString("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")
)

// BASE
// ETH / USD
feedToTokenConfig.set(
  Address.fromString("0x57d2d46Fc7ff2A7142d479F2f59e1E3F95447077").toHexString(),
  Address.fromString("0x4200000000000000000000000000000000000006")
)

feedToTokenConfig.set(
  Address.fromString("0xd30e2101a97dcbAeBCBC04F14C3f624E67A35165").toHexString(),
  Address.fromString("0xc556bAe1e86B2aE9c22eA5E036b07E55E7596074")
)

export const decimals = new Map<string, number>();
