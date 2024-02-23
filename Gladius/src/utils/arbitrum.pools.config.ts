import { Address } from "@graphprotocol/graph-ts";

class PoolShape {
  token0: Address;
  token1: Address;
}

export const pools = new Map<string, PoolShape>();

// USDC / WETH
pools.set(Address.fromString("0xc6962004f452be9203591991d15f6b388e09e8d0",).toHexString(), {
  token0: Address.fromString("0xaf88d065e77c8cc2239327c5edb3a432268e5831"),
  token1: Address.fromString("0x82af49447d8a07e3bd95bd0d56f35241523fbab1")
})

// WETH / USDC.e
pools.set(Address.fromString("0x84652bb2539513baf36e225c930fdd8eaa63ce27",).toHexString(), {
  token0: Address.fromString("0x82af49447d8a07e3bd95bd0d56f35241523fbab1"),
  token1: Address.fromString("0xff970a61a04b1ca14834a43f5de4533ebddb5cc8")
})

// WETH / USDC.e
pools.set(Address.fromString("0xc31e54c7a869b9fcbecc14363cf510d1c41fa443",).toHexString(), {
  token0: Address.fromString("0x82af49447d8a07e3bd95bd0d56f35241523fbab1"),
  token1: Address.fromString("0xff970a61a04b1ca14834a43f5de4533ebddb5cc8")
})


// WETH / DAI
pools.set(Address.fromString("0xa961f0473da4864c5ed28e00fcc53a3aab056c1b",).toHexString(), {
  token0: Address.fromString("0x82af49447d8a07e3bd95bd0d56f35241523fbab1"),
  token1: Address.fromString("0xda10009cbd5d07dd0cecc66161fc93d7c9000da1")
})

// WETH / USDT
pools.set(Address.fromString("0x641c00a822e8b671738d32a431a4fb6074e5c79d",).toHexString(), {
  token0: Address.fromString("0x82af49447d8a07e3bd95bd0d56f35241523fbab1"),
  token1: Address.fromString("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9")
})
// WBTC / WETH
pools.set(Address.fromString("0x2f5e87c9312fa29aed5c179e456625d79015299c",).toHexString(), {
  token0: Address.fromString("0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f"),
  token1: Address.fromString("0x82af49447d8a07e3bd95bd0d56f35241523fbab1")
})
// WBTC / USDC.e
pools.set(Address.fromString("0xac70bd92f89e6739b3a08db9b6081a923912f73d",).toHexString(), {
  token0: Address.fromString("0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f"),
  token1: Address.fromString("0xff970a61a04b1ca14834a43f5de4533ebddb5cc8")
})

// WBTC / DAI
// WBTC / USDT
// ARB / WETH
pools.set(Address.fromString("0xc6f780497a95e246eb9449f5e4770916dcd6396a",).toHexString(), {
  token0: Address.fromString("0x912ce59144191c1204e64559fe8253a0e49e6548"),
  token1: Address.fromString("0x82af49447d8a07e3bd95bd0d56f35241523fbab1")
})
// ARB / USDC.e
pools.set(Address.fromString("0xcda53b1f66614552f834ceef361a8d12a0b8dad8",).toHexString(), {
  token0: Address.fromString("0x912ce59144191c1204e64559fe8253a0e49e6548"),
  token1: Address.fromString("0xff970a61a04b1ca14834a43f5de4533ebddb5cc8")
})
// ARB / USDC
pools.set(Address.fromString("0xb0f6ca40411360c03d41c5ffc5f179b8403cdcf8",).toHexString(), {
  token0: Address.fromString("0x912ce59144191c1204e64559fe8253a0e49e6548"),
  token1: Address.fromString("0xaf88d065e77c8cc2239327c5edb3a432268e5831")
})

// ARB / USDT
// ARB / DAI
// USDC / USDT
pools.set(Address.fromString("0xa17afcab059f3c6751f5b64347b5a503c3291868",).toHexString(), {
  token0: Address.fromString("0xaf88d065e77c8cc2239327c5edb3a432268e5831"),
  token1: Address.fromString("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9")
})
// USDT / USDC.e
pools.set(Address.fromString("0x8c9d230d45d6cfee39a6680fb7cb7e8de7ea8e71",).toHexString(), {
  token0: Address.fromString("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"),
  token1: Address.fromString("0xff970a61a04b1ca14834a43f5de4533ebddb5cc8")
})


// USDC / DAI
// USDT / DAI


// USDC / USDC.e
pools.set(Address.fromString("0xc86eb7b85807020b4548ee05b54bfc956eebbfcd",).toHexString(), {
  token0: Address.fromString("0xaf88d065e77c8cc2239327c5edb3a432268e5831"),
  token1: Address.fromString("0xff970a61a04b1ca14834a43f5de4533ebddb5cc8")
})
