import { Address, BigInt } from "@graphprotocol/graph-ts"

export const feedToTokenConfig = new Map<string, Address[]>();
export const decimals = new Map<string, BigInt>();

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

// OP / USD
feedToTokenConfig.set(Address.fromString("0x4F6dFDFd4d68F68b2692E79f9e94796fC8015770").toHexString(), [
  Address.fromString("0x4200000000000000000000000000000000000042")
])

// WSTETH / USD
feedToTokenConfig.set(Address.fromString("0x0d110cC7876d73c3C4190324bCF4C59416bBD259").toHexString(), [
  Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb")
])

// ARB
// ETH / USD
feedToTokenConfig.set(Address.fromString("0x3607e46698d218B3a5Cae44bF381475C0a5e2ca7").toHexString(), [
  Address.fromString("0x82aF49447D8a07e3bd95BD0d56f35241523fBab1") // WETH
])

decimals.set(Address.fromString('0x82aF49447D8a07e3bd95BD0d56f35241523fBab1').toHexString(),BigInt.fromI32(18))

// BTC / USD
feedToTokenConfig.set(Address.fromString("0x942d00008D658dbB40745BBEc89A93c253f9B882").toHexString(), [
  Address.fromString("0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f") // WBTC
])

decimals.set(Address.fromString('0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f').toHexString(),BigInt.fromI32(8))

// USDC / USD
feedToTokenConfig.set(Address.fromString("0x2946220288DbBF77dF0030fCecc2a8348CbBE32C").toHexString(), [
  Address.fromString("0xaf88d065e77c8cC2239327C5EDb3A432268e5831"), // USDC
  Address.fromString("0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8") // USDC.e
])

decimals.set(Address.fromString('0xaf88d065e77c8cC2239327C5EDb3A432268e5831').toHexString(),BigInt.fromI32(6))
decimals.set(Address.fromString('0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8').toHexString(),BigInt.fromI32(6))

// USDT / USD
feedToTokenConfig.set(Address.fromString("0xCb35fE6E53e71b30301Ec4a3948Da4Ad3c65ACe4").toHexString(), [
  Address.fromString("0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9")
])

decimals.set(Address.fromString('0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9').toHexString(),BigInt.fromI32(6))

// DAI / USD
feedToTokenConfig.set(Address.fromString("0xFc06bB03a9e1D8033f87eA6A682cbd65477A43b9").toHexString(), [
  Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
])

decimals.set(Address.fromString('0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1').toHexString(),BigInt.fromI32(18))

// ARB / USD
feedToTokenConfig.set(Address.fromString("0x46de66F10343b59BAcc37dF9b3F67cD0CcC121A3").toHexString(), [
  Address.fromString("0x912CE59144191C1204E64559FE8253a0e49E6548")
])

decimals.set(Address.fromString('0x912CE59144191C1204E64559FE8253a0e49E6548').toHexString(),BigInt.fromI32(18))

// LINK / USD
feedToTokenConfig.set(Address.fromString("0x9b8DdcF800a7BfCdEbaD6D65514dE59160a2C9CC").toHexString(), [
  Address.fromString("0xf97f4df75117a78c1A5a0DBb814Af92458539FB4")
])

decimals.set(Address.fromString('0xf97f4df75117a78c1A5a0DBb814Af92458539FB4').toHexString(),BigInt.fromI32(18))

// LUSD / USD
feedToTokenConfig.set(Address.fromString("0x20CD97619A51d1a6f1910ce62d98Aceb9a13d5e6").toHexString(), [
  Address.fromString("0x93b346b6BC2548dA6A1E7d98E9a421B42541425b")
])

decimals.set(Address.fromString('0x93b346b6BC2548dA6A1E7d98E9a421B42541425b').toHexString(),BigInt.fromI32(18))

// GHO / USD
feedToTokenConfig.set(Address.fromString("0x41230419afFF6c7fFecF715fA57958D53F803De9").toHexString(), [
  Address.fromString("0x7dfF72693f6A4149b17e7C6314655f6A9F7c8B33")
])

decimals.set(Address.fromString('0x7dfF72693f6A4149b17e7C6314655f6A9F7c8B33').toHexString(),BigInt.fromI32(18))

