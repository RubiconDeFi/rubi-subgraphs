import { Address } from "@graphprotocol/graph-ts";

class PoolShape {
  token0: Address;
  token1: Address;
}

export const pools = new Map<string, PoolShape>();

// WETH / USDC
pools.set(Address.fromString("0xc6962004f452be9203591991d15f6b388e09e8d0",).toHexString(), {
  token0: Address.fromString("0x82af49447d8a07e3bd95bd0d56f35241523fbab1"),
  token1: Address.fromString("0xaf88d065e77c8cc2239327c5edb3a432268e5831")
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

// USDC / WBTC
pools.set(Address.fromString("0x0e4831319a50228b9e450861297ab92dee15b44f",).toHexString(), {
  token0: Address.fromString("0xaf88d065e77c8cc2239327c5edb3a432268e5831"),
  token1: Address.fromString("0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f")
})

// WBTC / USDC.e
pools.set(Address.fromString("0xac70bd92f89e6739b3a08db9b6081a923912f73d",).toHexString(), {
  token0: Address.fromString("0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f"),
  token1: Address.fromString("0xff970a61a04b1ca14834a43f5de4533ebddb5cc8")
})

// WBTC / DAI


// WBTC / USDT
pools.set(Address.fromString("0x53c6ca2597711ca7a73b6921faf4031eedf71339",).toHexString(), {
  token0: Address.fromString("0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f"),
  token1: Address.fromString("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9")
})

// ARB / WBTC
pools.set(Address.fromString("0x689c96ceab93f5e131631d225d75dea3fd37747e",).toHexString(), {
  token0: Address.fromString("0x912ce59144191c1204e64559fe8253a0e49e6548"),
  token1: Address.fromString("0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f")
})

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
pools.set(Address.fromString("0x97bca422ec0ee4851f2110ea743c1cd0a14835a1",).toHexString(), {
  token0: Address.fromString("0x912ce59144191c1204e64559fe8253a0e49e6548"),
  token1: Address.fromString("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9")
})

// ARB / DAI
pools.set(Address.fromString("0xC051405EdeF0E64eBfc501cFe1158Eb0D74F3208",).toHexString(), {
  token0: Address.fromString("0x912CE59144191C1204E64559FE8253a0e49E6548"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})


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
// USDC.e / DAI

// DAI / USDT
pools.set(Address.fromString("0x7f580f8a02b759c350e6b8340e7c2d4b8162b6a9",).toHexString(), {
  token0: Address.fromString("0xaf88d065e77c8cc2239327c5edb3a432268e5831"),
  token1: Address.fromString("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9")
})

// USDC / USDC.e
pools.set(Address.fromString("0xc86eb7b85807020b4548ee05b54bfc956eebbfcd",).toHexString(), {
  token0: Address.fromString("0xaf88d065e77c8cc2239327c5edb3a432268e5831"),
  token1: Address.fromString("0xff970a61a04b1ca14834a43f5de4533ebddb5cc8")
})
