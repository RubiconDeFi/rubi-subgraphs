import { Address } from "@graphprotocol/graph-ts";
import { PoolShape } from "../mappings/common";

export const pools = new Map<string, PoolShape>();

// WETH > USDC
pools.set(Address.fromString("0xd0b53d9277642d899df5c87a3966a349a798f224",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913")
})

// WETH > USDbC
pools.set(Address.fromString("0x4c36388be6f416a29c8d8eee81c771ce6be14b18",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA")
})

// WETH < cbETH
pools.set(Address.fromString("0x10648ba41b8565907cfa1496765fa4d95390aa0d",).toHexString(), {
  token0: Address.fromString("0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})

// USDC > USDbC
pools.set(Address.fromString("0x06959273e9a65433de71f5a452d529544e07ddd0",).toHexString(), {
  token0: Address.fromString("0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"),
  token1: Address.fromString("0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca")
})

// BALD > WETH
pools.set(Address.fromString("0x9e37cb775a047ae99fc5a24dded834127c4180cd",).toHexString(), {
  token0: Address.fromString("0x27D2DECb4bFC9C76F0309b8E88dec3a601Fe25a8"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})

// DEGEN < WETH
pools.set(Address.fromString("0xc9034c3e7f58003e6ae0c8438e7c8f4598d5acaa",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed")
})

// ELONrwa < WETH
pools.set(Address.fromString("0xd56f086e7b796b313d49f2bc926fac4bdd2a2b0b",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xAa6Cccdce193698D33deb9ffd4be74eAa74c4898")
})

// TOSHI < WETH
pools.set(Address.fromString("0x4b0aaf3ebb163dd45f663b38b6d93f6093ebc2d3",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4")
})

// BRETT < WETH
pools.set(Address.fromString("0xba3f945812a83471d709bce9c3ca699a19fb46f7",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x532f27101965dd16442E59d40670FaF5eBB142E4")
})

// MOCHI < WETH
pools.set(Address.fromString("0x16f9a294469b6a7b2e662d59a8ed0b44accb5684",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF6e932Ca12afa26665dC4dDE7e27be02A7c02e50")
})

// MOCHI < USDC
pools.set(Address.fromString("0xfcc89a1f250d76de198767d33e1ca9138a7fb54b",).toHexString(), {
  token0: Address.fromString("0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"),
  token1: Address.fromString("0xF6e932Ca12afa26665dC4dDE7e27be02A7c02e50")
})

// NORMIE > USDbC
pools.set(Address.fromString("0xbe9e5df1c7b453bdf9730f881d7b78ff12e4a653",).toHexString(), {
  token0: Address.fromString("0x7F12d13B34F5F4f0a9449c16Bcd42f0da47AF200"),
  token1: Address.fromString("0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA")
})

// NORMIE < WETH
pools.set(Address.fromString("0x67ab0e84c7f9e399a67037f94a08e5c664dc1c66",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7F12d13B34F5F4f0a9449c16Bcd42f0da47AF200")
})