// FRAX / USD
feedToTokenConfig.set(Address.fromString("0x5D041081725468Aa43e72ff0445Fde2Ad1aDE775").toHexString(), [
  Address.fromString("0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F")
])

decimals.set(Address.fromString('0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F').toHexString(),BigInt.fromI32(18))

// ARB SEPOLIA
// ETH / USD
feedToTokenConfig.set(Address.fromString("0xf3138B59cAcbA1a4d7d24fA7b184c20B3941433e").toHexString(), [
  Address.fromString("0x980B62Da83eFf3D4576C647993b0c1D7faf17c73"), // WETH
  Address.fromString("0x2fc8011B01c988249ace25ec2c624079ac146e04"), // TEST COIN,
  Address.fromString("0xc556bAe1e86B2aE9c22eA5E036b07E55E7596074") // WETH from frontend
])

// USDC / USD
feedToTokenConfig.set(Address.fromString("0xfe43Eb2649F3bcce80443F9E43C793146148C141").toHexString(), [
  Address.fromString("0xd28301B86800bBCF1f09a55642ee3E115Edb1f67"), // USDC from frontend
])

// LINK / USD
feedToTokenConfig.set(Address.fromString("0x961AD289351459A45fC90884eF3AB0278ea95DDE").toHexString(), [
  Address.fromString("0xb1D4538B4571d411F07960EF2838Ce337FE1E80E"),
])


// MAINNET
// ETH / USD
feedToTokenConfig.set(Address.fromString("0xE62B71cf983019BFf55bC83B48601ce8419650CC").toHexString(), [
  Address.fromString("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")
])

// BTC / USD
feedToTokenConfig.set(Address.fromString("0xdBe1941BFbe4410D6865b9b7078e0b49af144D2d").toHexString(), [
  Address.fromString("0x2260fac5e5542a773aa44fbcfedf7c193bc2c599")
])

// USDC / USD
feedToTokenConfig.set(Address.fromString("0x789190466E21a8b78b8027866CBBDc151542A26C").toHexString(), [
  Address.fromString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")
])

// USDT / USD
feedToTokenConfig.set(Address.fromString("0xa964273552C1dBa201f5f000215F5BD5576e8f93").toHexString(), [
  Address.fromString("0xdac17f958d2ee523a2206206994597c13d831ec7")
])

// DAI / USD
feedToTokenConfig.set(Address.fromString("0x478238a1c8B862498c74D0647329Aef9ea6819Ed").toHexString(), [
  Address.fromString("0x6b175474e89094c44da98b954eedeac495271d0f")
])

// BASE
// ETH / USD
feedToTokenConfig.set(Address.fromString("0x57d2d46Fc7ff2A7142d479F2f59e1E3F95447077").toHexString(), [
  Address.fromString("0x4200000000000000000000000000000000000006")
])

decimals.set(Address.fromString('0x4200000000000000000000000000000000000006').toHexString(),BigInt.fromI32(18))

// cbBTC / USD
feedToTokenConfig.set(Address.fromString("0x07DA0E54543a844a80ABE69c8A12F22B3aA59f9D").toHexString(), [
  Address.fromString("0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf")
])

decimals.set(Address.fromString("0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf").toHexString(),BigInt.fromI32(8))


// USDC / USD
feedToTokenConfig.set(Address.fromString("0x0Ee7145e1370653533e2F2E824424bE2AA95A4Aa").toHexString(), [
  Address.fromString("0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA"), // USDbC
  Address.fromString("0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913") // USDC
])

decimals.set(Address.fromString('0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA').toHexString(),BigInt.fromI32(6))
decimals.set(Address.fromString('0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913').toHexString(),BigInt.fromI32(6))

// DAI / USD
feedToTokenConfig.set(Address.fromString("0x21b1E4eA0E9AE2e79932662300eB12A0f90AbE59").toHexString(), [
  Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb")
])

decimals.set(Address.fromString('0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb').toHexString(),BigInt.fromI32(18))



