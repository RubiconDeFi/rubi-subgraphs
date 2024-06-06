import { Address } from "@graphprotocol/graph-ts"

export const feedToTokenConfig = new Map<string, Address[]>();

export const decimals = new Map<string, number>();


// OP
// ETH / USD
feedToTokenConfig.set(Address.fromString("0x02f5E9e9dcc66ba6392f6904D5Fcf8625d9B19C9").toHexString(), [
  Address.fromString("0x4200000000000000000000000000000000000006"),
])

// BTC / USD
feedToTokenConfig.set(Address.fromString("0x0C1272d2aC652D10d03bb4dEB0D31F15ea3EAb2b").toHexString(), [
  Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
])

// USDC / USD
feedToTokenConfig.set(Address.fromString("0xd1Cb03cc31caa72D34dba7eBE21897D9580c4AF0").toHexString(), [
  Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"), // USDC.e
  Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85") // USDC
])

// USDT / USD
feedToTokenConfig.set(Address.fromString("0xAc37790fF4aBf9483fAe2D1f62fC61fE6b8E4789").toHexString(), [
  Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
])

// DAI / USD
feedToTokenConfig.set(Address.fromString("0xbCe7579e241e5d676c2371Dc21891489dAcDA250").toHexString(), [
  Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
])

// ARB
// ETH / USD
feedToTokenConfig.set(Address.fromString("0x3607e46698d218B3a5Cae44bF381475C0a5e2ca7").toHexString(), [
  Address.fromString("0x82aF49447D8a07e3bd95BD0d56f35241523fBab1") // WETH
])

// BTC / USD
feedToTokenConfig.set(Address.fromString("0x942d00008D658dbB40745BBEc89A93c253f9B882").toHexString(), [
  Address.fromString("0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f") // WBTC
])

// USDC / USD
feedToTokenConfig.set(Address.fromString("0x2946220288DbBF77dF0030fCecc2a8348CbBE32C").toHexString(), [
  Address.fromString("0xaf88d065e77c8cC2239327C5EDb3A432268e5831"), // USDC
  Address.fromString("0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8") // USDC.e
])

// USDT / USD
feedToTokenConfig.set(Address.fromString("0xCb35fE6E53e71b30301Ec4a3948Da4Ad3c65ACe4").toHexString(), [
  Address.fromString("0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9")
])

// DAI / USD
feedToTokenConfig.set(Address.fromString("0xFc06bB03a9e1D8033f87eA6A682cbd65477A43b9").toHexString(), [
  Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
])

// MAINNET
// ETH / USD
feedToTokenConfig.set(Address.fromString("0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419").toHexString(), [
  Address.fromString("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")
])

// BTC / USD
feedToTokenConfig.set(Address.fromString("0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c").toHexString(), [
  Address.fromString("0x2260fac5e5542a773aa44fbcfedf7c193bc2c599")
])

// USDC / USD
feedToTokenConfig.set(Address.fromString("0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6").toHexString(), [
  Address.fromString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")
])

// USDT / USD
feedToTokenConfig.set(Address.fromString("0x3E7d1eAB13ad0104d2750B8863b489D65364e32D").toHexString(), [
  Address.fromString("0xdac17f958d2ee523a2206206994597c13d831ec7")
])

// DAI / USD
feedToTokenConfig.set(Address.fromString("0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9").toHexString(), [
  Address.fromString("0x6b175474e89094c44da98b954eedeac495271d0f")
])

// BASE
// ETH / USD
feedToTokenConfig.set(Address.fromString("0x71041dddad3595F9CEd3DcCFBe3D1F4b0a16Bb70").toHexString(), [
  Address.fromString("0x4200000000000000000000000000000000000006")
])

// BTC / USD
// feedToTokenConfig.set(Address.fromString("0x64c911996D3c6aC71f9b455B1E8E7266BcbD848F").toHexString(), [
//   Address.fromString("")
// ])

// USDC / USD
feedToTokenConfig.set(Address.fromString("0x7e860098F58bBFC8648a4311b374B1D669a2bc6B").toHexString(), [
  Address.fromString("0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA"), // USDbC
  Address.fromString("0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913") // USDC
])

// USDT / USD
// feedToTokenConfig.set(Address.fromString("0xf19d560eB8d2ADf07BD6D13ed03e1D11215721F9").toHexString(), [
//   Address.fromString("")
// ])

// DAI / USD
feedToTokenConfig.set(Address.fromString("0x591e79239a7d679378eC8c847e5038150364C78F").toHexString(), [
  Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb")
])
