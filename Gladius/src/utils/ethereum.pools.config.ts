import { Address } from "@graphprotocol/graph-ts";

class PoolShape {
  token0: Address;
  token1: Address;
}

export const pools = new Map<string, PoolShape>();

// WETH / USDC
pools.set(Address.fromString("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",).toHexString(), {
  token0: Address.fromString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
  token1: Address.fromString("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")
})

// WETH / USDT
pools.set(Address.fromString("0x11b815efb8f581194ae79006d24e0d814b7697f6",).toHexString(), {
  token0: Address.fromString("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"),
  token1: Address.fromString("0xdac17f958d2ee523a2206206994597c13d831ec7")
})

// DAI / WETH
pools.set(Address.fromString("0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8",).toHexString(), {
  token0: Address.fromString("0x6b175474e89094c44da98b954eedeac495271d0f"),
  token1: Address.fromString("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")
})

// WBTC / WETH
pools.set(Address.fromString("0x4585fe77225b41b697c938b018e2ac67ac5a20c0",).toHexString(), {
  token0: Address.fromString("0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"),
  token1: Address.fromString("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")
})

// WBTC / USDC
pools.set(Address.fromString("0x99ac8ca7087fa4a2a1fb6357269965a2014abc35",).toHexString(), {
  token0: Address.fromString("0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"),
  token1: Address.fromString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")
})

// WBTC / USDT
pools.set(Address.fromString("0x9db9e0e53058c89e5b94e29621a205198648425b",).toHexString(), {
  token0: Address.fromString("0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"),
  token1: Address.fromString("0xdac17f958d2ee523a2206206994597c13d831ec7")
})

// WBTC / DAI
pools.set(Address.fromString("0x391e8501b626c623d39474afca6f9e46c2686649",).toHexString(), {
  token0: Address.fromString("0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"),
  token1: Address.fromString("0x6b175474e89094c44da98b954eedeac495271d0f")
})

// USDC / USDT
pools.set(Address.fromString("0x3416cf6c708da44db2624d63ea0aaef7113527c6",).toHexString(), {
  token0: Address.fromString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
  token1: Address.fromString("0xdac17f958d2ee523a2206206994597c13d831ec7")
})

// DAI / USDC
pools.set(Address.fromString("0x5777d92f208679db4b9778590fa3cab3ac9e2168",).toHexString(), {
  token0: Address.fromString("0x6b175474e89094c44da98b954eedeac495271d0f"),
  token1: Address.fromString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")
})

// DAI / USDT
pools.set(Address.fromString("0x48da0965ab2d2cbf1c17c09cfb5cbe67ad5b1406",).toHexString(), {
  token0: Address.fromString("0x6b175474e89094c44da98b954eedeac495271d0f"),
  token1: Address.fromString("0xdac17f958d2ee523a2206206994597c13d831ec7")
})
