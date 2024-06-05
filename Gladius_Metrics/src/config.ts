import { Address } from "@graphprotocol/graph-ts"


export const feedToTokenConfig = new Map<Address, Address[]>();

// OP
// ETH / USD
feedToTokenConfig.set(Address.fromString("0x13e3Ee699D1909E989722E753853AE30b17e08c5"), [
  Address.fromString("0x4200000000000000000000000000000000000006"),
])

// BTC / USD
feedToTokenConfig.set(Address.fromString("0xD702DD976Fb76Fffc2D3963D037dfDae5b04E593"), [
  Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
])

// USDC / USD
feedToTokenConfig.set(Address.fromString("0x16a9FA2FDa030272Ce99B29CF780dFA30361E0f3"), [
  Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"), // USDC.e
  Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85") // USDC
])

// USDT / USD
feedToTokenConfig.set(Address.fromString("0xECef79E109e997bCA29c1c0897ec9d7b03647F5E"), [
  Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
])

// DAI / USD
feedToTokenConfig.set(Address.fromString("0x8dBa75e83DA73cc766A7e5a0ee71F656BAb470d6"), [
  Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
])

// ARB
// ETH / USD
feedToTokenConfig.set(Address.fromString("0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612"), [
  Address.fromString("0x82aF49447D8a07e3bd95BD0d56f35241523fBab1") // WETH
])

// BTC / USD
feedToTokenConfig.set(Address.fromString("0x6ce185860a4963106506C203335A2910413708e9"), [
  Address.fromString("0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f") // WBTC
])

// USDC / USD
feedToTokenConfig.set(Address.fromString("0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3"), [
  Address.fromString("0xaf88d065e77c8cC2239327C5EDb3A432268e5831"), // USDC
  Address.fromString("0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8") // USDC.e
])

// USDT / USD
feedToTokenConfig.set(Address.fromString("0x3f3f5dF88dC9F13eac63DF89EC16ef6e7E25DdE7"), [
  Address.fromString("0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9")
])

// DAI / USD
feedToTokenConfig.set(Address.fromString("0xc5C8E77B397E531B8EC06BFb0048328B30E9eCfB"), [
  Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
])

// MAINNET
// ETH / USD
feedToTokenConfig.set(Address.fromString("0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"), [
  Address.fromString("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")
])

// BTC / USD
feedToTokenConfig.set(Address.fromString("0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c"), [
  Address.fromString("0x2260fac5e5542a773aa44fbcfedf7c193bc2c599")
])

// USDC / USD
feedToTokenConfig.set(Address.fromString("0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6"), [
  Address.fromString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")
])

// USDT / USD
feedToTokenConfig.set(Address.fromString("0x3E7d1eAB13ad0104d2750B8863b489D65364e32D"), [
  Address.fromString("0xdac17f958d2ee523a2206206994597c13d831ec7")
])

// DAI / USD
feedToTokenConfig.set(Address.fromString("0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9"), [
  Address.fromString("0x6b175474e89094c44da98b954eedeac495271d0f")
])

// BASE
// ETH / USD
feedToTokenConfig.set(Address.fromString("0x71041dddad3595F9CEd3DcCFBe3D1F4b0a16Bb70"), [
  Address.fromString("0x4200000000000000000000000000000000000006")
])

// BTC / USD
feedToTokenConfig.set(Address.fromString("0x64c911996D3c6aC71f9b455B1E8E7266BcbD848F"), [
  Address.fromString("")
])

// USDC / USD
feedToTokenConfig.set(Address.fromString("0x7e860098F58bBFC8648a4311b374B1D669a2bc6B"), [
  Address.fromString("0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA"), // USDbC
  Address.fromString("0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913") // USDC
])

// USDT / USD
feedToTokenConfig.set(Address.fromString("0xf19d560eB8d2ADf07BD6D13ed03e1D11215721F9"), [
  Address.fromString("")
])

// DAI / USD
feedToTokenConfig.set(Address.fromString("0x591e79239a7d679378eC8c847e5038150364C78F"), [
  Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb")
])
