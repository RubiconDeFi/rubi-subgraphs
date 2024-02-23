import { Address } from "@graphprotocol/graph-ts";

class PoolShape {
  token0: Address;
  token1: Address;
}

export const pools = new Map<string, PoolShape>();

// WETH / USDC
pools.set(Address.fromString("0x85149247691df622eaf1a8bd0cafd40bc45154a9",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7f5c764cbc14f9669b88837ca1490cca17c31607")
})

// USDC / WETH
pools.set(Address.fromString("0x1fb3cf6e48F1E7B10213E7b6d87D4c073C7Fdb7b",).toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})

// OP / WETH
pools.set(Address.fromString("0x68F5C0A2DE713a54991E01858Fd27a3832401849",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})

// OP / WETH
pools.set(Address.fromString("0xFC1f3296458F9b2a27a0B91dd7681C4020E09D05",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})

// WBTC / WETH
pools.set(Address.fromString("0x85C31FFA3706d1cce9d525a00f1C7D4A2911754c",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})

// WBTC / WETH
pools.set(Address.fromString("0x73B14a78a0D396C521f954532d43fd5fFe385216",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})

// WETH / DAI
pools.set(Address.fromString("0x95d9D28606ee55De7667f0F176eBfc3215CFD9C0",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})

// WETH / USDT
pools.set(Address.fromString("0xc858a329bf053be78d6239c4a4343b8fbd21472b",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x94b008aa00579c1307b0ef2c499ad98a8ce58e58")
})

// OP / USDC
pools.set(Address.fromString("0x1C3140aB59d6cAf9fa7459C6f83D4B52ba881d36",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})

// OP / USDC
pools.set(Address.fromString("0x6f32061f59a21086C334d0d45F804089cE374aAf",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})

// OP / USDC
pools.set(Address.fromString("0x1D751bc1A723AccF1942122ca9aa82d49D08d2AE",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})

// USDC / OP
pools.set(Address.fromString("0xB533c12fB4e7b53b5524EAb9b47d93fF6C7A456F",).toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})

// OP / USDT
pools.set(Address.fromString("0xB2Ac2E5A3684411254d58B1C5A542212b782114D",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})

// OP / WBTC
pools.set(Address.fromString("0x0893e340eE2B0263dDaD2f3B8bD23DbA11859AEA",).toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})

// USDC / USDT
pools.set(Address.fromString("0xA73C628eaf6e283E26A7b1f8001CF186aa4c0E8E",).toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})

// OP / DAI
pools.set(Address.fromString("0xAE2D9288Be0587C2097ec46dB7686ac2481F896E").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})

// OP / WETH
pools.set(Address.fromString("0xc56B2BEF865893DA71Dd95150313DbadF659f4f3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})

// USDCe / USDC
pools.set(Address.fromString("0x2aB22ac86b25BD448A4D9dC041Bd2384655299c4").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})

// USDT / DAI
pools.set(Address.fromString("0x8323D063b1D12ACce4742f1E3ed9BC46d71f4222").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})

// USDC / DAI
pools.set(Address.fromString("0xbf16ef186e715668AA29ceF57e2fD7f9D48AdFE6").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})

// USDCe / DAI
pools.set(Address.fromString("0xd28f71e383E93C570D3EdFe82EBbcEb35Ec6C412").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})

// WETH / DAI
pools.set(Address.fromString("0x03af20bdaaffb4cc0a521796a223f7d85e2aac31").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})

// USDC / WBTC 
pools.set(Address.fromString("0x394A9fcBab8599437d9Ec4e5A4a0EB7cb1fd2F69").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})

// WBTC / USDC
pools.set(Address.fromString("0xA7BB0d95C6BA0ed0aCA70C503B34BC7108589A47").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})

// WBTC / USDT
pools.set(Address.fromString("0x0843e0F56B9e7fDc4fb95faBBA22a01ef4088f41").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})

// WBTC / DAI
pools.set(Address.fromString("0xC22662b904d98E45f89E030201355c3E372cC819").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})

// USDC / USDT
pools.set(Address.fromString("0xF1F199342687A7d78bCC16fce79fa2665EF870E1").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})