// OP
decimals.set(Address.fromString('0x7F5c764cBc14f9669B88837ca1490cCa17c31607').toHexString(),BigInt.fromI32(6))
decimals.set(Address.fromString('0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85').toHexString(),BigInt.fromI32(6))
decimals.set(Address.fromString('0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x94b008aA00579c1307B0EF2c499aD98a8ce58e58').toHexString(),BigInt.fromI32(6))
decimals.set(Address.fromString('0x4200000000000000000000000000000000000006').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x4200000000000000000000000000000000000042').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x68f180fcCe6836688e9084f035309E29Bf0A2095').toHexString(),BigInt.fromI32(8))

// ARB SEPOLIA
decimals.set(Address.fromString("0x980B62Da83eFf3D4576C647993b0c1D7faf17c73").toHexString(), BigInt.fromI32(18))
decimals.set(Address.fromString("0x2fc8011B01c988249ace25ec2c624079ac146e04").toHexString(), BigInt.fromI32(18))
decimals.set(Address.fromString("0xc556bAe1e86B2aE9c22eA5E036b07E55E7596074").toHexString(), BigInt.fromI32(18))
decimals.set(Address.fromString("0xd28301B86800bBCF1f09a55642ee3E115Edb1f67").toHexString(), BigInt.fromI32(18))
decimals.set(Address.fromString("0xb1D4538B4571d411F07960EF2838Ce337FE1E80E").toHexString(), BigInt.fromI32(18))


// Others
// decimals.set(Address.fromString('0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4').toHexString(),BigInt.fromI32(18))
// decimals.set(Address.fromString('0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1').toHexString(),BigInt.fromI32(18))
// decimals.set(Address.fromString('0x920Cf626a271321C151D027030D5d08aF699456b').toHexString(),BigInt.fromI32(18))
// decimals.set(Address.fromString('0x9e1028F5F1D5eDE59748FFceE5532509976840E0').toHexString(),BigInt.fromI32(18))
// decimals.set(Address.fromString('0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9').toHexString(),BigInt.fromI32(18))


decimals.set(Address.fromString('0x912CE59144191C1204E64559FE8253a0e49E6548').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x0c880f6761F1af8d9Aa9C466984b80DAb9a8c9e8').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x000F1720A263f96532D1ac2bb9CDC12b72C6f386').toHexString(),BigInt.fromI32(6))
decimals.set(Address.fromString('0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x9623063377AD1B27544C965cCd7342f7EA7e88C7').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x4Cb9a7AE498CEDcBb5EAe9f25736aE7d428C9D66').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x539bdE0d7Dbd336b79148AA742883198BBF60342').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x18c11FD286C5EC11c3b683Caa813B77f5163A122').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0xf97f4df75117a78c1A5a0DBb814Af92458539FB4').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x940181a94A35A4569E4529A3CDfB74e38FD98631').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x347F500323D51E9350285Daf299ddB529009e6AE').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x9a26F5433671751C3276a065f57e5a02D2817973').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x968D6A288d7B024D5012c0B25d67A889E4E3eC19').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x532f27101965dd16442E59d40670FaF5eBB142E4').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x7F12d13B34F5F4f0a9449c16Bcd42f0da47AF200').toHexString(),BigInt.fromI32(9))
decimals.set(Address.fromString('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48').toHexString(),BigInt.fromI32(6))
decimals.set(Address.fromString('0x6b175474e89094c44da98b954eedeac495271d0f').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0xdac17f958d2ee523a2206206994597c13d831ec7').toHexString(),BigInt.fromI32(6))
decimals.set(Address.fromString('0x2260fac5e5542a773aa44fbcfedf7c193bc2c599').toHexString(),BigInt.fromI32(8))
decimals.set(Address.fromString('0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x1f9840a85d5af5bf1d1762f925bdaddc4201f984').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x514910771af9ca656af840dff83e8264ecf986ca').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0xc00e94cb662c3520282e6f5717214004a7f26888').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0xfAbA6f8e4a5E8Ab82F62fe7C39859FA577269BE3').toHexString(),BigInt.fromI32(18))
decimals.set(Address.fromString('0xd28301B86800bBCF1f09a55642ee3E115Edb1f67').toHexString(),BigInt.fromI32(18))
