import { Address } from "@graphprotocol/graph-ts";

class PoolShape {
  token0: Address;
  token1: Address;
}

export const pools = new Map<string, PoolShape>();

pools.set(Address.fromString("0x5174eb108d58616c47cDd17e2dbBEBf3899c9d97").toHexString(), {
  token0: Address.fromString("0xBBC9Ef6d88755bc816532367AF4554f804f33091"),
  token1: Address.fromString("0xCAE1fC5f1bAA36B9BF67Ec47E68E0428175c7D20")
})
pools.set(Address.fromString("0xb4A5D6C7b753fad996dd5fF576776073ef8aAbAE").toHexString(), {
  token0: Address.fromString("0x054FA6DC78dd2492072aa475C1b200D5e8787323"),
  token1: Address.fromString("0x441cf0736C407092042C5E26c58a679216994D1B")
})
pools.set(Address.fromString("0xd63A79b5fc589F3e3fc6E183d1755F7F6Cbd68c1").toHexString(), {
  token0: Address.fromString("0x7FB688CCf682d58f86D7e38e03f9D22e7705448B"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x2BF66333A6030316E41913B5D0c71c5b9DA58EA5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xe0BB0D3DE8c10976511e5030cA403dBf4c25165B")
})
pools.set(Address.fromString("0xd400A9a5328d7F8a35Fe00D28F2d422d8DE6c17e").toHexString(), {
  token0: Address.fromString("0x7FB688CCf682d58f86D7e38e03f9D22e7705448B"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xB82CaBe374d7758d2C6c14E191533F7E864dBb09").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc7b04dC5A2644522a0C58c107346B5e3A63600B0")
})
pools.set(Address.fromString("0x8f477a5D632B5691A10A571575D55DC9C3D86d7C").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D")
})
pools.set(Address.fromString("0x2AB2AfDe2a9284540e37514e217A710305faA012").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xa21262dd366DE3Af463823E20AeD3c4ADeC22e5F").toHexString(), {
  token0: Address.fromString("0x7FB688CCf682d58f86D7e38e03f9D22e7705448B"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x1D366D04a3E97ef702668763c13DA1C32635BfDb").toHexString(), {
  token0: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0xE62bd99a9501ca33D98913105Fc2BeC5BAE6e5dD").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF98dCd95217E15E05d8638da4c91125E59590B07")
})
pools.set(Address.fromString("0xaeE0a6D42D10491d36e6a1b922741933609AC1be").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0x66B0C7c9d7678B46a935fbc42005F25a48807a98").toHexString(), {
  token0: Address.fromString("0xab3F8a9599D62f09A71d7337dFfF4458a4C7fe27"),
  token1: Address.fromString("0xDb21BB0389b616BB2EBDE855975Df4F2Ce9fB74F")
})
pools.set(Address.fromString("0x0aa982fb10b276592652B14dC070fe7CF2DFe4ce").toHexString(), {
  token0: Address.fromString("0x64b18e6d7B4693F86Aa12c1724f1E195232bF044"),
  token1: Address.fromString("0xDb21BB0389b616BB2EBDE855975Df4F2Ce9fB74F")
})
pools.set(Address.fromString("0x44F6b92aEed70ec72DCab6F5C65B5a6c94762A95").toHexString(), {
  token0: Address.fromString("0x00F932F0FE257456b32dedA4758922E56A4F4b42"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x059CFe14EB65a9E7D280336e4376910F9ed21841").toHexString(), {
  token0: Address.fromString("0x28D8a1a6BDEAF9d42dA6A55da8a34710e3434B97"),
  token1: Address.fromString("0xE402d5eef58aad816D7240e50F20922F53A81711")
})
pools.set(Address.fromString("0x62F3a233FE80f075445c422203f89f2EdBC797F7").toHexString(), {
  token0: Address.fromString("0x0a03498EC169247F81761D9b67BF5B206fF0c0Fc"),
  token1: Address.fromString("0xE402d5eef58aad816D7240e50F20922F53A81711")
})
pools.set(Address.fromString("0x8BD1aAa7d3B121Bf9b8346263b5A2DeACd0268A8").toHexString(), {
  token0: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xf3724A1c36c21B7cE558602cD6c031d5778660f4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x65559aA14915a70190438eF90104769e5E890A00")
})
pools.set(Address.fromString("0xD359F70d8666c9f06aFB5f4544A1f81e624dC7C4").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xc98B98d17435AA00830c87eA02474C5007E1f272")
})
pools.set(Address.fromString("0x81a53cf23579cB251068a2D62AE8b2071ebe5A7d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5029C236320b8f15eF0a657054B84d90bfBEDED3")
})
pools.set(Address.fromString("0x36B18618c4131D8564A714fb6b4D2B1EdADc0042").toHexString(), {
  token0: Address.fromString("0x8C835DFaA34e2AE61775e80EE29E2c724c6AE2BB"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0xC64f9436f8Ca50CDCC096105C62DaD52FAEb1f2e").toHexString(), {
  token0: Address.fromString("0x86f1e0420c26a858fc203A3645dD1A36868F18e5"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x34f7ffE0Ab212476a878F6277568f55D6927b251").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x65559aA14915a70190438eF90104769e5E890A00")
})
pools.set(Address.fromString("0xB8B2283a35c4a7920a5cD3900e1ca36b20d5fA86").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xc98B98d17435AA00830c87eA02474C5007E1f272")
})
pools.set(Address.fromString("0x87904cAC76cC45578D51016Bc42B677812298c23").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5029C236320b8f15eF0a657054B84d90bfBEDED3")
})
pools.set(Address.fromString("0xAEfC1edaeDE6ADaDcdF3bB344577D45A80B19582").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D")
})
pools.set(Address.fromString("0xf3a977dEFFe00320dFFDfe274D9Fd624aB8DF042").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xc98B98d17435AA00830c87eA02474C5007E1f272")
})
pools.set(Address.fromString("0x5645cf1F6920a280Fa68Ecd00e1656c404CF5DBe").toHexString(), {
  token0: Address.fromString("0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x2d1E60e6f2d3e19CB50E54075C09f0D415C4f407").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5A5fFf6F753d7C11A56A52FE47a177a87e431655")
})
pools.set(Address.fromString("0xe32f6b5c77d044077F61D105bae89D338FF23bb8").toHexString(), {
  token0: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x6c3428e346302B800e8713415dc4afc8C7ffD96f").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0x7FB688CCf682d58f86D7e38e03f9D22e7705448B")
})
pools.set(Address.fromString("0x7D29d442B20e81e36F97e82c80dd3ad2D26e62b5").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0xC82f1f366c1e264d2726cdDc83ee8132B9c81754").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691")
})
pools.set(Address.fromString("0xF334F6104A179207DdaCfb41FA3567FEea8595C2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb")
})
pools.set(Address.fromString("0xb7964323Cef2fAccc014E4C121D0FcfFf3aEC8fc").toHexString(), {
  token0: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x8A71D91A45690284340f35CcD9b8B295B2009dB1").toHexString(), {
  token0: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x8f2a8722c4958A73Ef81a007A551dbE8933b8b75").toHexString(), {
  token0: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x837CF1171398deE7F57FfD762d7E6D09693Af716").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb")
})
pools.set(Address.fromString("0x4019d18956938d1381F87CC1Eda4ee89818E0834").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb")
})
pools.set(Address.fromString("0x90B9504CFF7af9D787799DC93dEd9Aed0a1996d7").toHexString(), {
  token0: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xE112C53a8816bcd1Fb19a7205d3E5086eA2aCF88").toHexString(), {
  token0: Address.fromString("0xB48b36eA8DFd6113bDf7339E7EF344d0b3f9878f"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x55066B83F18750245e0357bE58cF9d64A379252e").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB48b36eA8DFd6113bDf7339E7EF344d0b3f9878f")
})
pools.set(Address.fromString("0x95317c8CAdcDd2350F7603eeDA5C84bc226289fC").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7FB688CCf682d58f86D7e38e03f9D22e7705448B")
})
pools.set(Address.fromString("0x0D616F8E94DC28aaA30A32DAD592762c16bd403A").toHexString(), {
  token0: Address.fromString("0x89b7FdA54019E62b4fAF44777a0d0E85bD9C4ad3"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x86AAc0251ac02FB6007D533791a3bB08De7E1D5E").toHexString(), {
  token0: Address.fromString("0x89b7FdA54019E62b4fAF44777a0d0E85bD9C4ad3"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x2CF933216ad4deE4aF5597d90cCeFF7646A7cd15").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x89b7FdA54019E62b4fAF44777a0d0E85bD9C4ad3")
})
pools.set(Address.fromString("0xdae07fA5021C179cf65B1C5bb588A2DfBDb3a3BB").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB48b36eA8DFd6113bDf7339E7EF344d0b3f9878f")
})
pools.set(Address.fromString("0xb9B1C9f55a71B839609c86CeFEC5c5BDE89fE7E7").toHexString(), {
  token0: Address.fromString("0x1da650C3B2DaA8AA9Ff6F661d4156Ce24d08A062"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x915673950D99d206345eb9A7F4828F0F2AFF2f07").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6F620EC89B8479e97A6985792d0c64F237566746")
})
pools.set(Address.fromString("0x7Bd46AbE29Cd0a0451D2931eea943F08a42d6cBe").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6B7413C45980D506993116590b8D25e76d1aB731")
})
pools.set(Address.fromString("0x7cb127d944a703E68DE62E7E5b24679e0f944229").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x780f70882fF4929D1A658a4E8EC8D4316b24748A")
})
pools.set(Address.fromString("0xD154FC1504da0Fa259942Ba95057f79E3a5c33C7").toHexString(), {
  token0: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4"),
  token1: Address.fromString("0x9817bA17f219A8c64dAb29aeC6eFF3D29764eefB")
})
pools.set(Address.fromString("0x6DE21C4323b74268C3B3122e96a375D2427b9a66").toHexString(), {
  token0: Address.fromString("0x04432a6fd94e8bC8559d10AC1D98f15Cd9C08363"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x47d99Ac74c832e77C4DAB11E6ae92964e4D154a8").toHexString(), {
  token0: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691"),
  token1: Address.fromString("0xF98dCd95217E15E05d8638da4c91125E59590B07")
})
pools.set(Address.fromString("0x1c2E826B3BfCDE3b0890B4A3F0083E912F7F94E5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4f90E1726E11E55264b78c656Bf2b84cD92A6cFd")
})
pools.set(Address.fromString("0xFFa826DE90C14E777A959cf7C211720B75437bA9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD7Dc13984d4FE87F389E50067fB3Eedb3F704Ea0")
})
pools.set(Address.fromString("0x0d46f55D01641d4494000DA094a1473dcA42F363").toHexString(), {
  token0: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xe5a580f64A26bd3fCbAc2FB0b3B6CfC549a790c2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xffD27b572246f35c992EfB28DD8cB730b93Ed301")
})
pools.set(Address.fromString("0xad460acDf28E2712F817F2Fb99f6abEd8bD24933").toHexString(), {
  token0: Address.fromString("0x2c1Ae762FE57ab01B215374bE9F2F2B5Bcc31C81"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x535541F1aa08416e69Dc4D610131099FA2Ae7222").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0")
})
pools.set(Address.fromString("0x5e8B0fC35065a5d980c11F96cb52381De390B13f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x61BAADcF22d2565B0F471b291C475db5555e0b76")
})
pools.set(Address.fromString("0x55E817415a6222597C6120Fd989897639e91e9CB").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6F620EC89B8479e97A6985792d0c64F237566746")
})
pools.set(Address.fromString("0xB11D715Bd9e3fD4fD07401DC551d516780C12449").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0xfCB068F3Cc225d8f7392A73c1c4B83C651145643").toHexString(), {
  token0: Address.fromString("0x7FB688CCf682d58f86D7e38e03f9D22e7705448B"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x98D9aE198f2018503791D1cAf23c6807C135bB6b").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x1D26A8c06a8020A26C914eA67eC6d30963d2ddD4").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x01e37e62733d1792e3cF8ce45630589B8Ac7C2ba").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be")
})
pools.set(Address.fromString("0xE989E3F623A843Ca615958DC4A2F68e6b197111e").toHexString(), {
  token0: Address.fromString("0x00F932F0FE257456b32dedA4758922E56A4F4b42"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xE1A0c25464a9d3B1426b552416Bf2a02865Ed461").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0")
})
pools.set(Address.fromString("0x34aCaCb9B0Fb9d0b277C9DCb4c7a7e7083b4e4B5").toHexString(), {
  token0: Address.fromString("0x74e8C3aA1A12a67aeBaA25c0B5415c9E56B659E7"),
  token1: Address.fromString("0xDa2E757C49Ed44D99B782cab1d747ab003933597")
})
pools.set(Address.fromString("0x2C995C9693464750C8BCF117682C523734F840C8").toHexString(), {
  token0: Address.fromString("0x05042c3a25F956133bb9bdAB453fbaA6FF07b6dD"),
  token1: Address.fromString("0xDa2E757C49Ed44D99B782cab1d747ab003933597")
})
pools.set(Address.fromString("0x14Bc698Fdc368f2487d3eaD12DFF458E7c272047").toHexString(), {
  token0: Address.fromString("0x5FAa136Fc58B6136fFDAeAAC320076C4865c070F"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x91Df5Be156F4BCE2b786dEfA8433B75d4c3d768e").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE265FC71d45fd791c9ebf3EE0a53FBB220Eb8f75")
})
pools.set(Address.fromString("0x10eb16F4c8fEFe8428443161a6274b0c5D6d7C04").toHexString(), {
  token0: Address.fromString("0x2250b4eD46b7d0A71C91dA173b52555b9CC21e59"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x4d7C361d7758107BDb88e4d36EF5ac5d85f8c6Fa").toHexString(), {
  token0: Address.fromString("0xB24F50Dd9918934AB2228bE7A097411ca28F6C14"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0xf993cc412eDF1257F3e771Bb744645daF4c19b14").toHexString(), {
  token0: Address.fromString("0x151Bb01c79F4516c233948D69daE39869BCcB737"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x6e39aCC0Dd292a70D92c447ebCcB8728f4eD5FE4").toHexString(), {
  token0: Address.fromString("0x7161C3416E08AbAa5cd38E68D9A28E43a694e037"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x28AAbBb24560eC7f6c1175bF0a50B28f3DBD1fcC").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0xd1D675cA91401CeFecB356933071f951D5920FD4")
})
pools.set(Address.fromString("0xea8A251f79217BDa3378b18F99187D6e2E2Ba2b8").toHexString(), {
  token0: Address.fromString("0x1a5DBE5a5E9e9139e68F34E68f1D0336F2573E43"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x55d8dB13021d3DF2d79B767cfb07BA014cf26cf2").toHexString(), {
  token0: Address.fromString("0x1da650C3B2DaA8AA9Ff6F661d4156Ce24d08A062"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x9f442Ada62be658AAbb12E5Eb3d3C03FBBDD1937").toHexString(), {
  token0: Address.fromString("0x1a5DBE5a5E9e9139e68F34E68f1D0336F2573E43"),
  token1: Address.fromString("0xc5759Fc6f5B2d4cDac07B83b2320938980e187d4")
})
pools.set(Address.fromString("0xff7fbDf7832Ae524dEdA39cA402E03D92aDFF7A5").toHexString(), {
  token0: Address.fromString("0x217D47011b23BB961eB6D93cA9945B7501a5BB11"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xc50958E82c36B8d6D0BAf555F90b76b0a28cEeEb").toHexString(), {
  token0: Address.fromString("0x217D47011b23BB961eB6D93cA9945B7501a5BB11"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xA39fCf854720b0af159aE613B149f4311c41344D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xbA6a2Fa321BB06D668c5192Be77428106c5C01E5")
})
pools.set(Address.fromString("0x015A7E73a8D52FcC25918dE2874E0b6C761E3aD7").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0xc5Db22719A06418028A40A9B5E9A7c02959D0d08")
})
pools.set(Address.fromString("0xc5eF7501604e54133F5Ebadd4A2066601774C8fD").toHexString(), {
  token0: Address.fromString("0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x25beCf2f8BBCc18182E0f2f3e14aF7b878efa422").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9")
})
pools.set(Address.fromString("0xE4A1645dde99c20D126c24B8DD1d1a4Bc4a88e4C").toHexString(), {
  token0: Address.fromString("0x333b1eA429a88d0dd48cE7C06C16609CD76F43A8"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x68A4094f010c13F49a8b8fC1a2c97aa8A25Ecd42").toHexString(), {
  token0: Address.fromString("0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xB536D22C5CeAa634Eb47f4b46D8d60d3e77898Fd").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xAF9fE3B5cCDAe78188B1F8b9a49Da7ae9510F151")
})
pools.set(Address.fromString("0x819ff7911Fcc218665ECD6fAaD61730AF544b3e1").toHexString(), {
  token0: Address.fromString("0x7b0bcC23851bBF7601efC9E9FE532Bf5284F65d3"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x61EAA7BE020d086AfF1A75402a90e73F374Db276").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9")
})
pools.set(Address.fromString("0x008B996FD9E7e6d974D03A834a9dBBFcd74689A2").toHexString(), {
  token0: Address.fromString("0x2F198182eC54469195a4A06262a9431A42462373"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x2d17F4607BCF214602Cf2aD1db4eF78127509670").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0xADc0BAa2D097c971f53cF05cF851267d6cca75dA")
})
pools.set(Address.fromString("0xb98e6912aE77c643957eD51dCF755895eC4BC6b4").toHexString(), {
  token0: Address.fromString("0x5f714B5347f0b5de9F9598E39840E176CE889b9c"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0xE3ee205bA08358b88BC31736C06FB107a21f3BbE").toHexString(), {
  token0: Address.fromString("0x1337BedC9D22ecbe766dF105c9623922A27963EC"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x9801F7934ED0ef350f4A272fB73857F3D9B83166").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x2F449bD78a72B18f8758aC38c3FF8dcB094416f6").toHexString(), {
  token0: Address.fromString("0x77d0cc9568605bFfF32F918C8FFaa53F72901416"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x394C73AD39B590c747aA2fB8875a6143046A5ce3").toHexString(), {
  token0: Address.fromString("0x18607aDc70d68E196D12019d49b0607b99312853"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xcFf3eB69592b3Df23b6FB2a4370577F315be3dA2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8dfb2aaB408BC6140c65E1Af0D4Be94DD767d9DA")
})
pools.set(Address.fromString("0x6CD522A20C7bd242FfCDb4F0dfCA5320346Dc601").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6789D8a7a7871923Fc6430432A602879eCB6520a")
})
pools.set(Address.fromString("0x83dF49590e868D15172fA03f360C02C5eC1F2f15").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6789D8a7a7871923Fc6430432A602879eCB6520a")
})
pools.set(Address.fromString("0x2534D4f1325aA7D3FC8D5d14f224e5c587a719b0").toHexString(), {
  token0: Address.fromString("0x3Fb3282e3BA34A0Bff94845f1800Eb93CC6850d4"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x381Af0787aDd5BBbFa6ff88bd1284449a486372B").toHexString(), {
  token0: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"),
  token1: Address.fromString("0xE4F27b04cC7729901876B44f4EAA5102EC150265")
})
pools.set(Address.fromString("0xAeC0Bf409BB28eFe308108D400034650C4d9eC75").toHexString(), {
  token0: Address.fromString("0x2dB8d2DB86cA3a4C7040E778244451776570359B"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0xD26ffdDE6c0DAaAbEB0a6806221c6b9fE7519bdf").toHexString(), {
  token0: Address.fromString("0x7EAdA83e15AcD08d22ad85A1dCE92E5A257Acb92"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x061b8Eb841139d917f06D27cd4A7cf71E5f6A1f6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0")
})
pools.set(Address.fromString("0x55a410362a5428FE82be2FD0Dc002392d16a3682").toHexString(), {
  token0: Address.fromString("0x2735e0080638f8a5373393F3d083eD2777651931"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xb415601963E8a76e5a521Ded2E29cCF3A25C9163").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x93978Ed3F37a210399A457f6Cc95D4d12f7A9746")
})
pools.set(Address.fromString("0xf4d40ebCBf7063D4ff56C6Df0179a86287C648dE").toHexString(), {
  token0: Address.fromString("0xb6599Bd362120Dc70D48409B8a08888807050700"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x0FCd58c457D71bF630A44a41437537e0D5Be7ed8").toHexString(), {
  token0: Address.fromString("0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xA2499EF8145FC00bBab5877d9Fd3fae04e1d3132").toHexString(), {
  token0: Address.fromString("0x27784A49695f4316a4cEd2E35009004d470D8c08"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x069e8A69Bcc43c287b4d7C92540Cb7D491385279").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x514832A97F0b440567055A73fe03AA160017b990")
})
pools.set(Address.fromString("0x688Ec754e0C96883e9979Beb43205A93C9200D23").toHexString(), {
  token0: Address.fromString("0x10010078a54396F62c96dF8532dc2B4847d47ED3"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xC6aBB2c0431491B13E9421d75F887C9c514811c6").toHexString(), {
  token0: Address.fromString("0x10010078a54396F62c96dF8532dc2B4847d47ED3"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xBD93951d2E9Ec615f9940887559B4317032d98D0").toHexString(), {
  token0: Address.fromString("0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xd7909581C1cc7a5a0A5Bbdca675e0EB095633f43").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x81aB7E0D570b01411fcC4afd3D50eC8C241cb74b")
})
pools.set(Address.fromString("0x86f03C6E26B0488b6e39b34d7f10D843ae8e3d1b").toHexString(), {
  token0: Address.fromString("0x9482AaFdCed6b899626f465e1FA0Cf1B1418d797"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x3C21357FFDd4ff61bB1ca5Ec7be542E5279aaf16").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x84b1fd5D4e0Afe446407fd27eE90c964F2F12875")
})
pools.set(Address.fromString("0x793aca81b02F9E8e073047d2347dA0C16E5ECD92").toHexString(), {
  token0: Address.fromString("0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x9306B44D5C5f4a7fbB3ca8d9d0C16da762e51B74").toHexString(), {
  token0: Address.fromString("0x3a4f25Bcd5a16f8271cc39ecbba05DCFc5D70d24"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xb80710b58CaA124ae56e65335Df38Da775a68019").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9")
})
pools.set(Address.fromString("0xBE6F76b45292759497A636aF9bfb1cf810118939").toHexString(), {
  token0: Address.fromString("0x217D47011b23BB961eB6D93cA9945B7501a5BB11"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x6f59c163AD6cC896145aF7D5922d1eAE174A1BCc").toHexString(), {
  token0: Address.fromString("0xBe5de48197fc974600929196239E264EcB703eE8"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0xeA8cf058bf481F2775E26f7b32128C29536f0E02").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd886b6524e9A3BDA63577EEfE17E2bAA99646DbA")
})
pools.set(Address.fromString("0x67833Cda3D1e823286f5FF85FC40ACD76315CFAd").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xec64f88Cc2FeC15C1f15DcdA618d5F2C03c2BAc3")
})
pools.set(Address.fromString("0x1f2d3516bcE1Ed78d8816fcc7d01e4BF038EF9D1").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x654868af438CCAe99d6d6Db913fbAfE5B6FACd24")
})
pools.set(Address.fromString("0x03E0d231cD7885CBC762df69aC59Ab08E0a0de96").toHexString(), {
  token0: Address.fromString("0x0b5740c6b4a97f90eF2F0220651Cca420B868FfB"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x6c0bC93A4208EB1648AF4ED44Cb3b4df9547B42B").toHexString(), {
  token0: Address.fromString("0x34235C8489b06482A99bb7fcaB6d7c467b92d248"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x7FD5d367c8F34Cc8ea05e7A19688083db6AC1132").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE92Af44Db599cF2b0582327A9b224798481e2371")
})
pools.set(Address.fromString("0xD0bc844c4714996B46f338B57FC12734aea37603").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0xaF917F4f427b53D226a2aaB6c37227aF28B0379d")
})
pools.set(Address.fromString("0x2c37FC47691faCd82FFBCD606d1b46f3Dc4d2050").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc04Fb38f10AD352c5f16Bd4546F7456E7f1A2D9e")
})
pools.set(Address.fromString("0x7348C2a976046FD3c5931A069d6Be2A2902102Be").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D")
})
pools.set(Address.fromString("0x9239C8a7F608aB7dDC2D3424184A2993aE76Fa4D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xFA436399d0458Dbe8aB890c3441256E3E09022a8")
})
pools.set(Address.fromString("0xc49F049103c8d177844F4F31fF0758c10d18bcAF").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x47120cf8D499Efebb823708244F9f7bE0B61C0F6")
})
pools.set(Address.fromString("0x764C0E2900EC31766f5CB9d24A3cc4F20dc8D6b9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0")
})
pools.set(Address.fromString("0x05B552C0a787c228624b389D51eB4277e1F0F348").toHexString(), {
  token0: Address.fromString("0x9d34F1D15C22e4C0924804e2a38cBe93DFB84bc2"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x0FABC09DD357A0A4f683928003491DDB9db25292").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0xe7C360D3F90e446a564ec6778A72b88079dc9DD0").toHexString(), {
  token0: Address.fromString("0x61BAADcF22d2565B0F471b291C475db5555e0b76"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0xae788082e8C25408042eb40003cD72c082B06212").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x2f0ec10E7AC7Ec33261E88f6523078f40F687A9D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc04Fb38f10AD352c5f16Bd4546F7456E7f1A2D9e")
})
pools.set(Address.fromString("0xEa8A849A688301A79c1a81D7D8489Ad776d85F14").toHexString(), {
  token0: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x782Dcc2cD3A65405bAeb794269703E9C29A175Cc").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278")
})
pools.set(Address.fromString("0xfd1ccB10cD3e3C2360C4Bfc4f63F417d6077Be1e").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xA807D4Bc69b050b8D0c99542cf93903C2EFe8b4c")
})
pools.set(Address.fromString("0x730691cDaC3Cbd4D41FC5eb9D8AbBB0cEa795B94").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x68F5C0A2DE713a54991E01858Fd27a3832401849").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xFC1f3296458F9b2a27a0B91dd7681C4020E09D05").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xb5b4C6B37bd159b279b68Ca79002381DdFa1307A").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0x98109d86362967D6CF2dCC6317EacE1F78F55E66")
})
pools.set(Address.fromString("0xB539dFceF90C7b53ed5B40C3bc86b156811c9DdA").toHexString(), {
  token0: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4"),
  token1: Address.fromString("0xFA436399d0458Dbe8aB890c3441256E3E09022a8")
})
pools.set(Address.fromString("0x926c2AEEd9b4C10a025C3605dbC2953834bA2a8A").toHexString(), {
  token0: Address.fromString("0x0Be27c140f9Bdad3474bEaFf0A413EC7e19e9B93"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xaABA870ed262503242CAd6566ebB3Ab55FE5e6E1").toHexString(), {
  token0: Address.fromString("0x3B0868E8e906f6721946f882EF9bd1Db98C91DA0"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x8106053fAAba2ecb078E4E77C6D71780454D9FEb").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0xE8C76AdE76b7220b799Dd17B95D01d1cE60A017c").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0x4Ec1bDcB81b51350783025379aC5a9B66356C182").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0x3BEbc9Cc1181ADb8508B234d36B557Ba8fd0D399").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xADc0BAa2D097c971f53cF05cF851267d6cca75dA")
})
pools.set(Address.fromString("0x1C1e1292434Efd85bE741093E956B005253b0980").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x703D57164CA270b0B330A87FD159CfEF1490c0a5")
})
pools.set(Address.fromString("0x7b4eCe0a2464406D99b2C172B03fb8b92F6C3B5e").toHexString(), {
  token0: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb"),
  token1: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691")
})
pools.set(Address.fromString("0x206a3A16181E2aDde815602b5Be26dB669283D02").toHexString(), {
  token0: Address.fromString("0x703D57164CA270b0B330A87FD159CfEF1490c0a5"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x4F3c43a8703099A1f21010A04E0E3fE3f6070EDD").toHexString(), {
  token0: Address.fromString("0x3F56e0c36d275367b8C502090EDF38289b3dEa0d"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x9F662A19733e80db0A3b95d9cf9D86464dEbE840").toHexString(), {
  token0: Address.fromString("0x1c56982e4d1c67AA4ab75058Ec193d33981Ee27e"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x408EAA664331944BAa4e5f585a3129407550F5Af").toHexString(), {
  token0: Address.fromString("0x0Be27c140f9Bdad3474bEaFf0A413EC7e19e9B93"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x199774c4597E4753E497Ce660d6F9Ec1A9664de1").toHexString(), {
  token0: Address.fromString("0x217D47011b23BB961eB6D93cA9945B7501a5BB11"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x7D25cA7f271b9a1FE646f1Df26C1744603838bFF").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x364f1Ed999CB40e4d0F27e4108154eBD59422bB3").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x409597745535e55131Bc7B4dc9B6d09106165Ab9").toHexString(), {
  token0: Address.fromString("0x10010078a54396F62c96dF8532dc2B4847d47ED3"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xC24FF83214AEe505139B1CcC59E07cc2e0D6c9Bf").toHexString(), {
  token0: Address.fromString("0x1daA9B90145095fF7Fd67956Dd2E511cA15131A1"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x5b9eC766738038c655b6Fa8085a14DaE55f0d61F").toHexString(), {
  token0: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0"),
  token1: Address.fromString("0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9")
})
pools.set(Address.fromString("0xc11A439A9B96eC7E7082b61b273a34a4EB263A09").toHexString(), {
  token0: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xF11e683D2Cccb4C7e92F33ADE237149483E30Be6").toHexString(), {
  token0: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xcc8A87A17208Fe2e96168Ca3Fa9412A968c5B092").toHexString(), {
  token0: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x514810E7db31CF118E6BacB3992BBe37b8D2b9B3").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xDB59de3606C0419552226a6Dbbeb5E6Ae272Cb9b").toHexString(), {
  token0: Address.fromString("0x3F56e0c36d275367b8C502090EDF38289b3dEa0d"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xE870BFE4AaCB6E234B645e535D26C53790D50E78").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xA5856C55712fE7C34f8A662eaaEaE8a1AD76BE90").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC836409eEAD20993cef867eED19B2fe44752f237")
})
pools.set(Address.fromString("0x1C3140aB59d6cAf9fa7459C6f83D4B52ba881d36").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xFB3630aa71e59863Cb819678E27174c20F33B33a").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF98dCd95217E15E05d8638da4c91125E59590B07")
})
pools.set(Address.fromString("0x44B17031465C53706aF85C05423D26e9cFa13a1B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x6f32061f59a21086C334d0d45F804089cE374aAf").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x1D751bc1A723AccF1942122ca9aa82d49D08d2AE").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xAE2D9288Be0587C2097ec46dB7686ac2481F896E").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x702b283B06FA4E49Ef155597945F2BA4B717E19C").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x88aF67B59c95eda0A9544E5c33679B128517f37A").toHexString(), {
  token0: Address.fromString("0x117cFd9060525452db4A34d51c0b3b7599087f05"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x56e31f116A0a3512aC777DB0e7e29cDA3E6FC9e2").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x8dfaF761146020ae8607f95148D2c299317148C8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278")
})
pools.set(Address.fromString("0x570b06E335CA7b2633213fe538D4053155CE19E6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc98B98d17435AA00830c87eA02474C5007E1f272")
})
pools.set(Address.fromString("0xa43f71CaC5dcaD8141c7B03dD4C867e8100Ec819").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x65559aA14915a70190438eF90104769e5E890A00")
})
pools.set(Address.fromString("0x4C7A58e8342C32738C65484ED4Bcfa894967cc1b").toHexString(), {
  token0: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xBbd81fE7ed175879A63C9613F57397Ad51437f84").toHexString(), {
  token0: Address.fromString("0x217D47011b23BB961eB6D93cA9945B7501a5BB11"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x2EE6B8B90806bA8b7AB0b7716E9c7DF5EeB8e3a6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x813B047883c9841F37215A2F8ffDcaEC5b50C48a")
})
pools.set(Address.fromString("0x0dF3Bf5263cB2fF2cdcb98cd1c8985783c553466").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7e3A79AA6aBbF9Cb39E1F991537f22683DF62879")
})
pools.set(Address.fromString("0x948740d9B49EDc1687612136d248670cb2BE09Cf").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xd5E64BE2b980038a0611659Fc9b41CcE88f70840")
})
pools.set(Address.fromString("0x7c39C35d12f48fc3bc2F2140Fa3F41cC11D510ef").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xb5DF6B8f7EbeC28858B267Fc2DDC59CC8aCa7A8d")
})
pools.set(Address.fromString("0xcEdBDBe2F25B56e9Bd0834ceb9095054017B2a10").toHexString(), {
  token0: Address.fromString("0x7093A7Ce3a05e61F80f9809A6D56355f5CdA257f"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x8A9d1f6E886B9f420D5c5F2c1a542a0d7cc14230").toHexString(), {
  token0: Address.fromString("0x2d3AD3c9acF4Ca7a0eE4B722D654376caF8b5ff2"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xb62cE7AfF4b0aB78313aBa94a112FE524e6eb22C").toHexString(), {
  token0: Address.fromString("0x1f276347930bEA2B7B8E8B00Ca145dbceBbba57f"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xb0be80065A7904b69f330C257cD6176059c50fC9").toHexString(), {
  token0: Address.fromString("0x2348B1a1228DDCd2dB668c3d30207c3E1852fBbe"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x193BA22B50335b1C2EaBf9D64d8D7eb1FE564a17").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xD7fB1826C979c5DB10B3466E089aa9E45237001e")
})
pools.set(Address.fromString("0x7ba2437d585ae585771548F91936642837Db1992").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc5fa76Ad511a022F4a74BFe28e82A279b40B3293")
})
pools.set(Address.fromString("0xB2Ac2E5A3684411254d58B1C5A542212b782114D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x73869fb1dc5A48C9143D4103645Cf0891bfcF2F8").toHexString(), {
  token0: Address.fromString("0x37aaCC0B4265540E6FAd4351138377b901c0F749"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xf74fCa1611a695a81FC1F7052aa5Ff2549558Ab3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x93930DCD9d57f18d59C417a04ADdED645eF287B2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc89bce99569C613149e6182C35E6A5CbB1fccd79")
})
pools.set(Address.fromString("0x0893e340eE2B0263dDaD2f3B8bD23DbA11859AEA").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0x81963e6b31CE94c6965639eF806Df2F2c9008258").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE")
})
pools.set(Address.fromString("0xA1658249bcC69b0AB491CDc0449c0b0ea796dE8D").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x790fde1FD6d2568050061a88c375d5c2E06b140B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278")
})
pools.set(Address.fromString("0x4AD43A229A55d9453Ad1DDD9aeA986D58FaAB8d4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x51f150A0F250809d7c46f8334a92165BEa89807a").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0")
})
pools.set(Address.fromString("0x92BB6cf798701Af1E636FE44733A4f0426bC4FeE").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x3249E3e3E4133eE18e65347daF586610Cc265F54").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x652a810c603FAef61FF5d873e52ad7f1D70d6014").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x4DE1007C9Cf9DFdEa7E822075FEad26c9Fe9F5EF").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x0bc57F58043A0004554865F9dd317Ea7319F151D").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x9F7EbD489968C12A383AEc1632eCAdfB5A019c96").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xCA93e9077C48cc7aB817390edd32F85eC6892797").toHexString(), {
  token0: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x54D17B69d526edF5C8C91bd2ebb5b765Fd21e4DC").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x45b3AfD0f43C520c69c2A05C27edb1845297c8BE").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5029C236320b8f15eF0a657054B84d90bfBEDED3")
})
pools.set(Address.fromString("0x2aB191012F970E447b1BF5eb311EB206466C9d0A").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x7Af2d23C6c463370dA0148056c900C6b1B68c5C6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb54fa166d4b88B0478f299D5854aD9B94b3fefF3")
})
pools.set(Address.fromString("0xD5B2F311e62eaFaAd2b1814A067F04Ba4de63458").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0xe8005327759B490F012f090F6eC101e9B7cd8Cf2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9")
})
pools.set(Address.fromString("0x39806ECA23629a45950d8e17865339AffcA65d1b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xaaAaAaaa6d080446bA8E298d025c01117C049cF1")
})
pools.set(Address.fromString("0x088c02e89ae58b9D3e4B99c92C56F4A4c17f8343").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x97513e975a7fA9072c72C92d8000B0dB90b163c5")
})
pools.set(Address.fromString("0xd9660A959E00feC8B256EF6BF71C0F545585eBA0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x26e4f2B4943E1C172163a270f62277E2545a4B4e").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0xDaf93f61fAf8b2d59B67eBfB00c43D9f4003Ba79").toHexString(), {
  token0: Address.fromString("0x1EBA7a6a72c894026Cd654AC5CDCF83A46445B08"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x15e45295451CE51DAF1f778AC6c5FD33b028fF41").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF6a72DCf8f69F59Dc2e034e74B856c3Dc8f51c4a")
})
pools.set(Address.fromString("0xEEEecc8a946AA0B0A058441FcA2D376Ce06eB86f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF5253D5B2b4FceC921c27fC2fBC257930E56743c")
})
pools.set(Address.fromString("0xD9CC3AC2c25a00D0017722032368bf88F08da314").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4a9Cc88D7a63744f350416593177206B90082A56")
})
pools.set(Address.fromString("0xb2Bf236fb6E8C7BE664a6d7f8cF7C21f5305fcdF").toHexString(), {
  token0: Address.fromString("0x1EBA7a6a72c894026Cd654AC5CDCF83A46445B08"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xd0fa3B5264CCDE31e8B094b86bcA4A1e97D3c603").toHexString(), {
  token0: Address.fromString("0x1EBA7a6a72c894026Cd654AC5CDCF83A46445B08"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x3aCdc1c48D1439a4ffdCa5d6197d61fFC964C984").toHexString(), {
  token0: Address.fromString("0x65559aA14915a70190438eF90104769e5E890A00"),
  token1: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278")
})
pools.set(Address.fromString("0x0932311F485Fd4E54b0a001a9BbAdb9CeE4afB33").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921")
})
pools.set(Address.fromString("0xb4745DCC7F587b180FBd4d8b221103eaf806AAA9").toHexString(), {
  token0: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"),
  token1: Address.fromString("0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921")
})
pools.set(Address.fromString("0x5ca5da3ae68c1eA6a7D161E8043f7DC0d2eFbde2").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xC9eDbd1F6Fde3040c40C1Ebeedf1fBf80dee08f2").toHexString(), {
  token0: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x126eaf703b1F02A8cA25Af47b079dCc5F3F25ea1").toHexString(), {
  token0: Address.fromString("0x1EBA7a6a72c894026Cd654AC5CDCF83A46445B08"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x0CC0c5E227907633A3FC5CDe18882f214ccfD4bb").toHexString(), {
  token0: Address.fromString("0x00F932F0FE257456b32dedA4758922E56A4F4b42"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x0DcEc4Fc6342a30350fC15B76bA6b11952C68F04").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xFA436399d0458Dbe8aB890c3441256E3E09022a8")
})
pools.set(Address.fromString("0xBA335a3B1F2Fb04e66916c664459B7F74378Ec32").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xB1aE42D16E61FFdCdab442902D2bDcCA135b0874").toHexString(), {
  token0: Address.fromString("0x5029C236320b8f15eF0a657054B84d90bfBEDED3"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x24dD7694fC84A05bc75c714448484a81eA9C9656").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921")
})
pools.set(Address.fromString("0xAd80e7FC9AB00199191814C1A1f9F4467260a396").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x21b7121696DeB95dA55aafF60955f3A6C9E2e8D2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4B86DF8F5db8C42b83ea55FDb99aBaD292F8C73f")
})
pools.set(Address.fromString("0xe71cf83c32a9D8b0b681631c6728a42264FE91af").toHexString(), {
  token0: Address.fromString("0x5029C236320b8f15eF0a657054B84d90bfBEDED3"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0x65D024AD8806841C23Fe748615435e0EAF2de3cB").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xF98dCd95217E15E05d8638da4c91125E59590B07")
})
pools.set(Address.fromString("0xc5635C58de9b8a64636D5b1d93a3859d2B5021aC").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921")
})
pools.set(Address.fromString("0x0DFcC06a7E4819E4CB7af227DD26EbA7EA782b46").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xf6e5260d56c8D5a9c2210aa27EA2fe26F608d54D")
})
pools.set(Address.fromString("0xEBDE76f12C01a20C3a1CC9447Bbd8Be4129dd4dC").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691")
})
pools.set(Address.fromString("0x02383D4df93D1FD627411Ae88c528a8E486b213b").toHexString(), {
  token0: Address.fromString("0xAF9fE3B5cCDAe78188B1F8b9a49Da7ae9510F151"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x50e556d518c0faDC1B388CE951527581e04Cd88F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x9427A2a738AffBc5880F0646b5251069c022e525")
})
pools.set(Address.fromString("0xC881fB8D48d736975E99ffFDd328576C3bF6Bc30").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9631be8566fC71d91970b10AcfdEe29F21Da6C27")
})
pools.set(Address.fromString("0x570dE5D2be7C22b9A6711e2Ed8C6f1BD29505183").toHexString(), {
  token0: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xC126FE43E7958Dc1e7f9b93356ED83a9691e4bfe").toHexString(), {
  token0: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xFce37010067d771F88E023742e7126E9fF4052EF").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x927Eb0dBC5c3FD172Fdfa72D563f71612eCB6122")
})
pools.set(Address.fromString("0x31b0E326Db452B992991163E06e60d71cC56DeE9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb")
})
pools.set(Address.fromString("0x3BE0a133065aE03CC1306656464a9Cdf0a1fe4Dc").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4ac8bD1bDaE47beeF2D1c6Aa62229509b962Aa0d")
})
pools.set(Address.fromString("0x0640A560e0Ab5a463ed76Ddae623ACdABC18b015").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0xf9e95aBBa3B3941Bd0A61798A7f8649670a26074").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x514832A97F0b440567055A73fe03AA160017b990")
})
pools.set(Address.fromString("0x1682dCd12f6E291De6874DCb0a89EE50465f43bD").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x1941615c340cb9b1E0cD44BBAA8e32102b7D9D51").toHexString(), {
  token0: Address.fromString("0x514832A97F0b440567055A73fe03AA160017b990"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x7C8686417C80cb08dc3Bb5929205B269DEd8d3d2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x927Eb0dBC5c3FD172Fdfa72D563f71612eCB6122")
})
pools.set(Address.fromString("0x9Cd330770dD6d3b85b999dd53169e75d113419e3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb12c13e66AdE1F72f71834f2FC5082Db8C091358")
})
pools.set(Address.fromString("0xe71eE28A856CFF54f27C2D42bad829Ece12eB030").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x703D57164CA270b0B330A87FD159CfEF1490c0a5")
})
pools.set(Address.fromString("0x9bb31Cf48A29E3439F928ED95E6BC1ec6E1f8b1d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd8f365c2c85648f9B89D9f1BF72C0aE4b1C36cFD")
})
pools.set(Address.fromString("0x101c637497090b8d740AA7286F054Fb0Fa2AAd38").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x5029C236320b8f15eF0a657054B84d90bfBEDED3")
})
pools.set(Address.fromString("0x506954097cf5f6d532447137601BDC0b559420CE").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x65aA8c8E766b5921604dDC2B41a252237f355464")
})
pools.set(Address.fromString("0xe2D4194DbEa9A9f982653C92B982C39e0cE5dCA0").toHexString(), {
  token0: Address.fromString("0xab7bAdEF82E9Fe11f6f33f87BC9bC2AA27F2fCB5"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xf375c9D0c3164A967a9e54d95F383FFF7B3f71aC").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be")
})
pools.set(Address.fromString("0xbd13E93fEA2d69AEc65aB888B78708EE9A9a9a88").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc72751efd79B153D5bdC7E1a43b4b98aA2aA04C7")
})
pools.set(Address.fromString("0x5FCE37115bAf5696C208405B626197C092C83610").toHexString(), {
  token0: Address.fromString("0xc72751efd79B153D5bdC7E1a43b4b98aA2aA04C7"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x0b07E43555B0E8E904eF95c46A462f6A59013014").toHexString(), {
  token0: Address.fromString("0x2348B1a1228DDCd2dB668c3d30207c3E1852fBbe"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xe20Cb90cCdB66884c37F53A8f6c75FC14B299726").toHexString(), {
  token0: Address.fromString("0x2348B1a1228DDCd2dB668c3d30207c3E1852fBbe"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xb018e5955C561a8af0f49FAf60d587b7F8F1687B").toHexString(), {
  token0: Address.fromString("0x217D47011b23BB961eB6D93cA9945B7501a5BB11"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xce37da4fB43f404b10ED017414d33106a8c368ac").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xBA28feb4b6A6b81e3F26F08b83a19E715C4294fd")
})
pools.set(Address.fromString("0x7BFbDa6693168911d8b58957f4fb34eb1e8B1823").toHexString(), {
  token0: Address.fromString("0xBA28feb4b6A6b81e3F26F08b83a19E715C4294fd"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xB5EBbBf11E1E82883e854BAAc1bcD79Fe73f953d").toHexString(), {
  token0: Address.fromString("0x61BAADcF22d2565B0F471b291C475db5555e0b76"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x9595EdBefC82535a02312A4C42Cc91e6E9DF8f67").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x9A2766d2246ed5434f53852722c147a34D3957e3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9427A2a738AffBc5880F0646b5251069c022e525")
})
pools.set(Address.fromString("0xbf16ef186e715668AA29ceF57e2fD7f9D48AdFE6").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xF1F199342687A7d78bCC16fce79fa2665EF870E1").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x9438a9d1bDeECe02ED4431ac59613A128201e0B9").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x252cBDff917169775Be2b552eC9f6781aF95e7F6").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x41d1A099709a48a29a87B312FCAb9024e3f34471").toHexString(), {
  token0: Address.fromString("0xD8C7F4B4DB21231C27DEFEb8A2C14aBB6A2a1651"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x6384517B76cfaB86ca90C221903A46181095394F").toHexString(), {
  token0: Address.fromString("0x12EE2427014FA485D2ab8b10cb700c7Ed1427B36"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xC345a10F4399C16CE2fF7892Cb4bbcE24eDEbe8A").toHexString(), {
  token0: Address.fromString("0x61F257dF223e992300A3B0589E4a94b8BF6309D6"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x3C6Be4ba5c666EaD72F36b4D42bE26d3Aec1C4BD").toHexString(), {
  token0: Address.fromString("0x3ddf376cFd9861147056f6DB0C01195352909aFF"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xF1Ff489817B439e455dc712Dd24B151181075dC4").toHexString(), {
  token0: Address.fromString("0x3ddf376cFd9861147056f6DB0C01195352909aFF"),
  token1: Address.fromString("0x9427A2a738AffBc5880F0646b5251069c022e525")
})
pools.set(Address.fromString("0x1EFB7c24632896D8ea39CF9f934749872cD60197").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9427A2a738AffBc5880F0646b5251069c022e525")
})
pools.set(Address.fromString("0x8130D8b6E5cDd6ED5fCDBB7a041512cC5a38B924").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xd52f94DF742a6F4B4C8b033369fE13A41782Bf44")
})
pools.set(Address.fromString("0x2EF6B442b8D5F92Aa6AB436a7239567D050Ad4e2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xd52f94DF742a6F4B4C8b033369fE13A41782Bf44")
})
pools.set(Address.fromString("0xe986d2a83680d8f16c5f97F90442806318Ac41A3").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D")
})
pools.set(Address.fromString("0x9bd852d5e1d1154Ff951937f2a7d0dE9E44246a7").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x78136AEE0C18E62C8AD1cf9Bcf37C87Ab996e9Dc").toHexString(), {
  token0: Address.fromString("0x3d2bB989b5aD16248f38B50657A1CA4CbbCD6541"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x0190Fa09847D724c25332d6C2Ad9Dd758b2B7F3C").toHexString(), {
  token0: Address.fromString("0x3d2bB989b5aD16248f38B50657A1CA4CbbCD6541"),
  token1: Address.fromString("0x9427A2a738AffBc5880F0646b5251069c022e525")
})
pools.set(Address.fromString("0x3f767b95E3Cd41822b1DeAcE876852fA86458602").toHexString(), {
  token0: Address.fromString("0x3d2bB989b5aD16248f38B50657A1CA4CbbCD6541"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x22F5F609C554B89792B14B91BAdCCaF52c156E95").toHexString(), {
  token0: Address.fromString("0x395Ae52bB17aef68C2888d941736A71dC6d4e125"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x791f2713029a4412Fc04A4715Dfa7aDB383c20A5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4C2013F2f50583044F8e5Bfd40a2Ca8dbeB1268D")
})
pools.set(Address.fromString("0x6a85a0199dA574cd3761eadA68513D587800E9eA").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xb0Db97917332D8de109eFBC3677f595B3b85661b").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8c3292E680e8B4Ae72279D9F46a52b253667Da1D")
})
pools.set(Address.fromString("0x2C125eA1e66FE5B2ae8F6B559943b03D7F11a469").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xab7bAdEF82E9Fe11f6f33f87BC9bC2AA27F2fCB5")
})
pools.set(Address.fromString("0x4fA20d13aD2d9dA4e2D6bcc87da23d8620e4E1f0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xfFE522a6fE9D33f6D117e001033D6AB5553784C0")
})
pools.set(Address.fromString("0x0f1816DfAA0C051647fcca5b0FC3C581Dc7c7b05").toHexString(), {
  token0: Address.fromString("0x4C2013F2f50583044F8e5Bfd40a2Ca8dbeB1268D"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x4e7f113be45DdCe233fB8EC68392577b59d0C9A1").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xfFE522a6fE9D33f6D117e001033D6AB5553784C0")
})
pools.set(Address.fromString("0x3154Dc51Bd6Bb55213BD0e676Df44cc3327ce75c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xfD07B75BF9D23C23df1a979101E63E9A212728eb").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0xb0A16B7CE66d7cBB070C4b13E5895fb09879c6F8").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x8323D063b1D12ACce4742f1E3ed9BC46d71f4222").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x0d08C8F0cf4ddF5AB22688cB144A74dfAB96cf3B").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xd7ccC603A29fc9aF6b25bAe13b434E2F66f556AA").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0xc1b6C86662e55D6A86bF74498df9e8135c973aBb").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x501f473Fa84a6A05C40650b03d4D363744f03D17").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x1688A24943Abdb084B53eF9b2831995D9CA1E8FF").toHexString(), {
  token0: Address.fromString("0x59bAbc14Dd73761e38E5bdA171b2298DC14da92d"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x93E2d580d90b2ca89BeC75b0476fc70878952f09").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0")
})
pools.set(Address.fromString("0x1a172713Bdf4b9C846028E43081e73Ca90a399dd").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x2Dae67031f94D17F6a995a07A5e77ee187e4b5Ef").toHexString(), {
  token0: Address.fromString("0x8940f1AadB2Aa8e64F8d73b3e3AFfa85ACB2aBBD"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x3dDD250F89bc163831235BCacC8443369a8694f8").toHexString(), {
  token0: Address.fromString("0x8940f1AadB2Aa8e64F8d73b3e3AFfa85ACB2aBBD"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xf0A7Cd7169De3eE59D39D823Ccd558f1010513F7").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xf372540A75b6c29a048C3b70a9c5e23012CD8484")
})
pools.set(Address.fromString("0xbc1F9A771771cFf62314D4C0178AF5eE77796bB4").toHexString(), {
  token0: Address.fromString("0x328345ab56a490383B515c17ea6788bAB205BCA4"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x355ba02818352CA0EF8f695AB79634417CC2a991").toHexString(), {
  token0: Address.fromString("0x3F56e0c36d275367b8C502090EDF38289b3dEa0d"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x095ec8341c5246cd1ABdb9730B49a95dA0F38cF5").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x7FB688CCf682d58f86D7e38e03f9D22e7705448B")
})
pools.set(Address.fromString("0x4905220Ca9d1001DaA7BE72e877243F4996002E0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D")
})
pools.set(Address.fromString("0x5fa468c3ceaeABd3700c6978E0FF67A1Dc4028DA").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7a2efdaF1eFdC6b75ecA8ee2af14537c2E0B49E6")
})
pools.set(Address.fromString("0x71660b7E99955c1F4D125E1bd0f62F6FA3034256").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD22a58f79e9481D1a88e00c343885A588b34b68B")
})
pools.set(Address.fromString("0xaf7D1B0Ab1DaB0Dc6440d0B5A6d807C2bb019e4b").toHexString(), {
  token0: Address.fromString("0x9427A2a738AffBc5880F0646b5251069c022e525"),
  token1: Address.fromString("0xD22a58f79e9481D1a88e00c343885A588b34b68B")
})
pools.set(Address.fromString("0xAB114b77E6ED4a205C91fB35f4C943B4533e0446").toHexString(), {
  token0: Address.fromString("0x3d2bB989b5aD16248f38B50657A1CA4CbbCD6541"),
  token1: Address.fromString("0xD22a58f79e9481D1a88e00c343885A588b34b68B")
})
pools.set(Address.fromString("0x5428b98BD56054D49A7C3C990dF3Ce4895d41bBC").toHexString(), {
  token0: Address.fromString("0x20428cee5c9c6537C89967beaAb1E96b3f3f86B3"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xBd8f6dB7547de05ed6174dAcA9029B43b3df477E").toHexString(), {
  token0: Address.fromString("0x703D57164CA270b0B330A87FD159CfEF1490c0a5"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x5E3A6c4C59a668B096d6f9748eb8732C65E72f9D").toHexString(), {
  token0: Address.fromString("0xc30771E33979EC7af9F6d1169C7dBbB1fc65234a"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xFa4C28ffCFdDbb8A480Ea6002A725c39AdFcCD2c").toHexString(), {
  token0: Address.fromString("0x6F620EC89B8479e97A6985792d0c64F237566746"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x36dFadf118573C55Aa0c576280D064F431975d75").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x46112a5F735A2CD1975687867eE2857F59757b7B").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xbaedA18445fAC27A084fA12F25755A476443DC92").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x30905F2a6A7f48B6643c399b67EF38d4ab47cAfA").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xab7bAdEF82E9Fe11f6f33f87BC9bC2AA27F2fCB5")
})
pools.set(Address.fromString("0x83e4aeF9721A7c72E5B69Ed14b2a1EBd5174ce56").toHexString(), {
  token0: Address.fromString("0x10010078a54396F62c96dF8532dc2B4847d47ED3"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xc56B2BEF865893DA71Dd95150313DbadF659f4f3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x93C1BfC25209CB45E234aB85624ac87DE7c3Fb15").toHexString(), {
  token0: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x5eC892F21feA19F4b458c02aD52F75e9b5C9B2Ee").toHexString(), {
  token0: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xE1670960EBafa0d55567e72924dCF774160770df").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9A45Dc286b8B9e1429a312220685529E6a32702C")
})
pools.set(Address.fromString("0x6Fcb3B6EccBA19693FAdE13366b5aA0dA37ee43F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb20d84ebFeCdC6821448C7094564a039F0AE5EA4")
})
pools.set(Address.fromString("0x6ECb7D18aBDa6aE794035490A4dEcC329D0f23BB").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xdC901FAe791024d65Fc9720A70f1a5f9200D23A3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x71BE275327A7F08ABB9cAd45164309597D3d30d1").toHexString(), {
  token0: Address.fromString("0x0ec2281976E0Cfc35e5A6b8a77E53dCf78509Be2"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xEFdCDD1CAB842197CFD4cBad1C1F75705493Fab1").toHexString(), {
  token0: Address.fromString("0x1532223109c3a1A818D8Da5ab4e54cd7a9E9bAC6"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xBDcB4556101fE12BA7ec2d1210Ea934B5Fe28e36").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8382a7F56cf362144c1A6553aE298Dc692EcCD15")
})
pools.set(Address.fromString("0x1f8F73369CE4aF255cca7f6C7937db53F0cfBFF6").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8382a7F56cf362144c1A6553aE298Dc692EcCD15")
})
pools.set(Address.fromString("0xa95ac4184b0962f5BB889Af9Ca69c23993Fa681e").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6AF3cb766D6cd37449bfD321D961A61B0515c1BC")
})
pools.set(Address.fromString("0x2bc95f14FF09Fafaf5522d1D2451da27DC7D46Bc").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0x85f6583762Bc76d775eAB9A7456db344f12409F7")
})
pools.set(Address.fromString("0x39a32FeC31fD166F5eFBfAA5D886681FB7aD0D3A").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x0cD210D6667E9C349408b08102A78dBA146A9Cc0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278")
})
pools.set(Address.fromString("0xA4f124A4a5B14b6395F227f46937DE7DC2f0c425").toHexString(), {
  token0: Address.fromString("0x819Ab70aC5844a488cAd323302a9519BF0aD5243"),
  token1: Address.fromString("0xf2302f16996763710F9909020f6A4CE17eFA0b5C")
})
pools.set(Address.fromString("0xF39FB319CF8884EFE2d99DB163b7cE07595086A2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x703D57164CA270b0B330A87FD159CfEF1490c0a5")
})
pools.set(Address.fromString("0x72B74Fc8e8911664575679f55253524515B06C0E").toHexString(), {
  token0: Address.fromString("0x7FB688CCf682d58f86D7e38e03f9D22e7705448B"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x42932e33eE8F4Ec7BBb429Ec2f5f99f23823148D").toHexString(), {
  token0: Address.fromString("0xa036a816289af46B61461F143e78d77a1Abcf84F"),
  token1: Address.fromString("0xd69f377669d6f0D76fB1A558d65196eff76AB469")
})
pools.set(Address.fromString("0xf06C2C5BF819830B84E844668Fd55e67Ac36E80B").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xEe9801669C6138E84bD50dEB500827b776777d28")
})
pools.set(Address.fromString("0x4AaDf1DF222EF5058bDFC84Ab0A3dCd4A4A34643").toHexString(), {
  token0: Address.fromString("0x6F620EC89B8479e97A6985792d0c64F237566746"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x81aF51353915F2f04C43A85c2E26aE39973D50DA").toHexString(), {
  token0: Address.fromString("0x6F620EC89B8479e97A6985792d0c64F237566746"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xcE47Ebc7A124b2556E864ce9f5bB802BDFcA665c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9485aca5bbBE1667AD97c7fE7C4531a624C8b1ED")
})
pools.set(Address.fromString("0x20B0C0b4c42F1aFc3a361Bf238Dffe8B16605637").toHexString(), {
  token0: Address.fromString("0x6F620EC89B8479e97A6985792d0c64F237566746"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x885c696785dd2AA2CB6d68B287D3F3A8f58fBF83").toHexString(), {
  token0: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xF97eFdb51566dAeADFb73971aBF2b7b8c7D0C07f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x96DbFEA54bEd171EF44A1D39Cb915de676064d24")
})
pools.set(Address.fromString("0x88b4270396A7dD04194380F7047DF6d3Ca868107").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xCE2088797e30a89F881D307115129ce260cC3dd6")
})
pools.set(Address.fromString("0xfb8f652E54b06a38cEdBf4D240FECEdA4F396ACC").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xAe31207aC34423C41576Ff59BFB4E036150f9cF7")
})
pools.set(Address.fromString("0x31fF8acc0504f28b00FE42CD3aD53530405E8842").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC2787377332dA8aE44a7cf6621493A8AD639129B")
})
pools.set(Address.fromString("0x22a153e7d0F0ec6311B5b1083d082B2Aa32F731D").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xEf6301DA234fC7b0545c6E877D3359FE0B9E50a4")
})
pools.set(Address.fromString("0xc88A74D9818bC77Bd3493De839721285b5352Ab4").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000")
})
pools.set(Address.fromString("0x0fc9C96b860073b49167f48f6636075a055CF606").toHexString(), {
  token0: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x07743035dc1D5C9bb0CEE4F5E00fDE349Ba032F5").toHexString(), {
  token0: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x6285510330A49097B5AF0f02b6DFF2C5C7BaE7BE").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd52f94DF742a6F4B4C8b033369fE13A41782Bf44")
})
pools.set(Address.fromString("0x6696ddEA44F47a7976d9Ea0bA8d6792B8aaB725f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb")
})
pools.set(Address.fromString("0x9e99bCBd6fD31f7B65D989daf9a341D293948e55").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000")
})
pools.set(Address.fromString("0x30FAF22817a2484120e4e8e2951B251681258D00").toHexString(), {
  token0: Address.fromString("0x374Ad0f47F4ca39c78E5Cc54f1C9e426FF8f231A"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xB311753ec59EfAef03aF561B27bf8B395e8B9351").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x63fb228A935647d743Da875883D4b37c25278556")
})
pools.set(Address.fromString("0xEf832C96BAE80B0D47DCb75695fF05B4162cb7c8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xBF429f6DC892baE171Aa2f6379297d53891264D5")
})
pools.set(Address.fromString("0xf44aCAa38be5E965c5Ddf374E7a2BA270e580684").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9485aca5bbBE1667AD97c7fE7C4531a624C8b1ED")
})
pools.set(Address.fromString("0x280F05cBa5812901CF5452e719a6847ebfc4002b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000")
})
pools.set(Address.fromString("0x382E0A4797FAA09D9842F078a2157A242d10e062").toHexString(), {
  token0: Address.fromString("0x7FB688CCf682d58f86D7e38e03f9D22e7705448B"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x32e3C59565242254707798Bacb0bAbd3A65B65fb").toHexString(), {
  token0: Address.fromString("0x7FB688CCf682d58f86D7e38e03f9D22e7705448B"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x23b000aC91f1F4ea6A3569E3f56AC6B8CeCB269C").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x672a8B3eC4b6eBa29fEd0e799C3170baf52A2286").toHexString(), {
  token0: Address.fromString("0x2e39ac14F40679849E251FE9df852C3dc1e06D5E"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x5A744788626fA799C62b345c09503E619E138991").toHexString(), {
  token0: Address.fromString("0x12d92fe0Aa1c59C4f7a704D16561CFbaF17eC257"),
  token1: Address.fromString("0x659b6b6a200f46af46D97998D3375CB092d3F326")
})
pools.set(Address.fromString("0xA175A3B08821AE298eab17384B9Aef5F8CF42F4c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd52f94DF742a6F4B4C8b033369fE13A41782Bf44")
})
pools.set(Address.fromString("0xf570d0aA032C9CCC89fD78626D4eD1ce41b7513E").toHexString(), {
  token0: Address.fromString("0x79dFc65F77C67D95652294f301beE5deA3d951fB"),
  token1: Address.fromString("0x9f99d554Aa7A9A53fe068a35502105368864f36a")
})
pools.set(Address.fromString("0x1164B42440F5B8E6900701E7cd5E126a15011c9e").toHexString(), {
  token0: Address.fromString("0x841120E51aD43EfE489244728532854A352073aD"),
  token1: Address.fromString("0x929c4AcFC9C907785b62652Ef578DA22f91422F7")
})
pools.set(Address.fromString("0x992B3FFE82772f8f155E1a3632aba4064BE9623d").toHexString(), {
  token0: Address.fromString("0x3fD1081F8B90367d93dF46F528Fa7d7E96714f25"),
  token1: Address.fromString("0x848c5787D65Cf5985360C01291D1C41C827268C7")
})
pools.set(Address.fromString("0x6C8c1FdEa0D26BC1018705c66B0bA4b12bF5485b").toHexString(), {
  token0: Address.fromString("0x3fD1081F8B90367d93dF46F528Fa7d7E96714f25"),
  token1: Address.fromString("0xB3656AA466474271f0e73212d77FF62daE7fEb58")
})
pools.set(Address.fromString("0xc2007a35aB23d1284CeeA8044253b009CCEA07a7").toHexString(), {
  token0: Address.fromString("0x8BFE04fa3B0992364C41032a3EcceBA2AA3db65C"),
  token1: Address.fromString("0xE71C470709151d5EC97D83730c921dD97bf153Dc")
})
pools.set(Address.fromString("0x579E4bFF7fF6c17A39487B908ef1a24F7bA9Bfa9").toHexString(), {
  token0: Address.fromString("0xa7fFC97D0f0bebF54f3A82303D999e2dC95d785c"),
  token1: Address.fromString("0xB45E647D6958E722668C64e440E5c246f538e3ea")
})
pools.set(Address.fromString("0x120513e55e11C1A42e65a4b9F11004F9B4e7588B").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xd52f94DF742a6F4B4C8b033369fE13A41782Bf44")
})
pools.set(Address.fromString("0x2A2eE9D5CFdA156E2E2E9864A18470b669687f29").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000")
})
pools.set(Address.fromString("0xaFfd1716F12DFb29806B3C1bB7b2DaA9fAFEC53e").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9a226617fC5C92f0aEfDebaD0c4C3b2023EFdafA")
})
pools.set(Address.fromString("0x4a5a2A152e985078e1A4AA9C3362c412B7dd0a86").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x63cB518c7CCAbc59e8D4086787D3C5DD00805De1").toHexString(), {
  token0: Address.fromString("0xBC40fd75DC8CAEB19d783ED17A1516aA65Dfedd4"),
  token1: Address.fromString("0xD2dE71d033737a17d4197B88aE6E8445916BE8Da")
})
pools.set(Address.fromString("0xAeFe4224dF7232397B6cDF487f6A4BBB6f9E5C11").toHexString(), {
  token0: Address.fromString("0xab7bAdEF82E9Fe11f6f33f87BC9bC2AA27F2fCB5"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xf627349a40C964B649d8c7c8a7fC29708dCd9606").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xAe31207aC34423C41576Ff59BFB4E036150f9cF7")
})
pools.set(Address.fromString("0xe5bBD7Fe87e1518B6D21CCda59EB44b78Ac84604").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xd52f94DF742a6F4B4C8b033369fE13A41782Bf44")
})
pools.set(Address.fromString("0xEA05245e29fB1b2eF26a6ac7441a512591B2ea91").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0xA355a1a6D12bC7cDE866f6Bd866121EDCCB4CC0a").toHexString(), {
  token0: Address.fromString("0x0c5b4c92c948691EEBf185C17eeB9c230DC019E9"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x86A45959caC2E375087A6c83DdD4eb3951082C1C").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9a226617fC5C92f0aEfDebaD0c4C3b2023EFdafA")
})
pools.set(Address.fromString("0xd92c2257d7a00DeDef1ea9A3BC31ccd37E65f4AE").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0xB381716C0565B11c258937D3ae19863Fb9959fe2").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xae806FA04c1fEB5D22C5511005d98AAa0Ef09dee").toHexString(), {
  token0: Address.fromString("0xa0741C6974e42c5e79B077bC38684cf292A9D61F"),
  token1: Address.fromString("0xAF14b71388aeb8d24021dfA80E0050C69917a477")
})
pools.set(Address.fromString("0xC5dA718583c18c7838aa5c7df5dd6641d469c572").toHexString(), {
  token0: Address.fromString("0x0A9AAa1c7542b42233AC7FfdA364E97adE21f160"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x85c92f7d55307e0830197637bf4E60bA600ac687").toHexString(), {
  token0: Address.fromString("0x4b5a5507F8A0e8812f777Aa805BfEcF18b94ca33"),
  token1: Address.fromString("0xAF14b71388aeb8d24021dfA80E0050C69917a477")
})
pools.set(Address.fromString("0xc5e181f3a118E1BDdcC3d5c9176B548583bf9cC0").toHexString(), {
  token0: Address.fromString("0x4b5a5507F8A0e8812f777Aa805BfEcF18b94ca33"),
  token1: Address.fromString("0xa0741C6974e42c5e79B077bC38684cf292A9D61F")
})
pools.set(Address.fromString("0x7C53eDbA77FF2C81a0173E804Da3A2a2b1610CdB").toHexString(), {
  token0: Address.fromString("0x4b5a5507F8A0e8812f777Aa805BfEcF18b94ca33"),
  token1: Address.fromString("0xB0aA922063fd77fC0b957334A9d679b61a82661b")
})
pools.set(Address.fromString("0xbc61968ccC37F67f0531eE00f1c7666B50fC2c46").toHexString(), {
  token0: Address.fromString("0xAF14b71388aeb8d24021dfA80E0050C69917a477"),
  token1: Address.fromString("0xB0aA922063fd77fC0b957334A9d679b61a82661b")
})
pools.set(Address.fromString("0x1Aa1FD052ab701387E09128F7a579E853197dAe2").toHexString(), {
  token0: Address.fromString("0x420E9E395Ec1184126b8A92C69e182078d091Fa5"),
  token1: Address.fromString("0xa0741C6974e42c5e79B077bC38684cf292A9D61F")
})
pools.set(Address.fromString("0x353EC75F40edB3b794E10BC049532e60d89D5D19").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0xab7bAdEF82E9Fe11f6f33f87BC9bC2AA27F2fCB5")
})
pools.set(Address.fromString("0x0f6B49615831bf9288Dbe57759905931c54D51a8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691")
})
pools.set(Address.fromString("0x2e795075DE4255073Ef1be203fB65891F94CF974").toHexString(), {
  token0: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691"),
  token1: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278")
})
pools.set(Address.fromString("0xbc861A867d760A9d5fb0156f2D6014b6dDfe07Db").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691")
})
pools.set(Address.fromString("0xf09074eDD7fA594Dbe68a169648CAA786416CAB3").toHexString(), {
  token0: Address.fromString("0x65559aA14915a70190438eF90104769e5E890A00"),
  token1: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691")
})
pools.set(Address.fromString("0x705299ec0A616EaFf5b0Fcc866745D4FFA42b794").toHexString(), {
  token0: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691"),
  token1: Address.fromString("0xd8f365c2c85648f9B89D9f1BF72C0aE4b1C36cFD")
})
pools.set(Address.fromString("0x98D968f0d688f2818277978354Cec5Bf0Dd1FD36").toHexString(), {
  token0: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691"),
  token1: Address.fromString("0xe0BB0D3DE8c10976511e5030cA403dBf4c25165B")
})
pools.set(Address.fromString("0x4ED1B55C4BC5971A728d8Fe71e7A14730aCE637A").toHexString(), {
  token0: Address.fromString("0x61BAADcF22d2565B0F471b291C475db5555e0b76"),
  token1: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691")
})
pools.set(Address.fromString("0xaa7De812641d02B71452d973F59C99f6c8BF0a85").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xcB59a0A753fDB7491d5F3D794316F1adE197B21E")
})
pools.set(Address.fromString("0xBba112D1C35fbB61E0fC5B26646Cf16aDB12ED23").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xBD0D988376300D3a424bf10B8E8d1112A95b8326")
})
pools.set(Address.fromString("0x2931824120065E73E4727dB3C2211cbC4c50b796").toHexString(), {
  token0: Address.fromString("0x1DB2466d9F5e10D7090E7152B68d62703a2245F0"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x0A4A8201B31bB7933b181B00e9afCDDB6f7f45dc").toHexString(), {
  token0: Address.fromString("0x2dB0D87BC824196962fBA83Ccb576fF9e8477a66"),
  token1: Address.fromString("0xa0741C6974e42c5e79B077bC38684cf292A9D61F")
})
pools.set(Address.fromString("0x1BF703B4aedC27e69240C660Db7f36Bc4eC6Bc05").toHexString(), {
  token0: Address.fromString("0x58eE50d72904C62Aca4D712648f9edd85f63D056"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x796C29e88A6FCCFf9c3820A22Ef592621B900dDC").toHexString(), {
  token0: Address.fromString("0x58eE50d72904C62Aca4D712648f9edd85f63D056"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x50f5D2001C8B40B05278fD8EB354e4873BDC76B5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x58eE50d72904C62Aca4D712648f9edd85f63D056")
})
pools.set(Address.fromString("0xFFfeD18c4A35F54a2E6c99dba02AD062eecC5C20").toHexString(), {
  token0: Address.fromString("0x65559aA14915a70190438eF90104769e5E890A00"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x15111C34501Cc7f0c09e26A1210AdAA6c3F5a1EA").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xE3AB61371ECc88534C522922a026f2296116C109")
})
pools.set(Address.fromString("0x6432037739cCd0201987472604826097b55813e9").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xB0B195aEFA3650A6908f15CdaC7D92F8a5791B0B")
})
pools.set(Address.fromString("0x7f1C919A92BCe8790a85d6360B85cf21b997A6b5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xB0B195aEFA3650A6908f15CdaC7D92F8a5791B0B")
})
pools.set(Address.fromString("0x5b42A63d6741416CE9a7B9f4f16d8c9231CcdDd4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x50Bce64397C75488465253c0A034b8097FeA6578")
})
pools.set(Address.fromString("0xc66E44eB76B9df7f627b04e6F3165AB2B2dce30e").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xFdb794692724153d1488CcdBE0C56c252596735F")
})
pools.set(Address.fromString("0x1EcCD30c8fc2Bd74C697958529722869b67642FD").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xcB59a0A753fDB7491d5F3D794316F1adE197B21E")
})
pools.set(Address.fromString("0x8cD60b906EC0fa4E59f5489E5168DF1f4F933547").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xFdb794692724153d1488CcdBE0C56c252596735F")
})
pools.set(Address.fromString("0xea6018F42f816201C933BBb7A6027725937a0895").toHexString(), {
  token0: Address.fromString("0x4E720DD3Ac5CFe1e1fbDE4935f386Bb1C66F4642"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xFdcF5718e3229cb7bA268584c468662000D9226f").toHexString(), {
  token0: Address.fromString("0x217D47011b23BB961eB6D93cA9945B7501a5BB11"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xBA9BBd07331f0185701b61bE6379Ac49d50Ae327").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x85841dab003d284D7aac51fc77cfA0D37d912825").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xE986B3D0960c8DD8418B6FF38aE8EDC0531E5FE5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE3AB61371ECc88534C522922a026f2296116C109")
})
pools.set(Address.fromString("0x8412b8916e8179BDC7ec104E071b03C77CFD39B1").toHexString(), {
  token0: Address.fromString("0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3"),
  token1: Address.fromString("0xbfD291DA8A403DAAF7e5E9DC1ec0aCEaCd4848B9")
})
pools.set(Address.fromString("0xdC151479B57ba52356B228Cb37578f1135Bdced2").toHexString(), {
  token0: Address.fromString("0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3"),
  token1: Address.fromString("0xbfD291DA8A403DAAF7e5E9DC1ec0aCEaCd4848B9")
})
pools.set(Address.fromString("0x92aBD1710cAB89BA57FEA4405850F6E6d385ffe8").toHexString(), {
  token0: Address.fromString("0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3"),
  token1: Address.fromString("0xbfD291DA8A403DAAF7e5E9DC1ec0aCEaCd4848B9")
})
pools.set(Address.fromString("0xCc05AfB72077caE5984C946D85662BF5a5BA155F").toHexString(), {
  token0: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278"),
  token1: Address.fromString("0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921")
})
pools.set(Address.fromString("0x7D78138D1617A0E8a61E31736Fc7FDc7Cc43f429").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x83819b7A9e5D30820bE79D0C67bd2353160015f1")
})
pools.set(Address.fromString("0x1aD0F8522E646c279918d74CC494E9ef3b5dAeb2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x83819b7A9e5D30820bE79D0C67bd2353160015f1")
})
pools.set(Address.fromString("0x64750f4098A7F98352f7CD5797f421cEb8D94f64").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x775Ff83f49213363549fe34eC77c8e05770066b1").toHexString(), {
  token0: Address.fromString("0x1aEd360c8083cd61AA407950ff427E816ACd2fbA"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x2EA23C67262672E666A9D23cefc28321776BB76f").toHexString(), {
  token0: Address.fromString("0x6F620EC89B8479e97A6985792d0c64F237566746"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xb15b622053722bEDcfE63bd1eBE34Ac4fA33f052").toHexString(), {
  token0: Address.fromString("0x0d1a91354A387a1e9E8FCD8f576670c4C3b723cA"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0xD5a0c31D3bc7c0440a79E03c793dd49A5100008e").toHexString(), {
  token0: Address.fromString("0x25F9787D7425e08891697b688217444f4770d363"),
  token1: Address.fromString("0xF146c8d54A77B50c8814A521e5700b4A4cE0eC2D")
})
pools.set(Address.fromString("0xd9064B8791D71a58b443F3c2BD82C50Efb365A2E").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921")
})
pools.set(Address.fromString("0x04F6C85A1B00F6D9B75f91FD23835974Cc07E65c").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xDA191eCf1a1b9FA1cc2042A1C15Ce6F093D1549d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB0B195aEFA3650A6908f15CdaC7D92F8a5791B0B")
})
pools.set(Address.fromString("0xDBfD980227Ca19A58Bbe06bb5738f36bC1ADc4fC").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5d47bAbA0d66083C52009271faF3F50DCc01023C")
})
pools.set(Address.fromString("0xb43AC7B562584549F2E482AC7abE402E7DFA7608").toHexString(), {
  token0: Address.fromString("0x1337BedC9D22ecbe766dF105c9623922A27963EC"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xc662afCe1c1e8d7CA1b79b26d58129fAa38Ed126").toHexString(), {
  token0: Address.fromString("0x1337BedC9D22ecbe766dF105c9623922A27963EC"),
  token1: Address.fromString("0x8C835DFaA34e2AE61775e80EE29E2c724c6AE2BB")
})
pools.set(Address.fromString("0x34f3C063a7a77279676d0e224E7B56351Ce9540c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691")
})
pools.set(Address.fromString("0xc2A7D3dC03B8F56F83916296D9E9bF875C0da7c3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0xD42380AA6A5365f540D525E19c4158F029C6A55D").toHexString(), {
  token0: Address.fromString("0x176AA4b15431411080774b2F42Ba73B7715e2f8B"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x46a551CDFAA8319F02E5abf0066F4bDE6cC3cc2f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x93D165bcC7e916FCA9B145D20d503101173Dd986")
})
pools.set(Address.fromString("0x4A5A71CA0E76DB70Bd04421D10227d459a554bC6").toHexString(), {
  token0: Address.fromString("0x02eC29D23640bE0385DD868f5DF68C3c666746a2"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x22BbdcFc90CabC569C22bF908877b7CC3e2C4684").toHexString(), {
  token0: Address.fromString("0x5d47bAbA0d66083C52009271faF3F50DCc01023C"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xE71bAd83e1f9f429336C47e7c823F110D5692806").toHexString(), {
  token0: Address.fromString("0x1DB2466d9F5e10D7090E7152B68d62703a2245F0"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x570A8A46bdf05A3216f6F53e56a22dcD2520B101").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC")
})
pools.set(Address.fromString("0x990D6B8355E0eFDf885B515e4Df7E4c3a337e6Bc").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE")
})
pools.set(Address.fromString("0x4e008e583b2f2D26A2Bab897CBe6f173DB4e0D0a").toHexString(), {
  token0: Address.fromString("0x217D47011b23BB961eB6D93cA9945B7501a5BB11"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xB59eCB5ce75549Ff9c84616BEd3bd170ec2a2c49").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE")
})
pools.set(Address.fromString("0xcd0bEe0afe0EA86D618bB6b4b93E0eb64979C869").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD1C21FbeC964c545Acc6Dc9Fba4e4F5D736F3b1E")
})
pools.set(Address.fromString("0x0A6E38B9E7d350AD22688B151d793A9841a9c9f7").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x4F3DF8239afC857d1e38a5bC4dE79b5258463EAA").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xd52f94DF742a6F4B4C8b033369fE13A41782Bf44")
})
pools.set(Address.fromString("0x1646531cc38d9b13523d7818f8d4252B7530bD82").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC")
})
pools.set(Address.fromString("0x01a556FC4683b345d7bb6eFA2056f4533be68BC0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x86bEA60374f220dE9769b2fEf2db725bc1cDd335")
})
pools.set(Address.fromString("0xd12402219A17524188dce09A5F316FEA1A08A565").toHexString(), {
  token0: Address.fromString("0x18efc1f2A42335A84edf4b51E553046a1F5D9ed1"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x2b5861fd7FD65b57dE0009Ec0d9045bA49AA5416").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xd7E6B9c52cD0a3bA8b9a77B2769F82fEAc89041e").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0xe8281794Be7d132Af5a0292DbB134C7611e6e9d2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF753A50fc755c6622BBCAa0f59F0522f264F006e")
})
pools.set(Address.fromString("0xE3f8d7C3564109F8330090FC6E94fAAfED20Cfe5").toHexString(), {
  token0: Address.fromString("0x2e17b8193566345a2Dd467183526dEdc42d2d5A8"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x85E6Cb28940A7637771d67b8d9F9846Dd7Ad052d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xB548f63D4405466B36C0c0aC3318a22fDcec711a")
})
pools.set(Address.fromString("0xA7013b351B97BD9ba1d3DA1Fa19BFFbc79B5c339").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x3d9900CB1CD4adfB8095Fc657172Eb2888dDFE20").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xB0B195aEFA3650A6908f15CdaC7D92F8a5791B0B")
})
pools.set(Address.fromString("0x0794495BC35B28D9337dbc34c72B7103C676428a").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8")
})
pools.set(Address.fromString("0x08b21238e0C727BD8CA094fcB6Ab9f772716e3c9").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0")
})
pools.set(Address.fromString("0x0DC27C17d3E859b496665b1D5e62281f844f466f").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xeb51a729CA01CC25057953eB85491197BDD883a6")
})
pools.set(Address.fromString("0xBAC592A8774f5469CAd08a30c7e288c460efe027").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xd52f94DF742a6F4B4C8b033369fE13A41782Bf44")
})
pools.set(Address.fromString("0x896Aca4B614c20DD5ef7450ab7586D87A95241FA").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x6c1f2Ed70bCc0928059744EfC5B28579dA38F0e0").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x5fEE7dDEcC31F56aD66d7E2E61bB6Ac70F312d3c").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xE4F27b04cC7729901876B44f4EAA5102EC150265")
})
pools.set(Address.fromString("0xc50766d0b74Aff7aa063598CA7F6D134EE154B74").toHexString(), {
  token0: Address.fromString("0x0DD43edC0A46542D977E6c8E030f61953d37dA2D"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xae0eBAA4162941837Bb56EDa1Bc9dc6850779bd2").toHexString(), {
  token0: Address.fromString("0x6F0fecBC276de8fC69257065fE47C5a03d986394"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x6F1029C8f41f43E6bAd56bC240Da97C30714D567").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xab7bAdEF82E9Fe11f6f33f87BC9bC2AA27F2fCB5")
})
pools.set(Address.fromString("0xCc9397675BD4D373996175fCc03bFF775c1440E7").toHexString(), {
  token0: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"),
  token1: Address.fromString("0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE")
})
pools.set(Address.fromString("0xDD010e4E8a1446C4959eDD4eDFFCC6953D0454ae").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7231eD2210f2D87Dd16C7dbF59c0Bf53325CF0BD")
})
pools.set(Address.fromString("0xD9a4892b6f59650443A63DeA90fB2037db1187F2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be")
})
pools.set(Address.fromString("0x5c0D07d581E613870E77EE37970FD769f5e8FC6D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xEc6adef5E1006bb305bB1975333e8fc4071295bf")
})
pools.set(Address.fromString("0xc62d5Ff62276eedA3C2d24F6B7E384355Ec52A5E").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xcdB4bB51801A1F399d4402c61bC098a72c382E65")
})
pools.set(Address.fromString("0xF5d63F66a36be31A106631F276794223B8Ce5280").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0x1c81e81365fc34d68AE9321Aab584E4850Cdc3f3").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xd07072E285cA9bB0DC1D1d39a3F37ae1E7d109F8").toHexString(), {
  token0: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x37A2617ECC11feB76Dec603A37fFb7500f236388").toHexString(), {
  token0: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0xe89423F4A4811D09Dde5D1b11D8c8735A0eCe7af").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x733b295c29b83a3e44ab64cEA845dc2BF1d45E5C").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xa715ED37A224952a756Ff9567B5e5449d8742C6f").toHexString(), {
  token0: Address.fromString("0x66483Fe029A3Ae13a56A417F177C0e01392B34CF"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x0eF1c438B56A4Ae023087f1ffaA47D14283b1348").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x66483Fe029A3Ae13a56A417F177C0e01392B34CF")
})
pools.set(Address.fromString("0xfd7F6Ec2C10aa67784Bd0F96d13052C820Bb6DA3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB7917A812eB1Ac911232cF7A448eC7A9dE4cc28a")
})
pools.set(Address.fromString("0x0390280b4A49b0061F9C39eB06254dBD18e03A8B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x858Cb87026775b02EC283b95FF4406F6A68944A5")
})
pools.set(Address.fromString("0x697b8746788007DB712C43B057b45908214A464c").toHexString(), {
  token0: Address.fromString("0x05D87e5B68bB72165d0e0C922DB9c79CDAa6977e"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x36e42931A765022790b797963e42c5522d6b585a").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x920Cf626a271321C151D027030D5d08aF699456b")
})
pools.set(Address.fromString("0xd0DD95801d74E159415Ed3fB918Bcbd3d78C297A").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x920Cf626a271321C151D027030D5d08aF699456b")
})
pools.set(Address.fromString("0xD7294c3eA1426298A50ceA50dF5bCDE96571C88B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0xF9D115ebC94A9B7Fac30A65e0DB6F4F0F3AB0a25").toHexString(), {
  token0: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb"),
  token1: Address.fromString("0xdE48b1B5853cc63B1D05e507414D3E02831722F8")
})
pools.set(Address.fromString("0x418cf6564D1C757A420d5fCD252F690b30A2cac4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcdB4bB51801A1F399d4402c61bC098a72c382E65")
})
pools.set(Address.fromString("0x73dF5Ed0e07Dd4959f1EB2923Cf32C66a439B42C").toHexString(), {
  token0: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x1dc9615579c07774680DAEAF8B99D11d887d39E6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xBe38b37E2a784C06d34eCBD43670EB20B40fe791")
})
pools.set(Address.fromString("0x0AD4A385ee8BB998827BEBce8134833e9F43C764").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xBD8Ac2a59551684B801885e4Ea1c746c3fA92A34").toHexString(), {
  token0: Address.fromString("0x4E720DD3Ac5CFe1e1fbDE4935f386Bb1C66F4642"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x678F65FC75dE0D88a4eeFA426b478d4aDB7c7684").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4E720DD3Ac5CFe1e1fbDE4935f386Bb1C66F4642")
})
pools.set(Address.fromString("0x922E9AEF7a319ac2Fe5FFFcef0FC10792Dc5a542").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4E720DD3Ac5CFe1e1fbDE4935f386Bb1C66F4642")
})
pools.set(Address.fromString("0x28C37cb38640D3624e6D952A61536Ea74B566eAD").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4E720DD3Ac5CFe1e1fbDE4935f386Bb1C66F4642")
})
pools.set(Address.fromString("0xA1D1300d76e0bA69f42Fd939275c35f09e75F8C4").toHexString(), {
  token0: Address.fromString("0x5d47bAbA0d66083C52009271faF3F50DCc01023C"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x92CF9BeDb85D93ba5088097cD6aFAb9394F9f531").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xab7bAdEF82E9Fe11f6f33f87BC9bC2AA27F2fCB5")
})
pools.set(Address.fromString("0xB9393a067a48F5987C9b4e3aecC45A49f41129c9").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xF050D366106ECBf7a8770258bc33a5Cdb2051590")
})
pools.set(Address.fromString("0x9F8C153Bc1CEC362f105d454101B4c603211206E").toHexString(), {
  token0: Address.fromString("0x33588b036cF6fC8afb09D535416142040baD0a9B"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x04d6e40bdB47691477635fc9Ba15129BAFB590bE").toHexString(), {
  token0: Address.fromString("0xcB59a0A753fDB7491d5F3D794316F1adE197B21E"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xe588adD6432Dc1A9C717D37DBCE858a6DeD48656").toHexString(), {
  token0: Address.fromString("0x5d47bAbA0d66083C52009271faF3F50DCc01023C"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xDd3339b9e8BE240bBA0910fdb5BEBFd168C42516").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xab9C81DeeA71f767C8Ba2b094Ac2Faa959180672")
})
pools.set(Address.fromString("0x285129054A4f0E7f856cEEaCE13643EA65811FDD").toHexString(), {
  token0: Address.fromString("0x5d47bAbA0d66083C52009271faF3F50DCc01023C"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x2582886F65EA71ECd3CFfD12089C55Fb9C75E9db").toHexString(), {
  token0: Address.fromString("0x73cb180bf0521828d8849bc8CF2B920918e23032"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xc366EC578789D5A802ecb966F69bbF8441b7E112").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xB0Dd149B1d833b4109f96EC6CFC4275e760b5c82").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC")
})
pools.set(Address.fromString("0xD8aFA96459787fD45165b0b912407D136b866f00").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0x6b4385620C9F2e5441481afC7369e28E8EF7f7C8").toHexString(), {
  token0: Address.fromString("0x217D47011b23BB961eB6D93cA9945B7501a5BB11"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xe41099689Cf6700cC31019e0671947410cFEa8c7").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be")
})
pools.set(Address.fromString("0xF4953E820C3594c0aCC1F40A153044f12B7a90cA").toHexString(), {
  token0: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691"),
  token1: Address.fromString("0xcdB4bB51801A1F399d4402c61bC098a72c382E65")
})
pools.set(Address.fromString("0x876da1FCC948C7d6B0237260264918b8FEDC470c").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x920Cf626a271321C151D027030D5d08aF699456b")
})
pools.set(Address.fromString("0xea4eF83c2d723367659A23e578D317A4B77f9004").toHexString(), {
  token0: Address.fromString("0x1183d29D00AAabFb9495BD0F5eBF2b3CD3e6DB3c"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xABe5713D370bEFe08a1734D1c9cE4eb2f466915C").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278")
})
pools.set(Address.fromString("0x77e557a4c9FFc7282e2834f30AfF18850D5D6e40").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xFf733b2A3557a7ed6697007ab5D11B79FdD1b76B")
})
pools.set(Address.fromString("0x0ca747e5c527e857D8A71B53B6EFbad2866b9E04").toHexString(), {
  token0: Address.fromString("0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x7A535c520C9d85116f77C609c3c0BB8F8AEA44Ef").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691")
})
pools.set(Address.fromString("0x2C8ec4342b5a78120dFc437A5aF9Aa3c9385Eb4e").toHexString(), {
  token0: Address.fromString("0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3"),
  token1: Address.fromString("0xbfD291DA8A403DAAF7e5E9DC1ec0aCEaCd4848B9")
})
pools.set(Address.fromString("0xB968081980D8134611cC047f4FDC416FD8B60629").toHexString(), {
  token0: Address.fromString("0x0A1e9d60AAAAAD20ef57923B7323dCC1CC6B2ED6"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x225C761210204a3Cc242fb4a2f815aA6dEaced50").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0x4A8AD5F68Db62bB75a80463b63e2aCB134530e96").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xAa98ff5AEaF46A4f4CaC556ce64Aa325eA9aDEfF").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xE4F27b04cC7729901876B44f4EAA5102EC150265")
})
pools.set(Address.fromString("0x4C445209C7A77934AD7b0c9cD051684196285Da5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcdB4bB51801A1F399d4402c61bC098a72c382E65")
})
pools.set(Address.fromString("0x6305cbA13D6C8A056692411BBF15F75C88c63344").toHexString(), {
  token0: Address.fromString("0x3F56e0c36d275367b8C502090EDF38289b3dEa0d"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x4Ddf87c5eb36F2FbecFAEB377a293a97E30BF901").toHexString(), {
  token0: Address.fromString("0x4Fd63966879300caFafBB35D157dC5229278Ed23"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x1CdF8A5fCBEE5f9151Eb6a80bAb42d26F698f60d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4d224452801ACEd8B2F0aebE155379bb5D594381")
})
pools.set(Address.fromString("0x34717477D693C5b01053368218376d2D42C22e6A").toHexString(), {
  token0: Address.fromString("0x0b5740c6b4a97f90eF2F0220651Cca420B868FfB"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x26484FC9a0f3b596B5dea74BacC29331D724825D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5d47bAbA0d66083C52009271faF3F50DCc01023C")
})
pools.set(Address.fromString("0x306B2eF0704BeD06D71F35476c0416063272BCBa").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xFBc4198702E81aE77c06D58f81b629BDf36f0a71")
})
pools.set(Address.fromString("0xA9E032142BE60cC3E66e158c3519635F99a90bEb").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0xFBc4198702E81aE77c06D58f81b629BDf36f0a71")
})
pools.set(Address.fromString("0xbC36E84304094D46A1530c4dc5491903Df5A4aC2").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xFac8164Be38246458cca4c8aa3d979729777d9De")
})
pools.set(Address.fromString("0x509B615346D6F430C03fA0D19de9A7Aea9dc473f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4E720DD3Ac5CFe1e1fbDE4935f386Bb1C66F4642")
})
pools.set(Address.fromString("0x35B11AFAFe71E5d6a0194d8E4B259B1D70e87b1D").toHexString(), {
  token0: Address.fromString("0x3E29D3A9316dAB217754d13b28646B76607c5f04"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x086c67876C42B216b52e3D327606bD95607b508B").toHexString(), {
  token0: Address.fromString("0x5d47bAbA0d66083C52009271faF3F50DCc01023C"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xB0647A63a686B0fA19e464b20c1fa039cF43c101").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0xc55C007871DcDAb414c5f645204EC895D8b2E347")
})
pools.set(Address.fromString("0x432697D6E0369928E2a9CA7F7300788bdAD552fB").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc55C007871DcDAb414c5f645204EC895D8b2E347")
})
pools.set(Address.fromString("0xf2Af86491A5e2C15cf8450C0139514Bf9C3f9d4b").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc55C007871DcDAb414c5f645204EC895D8b2E347")
})
pools.set(Address.fromString("0xBf4De9BE3Fdb9C544FF6AFaDC086590dD7c7a664").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619")
})
pools.set(Address.fromString("0xE2b4b82aaB1b4c3e5931452eA57cD76393ca5afb").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x65559aA14915a70190438eF90104769e5E890A00")
})
pools.set(Address.fromString("0x1201bD56bBB30DC16457Fc7Ff3d905bD5111cb8F").toHexString(), {
  token0: Address.fromString("0x3e7eF8f50246f725885102E8238CBba33F276747"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x9ea3deB1001d6f1A031CA778d71B2e3aDc63b545").toHexString(), {
  token0: Address.fromString("0x920Cf626a271321C151D027030D5d08aF699456b"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x6839777aCbB0cC972aEEA3D64AE49D9e01A9550C").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE")
})
pools.set(Address.fromString("0x6f80F766A485a28Ebb93B0A769589b91C86F039c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9f70cCabBeF69aB57Cc4f43BAB814b1c29624aDd")
})
pools.set(Address.fromString("0xF2287462a6096d82aBE722aebDE616539B089668").toHexString(), {
  token0: Address.fromString("0x5d47bAbA0d66083C52009271faF3F50DCc01023C"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x0193e65b5D94aEC601b54f68d9D1581Fc686D08F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0x7467A629818460b383F8805B4637b106346860a0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xEcF46257ed31c329F204Eb43E254C609dee143B3")
})
pools.set(Address.fromString("0x7a5D3DA4658e9315E7d385b8A25D92Cece6e6fab").toHexString(), {
  token0: Address.fromString("0x8711ac690984BAdC42e7AbE71f351b5Ac2a2Ad0d"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x641B7A9A3033aeF992803B1c3B2794c2A82E5e87").toHexString(), {
  token0: Address.fromString("0x2e7691a1D8f9dD340531a99bFb7Dd1E7e4C91130"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xd350aEB78bB0Da6A05c36D3bbAB9Bb1168d37d02").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278")
})
pools.set(Address.fromString("0x93374c8C02D3f61d09d2ab6390E57441E0563EF5").toHexString(), {
  token0: Address.fromString("0x217D47011b23BB961eB6D93cA9945B7501a5BB11"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xCE341FBDF46eb4096Fb71d1a2211EE86967bcc23").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x2BB4B4C8fdEe8b6691969ED508C08b4E65E41a31").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0x1Bbb854D4FB205D8dA09CBC7Af0287DcCAe9825a").toHexString(), {
  token0: Address.fromString("0xcdB4bB51801A1F399d4402c61bC098a72c382E65"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xF9f6387865a92fAea793Cb5eFC164E207E64c17B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x4D1108eB04014b671f8C4C18bF2eABa654c8bCeb").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x6eb260067a0fD42AeB128E37440F77f864Aa7442").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xB153FB3d196A8eB25522705560ac152eeEc57901")
})
pools.set(Address.fromString("0x1Be94a9C394e83ee7728790E9B6405A26e026528").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xFdb794692724153d1488CcdBE0C56c252596735F")
})
pools.set(Address.fromString("0x61d6674a0Ed328315Fa4282474DfBfaB12d2221d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xFFAb3265Aee688768a9c6641E0e710651755f549")
})
pools.set(Address.fromString("0x62Fd2d77409AC5de6a7ECe721a2806d2eeaEa067").toHexString(), {
  token0: Address.fromString("0x0b103348BACe35D21e1766515032331B9C2c1009"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x0422143f7ea63b61Ac1367E54b8c8e5397B60c8B").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x4Ed706861396F5b17c4f075e04e3595B21d23d1a").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xc55C007871DcDAb414c5f645204EC895D8b2E347")
})
pools.set(Address.fromString("0x29C2326B4AeE663a485f1CFA86C1Add57AB9164f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xEcF46257ed31c329F204Eb43E254C609dee143B3")
})
pools.set(Address.fromString("0x4C429e29433179a68774a530113D20F4b6BC8aEf").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd75784D1449C7dEb6ac73619509Af381d4db1658")
})
pools.set(Address.fromString("0xdF3c834db0A04BbB28746f4214EA9f6811F30F58").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x6EDF48F0BfaD3041aC0977fF6ab9e65d17F886Ed").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xCA8e7B28C60f2c70110D1d5F5d332Bd5A5e9DBB4")
})
pools.set(Address.fromString("0xf7b605c89F9F822Fd22ED31C2deB5240D197e462").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xCA8e7B28C60f2c70110D1d5F5d332Bd5A5e9DBB4")
})
pools.set(Address.fromString("0xc3098c95eDF2C3EF98320Aa13F906DD31A48b76D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x45Ea3209A2f0cc740eB39295b9fCa49786E7758e")
})
pools.set(Address.fromString("0x0D807F4C69B0210b2ffced7EC264cf1D7c3461fb").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xc3bE53961d35E8507A092d67F26ACd1eb4cFf935").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x62BB4fc73094c83B5e952C2180B23fA7054954c4")
})
pools.set(Address.fromString("0x85620507c91fFeCe0bF5B74B8EFD1414D795AD9E").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xD313511659D38596d38b9F6f2609b21eDf0B04Fd")
})
pools.set(Address.fromString("0x13B684861220c12AAb3c926361e4944A8A756562").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdad4Aae561C2912730723A442ca339C6FB029B40")
})
pools.set(Address.fromString("0x0BA09E60D30305953897cD75b6A454bC3eD4510F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4Fd63966879300caFafBB35D157dC5229278Ed23")
})
pools.set(Address.fromString("0x3a65674B0a94eE21c043bE82A3892e2D1e319d07").toHexString(), {
  token0: Address.fromString("0x22896ecfc1387A63BeF5a5a3102DF0Ae3694A0a6"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x0E13BB7454bbaBA80608831B0a6aF66C482d401b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5FF3558fEA4FC375F3944c96d52962aA5e21259a")
})
pools.set(Address.fromString("0x2f405C8F07e1CEfa6be3983E6f86C85DD5CB9Bfd").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x715DEecb661035591C52A753610bb4770c8B0e97")
})
pools.set(Address.fromString("0xEE4115b87f0B77dd3bf73469b267cDe541D80b82").toHexString(), {
  token0: Address.fromString("0x1E7009aFc4E83522d07F7E6b5259835A3AbB578e"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x28303b8fDA3c5A949437bEA8a37b1d6f968fB95a").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC19D4CAf4814FB88cf4EBba1762E1baE0A8ab79d")
})
pools.set(Address.fromString("0x39Df42b520BF004320539ddf53B588769314FDE6").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x4d2cCc158f1Cd8f795362fb513eAbAFeC787511d").toHexString(), {
  token0: Address.fromString("0x5d47bAbA0d66083C52009271faF3F50DCc01023C"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xA5Cc031f52F4458237C107C82E5f3C0870a8B354").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9A2a5df00215cBf02BFF7F4427E63db6B461be71")
})
pools.set(Address.fromString("0x21A74729df84C025D45B1BC3d401acF11f95356c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x77ddb68d41b6EadBc9F3B172a9a6B75bDFdC8E00")
})
pools.set(Address.fromString("0xd1A1993Aa48c0D771d283188ac36AeC7577bdC59").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xd3Ac016b1B8C80EeAdDe4D186A9138C9324e4189")
})
pools.set(Address.fromString("0xd6fe70479238da7fcE73b580b88F00C37A62f9ba").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x73cb180bf0521828d8849bc8CF2B920918e23032")
})
pools.set(Address.fromString("0x0FC3fd2790438D172fB87016677007B2C095851E").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc0a7CE446774f6FeaaAdF9b68F164d0B992bC795")
})
pools.set(Address.fromString("0x2ec7A04D6Cc80D6592bF3de434F07125F872DEF9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x77ddb68d41b6EadBc9F3B172a9a6B75bDFdC8E00")
})
pools.set(Address.fromString("0x92De8C4a7Ac4d697161350d5810a603C3e649a9b").toHexString(), {
  token0: Address.fromString("0x00a35FD824c717879BF370E70AC6868b95870Dfb"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x4F204691D8266F080f3df2f7865DA121dA156CB4").toHexString(), {
  token0: Address.fromString("0x4E720DD3Ac5CFe1e1fbDE4935f386Bb1C66F4642"),
  token1: Address.fromString("0x73cb180bf0521828d8849bc8CF2B920918e23032")
})
pools.set(Address.fromString("0x0a302b29707a56f638948bC5E7652295aEbbb404").toHexString(), {
  token0: Address.fromString("0x0F5d45a7023612e9e244fe84FAc5fCf3740d1492"),
  token1: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb")
})
pools.set(Address.fromString("0x0684cf4e739F91Da674f0509B1f624BA0B273039").toHexString(), {
  token0: Address.fromString("0x79AF5dd14e855823FA3E9ECAcdF001D99647d043"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x8f1aae803139603735785851AA71eabe0E5e7345").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9485aca5bbBE1667AD97c7fE7C4531a624C8b1ED")
})
pools.set(Address.fromString("0x6e5db687c2f089fb68232B08B3b669659C7c836C").toHexString(), {
  token0: Address.fromString("0x75E5509029c85fE08e4934B1275c5575aA5538bE"),
  token1: Address.fromString("0xB85C51F89788C1B3Bd4568f773e8FfB40cA587Bb")
})
pools.set(Address.fromString("0xa1FF0b9a267D058e689CB639Ea5E7A19FC6d52DE").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xBe788FeAe3C004EE759149C55Db2D173407633f2")
})
pools.set(Address.fromString("0x83de573F16E7cF978D3F4bc61f080ac392825FB3").toHexString(), {
  token0: Address.fromString("0x4E720DD3Ac5CFe1e1fbDE4935f386Bb1C66F4642"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x9c5d7462ff653F46D0b2C29A3165D292A942d949").toHexString(), {
  token0: Address.fromString("0x30c2cfaAB750e36a1408385b934EEcf99eb75328"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x42da0f9009BEFBcaE5c970746aA1892F4A54eE3d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6C67B73EbA5D52c9a59E290fB8fF65D040a6f59b")
})
pools.set(Address.fromString("0x518717043AfbDE172cbbB206DBC9845A29b7b545").toHexString(), {
  token0: Address.fromString("0x0F5d45a7023612e9e244fe84FAc5fCf3740d1492"),
  token1: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb")
})
pools.set(Address.fromString("0xf4887710843dc21Ade4263B55137a22b44166AC0").toHexString(), {
  token0: Address.fromString("0xBdf1166484c162601d3FD9C90e394137dfF2bc14"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x51b40019a4d156BF380B4B04a52fC14274D1AdF9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB574002cd72adDBD12319760eEF0783231439f04")
})
pools.set(Address.fromString("0x004c2Dd581982982E3bA2F09E9A5205d3420Ea43").toHexString(), {
  token0: Address.fromString("0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x4F409d0d0D9FEac7B2624fEC1ECB1b4CC9Ea3a72").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x65559aA14915a70190438eF90104769e5E890A00")
})
pools.set(Address.fromString("0x6420e488394980072CA68001084330188001A43c").toHexString(), {
  token0: Address.fromString("0x65559aA14915a70190438eF90104769e5E890A00"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x7869087c8cBB1444C083e3B0772F4E0174F342Cd").toHexString(), {
  token0: Address.fromString("0x00d83aba1Ed1ACBCC293A2F6946d20FC6B6EA178"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xC0aF6bAddb9914f7A2FD27A2d4bF2b5b5368341a").toHexString(), {
  token0: Address.fromString("0xab7bAdEF82E9Fe11f6f33f87BC9bC2AA27F2fCB5"),
  token1: Address.fromString("0xBdf1166484c162601d3FD9C90e394137dfF2bc14")
})
pools.set(Address.fromString("0x71b45A47Eed5c40Aea63930A5a02e6f87A4277b7").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x863fd89ac0F93def5A8F833D07D59AC14738019C")
})
pools.set(Address.fromString("0x99886a66926D6a6E9240A67225073926e5D0B02f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x909ceb5Bf90c142211BC8981Fe7F9000aCef51C7")
})
pools.set(Address.fromString("0xa2b02091743F3F436385f82b4aaB74be11126026").toHexString(), {
  token0: Address.fromString("0x103b3990b4b3F45a6Fa89D48095F4D8FBE72675d"),
  token1: Address.fromString("0x8Eecf4b16F5b727169005344B2C123653396d7b4")
})
pools.set(Address.fromString("0xE92E3a5c2C70069289B117b57e79628B8dB8F00c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xFB21B70922B9f6e3C6274BcD6CB1aa8A0fe20B80")
})
pools.set(Address.fromString("0x40394DB4f6ccE4A5AB3E93583f7d3430E0370b75").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xe106e99472b2DEe098E5b8bBCD5d23331F346312")
})
pools.set(Address.fromString("0x6408b4846dBE71e5b4B095b4FDEE5cA58447F1C8").toHexString(), {
  token0: Address.fromString("0x1DB2466d9F5e10D7090E7152B68d62703a2245F0"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x0524677e6219c56B15832dfa9c8C9D79a2068AA4").toHexString(), {
  token0: Address.fromString("0x0F5d45a7023612e9e244fe84FAc5fCf3740d1492"),
  token1: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb")
})
pools.set(Address.fromString("0x59f1148a9fA3761391641E16277CD7Ab6eD02E6F").toHexString(), {
  token0: Address.fromString("0x1DB2466d9F5e10D7090E7152B68d62703a2245F0"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xa4027ddf9E447674D034e459319357110574F121").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0xfDeFFc7Ad816BF7867C642dF7eBC2CC5554ec265")
})
pools.set(Address.fromString("0x84E9ca2814d544a4eDE5c4A50435DBf219784f14").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xE71C470709151d5EC97D83730c921dD97bf153Dc")
})
pools.set(Address.fromString("0x1A940b5541C8034F6d3173B6D6215E9427a85128").toHexString(), {
  token0: Address.fromString("0x860AFbB7E0B8Ca626c22cA519A3F9989E28b16bd"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x1A2b195E4d41fB505511e25Cd0F769C072F478F7").toHexString(), {
  token0: Address.fromString("0xBdf1166484c162601d3FD9C90e394137dfF2bc14"),
  token1: Address.fromString("0xE71C470709151d5EC97D83730c921dD97bf153Dc")
})
pools.set(Address.fromString("0x49892ce5DDa76B64d914931232E8d28Fd7FBE20c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39")
})
pools.set(Address.fromString("0xb05a4922645f159C433DBa2a797C3B02381Df64B").toHexString(), {
  token0: Address.fromString("0x1DB2466d9F5e10D7090E7152B68d62703a2245F0"),
  token1: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05")
})
pools.set(Address.fromString("0x7982f67D6b1908b5ff2c681627c89F4d15aB4402").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xA53D0a8759b5454e5f8884945531A59778887546")
})
pools.set(Address.fromString("0x5A5FEb0Bc4A4936BE137D330c2Cb3457727C2B16").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x78Ee017748Ce8a0C81DFA28C63062601380923e5")
})
pools.set(Address.fromString("0x7142dFd2e1d6B26A6D59E4b446D055C334841b9D").toHexString(), {
  token0: Address.fromString("0x41d7b13685ABb52c3b8d36130957dB3b75CAa7E5"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xAe00b571050774C20E245777c1f3a6E6438825bB").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39")
})
pools.set(Address.fromString("0xe21B19789C701aC93de170D5f30f297C4189fcDc").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39")
})
pools.set(Address.fromString("0xC0deC08cD0B2C52b7fE0025DE126c794E9DC39CD").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39")
})
pools.set(Address.fromString("0x614886D5887146940840F7171d5e85Cc2E510810").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39")
})
pools.set(Address.fromString("0x9EBE732A31692209bD65129F358FaE9Ac607cF5C").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39")
})
pools.set(Address.fromString("0x0Cb98585eA88d3aB4Cf9DFd73a8c4a673Eda54d8").toHexString(), {
  token0: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"),
  token1: Address.fromString("0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8")
})
pools.set(Address.fromString("0xE9033c0011f35547FA90D3f8a6AD4B666A590759").toHexString(), {
  token0: Address.fromString("0x00F932F0FE257456b32dedA4758922E56A4F4b42"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xd55C502ECb8BC0E92407bBAfC2EB8244a374D526").toHexString(), {
  token0: Address.fromString("0x1adD09eacE5d0dCE3EFd805cF311bB5DdeCED338"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x53dCECC69b75782d99A488F601f56B2107e960EA").toHexString(), {
  token0: Address.fromString("0x1adD09eacE5d0dCE3EFd805cF311bB5DdeCED338"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x1067288dBED869C3AA41187d27a9544918eC9519").toHexString(), {
  token0: Address.fromString("0x1adD09eacE5d0dCE3EFd805cF311bB5DdeCED338"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x761a7Be5Dfa101c98fD7Be2988dbb8651eC6929E").toHexString(), {
  token0: Address.fromString("0x1adD09eacE5d0dCE3EFd805cF311bB5DdeCED338"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x6be3d640f472962d8D937507DA112c573b7BA431").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39")
})
pools.set(Address.fromString("0x41c0959b5f13944E3571096C52EC5AAD593aeD70").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39")
})
pools.set(Address.fromString("0x5374aDEeD7b3914678CdDF04a2630Cd39ab3Db31").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39")
})
pools.set(Address.fromString("0xaD13b2439Be72b041E278f0cBceA758d505cF903").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39")
})
pools.set(Address.fromString("0x5f9C4688A457A93be50469207f9D3a2D88203487").toHexString(), {
  token0: Address.fromString("0x375488F097176507e39B9653b88FDc52cDE736Bf"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x06B7303dB322a0D7EBE25ac44f8f6f96C0B7b7EC").toHexString(), {
  token0: Address.fromString("0x5028c667D1C9DA0A9090f16E1607F60B7717FC6a"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0xe34992249844FeB6aACc58E66806DB23E41C6461").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7177807F4CC9f41f05685148264FD7033d1324B2")
})
pools.set(Address.fromString("0x44D931858B7a76945eE530B99ee5EC763f52eeC8").toHexString(), {
  token0: Address.fromString("0x7177807F4CC9f41f05685148264FD7033d1324B2"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x248dc82175fd8C598dD47d7716CE8f19207e055c").toHexString(), {
  token0: Address.fromString("0x0c5b4c92c948691EEBf185C17eeB9c230DC019E9"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x5A349B541A9FDb8854494bADAdF4c781DDB183BA").toHexString(), {
  token0: Address.fromString("0x73cb180bf0521828d8849bc8CF2B920918e23032"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x3506498f2B43D571e2e18F5eDa99b40454Fa2a1A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xD1917629B3E6A72E6772Aab5dBe58Eb7FA3C2F33")
})
pools.set(Address.fromString("0x493675CC476de65de88dF7CaD84197297612a3c2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xAF9fE3B5cCDAe78188B1F8b9a49Da7ae9510F151")
})
pools.set(Address.fromString("0xf44B18C5c091DB8aD854d92F4D66958C3E690984").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xebcF7C2ed6617C8F93e9E5093F70b83c02868250")
})
pools.set(Address.fromString("0x9cc44304c425669d6b32c6F5A153Cafa0af1453C").toHexString(), {
  token0: Address.fromString("0x375fb3948bE218365E80D2E1e3FBfc921cDf327a"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xa4Fbdf5a32c18AA367FC52fCC31486EDA2FFCA33").toHexString(), {
  token0: Address.fromString("0x061b87122Ed14b9526A813209C8a59a633257bAb"),
  token1: Address.fromString("0x12fC671AE22693f3283BcE0DA8F61b0ec05A400A")
})
pools.set(Address.fromString("0xC7D69bB5814Ce3C08559640Aa8451cc4B615aD33").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x5d47bAbA0d66083C52009271faF3F50DCc01023C")
})
pools.set(Address.fromString("0x024e360149a195DE3A604d1598736dA94BaFEea3").toHexString(), {
  token0: Address.fromString("0x217D47011b23BB961eB6D93cA9945B7501a5BB11"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x23D67fF3Dd529ade61818fb5312f64762Fac47eE").toHexString(), {
  token0: Address.fromString("0x5d47bAbA0d66083C52009271faF3F50DCc01023C"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x766854992Bd5363EbEEFf0113F5A5795796befAB").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x03A9DC118b231480058e7A3b051042ec83663794").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0x95D7d146aE40D4822C2750276B54B6EED530d374").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x2d423FFC2F7c4E84a65aBA099f6C7fEa93A2e55b").toHexString(), {
  token0: Address.fromString("0x34Cdee764f70E81689D873fC2159B5Cd819Aa7f4"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xD0cD19b74Fd1Ed537277662b407bCc54e593aADc").toHexString(), {
  token0: Address.fromString("0x0F5d45a7023612e9e244fe84FAc5fCf3740d1492"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x5aD7640DF6b6a177442904B146C1E9c93055fAF0").toHexString(), {
  token0: Address.fromString("0x0F5d45a7023612e9e244fe84FAc5fCf3740d1492"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xD181331C091a9e9A1C666d6E4cc2ed7AF088DFaD").toHexString(), {
  token0: Address.fromString("0x39FdE572a18448F8139b7788099F0a0740f51205"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x794772f52629bB55075da37C6861AF739c5A2808").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05")
})
pools.set(Address.fromString("0x68B35a85b226190104496d40C9b2dC23F78730AD").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05")
})
pools.set(Address.fromString("0x25Bd78d2189a19Ce1742c252D5C5b1cC4864Fea9").toHexString(), {
  token0: Address.fromString("0x29FAF5905bfF9Cfcc7CF56a5ed91E0f091F8664B"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x610791B167671bd44516afD604d0e99DB0d88712").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xEB8d36a32E9c23064cbB477E74413C8643a6f254")
})
pools.set(Address.fromString("0x99f7e69DbCf5f98C8F96f2D372989996db7f065d").toHexString(), {
  token0: Address.fromString("0x3F56e0c36d275367b8C502090EDF38289b3dEa0d"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x66ba24c2eAA5210b695aDE717412C3ad59b98583").toHexString(), {
  token0: Address.fromString("0x1EBA7a6a72c894026Cd654AC5CDCF83A46445B08"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xE6281ad9B09D8d966Dff2B53B2b4aeA7DbB3d031").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xF98dCd95217E15E05d8638da4c91125E59590B07")
})
pools.set(Address.fromString("0x0680547BAD52d45f159eA2889f83aB6Ed7f9d825").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0x7B59a5D2f0Ae215233989adA5fB872d9df727ceD").toHexString(), {
  token0: Address.fromString("0x5A7eD3ce6096228a9fE1B673830e6A78C9CFB71b"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x3C8fa6585080BD35Cf0AF2152225D45e027E6699").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc96f4F893286137aC17e07Ae7F217fFca5db3AB6")
})
pools.set(Address.fromString("0x679420c54CC4806d0f480925772965746d9f9779").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xfE4860375d8186770224534B70241E9A197aa4c7").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc96f4F893286137aC17e07Ae7F217fFca5db3AB6")
})
pools.set(Address.fromString("0x3362c7E1DE2dcC109ac39a39C8CEE36727db8E7d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xc96f4F893286137aC17e07Ae7F217fFca5db3AB6")
})
pools.set(Address.fromString("0x3AC9e3c99D8233B396338CFEFc42A8695cDCA6C9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8F1CD6aA58f6135252492fEa9754AFaE0E7c8Da7")
})
pools.set(Address.fromString("0xd2Afa2ACc264fAF920B3DE27F5034470A1bC25c5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8F1CD6aA58f6135252492fEa9754AFaE0E7c8Da7")
})
pools.set(Address.fromString("0x6F652A057Dd7430A466C7450F8fb3bE411De8746").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xbeD310eA89029D19a8A59A44fF9a17392f39CC6f")
})
pools.set(Address.fromString("0x9e167EEE4912253a00151600C9eA234fd9c0CAb6").toHexString(), {
  token0: Address.fromString("0x8B21e9b7dAF2c4325bf3D18c1BeB79A347fE902A"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x870d55ab3B71E9B29893c8E1e83e8a99b39eD40D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8B21e9b7dAF2c4325bf3D18c1BeB79A347fE902A")
})
pools.set(Address.fromString("0xD04f356Cc7e185e71166567F7A305bF1a8853022").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xae7b940bE3D05Af5B5f3D19633Bb89570F2E5E46")
})
pools.set(Address.fromString("0x6728e31A231d7D9244aA6Bf2FA3a7415a9bDd235").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8F1CD6aA58f6135252492fEa9754AFaE0E7c8Da7")
})
pools.set(Address.fromString("0x610C0e8963449d62BAe223ED6af042C21241d54d").toHexString(), {
  token0: Address.fromString("0x1DB2466d9F5e10D7090E7152B68d62703a2245F0"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x9364Fe8Da9c905eBd2bB736ba10BBd2be7B6AA96").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8B21e9b7dAF2c4325bf3D18c1BeB79A347fE902A")
})
pools.set(Address.fromString("0x461Cd8B232e24Ee5acC51dC43c186EC58f86Be47").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8B21e9b7dAF2c4325bf3D18c1BeB79A347fE902A")
})
pools.set(Address.fromString("0xE320469a084dF41Ff262FB71549A3a372FfE8b8b").toHexString(), {
  token0: Address.fromString("0x5d44E2238df418aC96879dC40d57646Fa869Eb5C"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xaBf62164FEA08C00F36Aa0c4F697A6422ad75baf").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd652776dE7Ad802be5EC7beBfafdA37600222B48")
})
pools.set(Address.fromString("0xd1788a1109Bd36Ab296aC104a67Bf8dC48673948").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8B21e9b7dAF2c4325bf3D18c1BeB79A347fE902A")
})
pools.set(Address.fromString("0x40ce25C4629248902512b39De21B6484D8a5d52F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8B21e9b7dAF2c4325bf3D18c1BeB79A347fE902A")
})
pools.set(Address.fromString("0x83A8CDA3d90C9a6FBdfAA1d320BCb72D2E820a5A").toHexString(), {
  token0: Address.fromString("0x0De7f9f8b361E9751994F68993a3724327855d31"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x10E2258cc9B354f00759276Dd2b8E6E7c4dB86A1").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x8B21e9b7dAF2c4325bf3D18c1BeB79A347fE902A")
})
pools.set(Address.fromString("0x947D0e90f7c23a00e436ED76e3d74d13794d1eBD").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7A047ECFC97143c704A0677bfeE0D147E9325ed5")
})
pools.set(Address.fromString("0x69702c30988f0770A8cE36fDe39c240d40dDCA8f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF5D4E0431E49d9EaF6e90E706eB61a4814172106")
})
pools.set(Address.fromString("0xe41fB355d21c53626F70e722fDce7607dE4C1E24").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7C8A713FD27b7E4bFDA78ce85Afd4B21877b4955")
})
pools.set(Address.fromString("0x2a2229b57B240e074d71F75473676c03dcF2EdD7").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6344006b978731dF4797c549Cc6348502CEB8a09")
})
pools.set(Address.fromString("0x58d1c26FBaB323C8733b5fDA423440d5b7D82B1F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4a570ae0071885CD1fC118EeE640307A6bAb982a")
})
pools.set(Address.fromString("0x51BA82fa3F9Bcfe93Ac05d564f7F4b10F7295A4A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x99Bb95D50C0d0623e65039497F7C3B37023Ec707")
})
pools.set(Address.fromString("0xD355Acb4BeA2673C4A0Ea5b8027D97231C522CA6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6348a7A228BE96609E83874EAf3aC8A002a8D7Dd")
})
pools.set(Address.fromString("0x353f695416a49F6a42e44b983351C3879Dec642A").toHexString(), {
  token0: Address.fromString("0x08fbf978F8B4a918148C995466763C37e113da10"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xA7E3Cb127753e0D9cB0317241eCEA340aB23f409").toHexString(), {
  token0: Address.fromString("0x304d15B5EB3793dBd507994231006a023b030343"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xdc6c7D51Fc9798f1c9799A4C0068750c721D7888").toHexString(), {
  token0: Address.fromString("0x08fbf978F8B4a918148C995466763C37e113da10"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xE271406c621e81306712E7561256365bd026C4C8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x9485aca5bbBE1667AD97c7fE7C4531a624C8b1ED")
})
pools.set(Address.fromString("0xEB9BAAb4B5F004B59Ab120176d3A1036Cf03533E").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x676f784d19c7F1Ac6C6BeaeaaC78B02a73427852")
})
pools.set(Address.fromString("0xaD3b379036F19fa1EcC74b0dDb2D4214c9764391").toHexString(), {
  token0: Address.fromString("0x1DB2466d9F5e10D7090E7152B68d62703a2245F0"),
  token1: Address.fromString("0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39")
})
pools.set(Address.fromString("0x0bdF64F10f79D2ed3401880a0049C195C07cd35A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x437231a3b0F5E2B353DCD418a4eE2cFE0ce30a97")
})
pools.set(Address.fromString("0x6545E4aA4f93db5742AEd7b4F65Bc28EFaC80Dba").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB07f882c3e3b289d3a83b176af7bA8b998034869")
})
pools.set(Address.fromString("0xF0E0158040EC25e8DC0433390F57f1fF19c592BE").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x9485aca5bbBE1667AD97c7fE7C4531a624C8b1ED")
})
pools.set(Address.fromString("0x01bc00D0Ce5b0701Efa2152E24f89ccDBCfCc60B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB07f882c3e3b289d3a83b176af7bA8b998034869")
})
pools.set(Address.fromString("0xDE652c1B864C47622d1CBD74f0b95dAff1802616").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xFB28F82e01931d0799028C99eB94a8BA1DfD3418")
})
pools.set(Address.fromString("0x7c784d979656984c778cFa25Da69aF34423E765f").toHexString(), {
  token0: Address.fromString("0x39FdE572a18448F8139b7788099F0a0740f51205"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x0b6190b7A555eda6758BB51Ee2617d752DdB9971").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xFA436399d0458Dbe8aB890c3441256E3E09022a8")
})
pools.set(Address.fromString("0x57cE443625eE18CDD91869969B075AA8474546c3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4a44705a4774553d82b113385b4bE9f603612848")
})
pools.set(Address.fromString("0x55C23c2e4F044B5Bf4A17F612a6123a0D87C7a0C").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xF753A50fc755c6622BBCAa0f59F0522f264F006e")
})
pools.set(Address.fromString("0x4D4ab4010e905A642945a4b2c35E4575acF4b3a5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE2A39B52117e44312A13aeDF69322637C088d2B0")
})
pools.set(Address.fromString("0x04Aadf4C17642a9aa3A74FfA4a12B85714F69102").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x65605cE2955eBDF0Fe755430632D4ac10924675f")
})
pools.set(Address.fromString("0xBcB1eA60FA9Eb54CC61cba3204cF5dF05Ebc9Dc6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB570c7a17C31C70faE394ba6a514250C88358B2D")
})
pools.set(Address.fromString("0xdE09A3a06feAc164AA76ACCe530f5C691a292e32").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x94FF0F34371a6f1bc95F4aeA2E0D007064655B26")
})
pools.set(Address.fromString("0xCc0985fE97a2784f73aE24518d43d2Bd151B5445").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4Deab8F67F4255D495d2A4da6448d4648Ec97b78")
})
pools.set(Address.fromString("0x22E847e01ab6a0E1590677613b23E9Ce1d99E454").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD8d20292d39e44966Ba91790263812Ed0f6f4008")
})
pools.set(Address.fromString("0x9b8e1A91D8e9d27476cEb5B4381e341BC67433C5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7861f9BA08F415b7DAC8B92ff7FC4c3193531e4c")
})
pools.set(Address.fromString("0xC70eD1C0F518bF374B546B78Ec5870C4c47cAA5f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x76707882AB5A728dD0c5bF12DF471c71E871C94f")
})
pools.set(Address.fromString("0xF39f8DDaE60F299B2652F4bB00734be5202D4BE3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xCfBCE1a3Feb76AFB5752432dd2b2f523ED494cbC")
})
pools.set(Address.fromString("0x40a6D70506bA0E5E361E3913ca79A3282b3031B0").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC")
})
pools.set(Address.fromString("0x987f741774ACD3DAC89BCbE6b38bCb314900aD66").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdD69DB25F6D620A7baD3023c5d32761D353D3De9")
})
pools.set(Address.fromString("0x64bD9463650754291a7bE91dCD4A15664F9c317A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278")
})
pools.set(Address.fromString("0xEd2bf4E0bCf80b967b2e3d492EbB2154C92E6521").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC")
})
pools.set(Address.fromString("0x900F62dCE6b9D9368E2AE381aA9365242486Fe4b").toHexString(), {
  token0: Address.fromString("0x3eaEb77b03dBc0F6321AE1b72b2E9aDb0F60112B"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xA73885FcEE5379F9B50b8EFdef23FEa50f4bB6C4").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC")
})
pools.set(Address.fromString("0x7C91DE3F281791E2c212CD805F5d452247c9b9dB").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8aE125E8653821E851F12A49F7765db9a9ce7384")
})
pools.set(Address.fromString("0x2feaEc874B413F075e872E7c90B1473dD0C9EF72").toHexString(), {
  token0: Address.fromString("0x4E720DD3Ac5CFe1e1fbDE4935f386Bb1C66F4642"),
  token1: Address.fromString("0x8aE125E8653821E851F12A49F7765db9a9ce7384")
})
pools.set(Address.fromString("0x5e22419513aab52f3DbA13112cfBdFfdF05cdE6f").toHexString(), {
  token0: Address.fromString("0x39FdE572a18448F8139b7788099F0a0740f51205"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x71ffF2A6B2Ed4a93841475C63c39EBA37cD2f6EF").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x47536F17F4fF30e64A96a7555826b8f9e66ec468")
})
pools.set(Address.fromString("0xd4fED0bAB141441D56521271d0A5747fd42062Be").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8aE125E8653821E851F12A49F7765db9a9ce7384")
})
pools.set(Address.fromString("0xa3f0226a81bBfFDb8B4f90E34C7a50246E8a1920").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xd4e5F722025138F881f4C753EbEDBa7ED5F5fE90")
})
pools.set(Address.fromString("0x943A7a7d4b284dafb4f06A49C09c75392A34bF81").toHexString(), {
  token0: Address.fromString("0x4333c93c82fdfb4c636bbd0aeB0453Bd49Ca179D"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xB322718b285530980361e7bF11C9881F713686D3").toHexString(), {
  token0: Address.fromString("0x0A2a34820a15e7FF114E63F884d4A6875FDdCBe8"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x174E83fd31EB74BD3A6A080C0152bE9bB1224c9F").toHexString(), {
  token0: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xdbB4fA4c76dBCa4F11a1Bf54e065943e3888E842").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xcdB4bB51801A1F399d4402c61bC098a72c382E65")
})
pools.set(Address.fromString("0xe71317a6709911Dee731B9a8F72d1113163B5614").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD0C5B6365268e5A429688c8Ae45E36e9Ac2d2a4e")
})
pools.set(Address.fromString("0xD2A00D996BE3c3D50822Fc20111E99D20a922b9E").toHexString(), {
  token0: Address.fromString("0x36996c8642810Add6c5Bb814ED7a7cA8Abc26Fe0"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x7b17Fc02d85Cb5589EC1d1C3dB507dC557590c79").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xB0B195aEFA3650A6908f15CdaC7D92F8a5791B0B")
})
pools.set(Address.fromString("0x04a3dB2396F2a5E393D9551fc856574DE5e3528A").toHexString(), {
  token0: Address.fromString("0x3F5692715ABB893A4F6cFA4043e92b000633076F"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xFD8FEF0E7aD32F27cFC9D1ab2f00fa90F4ffE856").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x8DC431816507b68fD366aAa02832C4928D5D2d13").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xd3Ac016b1B8C80EeAdDe4D186A9138C9324e4189")
})
pools.set(Address.fromString("0x25f846fcA42F97c240B647b5F033a61D225D8Ab9").toHexString(), {
  token0: Address.fromString("0x920Cf626a271321C151D027030D5d08aF699456b"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xbbe834F4EBcC52725641e586F3b2894610aC2909").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc70F99b1afC343D0e48d48a9190d95b756acdc3B")
})
pools.set(Address.fromString("0x2432bB97DCBf9Bd78bf130f181901d6290828524").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x61775175905A0F3F7705A6f010d918B6aCDA6e00").toHexString(), {
  token0: Address.fromString("0x5d47bAbA0d66083C52009271faF3F50DCc01023C"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xb93A7AA85fb58f11bA8D411bA8D74AfBFFC3ea24").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9485aca5bbBE1667AD97c7fE7C4531a624C8b1ED")
})
pools.set(Address.fromString("0xb681Aaca824d2922335c4dC9559fFFfc1A2A6bB6").toHexString(), {
  token0: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819"),
  token1: Address.fromString("0xE4F27b04cC7729901876B44f4EAA5102EC150265")
})
pools.set(Address.fromString("0x9bd0b42c4dbb2768197262253C46A79f26409EaA").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xFdb794692724153d1488CcdBE0C56c252596735F")
})
pools.set(Address.fromString("0xA3eA6C7BdD110194D4dBBFc6A720bffAcb2215c0").toHexString(), {
  token0: Address.fromString("0x8aE125E8653821E851F12A49F7765db9a9ce7384"),
  token1: Address.fromString("0x9485aca5bbBE1667AD97c7fE7C4531a624C8b1ED")
})
pools.set(Address.fromString("0x0bB50d3e479e4682558FDb86F41A205e2c035Ae5").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xA6C457C4C6e85506E7FE11FD703d9124b3729492").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x8B2Ae2377573229Dfb008B83784C0082Bb67d91f").toHexString(), {
  token0: Address.fromString("0x9485aca5bbBE1667AD97c7fE7C4531a624C8b1ED"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xEA41EaB1D1bC3573a42DCF31C94Cf073B5C7F66C").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0")
})
pools.set(Address.fromString("0x1bA16F6BB1CA9D9b32346E9d51966a606EF21c60").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xBb586Ed34974B15049a876fd5366A4C2d1203115")
})
pools.set(Address.fromString("0x655c57B4Dc6D61e6e8d23fb5bfa947f8aEA9D623").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdD69DB25F6D620A7baD3023c5d32761D353D3De9")
})
pools.set(Address.fromString("0x01F90450c1E086A20009852592129903009D9Edf").toHexString(), {
  token0: Address.fromString("0x21b43Bf5f136335a2630e66B18DE65bab84e37c2"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x552b90d208A49cd11C64E2eB506C80590DB40996").toHexString(), {
  token0: Address.fromString("0x30070e6efcf444Bb026aa31468B71a4Ca57137Ad"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xe0172FD452B4f32206554A7F8Df90Fc3cac16E0E").toHexString(), {
  token0: Address.fromString("0x5A5fFf6F753d7C11A56A52FE47a177a87e431655"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x729BD302982099C11BC2b604C1E3a05dd46dA2bF").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9A45Dc286b8B9e1429a312220685529E6a32702C")
})
pools.set(Address.fromString("0xeCbC3965505aF5178c9Fe5DDa98aC23746011F39").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xBf970026C341Dbd489C0716F9DF8C1e0B98fB1d3")
})
pools.set(Address.fromString("0xbeC1803F84ECAee6a2723d266fadc04F4A47bAf8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdD69DB25F6D620A7baD3023c5d32761D353D3De9")
})
pools.set(Address.fromString("0xeEdF3b76deC94731379CfDEd1d6318C79B7A3019").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdD69DB25F6D620A7baD3023c5d32761D353D3De9")
})
pools.set(Address.fromString("0x8Dbb588f522eE44Bd875D559D47bce1A16040bD4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xBa2503C660b38AA49c13f52DB4f573Eb69bb9466")
})
pools.set(Address.fromString("0xAeaf12e41EC714DEA7F3457a6017097A5620A78F").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xD13aA580507039772288664A293D1FEFDAcd89AD").toHexString(), {
  token0: Address.fromString("0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x2F8bCB79667Ab51f3a7D8d11690d931272b1809D").toHexString(), {
  token0: Address.fromString("0x1DB2466d9F5e10D7090E7152B68d62703a2245F0"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xfB41987fE5926B2D285861058aB926Ef98e7c252").toHexString(), {
  token0: Address.fromString("0x213eDDE40f1895b9D63DE930eDd3967e36C15C4E"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x25C9275F0A41DBd7342C2B5B67eb7d701D37bD8B").toHexString(), {
  token0: Address.fromString("0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x599161698a1B290Ee322b40927Bd71FDf8709035").toHexString(), {
  token0: Address.fromString("0x1DB2466d9F5e10D7090E7152B68d62703a2245F0"),
  token1: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb")
})
pools.set(Address.fromString("0xD0B3A675D6B645B4028D4dFC07C088efE70F222C").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0")
})
pools.set(Address.fromString("0x6EF683d1603939Ef66e2c4d7177916b6249d6526").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC")
})
pools.set(Address.fromString("0xD1a0d0db1703F75e0d74716B59E3E5874a6cF77b").toHexString(), {
  token0: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x51d6E3B5383f5aB5fE27Ac8F52e5Afe5f71Fd9ec").toHexString(), {
  token0: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0"),
  token1: Address.fromString("0xcdB4bB51801A1F399d4402c61bC098a72c382E65")
})
pools.set(Address.fromString("0xcAf0203E8dd87CB6418713eF7AA60e4d4AC2d0EB").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0xcdB4bB51801A1F399d4402c61bC098a72c382E65")
})
pools.set(Address.fromString("0xa849Db56D7446207a2a4Aa6CA3BB17AA3a7c41b9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7Da25Bc4cFAed3F29414C6779676e53B19a356f5")
})
pools.set(Address.fromString("0xe8a05463F7a2796E1bF11a25D317f17ed7fCE5e7").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0xcf402b75E07Ae12E29F0f72961C76A0403EB546D").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xF6299971a5a490d69D0C51B098cd370CfFEc0D44")
})
pools.set(Address.fromString("0x5D2f78619bD36A3fB42693DD84A4AC7A0d860B60").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xF6299971a5a490d69D0C51B098cd370CfFEc0D44")
})
pools.set(Address.fromString("0x4AEA124bE7974F592fCdfc191e7ADa127Ec5EEf2").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xF6299971a5a490d69D0C51B098cd370CfFEc0D44")
})
pools.set(Address.fromString("0xC6f5e7e95e9bd69e57bbCdC3791332DE9C89c8f4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x8aE125E8653821E851F12A49F7765db9a9ce7384")
})
pools.set(Address.fromString("0x9043C37d6e05aB5847C19332D87de68a876DfA0d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xFBc4198702E81aE77c06D58f81b629BDf36f0a71")
})
pools.set(Address.fromString("0xC3a738a126FEfea572D5563cc57f35634998d4AB").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x1da212634CFBD840315f36f3FA58A78754Ad6703").toHexString(), {
  token0: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0xa1f687da591695BBB44C5bfC6883196753EE5a36").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xdD69DB25F6D620A7baD3023c5d32761D353D3De9")
})
pools.set(Address.fromString("0xd3AFd2ad6C5e236ec62f791D9b1C23892e6e1a3A").toHexString(), {
  token0: Address.fromString("0x3Ebb31CB2888e0Acbb81cBE2FeC65AEE24be3BD4"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x2b344c95C176A44de76bb7d47D388e0B1A90899B").toHexString(), {
  token0: Address.fromString("0x3Ebb31CB2888e0Acbb81cBE2FeC65AEE24be3BD4"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x9731441D76effFeE0ff2aFAEE91a6b92b6688456").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xD024b2D92872394F43EE99aa0177d5a24E3A6fC2")
})
pools.set(Address.fromString("0xA22702F6fA82DBB4011fcb58a3F52cc8B6d2A9E5").toHexString(), {
  token0: Address.fromString("0x3Ebb31CB2888e0Acbb81cBE2FeC65AEE24be3BD4"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x4159190BC4330D2c45fEAB4e78Ae15C629Cd2149").toHexString(), {
  token0: Address.fromString("0x3Ebb31CB2888e0Acbb81cBE2FeC65AEE24be3BD4"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x1A8Db42750297C930Ef7e73cee1162a8A7DC0012").toHexString(), {
  token0: Address.fromString("0x3Ebb31CB2888e0Acbb81cBE2FeC65AEE24be3BD4"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xDB998ca7eC99532397f8207D4031E7b52bDBFFC7").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1")
})
pools.set(Address.fromString("0xADC0bb594C8fF3870fB4103c3800d05edB98c39b").toHexString(), {
  token0: Address.fromString("0x1AE5d76af4A8B31b69b36A613f166109C240D3b3"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xAF746718BbB7D22b34F74B8A009C7528c10D3cc4").toHexString(), {
  token0: Address.fromString("0x25d046BF9D2F0e08c932BA0566c87fae4C98a076"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x042d9785F988B5CbEdb21cdfA7D7BC2F6dB907a6").toHexString(), {
  token0: Address.fromString("0x7FB688CCf682d58f86D7e38e03f9D22e7705448B"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0xc7EAa8F5cF53F0F3487E9BEA7aEA9A0A8CF9C8D4").toHexString(), {
  token0: Address.fromString("0x8B21e9b7dAF2c4325bf3D18c1BeB79A347fE902A"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xab69957460805c35FA634186290ABa7435BFcF09").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xF6299971a5a490d69D0C51B098cd370CfFEc0D44")
})
pools.set(Address.fromString("0xbc138C394a6C48a4E2e6c2B4848E822F051a5243").toHexString(), {
  token0: Address.fromString("0x3E29D3A9316dAB217754d13b28646B76607c5f04"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xF3ADe441Be8c0579ca8D0B05CA33ED35DD90338c").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xCB8FA9a76b8e203D8C3797bF438d8FB81Ea3326A")
})
pools.set(Address.fromString("0x8e7F59C6c569176F6D811746E78BF771A80FecaB").toHexString(), {
  token0: Address.fromString("0x3E29D3A9316dAB217754d13b28646B76607c5f04"),
  token1: Address.fromString("0xCB8FA9a76b8e203D8C3797bF438d8FB81Ea3326A")
})
pools.set(Address.fromString("0x1fe33cebf60ACD3DB4f052c5E1dD880fDcEEA3bb").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xfD389Dc9533717239856190F42475d3f263a270d")
})
pools.set(Address.fromString("0x4237a1a033b6A82694C299d683590D28c030FF9a").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xfD389Dc9533717239856190F42475d3f263a270d")
})
pools.set(Address.fromString("0x669b1391DC4c436e8a13Ced5b47f4446607cbFA8").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x1A54ae9f662b463F8d432482975c17E51518b50D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB0B195aEFA3650A6908f15CdaC7D92F8a5791B0B")
})
pools.set(Address.fromString("0xc0B86812b5dA101878E3a920Bb0cf53C9Fbc8773").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9ed7E4B1BFF939ad473dA5E7a218C771D1569456")
})
pools.set(Address.fromString("0x13baaaeDa202E9affE4CA475480CFF947273b0F0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xFEaA9194F9F8c1B65429E31341a103071464907E")
})
pools.set(Address.fromString("0xb73E9aA7D29d8E309984E3de49A3271e57013f43").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xF6299971a5a490d69D0C51B098cd370CfFEc0D44")
})
pools.set(Address.fromString("0x6A42BBD12356eCBD2927D1F5552CcaD7C70f1bC4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x0D4eD4e5342D10Ed30e67f582Ea55D4e76504122").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xcC4FEDC334DcC38E4D4476DaF4A9d0cF334dc589").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691")
})
pools.set(Address.fromString("0x4CE4a1a593Ea9f2e6B2c05016a00a2D300C9fFd8").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc5b001DC33727F8F26880B184090D3E252470D45")
})
pools.set(Address.fromString("0x2A9F3C7e190dEB6394A4148a8f62e392Ca536F43").toHexString(), {
  token0: Address.fromString("0x2297aEbD383787A160DD0d9F71508148769342E3"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xdc684d4E3956A4Bf8E05f248E1b11045fF8cE196").toHexString(), {
  token0: Address.fromString("0x3E29D3A9316dAB217754d13b28646B76607c5f04"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x83F072915921bb684aD70BAe73b61c66a4c91A93").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xCB8FA9a76b8e203D8C3797bF438d8FB81Ea3326A")
})
pools.set(Address.fromString("0xd424C6B4B5ae40E93c8F029a6Fb15cd59fedB1C8").toHexString(), {
  token0: Address.fromString("0x3E29D3A9316dAB217754d13b28646B76607c5f04"),
  token1: Address.fromString("0xCB8FA9a76b8e203D8C3797bF438d8FB81Ea3326A")
})
pools.set(Address.fromString("0x9AD28BCa3f02C0Dc9a8dda6B915D75D0827796Ac").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC26921B5b9ee80773774d36C84328ccb22c3a819")
})
pools.set(Address.fromString("0x3c6150AD15ACd277F559A66e6FeA93F722B403d8").toHexString(), {
  token0: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819"),
  token1: Address.fromString("0xc5b001DC33727F8F26880B184090D3E252470D45")
})
pools.set(Address.fromString("0x48CF5aE8A414983E3cbfa33a9fE77DEA0d95b5A9").toHexString(), {
  token0: Address.fromString("0x39FdE572a18448F8139b7788099F0a0740f51205"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x485015F827Ba087d834639c83aA6f736f1eb9162").toHexString(), {
  token0: Address.fromString("0x375488F097176507e39B9653b88FDc52cDE736Bf"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x8E4273bACd80ec5D1392E43559A5B155836B0Ddb").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xdD69DB25F6D620A7baD3023c5d32761D353D3De9")
})
pools.set(Address.fromString("0x61bb2425EF5DcDB3bFA18f2fA5CE8C643BF4e149").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0xE7b74665bA54C8fd4351AB67edf54B51349415a8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7F731c4473DbD3f510100809D61648d77B14FACA")
})
pools.set(Address.fromString("0x847AD5Fe7436CB526C16c76d74D004d2C0f2f0eC").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6806411765Af15Bddd26f8f544A34cC40cb9838B")
})
pools.set(Address.fromString("0x1A64820ABAB59656beBe727a9a08FB56aD1dD6c0").toHexString(), {
  token0: Address.fromString("0x47536F17F4fF30e64A96a7555826b8f9e66ec468"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x37302D5D99eC4550c583E404B298d39370FeD37E").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x47536F17F4fF30e64A96a7555826b8f9e66ec468")
})
pools.set(Address.fromString("0x498b990c15c31b41b19E3160b3767f513a8C0dBD").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x6fd8b8f389E36D17b8352CE0Bd98785ef32E8035").toHexString(), {
  token0: Address.fromString("0x06daCf7B5b8E921f309347BDE6d5d350507Ce9E5"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x72FAAc4e7f6eC87f71E23BFA04C27497d84b227b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2")
})
pools.set(Address.fromString("0xd429d3500E76af304378d3D72AB8e2E8BCDC7391").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x47536F17F4fF30e64A96a7555826b8f9e66ec468")
})
pools.set(Address.fromString("0x8E2Bf41347Cd9180a60EBcF9976d247d77b923B8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc5b001DC33727F8F26880B184090D3E252470D45")
})
pools.set(Address.fromString("0xd43BFE4C62735E4611BE7939D3B001d21799a0E5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x47536F17F4fF30e64A96a7555826b8f9e66ec468")
})
pools.set(Address.fromString("0xc70db1DD8c9aD0502C82BE00db52C7cf4Fb4DA0F").toHexString(), {
  token0: Address.fromString("0x47536F17F4fF30e64A96a7555826b8f9e66ec468"),
  token1: Address.fromString("0xdD69DB25F6D620A7baD3023c5d32761D353D3De9")
})
pools.set(Address.fromString("0x1b13165883b8c7F80cF3353D452D3Ca6385035BF").toHexString(), {
  token0: Address.fromString("0x47536F17F4fF30e64A96a7555826b8f9e66ec468"),
  token1: Address.fromString("0xdD69DB25F6D620A7baD3023c5d32761D353D3De9")
})
pools.set(Address.fromString("0x8FCFE929AE837712b0A78068F069e23c8ce701D9").toHexString(), {
  token0: Address.fromString("0x47536F17F4fF30e64A96a7555826b8f9e66ec468"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x8da438174d83B22a8b71C496Edeef59f7c0A2109").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc4B60EB182720e6b6e129e9F8428EA66C1461CAb")
})
pools.set(Address.fromString("0x7521aa0C1dc07d8069B9014c55E094f8237FD114").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xa00E3A3511aAC35cA78530c85007AFCd31753819")
})
pools.set(Address.fromString("0xdeeD87fBE0Ba816da4B98fE0D2132630A4a0eA1b").toHexString(), {
  token0: Address.fromString("0x39FdE572a18448F8139b7788099F0a0740f51205"),
  token1: Address.fromString("0xdD69DB25F6D620A7baD3023c5d32761D353D3De9")
})
pools.set(Address.fromString("0xA7C0485C3BdE1B9A376dD19a069359edFb3dB6ec").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0x6806411765Af15Bddd26f8f544A34cC40cb9838B")
})
pools.set(Address.fromString("0x29e742e18D27a436649c5296B750f65C5bE252d3").toHexString(), {
  token0: Address.fromString("0xdD69DB25F6D620A7baD3023c5d32761D353D3De9"),
  token1: Address.fromString("0xFA436399d0458Dbe8aB890c3441256E3E09022a8")
})
pools.set(Address.fromString("0x5af75243624727e02F12662e95CC055b94F9A461").toHexString(), {
  token0: Address.fromString("0x4518231a8FDF6ac553B9BBD51Bbb86825B583263"),
  token1: Address.fromString("0xa00E3A3511aAC35cA78530c85007AFCd31753819")
})
pools.set(Address.fromString("0x185DD28DC8EBE134099D04B9514549c44a0bbF17").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc9EFf4A6F62F3fB982D967E02454a0538a6C2e9b")
})
pools.set(Address.fromString("0xd078Bb52A8335f695Cc194d145bf46e795a49E38").toHexString(), {
  token0: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x747629a04A4990BBb65d4C8797DCd7FB2989C12B").toHexString(), {
  token0: Address.fromString("0x37626FafA2E96BeC5c0299B0a30Af3DaAeEAdc60"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x6aBa71fF41b4Aabb82B8Ee6fA30aE4CCfE4C802A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa00E3A3511aAC35cA78530c85007AFCd31753819")
})
pools.set(Address.fromString("0xe98617208EAA318bDce706Ab0b4A9d17B0056fb4").toHexString(), {
  token0: Address.fromString("0xb3C1E00132C341378dCD1AEdFCf090a45AAD5144"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0x489f93D6e3aB15EA485Bee01c8D55a6d25006563").toHexString(), {
  token0: Address.fromString("0x0628B64512aB0ee57C18419c5d34176B284c49d2"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0xE38c24bdcfE35E5d9BD913462cFb6da08196c217").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2")
})
pools.set(Address.fromString("0x69d05109Fba747b90df370D42C2f975B0bcd940E").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xa00E3A3511aAC35cA78530c85007AFCd31753819")
})
pools.set(Address.fromString("0x05034a7bC2cAC81041Fcd75265b3bA34EC40F228").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE105F140F411d7212413dc732915fdeB9d41b3ba")
})
pools.set(Address.fromString("0xEBd999F6B0AB6b21F6Ad30796Ee4a0546A285925").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc5b001DC33727F8F26880B184090D3E252470D45")
})
pools.set(Address.fromString("0x6eceDac8846271E71b5582848c342FC4310aAF44").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE105F140F411d7212413dc732915fdeB9d41b3ba")
})
pools.set(Address.fromString("0x06D0f6703592aFC5217cA5E35a5AD52f516e379B").toHexString(), {
  token0: Address.fromString("0x1203CDceaD2500bccd251811fD5FeDb2026fb499"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xe7f4D234a2463b111ED9865ed4a17654895e25c9").toHexString(), {
  token0: Address.fromString("0x1203CDceaD2500bccd251811fD5FeDb2026fb499"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xBD5507C0EB4831E48A9B0325033714Ee441d27F2").toHexString(), {
  token0: Address.fromString("0x1203CDceaD2500bccd251811fD5FeDb2026fb499"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xAeD36767Ad6CEe135E6c1726D7121B7450370c9D").toHexString(), {
  token0: Address.fromString("0x1203CDceaD2500bccd251811fD5FeDb2026fb499"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x7e8891bbb2cb2E21a08832db51886B287Dac6442").toHexString(), {
  token0: Address.fromString("0x1203CDceaD2500bccd251811fD5FeDb2026fb499"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0x2C8de3B6bFC79eEEF2bC52bDd4d402Ec88dB20Bf").toHexString(), {
  token0: Address.fromString("0x384fabB05F28389Afc16fC8bcB08B55eD97Fa597"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x4a62159876A78a8BDed66Ba84338D873c0f3279e").toHexString(), {
  token0: Address.fromString("0x384fabB05F28389Afc16fC8bcB08B55eD97Fa597"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xD3C09Fa50567bb7e913B10938F62155e66710836").toHexString(), {
  token0: Address.fromString("0x2fA02B1D4826c577328e94486E01220095D9a6Cf"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xeF0eCb01D66f2A631C2536458d36DD0E56AbB634").toHexString(), {
  token0: Address.fromString("0x384fabB05F28389Afc16fC8bcB08B55eD97Fa597"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xCf1E057dadB46ECfD6342b6d447e70E5d6B8030D").toHexString(), {
  token0: Address.fromString("0x384fabB05F28389Afc16fC8bcB08B55eD97Fa597"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x242F80A5ac004323BAC34Ee91c3A85aE51b0EF1c").toHexString(), {
  token0: Address.fromString("0x12ff4a259e14D4DCd239C447D23C9b00F7781d8F"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x7ACf1c81e722827Ad460c0df10A20d0Ab3631349").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2")
})
pools.set(Address.fromString("0x0c18ac2D158D8232CFe8fb54F68cb7d95427A23e").toHexString(), {
  token0: Address.fromString("0x12ff4a259e14D4DCd239C447D23C9b00F7781d8F"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x6Ef7B14bcd8d989cEF8F8ec8Ba4Bf371B2AC95Fd").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xF98dCd95217E15E05d8638da4c91125E59590B07")
})
pools.set(Address.fromString("0x10F989D5Ebd461b625a8EB1B160d73575A3C2a72").toHexString(), {
  token0: Address.fromString("0x3390108E913824B8eaD638444cc52B9aBdF63798"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xc078BE501258777eabACc9372118Ed4f2134E0b0").toHexString(), {
  token0: Address.fromString("0x2297aEbD383787A160DD0d9F71508148769342E3"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x944B5D67c5A91b67240E7210c99985DA045BBfEc").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd4e5F722025138F881f4C753EbEDBa7ED5F5fE90")
})
pools.set(Address.fromString("0xBF29069DF8f961F548Dc6934cFA6FeE93550B8cb").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC81D1F0EB955B0c020E5d5b264E1FF72c14d1401")
})
pools.set(Address.fromString("0x6f613506d4BE4b05e1548A4A652c65931a01Fafb").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC81D1F0EB955B0c020E5d5b264E1FF72c14d1401")
})
pools.set(Address.fromString("0x2A155d3fE5F28B8e1Ae8Ea126f7B7995a5Bc4c3f").toHexString(), {
  token0: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D"),
  token1: Address.fromString("0xC81D1F0EB955B0c020E5d5b264E1FF72c14d1401")
})
pools.set(Address.fromString("0xbb1ec76429De59f9B3E45C8E7161B47710406149").toHexString(), {
  token0: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D"),
  token1: Address.fromString("0xC81D1F0EB955B0c020E5d5b264E1FF72c14d1401")
})
pools.set(Address.fromString("0x47678466C6308fC5e4CdAC3CEf2638d4388180d6").toHexString(), {
  token0: Address.fromString("0x2297aEbD383787A160DD0d9F71508148769342E3"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0x0A17A48bb9A6AaCAe1181C253dFD2dD0cf0729ea").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF92dceB24bB6a1d2FAD66b34503687aE94eeE0B3")
})
pools.set(Address.fromString("0xE6D68fc36c8B934a6360479f81DB1f203BF1146f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x4E720DD3Ac5CFe1e1fbDE4935f386Bb1C66F4642")
})
pools.set(Address.fromString("0x57A81ee2e6d6dF65Ff1162198Ea5196737De4FEB").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc35457E32E6fCD8d32019D3A46bc2ECC25FAAb87")
})
pools.set(Address.fromString("0x693647476c03Dda6a9E6c8B50250A85295B21192").toHexString(), {
  token0: Address.fromString("0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xcA741433d8439E3CFc50d8D375082d87190c624f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcfc9BD00Bc8e4893b5a00f3154C3Ac091AC2E4b8")
})
pools.set(Address.fromString("0x192E48d296e50868083777C19D0F4E9C5c465ff7").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcfc9BD00Bc8e4893b5a00f3154C3Ac091AC2E4b8")
})
pools.set(Address.fromString("0x2b3A5317F2Cf6607e734064960D0785125aCeBB3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD7d749ab04350593E0570d51869c4fDA510c93F2")
})
pools.set(Address.fromString("0x61F2a62ef2abc39b0C4860fFe853CaA232e2DE35").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x63005D641843dacb3D65aaD5CFF8422b46aea477")
})
pools.set(Address.fromString("0x5959764B000f345a73DA530C3c9083659C1C15Be").toHexString(), {
  token0: Address.fromString("0x340fE1D898ECCAad394e2ba0fC1F93d27c7b717A"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x7F53cA6b1bCF6e91ABfB8aD03d4348f89e512F70").toHexString(), {
  token0: Address.fromString("0x548EeDC1494Ddf54c4De8D9B34030f1eb40edfe8"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x0f9b19ef1206e4A8bf3ddb346167329616D07353").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcb89eDFf0Cc70718ad1B9D3Bb6E327fCA6006073")
})
pools.set(Address.fromString("0x06191475fcBaD006aBD3C6F619606909c772E32A").toHexString(), {
  token0: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x76Fa34ae1D37641559bF261431d2602A0D926463").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5e70AfFE232e2919792f77EB94e566db0320fa88")
})
pools.set(Address.fromString("0x63273169300BaBCaAfFBB491b86e69105761cd91").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb")
})
pools.set(Address.fromString("0x179bd5f43bD11f95a8C19C4D910d9aCb5Ee5Ad4f").toHexString(), {
  token0: Address.fromString("0x340fE1D898ECCAad394e2ba0fC1F93d27c7b717A"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x6f66AF4750E25c830b84A9dC45A0Abd76692cd36").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x548EeDC1494Ddf54c4De8D9B34030f1eb40edfe8")
})
pools.set(Address.fromString("0x4Cf65B614b68e9C42b38B71A53B124a026ED533a").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9Af284f70963700a0f3906Bf66Ca4583cD5aC8Fb")
})
pools.set(Address.fromString("0x247463Ac97E7d97b059209f0a3Fc0658699df47d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd3Ac016b1B8C80EeAdDe4D186A9138C9324e4189")
})
pools.set(Address.fromString("0x2A64B1162509c36Ee86EA83a05a2B56d18B3F60a").toHexString(), {
  token0: Address.fromString("0x73cb180bf0521828d8849bc8CF2B920918e23032"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xCEA2E07701B3531a75678Fc9b13692de2e6f988e").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8275244F564162bb5a5D8F36F4aa80994aD572Fa")
})
pools.set(Address.fromString("0xcB6749B5eA43d8DDD4261ffC3B39DC9112D25000").toHexString(), {
  token0: Address.fromString("0x071c9e806486861a4D5980219b5278A059c77190"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x69Fd366Fb5998419394464E364332A72904e09f2").toHexString(), {
  token0: Address.fromString("0x244766FE27507859EEe05841B1ef710C84271088"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x1BA16453634f384811517183db5dc907F161C017").toHexString(), {
  token0: Address.fromString("0x244766FE27507859EEe05841B1ef710C84271088"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x240631375a754bc6A3B97ce10bb8aD6A4a9D0D1B").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D")
})
pools.set(Address.fromString("0x9aA02a1fBE233B25f61548c7329d580eCFD607Aa").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x86247AA4D1313700aaCB30B406F7dE8E98cD97c1")
})
pools.set(Address.fromString("0xe4d0200AAf2465e792556A83D856Dd5a419872C5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xEF2Bd07421dcf305b55c296a925a2511f9b13053")
})
pools.set(Address.fromString("0xbC3bE94F5e26e05aFc5343b4b1DD1a7c2D173075").toHexString(), {
  token0: Address.fromString("0x364eeBA62914107B2e39AE8a66E68E17c34FDcf2"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xEc17ff564Ae48dE7d157dA2691B41fdB89f3cD16").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x6019a048a40a32f29A6a077ad70e9CaEf2cBaf31")
})
pools.set(Address.fromString("0xB9a8A18f93A00464072c2dc9aa63062Ccb773450").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6019a048a40a32f29A6a077ad70e9CaEf2cBaf31")
})
pools.set(Address.fromString("0x05581537641EE07fe860F987878cf516AEcA084c").toHexString(), {
  token0: Address.fromString("0x2885f7882b13Af382481CC173A0335702f790527"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xF31c93a47Eb091Bba2D1C3caa794AEc0E017D869").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6F13a56eB2a7BB912b6C658A2eABA9955676b8d2")
})
pools.set(Address.fromString("0x415c012d8EAb22705a3a417347Fedfca80b5d524").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D")
})
pools.set(Address.fromString("0xbB66d7184B3b8fC3E49456C0345AdEB9c0f52e68").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6c4ed8CCCD7546d5bc30f468b1451a3936489276")
})
pools.set(Address.fromString("0x91210B35B5Ae3e3bD32d2134DD0bED26DDd75995").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6F0fecBC276de8fC69257065fE47C5a03d986394")
})
pools.set(Address.fromString("0x55bC964fE3B0C8cc2D4C63D65F1be7aef9BB1a3C").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9A601C5bb360811d96A23689066af316a30c3027")
})
pools.set(Address.fromString("0x3962A41F424E575F01b95Ad364e7F1A0Db034f3a").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9A601C5bb360811d96A23689066af316a30c3027")
})
pools.set(Address.fromString("0xfEf95852ca036fF78c8DE41bD8BeF7Aeaa3cf016").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9A601C5bb360811d96A23689066af316a30c3027")
})
pools.set(Address.fromString("0xE94a0449161EcF0f68a63ACad8fd65B52433B7Eb").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9A601C5bb360811d96A23689066af316a30c3027")
})
pools.set(Address.fromString("0x9933323Ec2e5D72f355d10E12F1399E063ECeA20").toHexString(), {
  token0: Address.fromString("0x315b3b12D62212000b9B40056Ad6e4feaF96f11E"),
  token1: Address.fromString("0x63d8aAf408CC985077eD65529Ab83011ed9c8b98")
})
pools.set(Address.fromString("0x56aEfB6c81161a2150910A9Db37c409C1F06186E").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x73306509318Fd9A63adc6a3cEC6136249dEcB1f5")
})
pools.set(Address.fromString("0x825376dbb35c872CF36457280beD7D6d825FDCF0").toHexString(), {
  token0: Address.fromString("0x22Fa3580f997e2296a2d552BE19300274ab8Bd3c"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xc6F56aD180C186b01c67a8351b508ba658BC22C5").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xC81D1F0EB955B0c020E5d5b264E1FF72c14d1401")
})
pools.set(Address.fromString("0x08776905f9BF5471682dA9D8821171113e61F1b3").toHexString(), {
  token0: Address.fromString("0x1Ed4E07CCb6308F6d9C927639982de617f25b8E9"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x168Efa61CB2b1B91E21745a888AfE4df8C49d9C9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7259BE45bABC5Fb48804e461B687A9C8721B593e")
})
pools.set(Address.fromString("0x777016c3a9680f852e2D5929786A54A72896A2e2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4e9282cAe4180476c1f1f9ef75D26259212CB157")
})
pools.set(Address.fromString("0xB4321454Ff843625788740e231a490ac9d81a320").toHexString(), {
  token0: Address.fromString("0x5ce156Ed838f715deAf176582d561E36E149cc54"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x256FC26899e928d4a5665CfFf2d6d3dB478ec27D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD95610e852339275A456B3f7e56934F7C00F0461")
})
pools.set(Address.fromString("0xA8d49Aab47F4Cac8E698b31C41BDf8D4c6bfa827").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD95610e852339275A456B3f7e56934F7C00F0461")
})
pools.set(Address.fromString("0x33E93E14909e515582199d8d07EA10C0Fb37E39A").toHexString(), {
  token0: Address.fromString("0x1155657C4CFB60EE9a3f3f01bf5f85bDdCdAb20A"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xaC0f3D732Be18030D6c2765e28eb3A672a6b33b8").toHexString(), {
  token0: Address.fromString("0x122C5CEa45AB319dc3E8425087867bdE7d38B63B"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x51D3472bC826Ba927b61f4d1f840a2b639E7607c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb976f21c75D0245e94d3949C79F48BE6c745175d")
})
pools.set(Address.fromString("0x6C37D4F940c71461C079de60d0d28cFa43F9507A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x76d132A33AcE73a79bE46314D3124423A1B7Ca13")
})
pools.set(Address.fromString("0x5bfD452aFfBC31fBa4EA76e1c7392bB3B6E814E5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5b78eCd6E34e70c2c79586deFB97fD7176c0183a")
})
pools.set(Address.fromString("0x0Ef96533e3D4fA8869F71f0Eed2a65FD2B21434b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa209739e4861386476C112078Bd748Fa653A2335")
})
pools.set(Address.fromString("0xe363064B9e11b8d0e6eC886a466A055a47be89a7").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xb6aF3fC3F97C820Ad5D37050ff46f98619a8CCdA")
})
pools.set(Address.fromString("0xaB9F7A627F459c300A5f4040755C63632cC60897").toHexString(), {
  token0: Address.fromString("0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0x7c672AA1174e319504364De5b6C59Dc7C5b6b34e").toHexString(), {
  token0: Address.fromString("0x1ca268A96dA227e6b524d54Ec0a9fB474894a338"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xEAE527FE8b06f4A939ad391C45022e8694649105").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE4d8701C69b3B94A620ff048e4226C895b67b2c0")
})
pools.set(Address.fromString("0x099B5fcdfF5D613010dcAd0c5De5F0d30921Fd10").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE4d8701C69b3B94A620ff048e4226C895b67b2c0")
})
pools.set(Address.fromString("0x71fB868A520e7aE6CE48Bcd2a75a6855e7542Be8").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xb2F30A7C980f052f02563fb518dcc39e6bf38175")
})
pools.set(Address.fromString("0x044612B6EA9d6de569083fb0C7f85f105f685f5d").toHexString(), {
  token0: Address.fromString("0x29A1fA7C05b70d47f4f7c9F158178316509A34fC"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xB7E083896b73624CC75b982DE15f05F05DD09804").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE4d8701C69b3B94A620ff048e4226C895b67b2c0")
})
pools.set(Address.fromString("0x3Ac390a9C5220df76793D9Cf9d6765824789f3aB").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39")
})
pools.set(Address.fromString("0xd6816fb6b742C2A423B939107939242209ad32A5").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xD6004F455c54988DF5B85b5c8Fb94E8c78a62a8b")
})
pools.set(Address.fromString("0x04b7F2dcDcD19E5Bbe433B500709EB5f2782825B").toHexString(), {
  token0: Address.fromString("0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0x8821D167fbdFfe845631ddB1eB3cb197a4c5028B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6a64DD354B61020e307f8Aa68dF34e38e13BbcAC")
})
pools.set(Address.fromString("0xB0d92312B2558346e9c179E1E5A9C9F8a0B96667").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xE4Ba67c9793fd78B0Be3ab7e8FCC6C4d61214b8b")
})
pools.set(Address.fromString("0x3c319E03eba0FBb8C8D76aBDaDD81b26832838B6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6806411765Af15Bddd26f8f544A34cC40cb9838B")
})
pools.set(Address.fromString("0x578a65d4AC4FA6804EF048ecA22bE3386DB76661").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x953b2c0cb406fCc5F3c53c3a2026F6331391E503")
})
pools.set(Address.fromString("0x90Cf25B27d194C9ea55245a76C71dbB26AC65B6A").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x484c2D6e3cDd945a8B2DF735e079178C1036578c")
})
pools.set(Address.fromString("0xab3b6109a12EA9200A2a7dDC3bc155cE1c675e7A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x953b2c0cb406fCc5F3c53c3a2026F6331391E503")
})
pools.set(Address.fromString("0x23D5130ACadaFC93a8A18Ec5DE6D0585f3Fd6743").toHexString(), {
  token0: Address.fromString("0x3e7eF8f50246f725885102E8238CBba33F276747"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x4b082B66b8168238366b624aF4F671ce99320307").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40")
})
pools.set(Address.fromString("0x3813611c0c74a3C85CD1C2B97942a63a4FF7feD4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC")
})
pools.set(Address.fromString("0xa59a81566dbF85F0e7477f19e0140D710b04590b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6eAA0D697ab5e99bDB8A8d81Af33A68792Ca0803")
})
pools.set(Address.fromString("0x3978C47B936Dc88C82D3911499e3286B5eEac897").toHexString(), {
  token0: Address.fromString("0x1391F778eC2CAe7941700A6cCffc3563eefEf90b"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xCDA752C2BB3370d8B58D796843b44439567DA7e9").toHexString(), {
  token0: Address.fromString("0x48b7e2597aCbC4fa6735fb07090253BbE93b87D8"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x3604d8006875c140021A9a70f0867d43230e0212").toHexString(), {
  token0: Address.fromString("0x8e4aF0753719C1832c7a0c32dF5008f48290394d"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xC1dAD3037DC685b610aAA923a9E0E793b4C39269").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x03E96EEFAfE5ea7405810D2053416D60Ffa2FBb1").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x971E3c3fE5d51c952e86b33Fbe541406934cA402")
})
pools.set(Address.fromString("0x07a4C55e7B9F2537516a628F557A3b75f8803c1D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE71bDfE1Df69284f00EE185cf0d95d0c7680c0d4")
})
pools.set(Address.fromString("0x94687F50A6d6D01F63A60ba5b591E8163018B512").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE71bDfE1Df69284f00EE185cf0d95d0c7680c0d4")
})
pools.set(Address.fromString("0xaabb752E8dEB422e5A0B0f34D1CEfE9d2a16dFBD").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x342918C2A624b2A06368E8bB66E663aE06160A16").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0x8aE125E8653821E851F12A49F7765db9a9ce7384")
})
pools.set(Address.fromString("0x70b98Cbe4167d96821C7D2119Be8b0544a7eFd93").toHexString(), {
  token0: Address.fromString("0x2dAD3a13ef0C6366220f989157009e501e7938F8"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x0Fb07E6d6E1F52c839608E1436d2EA810cf07257").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db")
})
pools.set(Address.fromString("0x73f43507d01f402e58c70BD4bE14d72b3e7c913c").toHexString(), {
  token0: Address.fromString("0x1508fbb7928aEdc86BEE68C91bC4aFcF493b0e78"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x339d4fA9adE2CCa2B0C1d80cE3eCa7154A80D375").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db")
})
pools.set(Address.fromString("0xD24bAAbac1E799f062A18252Eed09AAb50B913c7").toHexString(), {
  token0: Address.fromString("0x0c3827522c199422AF82585eB67C9Fde4A589ce6"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xC10687bAbf11e980cC06670dFd2b42feAEE95f6C").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x521A2c2cDEf2fdC8EfD3DE8934C37734d0ff2e14")
})
pools.set(Address.fromString("0x43e459F2AAFB5ddd9DD27576Ae86B06459Ba0fca").toHexString(), {
  token0: Address.fromString("0x6019a048a40a32f29A6a077ad70e9CaEf2cBaf31"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x2b427DC8aAE0d5750e555c6305d080F1300071A6").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db")
})
pools.set(Address.fromString("0x7721bB90230a94C5F2F6e42BE0381f1a50B3548b").toHexString(), {
  token0: Address.fromString("0x3c8B650257cFb5f272f799F5e2b4e65093a11a05"),
  token1: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db")
})
pools.set(Address.fromString("0x958724A4a9a6f89aEf1210459839F4C27F2C6B03").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc5b001DC33727F8F26880B184090D3E252470D45")
})
pools.set(Address.fromString("0x9461ae0f718d7c61ECB0b3eDEAD5485887703B27").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc5b001DC33727F8F26880B184090D3E252470D45")
})
pools.set(Address.fromString("0x8F597AB6e6a94D17D51eBd90A92EA0d73B4BdC09").toHexString(), {
  token0: Address.fromString("0x750Bb4837Bd33C8ea82434ec24d55dC03C689f24"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x37288bb193dd54908365192dAF38194F7c213057").toHexString(), {
  token0: Address.fromString("0x73cb180bf0521828d8849bc8CF2B920918e23032"),
  token1: Address.fromString("0x970D50d09F3a656b43E11B0D45241a84e3a6e011")
})
pools.set(Address.fromString("0xE6Da3321f2e174caaCb8063e4c7D78Ac3b80004c").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x970D50d09F3a656b43E11B0D45241a84e3a6e011")
})
pools.set(Address.fromString("0x6C76EBe5aAB30B417F07e29102bfC195c1931734").toHexString(), {
  token0: Address.fromString("0x2297aEbD383787A160DD0d9F71508148769342E3"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x2Ce49F499e661859686A5DeA823665867f6bDBFd").toHexString(), {
  token0: Address.fromString("0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xD52533A3309b393AfEBE3176620E8cCFB6159f8a").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40")
})
pools.set(Address.fromString("0x6C0B8844C50490Eff641570029FDD39Cf31A3c88").toHexString(), {
  token0: Address.fromString("0x970D50d09F3a656b43E11B0D45241a84e3a6e011"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x84d12455f347eD6B65079951890B4720Ba3C6DAb").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xAF9fE3B5cCDAe78188B1F8b9a49Da7ae9510F151")
})
pools.set(Address.fromString("0xc4477F728C5AAc72C5FeF2F5aE671b81c90506D3").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xAF9fE3B5cCDAe78188B1F8b9a49Da7ae9510F151")
})
pools.set(Address.fromString("0x0085766c3436C9F482F90fa94D2f63B085e6A78f").toHexString(), {
  token0: Address.fromString("0x2dAD3a13ef0C6366220f989157009e501e7938F8"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x0E1e6E423FfD0B7b83F89811a82C74122a2D7425").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7f769e2C5Ed1041E31022af8D6253067CD44617F")
})
pools.set(Address.fromString("0x7c424DCc6675a50c9629f82840b756e22BfA7898").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x7f769e2C5Ed1041E31022af8D6253067CD44617F")
})
pools.set(Address.fromString("0x21eA3224960A67dAF79BA9dF6F79Af7122baB7Eb").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0xB695e90C02C06F1B5327cF3759B4Cb959906cba8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x750Bb4837Bd33C8ea82434ec24d55dC03C689f24")
})
pools.set(Address.fromString("0xe3BB0b5847789eb0c89772aF2D265e4C5bD9cEaF").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D")
})
pools.set(Address.fromString("0xdb9f3919881A0f0b41Da04274E9D24AB87353269").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xFCa7D29141476cE797e1c992058fFbA5c7d36b4e")
})
pools.set(Address.fromString("0xB9AB0C1FCC5DB3b3901F686B19651B9fC931BaDE").toHexString(), {
  token0: Address.fromString("0x3C402196E976964a4FeF5F07b790523Eb68C9b06"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x73C5F98b2F8917424AFa3AE35CE6882442f7724f").toHexString(), {
  token0: Address.fromString("0x29FAF5905bfF9Cfcc7CF56a5ed91E0f091F8664B"),
  token1: Address.fromString("0x3C402196E976964a4FeF5F07b790523Eb68C9b06")
})
pools.set(Address.fromString("0xE4827D461D3B12592e98Ae54309b36F4f29A9fb9").toHexString(), {
  token0: Address.fromString("0x3C402196E976964a4FeF5F07b790523Eb68C9b06"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xA5bf2efDC050198194B1B97AeE4B7A90E0ACa154").toHexString(), {
  token0: Address.fromString("0x25Df6D2A6Eec0FCe0577D800B3311F6404EEd2f8"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x2eb1d0D608fB9e2bD297782c8523b200863E2Bd8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB7d74F66c1254Ea1C925b6183920660eaE75c4CA")
})
pools.set(Address.fromString("0x40cd02014F8EA3844086501a0Ec5b3B5aeFc46bD").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xB7d74F66c1254Ea1C925b6183920660eaE75c4CA")
})
pools.set(Address.fromString("0xd5Fc888A0e14B533927006b34714Fa56027BD151").toHexString(), {
  token0: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db"),
  token1: Address.fromString("0xfDeFFc7Ad816BF7867C642dF7eBC2CC5554ec265")
})
pools.set(Address.fromString("0x9cE9d2Beb1626D0C0FBb480C4D193D900Cf3c42b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xCfFF80BfF55DEA6D4f27Af5d872665ea40047953")
})
pools.set(Address.fromString("0xad53aDE93C08889f4012AC77ceaEF2281289ce8A").toHexString(), {
  token0: Address.fromString("0x2909d52B9db9654A317ef4d87576F5c2F29684C2"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xD805C8ef703a145CB3ba57E38772C12d67719f9c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xCfFF80BfF55DEA6D4f27Af5d872665ea40047953")
})
pools.set(Address.fromString("0x79B21a9FBD459766CECf0442140452caba552Fdd").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9b603ee537Bf3CDf3511810221fDc2F6d154421B")
})
pools.set(Address.fromString("0x9ac91014D346e35FC7c8aFD0C516D816eaA3bb61").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9b603ee537Bf3CDf3511810221fDc2F6d154421B")
})
pools.set(Address.fromString("0xb3a321FEF28467D581f18b319f8B808342cd3a31").toHexString(), {
  token0: Address.fromString("0x0F5d45a7023612e9e244fe84FAc5fCf3740d1492"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xDF7fBf62959d002234700B3DE4399007A0961E42").toHexString(), {
  token0: Address.fromString("0x1529C78c443E0392C3Cc611c5122F9EA0F55fBc4"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x530E01A043df4DECAb9dcC82984286FB6DF75414").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xaf408a6dA5947A3686eFC1c360DA4dB23eA2C23b")
})
pools.set(Address.fromString("0x8AAAc81e35D9e646d7308d8559c010CCBF502D42").toHexString(), {
  token0: Address.fromString("0x311222cF3DA9e6a8bcfa6c4D4Ac5CF6c906091Ae"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x8C384d0De659319C70569BeBcc3696B7FA1b49A2").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db")
})
pools.set(Address.fromString("0xd75AD3fEF0592b4984f027112456Cc7D3cE47D1e").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xFdDf3506f53764d0376255a7a5D775613b34AA3f").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xC60d585EdF334bed161975c2Bc91275123a70859").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x747e42Eb0591547a0ab429B3627816208c734EA7")
})
pools.set(Address.fromString("0xB0Efaf46a1de55C54f333f93B1F0641e73bC16D0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC3248A1bd9D72fa3DA6E6ba701E58CbF818354eB")
})
pools.set(Address.fromString("0x773B26b7ec419eB00F9251F32de73Bf854970aBb").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6713F1B21aE691AED3D5DE06923008F82Dd7A85d")
})
pools.set(Address.fromString("0x5d2D9deE001D95Dc6B203d74AA651b6D864a619A").toHexString(), {
  token0: Address.fromString("0x385719545Ef34d457A88e723504544A53F0Ad9BC"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xaE44af89CeB8d20E7C3A07978d0B3072F6e819ba").toHexString(), {
  token0: Address.fromString("0x28b42698Caf46B4B012CF38b6C75867E0762186D"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xc21C981Cf7E52E19Bd87a90Af19E2e9236A998c9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7583C1C6a6fdfAd5780588884f231e4b6D900eCb")
})
pools.set(Address.fromString("0x9F1b4e972EC4bDdC39a45E96e80dF70b87EC0eb7").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x88a89866439F4C2830986B79cbe6f69d1Bd548BB")
})
pools.set(Address.fromString("0x45460f506Fb7B79115De029084D81F30bAE96DF6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xd0d2Ac44Cc842079e978bB11b094764f7D0dec6A")
})
pools.set(Address.fromString("0x7e5CfA11aCdC955e2371e0c32FdD9EF7d04b05A9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xd0d2Ac44Cc842079e978bB11b094764f7D0dec6A")
})
pools.set(Address.fromString("0x22E3FF0bb9be9d0c920DC61fB97B0d3843374149").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xd0d2Ac44Cc842079e978bB11b094764f7D0dec6A")
})
pools.set(Address.fromString("0xDCCe01BE5145e14C4f7c34D13447F0E8f0c680F5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x4E316557f63C2156eAFdfec08f31DF4957136203")
})
pools.set(Address.fromString("0x37778485Bb560E4a1d5c6552A9AaC2A4E96E7c77").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x4E316557f63C2156eAFdfec08f31DF4957136203")
})
pools.set(Address.fromString("0xBfFcC8740e106aBFa1a8F863df5150BbeC760CF6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xd0d2Ac44Cc842079e978bB11b094764f7D0dec6A")
})
pools.set(Address.fromString("0x9607179F6d5AeFb32e8090608816BF0EF19887ae").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa0f84ACfb5e6eCE29edFb7B90DaE6f5F3ced5489")
})
pools.set(Address.fromString("0xe4D1282A7d91C1bbBF7675634f8aB29480d59C92").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D")
})
pools.set(Address.fromString("0xf92185F5cD1198e1C94E8b79E79670A43A309030").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9Fca1b3cb4EaBE6d33f11fBd1d660307bF1de969")
})
pools.set(Address.fromString("0xdd0C3f0A749ec9ee14E4fA80406D3Cd75d4a2Df4").toHexString(), {
  token0: Address.fromString("0x3134F3ff6C0DAf74B32fc683B4098F9de0086589"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xf3F5489b6E66008b92dC5F7d83F0b262608f932D").toHexString(), {
  token0: Address.fromString("0x3134F3ff6C0DAf74B32fc683B4098F9de0086589"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xDECAc4dDEa9B6ebb67327B7B8d6a973566014168").toHexString(), {
  token0: Address.fromString("0x217D47011b23BB961eB6D93cA9945B7501a5BB11"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x3646d35BC846462c15C98E6f5C5899dD8839033C").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x58fe807537ba46315d2d8a52086bf0119f42B74D")
})
pools.set(Address.fromString("0x250E21DdDD306579458cf025C5e230665171fb31").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0x837248b2c1aD33a6FAc38D31F1F66D429fAC7530").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x45e40e614eB92f67d154d650894F906EF8bA8CCA")
})
pools.set(Address.fromString("0x433518a9C529933428669E6a60855dcAA50d6666").toHexString(), {
  token0: Address.fromString("0x04cC847F81A01328c69EA58321f2E0F8e8ED9681"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x4D67268F5D79c898A5313077Bd982cfB314baDef").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0x61eC04939f16978579b4536c9B08387E25292024").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0xD1F1baD4c9E6c44DeC1e9bF3B94902205c5Cd6C3").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0x1a884b609FdE1a929645d672E3B7eCF2b5cD90b3").toHexString(), {
  token0: Address.fromString("0x217D47011b23BB961eB6D93cA9945B7501a5BB11"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x4dCe0D357141327D9eE350E691bE2FF19cD6E3f4").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0xD2F7bF4A3143Db3e018d1319CB36C7C3eefCC737").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x9cBB4347B89b99f8A07140d100E4fb7113841f32").toHexString(), {
  token0: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x9d13b77D5D1dF034cF9247E53e6593B88b3BDb43").toHexString(), {
  token0: Address.fromString("0x548EeDC1494Ddf54c4De8D9B34030f1eb40edfe8"),
  token1: Address.fromString("0x8e4aF0753719C1832c7a0c32dF5008f48290394d")
})
pools.set(Address.fromString("0xB79c532cc9Ac99B761A778258B3060B632568835").toHexString(), {
  token0: Address.fromString("0x548EeDC1494Ddf54c4De8D9B34030f1eb40edfe8"),
  token1: Address.fromString("0x8e4aF0753719C1832c7a0c32dF5008f48290394d")
})
pools.set(Address.fromString("0x4a0dfEafC22d62f21f9C807Cf3f01514B592D492").toHexString(), {
  token0: Address.fromString("0x548EeDC1494Ddf54c4De8D9B34030f1eb40edfe8"),
  token1: Address.fromString("0x8e4aF0753719C1832c7a0c32dF5008f48290394d")
})
pools.set(Address.fromString("0x2Ae3d6096d8215Ac2Acddf30c60CAa984Ea5dEbe").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0x886b4f0Cb357e0d6Ec07B7a3985f346cc17ECe7D").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xE6df3fD4C5347c755976Ef4B9604C224AF6b98ce").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF19ccAAFBf01b00A610561E0FFd38Fc2EFc9d64e")
})
pools.set(Address.fromString("0x1BF7A5814482A789BDe846BF671f994cc210Ff2d").toHexString(), {
  token0: Address.fromString("0x8e4aF0753719C1832c7a0c32dF5008f48290394d"),
  token1: Address.fromString("0xE4Ba67c9793fd78B0Be3ab7e8FCC6C4d61214b8b")
})
pools.set(Address.fromString("0x974B712308dA1436A66ac5b9430F22255712Aa9c").toHexString(), {
  token0: Address.fromString("0x58fe807537ba46315d2d8a52086bf0119f42B74D"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0xbD392a8c1c99EF05e7733242e60E068a7fF5D1C4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8637725aDa78db0674a679CeA2A5e0A0869EF4A1")
})
pools.set(Address.fromString("0x318440d646281d6189a61cFb2897136DF4FDa6Bc").toHexString(), {
  token0: Address.fromString("0x3f211D5246952F1B884197F48D7846C2772e9351"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xd7a106565A92be6e153855199fC763367B7BE19F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0x695370a93901DF28A856ff305EBD0aF8DF46d2E4").toHexString(), {
  token0: Address.fromString("0x01B8b6384298D4848E3BE63D4C9D17830EeE488A"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xf46fb3cEC4Bb205aD0EA6Afc44EBcc8BbC2306D7").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB6298e58e5B140325c2B10ad0902ad889A3CA694")
})
pools.set(Address.fromString("0x71a6e18b3A5bDbb719D367f0238Eed64bb49EadB").toHexString(), {
  token0: Address.fromString("0x625E7708f30cA75bfd92586e17077590C60eb4cD"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x504Ac54F6a60EAe489bbD3CCA753c92F0e593C72").toHexString(), {
  token0: Address.fromString("0x6fd9d7AD17242c41f7131d257212c54A0e816691"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0x14B3Bf81952F429462a6e75a90Eb1a550D172A26").toHexString(), {
  token0: Address.fromString("0x395Ae52bB17aef68C2888d941736A71dC6d4e125"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x697D419c594495e32DB358aE4050f8c292A99306").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xAb1047894dA4ec207c71bE0AEF5c7885e07B2DaF")
})
pools.set(Address.fromString("0xE90AF144D4d4A3C84739C9016f1FCc3656f0FD47").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xAb1047894dA4ec207c71bE0AEF5c7885e07B2DaF")
})
pools.set(Address.fromString("0x56A0a9b5301CCC0fC1CE5B514a9aec55F176F470").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xcE2a13c2B6ab6F15B7AEEc272F65D4d8b11e4619")
})
pools.set(Address.fromString("0x000eca51aAf0CA8DC92B13a93d897039d7802f7D").toHexString(), {
  token0: Address.fromString("0x7583C1C6a6fdfAd5780588884f231e4b6D900eCb"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xe9e3893921dE87b1194a8108F9d70C24BdE71c27").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x920Cf626a271321C151D027030D5d08aF699456b")
})
pools.set(Address.fromString("0x8699E6353989bb384A8a8352D3F7D71Df184a2A2").toHexString(), {
  token0: Address.fromString("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0xD58006782eD5445450a23F260604efEb87aA8d13").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF9e1F4EEdE806FDA20f4084d9f9c4c2b36E38e77")
})
pools.set(Address.fromString("0x15786D1F61758e8765C0561FcFa116c1411BE8a5").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xC03b43d492d904406db2d7D57e67C7e8234bA752")
})
pools.set(Address.fromString("0x519F66dFc352E6654a4CC71e73e7A3FD31C7D348").toHexString(), {
  token0: Address.fromString("0x340fE1D898ECCAad394e2ba0fC1F93d27c7b717A"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x34433D20447985c90d603A37764eD5A5640C53C8").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0xe06897c2660C236B4B5cA755849a7A11D2481D01").toHexString(), {
  token0: Address.fromString("0x39dD0Af0593e12E8AC4a75a010BE87E35230B17a"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x4e605Af7b8Bfd22f02d853287fCbb9cEF04C211d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcabaC9Acd32d116a2cA245f8ECc8BE9F16727B62")
})
pools.set(Address.fromString("0x0A898835bdA61a3a426C609B8f3f86A73ECc77bd").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xC03b43d492d904406db2d7D57e67C7e8234bA752")
})
pools.set(Address.fromString("0x2F186598Bf378BE95668FF8EE687a478200F42Ba").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xc5b001DC33727F8F26880B184090D3E252470D45")
})
pools.set(Address.fromString("0xCf8835121CF7f07857b285ac5B7d2B9487aD0d5f").toHexString(), {
  token0: Address.fromString("0x034ade9A442300DcD1D75B22b167260d1B757a9F"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x9c904aF17F0F6b099724E7720De806a3fcc351Ca").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd2BeaA95274FC1E3d4BADC225a06De575d8315a5")
})
pools.set(Address.fromString("0xDAcA80b0C6E3a67EA3A0d87ff706564214F8aaB5").toHexString(), {
  token0: Address.fromString("0x28b42698Caf46B4B012CF38b6C75867E0762186D"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xC9e63e89fA6BaEF825Cd7dAa79af2b39023064F2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5420641b9132a803c093Fb87eaC21248082353aE")
})
pools.set(Address.fromString("0x7DfF71cFabB2d247a9639f06093E7508b72e0f4A").toHexString(), {
  token0: Address.fromString("0x2D453E6492D4F0312cEB54F37Fc4414F4120a321"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xfcf4eceA16181E8DBdfb58e0C796f456023A477B").toHexString(), {
  token0: Address.fromString("0x2D453E6492D4F0312cEB54F37Fc4414F4120a321"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x1b22a2D00e224360ac319a4Bf5DeEbF7cF4ccd12").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xAb1047894dA4ec207c71bE0AEF5c7885e07B2DaF")
})
pools.set(Address.fromString("0xdD4aecE66C7f3c9b2C084FbCf03f0011Bc72983F").toHexString(), {
  token0: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db"),
  token1: Address.fromString("0xAb1047894dA4ec207c71bE0AEF5c7885e07B2DaF")
})
pools.set(Address.fromString("0x71970c457e329f2624b680dBd98Db85E9F27bFe5").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xAb1047894dA4ec207c71bE0AEF5c7885e07B2DaF")
})
pools.set(Address.fromString("0xcEE20BF01d4fe596A4EA59A949FE3852c52f0B50").toHexString(), {
  token0: Address.fromString("0x7D2382b1f8Af621229d33464340541Db362B4907"),
  token1: Address.fromString("0xAb1047894dA4ec207c71bE0AEF5c7885e07B2DaF")
})
pools.set(Address.fromString("0x9b61efcD432Bb419D1fb8291692d0CA49be0fB67").toHexString(), {
  token0: Address.fromString("0x2708CA3e511dBe7F79b5EA73e823d98FBd396730"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xfc1974a5d70864Fdb56dF71A13eB504e0FB1F02a").toHexString(), {
  token0: Address.fromString("0x302f16F7C611d6A1dC590B88B3A1685650c6D208"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xaA14fBfA1B1C3EE34b20F537eA053dD18d85ED43").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6831ad465E6693E38283D693b8E0D31c309eA24D")
})
pools.set(Address.fromString("0x32aA78046E5598cB718de1cd0E1624338f90804f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x65028f717d49E8eB871DB71A7863F8479B87cb39")
})
pools.set(Address.fromString("0x84D092A7FDF13A6Db1A6Bb07A3eB00B4a2080D92").toHexString(), {
  token0: Address.fromString("0x060B705Ce2f2A38B41049C52070B22A3C42FD293"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x19f42D879eEF326d1654C3646A3F60a1d0BC9bf2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb9dc99E32dB3C81C46cb73A21D2D23FB9bdBbd60")
})
pools.set(Address.fromString("0xc53d95c049831607e45410b84fA2A03E6F97175F").toHexString(), {
  token0: Address.fromString("0x14da546026e69CBf9b5255a2EbAA9dFA5C0c1f22"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x7730627B8b035148B599Fe9b30d31cCf8a479F0F").toHexString(), {
  token0: Address.fromString("0x303Aea27b1E67e0036a3E5ca6d200C105093E2bC"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xbCedA6EBc56D364537bA7E3EAff64bc01AFbB796").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD4130eEd531047Da1D7B1c476619960392f1C063")
})
pools.set(Address.fromString("0x456a8137B390a32D37255a0572a91B4729CD0E35").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x40C6cB2d152e4F46cA10eBc39B5b7A1aE92A8B64").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db")
})
pools.set(Address.fromString("0x61Df0eaaA33a6A9089b369139AE6B92C87678770").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xB153FB3d196A8eB25522705560ac152eeEc57901")
})
pools.set(Address.fromString("0x779496279CeF03956d48ABB16A2A2F3A6E5f1E9e").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xf21A5C31c2432941BeBAaEfFD53d0F24DBDCf5E2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337")
})
pools.set(Address.fromString("0xdc0838819DA133a91ae15425317dc1C5aDf74f18").toHexString(), {
  token0: Address.fromString("0x28b42698Caf46B4B012CF38b6C75867E0762186D"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x509E7CdaB3101b829a41247b2f003FEe1Db0Fb2F").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xF9e1F4EEdE806FDA20f4084d9f9c4c2b36E38e77")
})
pools.set(Address.fromString("0x02c6a5C704dEB5C8f3Fc7Ce263938eDc4006203B").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xF9e1F4EEdE806FDA20f4084d9f9c4c2b36E38e77")
})
pools.set(Address.fromString("0x4A29Cd3170A568c46BF01D4145f88102C54e1f24").toHexString(), {
  token0: Address.fromString("0x5976d4c3bcFc1c5f90aB1419D7f3dDF109cEA35a"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x3F766Fc550cA61F0AcD342CDf196B901B8473303").toHexString(), {
  token0: Address.fromString("0x5976d4c3bcFc1c5f90aB1419D7f3dDF109cEA35a"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x028BF8E33E657aa0560085d4BC941234605631Bf").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657")
})
pools.set(Address.fromString("0x5D3440A33a4008B2D2656735cCD229d702377f10").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x81aB7E0D570b01411fcC4afd3D50eC8C241cb74b")
})
pools.set(Address.fromString("0x9798EE7A783419036263DF6e3e0960cCEDF781FE").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0xB55B608B141f68953fc3dF4Ae8e5DfF4bdf63e8f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x744fB68963291FdbA4513Fe4a8d3F1866480F28B")
})
pools.set(Address.fromString("0x5BEA18500981AC4D23F22d1F883B523A0CF77993").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x75C5f6D32d8Ef3a4f0F43F7792Aa08e8678972F9")
})
pools.set(Address.fromString("0x7742Bb26f971649635A47D5bc04C74d3925aA417").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xC03b43d492d904406db2d7D57e67C7e8234bA752")
})
pools.set(Address.fromString("0xD6E158c040Ad1edf5b2ae3B3C461347a12B8a347").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xEb3BA01c488242DBF987bdEb0a963Ce41aA7c7b6")
})
pools.set(Address.fromString("0x547E28687Fe504E91133489c4089CE8e4e6E704A").toHexString(), {
  token0: Address.fromString("0x1509706a6c66CA549ff0cB464de88231DDBe213B"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x7E377010E2A1292391B42A532496BCa7204821Ab").toHexString(), {
  token0: Address.fromString("0x5976d4c3bcFc1c5f90aB1419D7f3dDF109cEA35a"),
  token1: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db")
})
pools.set(Address.fromString("0x2197d3ac8B80B39b129C6A527ccb4E542d7fd4dC").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xcE2a13c2B6ab6F15B7AEEc272F65D4d8b11e4619")
})
pools.set(Address.fromString("0x321041e4c5286c1AB6fA373E661F4bE9Dcd9A814").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x81aB7E0D570b01411fcC4afd3D50eC8C241cb74b")
})
pools.set(Address.fromString("0x038f5B4Af464A87f53Deb26BD32814d431eA4053").toHexString(), {
  token0: Address.fromString("0x14778860E937f509e651192a90589dE711Fb88a9"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x1e33F3d6EC1897e9Aac4dA79BF68F27f051ff776").toHexString(), {
  token0: Address.fromString("0x14778860E937f509e651192a90589dE711Fb88a9"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x53f182a75359a9da0AAF86a6Ea3e7D55c791e52f").toHexString(), {
  token0: Address.fromString("0x1db753Ab511AB6323446A37ABC83A988c45a748E"),
  token1: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D")
})
pools.set(Address.fromString("0x1e975C647a7f02Bf6Dd999CbbE5C4F3009aC5F59").toHexString(), {
  token0: Address.fromString("0x2808A9F0A3Af7FcF5dc2eF389f28043560ca07FA"),
  token1: Address.fromString("0xfCD8570AD81e6c77b8D252bEbEBA62ed980BD64D")
})
pools.set(Address.fromString("0x0d8F699922615648f1582DBC92a6Df02A466b225").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa00E3A3511aAC35cA78530c85007AFCd31753819")
})
pools.set(Address.fromString("0x3da43AC105f3ac91623B201F3659D1d901C9da3F").toHexString(), {
  token0: Address.fromString("0x14778860E937f509e651192a90589dE711Fb88a9"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x5d29D1F597e40D7DDdb548601bc5624e084305ae").toHexString(), {
  token0: Address.fromString("0x14778860E937f509e651192a90589dE711Fb88a9"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x58Cf3e0a03aA339ADf01bD28AA95B82EA0F15949").toHexString(), {
  token0: Address.fromString("0x14778860E937f509e651192a90589dE711Fb88a9"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xE1C2477ec7433eC33e2C47F100D514a3Ede53b72").toHexString(), {
  token0: Address.fromString("0x14778860E937f509e651192a90589dE711Fb88a9"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x3bCc31d5d04Ac882738E63D1204dBDEe0cd3D4c6").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337")
})
pools.set(Address.fromString("0xcE1011bAB096785576cA2E64FD9eDEcdaDF71727").toHexString(), {
  token0: Address.fromString("0x2efbAD2f8Add1DA0aEc5626E0ABA7aECbe6af273"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x88E6f9B2FF19A7bc0bB2Eac84BD7F7170688ae8B").toHexString(), {
  token0: Address.fromString("0x2efbAD2f8Add1DA0aEc5626E0ABA7aECbe6af273"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x969e1D236289742C9D36eA1c7124cdDb84397772").toHexString(), {
  token0: Address.fromString("0x528CDc92eAB044E1E39FE43B9514bfdAB4412B98"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xd57408FFF78FEc326aC75dC2a9F9E69ED92696Aa").toHexString(), {
  token0: Address.fromString("0x32bd830aAb3BCae5422e241a04a72B417e75E397"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0xeB429a0b45d23107e0aDe850638124D8dE85Dfea").toHexString(), {
  token0: Address.fromString("0x35aF19826c79C21f54612d1913f3F471DBad44E0"),
  token1: Address.fromString("0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04")
})
pools.set(Address.fromString("0xb3381D0bfd10f9B6B8A0BA317DCe51a425387411").toHexString(), {
  token0: Address.fromString("0x14778860E937f509e651192a90589dE711Fb88a9"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x728a2a12694554bcB800C062Fe50b975D28389Ff").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9d3cBf30D0c4675195203D799E9D3E0D9178c630")
})
pools.set(Address.fromString("0x93E2E0d0ac02076f0EFFDEb430179430E6F263A0").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0x97c1ea9cf26ea7CDe5271CB50C9Ac8B6A412d42d")
})
pools.set(Address.fromString("0x0BE0382a3EE50ba6A9d4CeeFc806675a77657608").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdb4eA87fF83eB1c80b8976FC47731Da6a31D35e5")
})
pools.set(Address.fromString("0x303F6533eEAC4b8965F1e9c9121767A79550d63C").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921")
})
pools.set(Address.fromString("0xA2A1FA8fe98D67990fE55e4405a9929833aC2734").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xbf0c7ccB143126C1bE90a426f676f5cb313956d9")
})
pools.set(Address.fromString("0x06ee51362077B97f9aa3fB135a739b49a9182eb0").toHexString(), {
  token0: Address.fromString("0x14778860E937f509e651192a90589dE711Fb88a9"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xC27E0CF064FBc5FdE7eE9c2273da47D51cC3DB58").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xC7AA0C7234fAb106696c32C0BEc6d3De9c66D0e4")
})
pools.set(Address.fromString("0x4e43BfE7b8b1DCBe7Dcf6Be98a041d0Db3Fbfb4A").toHexString(), {
  token0: Address.fromString("0x413f1e81e162930ccEd398879b9869c5AE805BA8"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x33d51c65CCB0D0201b93a7F7C19Ad43Cdc9EF77f").toHexString(), {
  token0: Address.fromString("0x04404Cc0E4b91F56379e307156Ae12823973Fc86"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x482F4c22c704d54e79B19eFf8C9908770b1aAb56").toHexString(), {
  token0: Address.fromString("0x1FCC651AFd02b0E88E03A805B41171a7D4Ca0240"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xB45D5a468252A4fAf79C2d96d258C3DD6b498719").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4fc55c709f3138ab178F1556A385d355b56f2541")
})
pools.set(Address.fromString("0x05f2078cDF31d5ADeA8c30438e6Aa56917b30Bac").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x65d874FD7D3774931aEe9228a9a176B6bA496A0E")
})
pools.set(Address.fromString("0x33e16547209273f306b5Bf42A101B413c1dfa714").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x44a6d47DE71c3CB63eff7071892B0A2cDDf5BAd5")
})
pools.set(Address.fromString("0x894680cb09199E10e8c91160f08feDFb77261B05").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4243257e43BD9f31C2f4E60F38ae15a56C2218aa")
})
pools.set(Address.fromString("0x0Ebafc15eAf62b931Aee51367330A36A2D541aF9").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xa70c2139BE000A91B27d69f1655F5F1793540Dfa")
})
pools.set(Address.fromString("0x0F8456e4269BaD6758E3707C4B2F45c12Be2121A").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x88742F0FDE8fC9381c07c8b886D8542AB9663034")
})
pools.set(Address.fromString("0x2540Ae3280E68526779a914eAbA85B20F0A4C531").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8bCA76370f80443E1Dc9480D881239c77110FAE8")
})
pools.set(Address.fromString("0x6c31c94Da777Ce00D1719D2330E32b8de65c8013").toHexString(), {
  token0: Address.fromString("0x3F1A455e91863426FB2b2bdeE0322E1d8f1a0689"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x92101F8650d36863efEc1fEdBFa49E1bf52b61Dc").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xa4235bcd077ddDDDa4e95B44dB425f08504cfcBC")
})
pools.set(Address.fromString("0x05378315f7517E20F0028bc563D60e62A28A43EF").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xEc9B291Ca826E43cE8562D14C29FD306183BD267")
})
pools.set(Address.fromString("0x71fd8F2cD6822e664EDCDc94Ac59a136035f6F76").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xFbfdFFA4C948C67A4FCcDa132E311DA98A1d5161")
})
pools.set(Address.fromString("0x610eCdeA4BcE6281e474798ba0c0E37C47BE99DE").toHexString(), {
  token0: Address.fromString("0x55298107304BFb29308e879b4F5299762311a70e"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x21154c739396045F0578301B9fd0aE004A0F84Ea").toHexString(), {
  token0: Address.fromString("0x0A065E4Ad683642031595f192Ce8C6a828E4F489"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x47b076e53E0b78aA09614275a5B8719CeE61C95D").toHexString(), {
  token0: Address.fromString("0x1AbD705D4790Ed595F4B650e0D1dbea697D5cABf"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xA8e773701f2C24D79d5aAb141C99A9844F3f19C4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF0ddcc7FA4946354168955f5A6da360eC8d2AabC")
})
pools.set(Address.fromString("0x573720d50fDA59F25a8Dc150559b680b39746409").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9C60796F8acc304785E3B1677a6e595e2A387134")
})
pools.set(Address.fromString("0xBe98dd23E6f047A8516fEEf8066Fa81d671174A9").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xeAa8f921917a234D0E343DcF8488d8c9a3Da2e23")
})
pools.set(Address.fromString("0x87B0e48baFbF541e2c873a87ac30B4F91E1C2171").toHexString(), {
  token0: Address.fromString("0x17A5010BFe3867801B92e25F6Ba4375f5A49Dc8a"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x4cd937E894Ad4103A2d6d2e2F2148dC6426c31C2").toHexString(), {
  token0: Address.fromString("0x557Dc99609Aa7dDb2759180Eda9baB22f1408E6C"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x6134ca6b88e220125D8ce198D339c8337667Cd96").toHexString(), {
  token0: Address.fromString("0x59E0DeB50fcb4457dD619e4cab8b44E19B41720F"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x65f08C796FB65C145Edd53b0262b9edC609Dc339").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6C755602c076ea61a78C6a8f87c932Cf5f6847DC")
})
pools.set(Address.fromString("0xa4f544301291303efB8efD67FDCCCFEb905B1b78").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9E01dC2b894f52f635840db87AB5ABbD30daec10")
})
pools.set(Address.fromString("0x4239e4B1eD43a9bf8d28B789C596B118A91C706B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x897809aeD8bdb95400acc5BB66f579419218F347")
})
pools.set(Address.fromString("0xbf19435bf5a3a42a15a2B543B7C228008B21Fd08").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6FC35cb536d8b298D5738847F19DeED9b90Cd5C0")
})
pools.set(Address.fromString("0xD189959EC8073FDF7e5FfB3d2B72630B649cbF7E").toHexString(), {
  token0: Address.fromString("0x0bd98c6d35E0c2151f62f12F408F363b641d175A"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x2F18b7786900afd7aEe33174e6A920c6FA6494e6").toHexString(), {
  token0: Address.fromString("0x5536D428040ee6a68e02D5CC1adb1FDC4ac262D5"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x952C97302F08fb28f49a83538518d2A0f68fd0a6").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x96DB77D4D8bff229c98A3102517f1968E52D17f1")
})
pools.set(Address.fromString("0x050c716225a58BDC69cf0e51E30beE3c7f021eD6").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xebA61AC4A0C3F517999D648337Ad8FBf09A70bDB")
})
pools.set(Address.fromString("0x2D7EDa548cF9b9422c056751b3bBC332DF098C53").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb3d023FF696F50c55b1d366e65213CB68a23Dd1B")
})
pools.set(Address.fromString("0x321A50ad0Dc02A243f448851c3Aa2371a3a8deC5").toHexString(), {
  token0: Address.fromString("0x1A7423d7a03015D072FD9A26A6f9AC2F07D9B7F2"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x15f1f3a9b17F47275110F823A1046e19a188805C").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x681148D93082EB8100b49C868777680E5E561195")
})
pools.set(Address.fromString("0x87781dad4a1a76Dbd24cF63944F9fA5b79b1a281").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD953Ec1B1C043490f1F31aC52C0f0A48D711685C")
})
pools.set(Address.fromString("0xddDC5Cd0496119B03fD5ddBBeB3276bbb7026700").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8517215C57B4C989f6bf6F8643B8a79dB7AA0858")
})
pools.set(Address.fromString("0x986920657150201bd4AB894563fbBF0624709665").toHexString(), {
  token0: Address.fromString("0x32B23081a9f117396E0cd2d6EbEDc3c3C4cFa53c"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x0edecB9ABA3C11F42bc30e37D5B3761fE07c1272").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8E1Ab1b9330CA52aeB35C445D43de31ce3E32b2F")
})
pools.set(Address.fromString("0x3Ba444A3f69D1360104032200866D0e2292f0fD2").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x875Dca8Bc6b4b82E2641F4bC48E3FB117aA8E9Bb")
})
pools.set(Address.fromString("0xd8bc20D47Cf6F175415115f509a9FA1D55988294").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x836814b0E6cbD36D2428F3604aDdE23894d24eC4")
})
pools.set(Address.fromString("0xa42eaaA20B9b82Bdd6DB0395477010cfB2800404").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xACAE9250AaaadD6dB1AE365Fcc67298E43140025")
})
pools.set(Address.fromString("0xB69379784AA6fC276Ad7e5d5380c3B4BC24B4f33").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x669Cd3B22Aec441086004F163528Af83Ef8Fe6AA")
})
pools.set(Address.fromString("0x0D069A52c53e2e6a1124339BE8BE3f55338b7D78").toHexString(), {
  token0: Address.fromString("0x0564087085BD062F35A6bd1aB9dB4e4770C042B6"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x6A340392B7732460E57D12943B982f4d333afFc9").toHexString(), {
  token0: Address.fromString("0x0DEf2ba9566Ecdc053295b020a568bC99D0EAb69"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xC717A36832D262A9626f180E8f5d9e579d0A4647").toHexString(), {
  token0: Address.fromString("0x23aDDbD86b6D191CAAc35F6A36a1F9bEee0baE13"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x8B43c0a56226ce45f0Bc8EaDe9B9c2a5961A5CCD").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xBBcf6B7856fEC97c3463b90Ae93673eDb4b00511")
})
pools.set(Address.fromString("0x564e4Ab2d131CdDe36AF4F37dC03CA85090D1388").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xAA0e6D71199e393c9e5de22aAF8D3d5C824F99ac")
})
pools.set(Address.fromString("0x199E256C951317DB72155F5452DD8263A8e4Fb8F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5655F6E47539D0A03111F02d80C33c84CAad404a")
})
pools.set(Address.fromString("0x64cE5F3549723c282E4BF585aC2E2EE9458ce3B9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xA73B230A2f8c858E0ef753B3A9F0F7763436e7fb")
})
pools.set(Address.fromString("0xE976d0175C46b885F96D82fc6d0406a0016a6eBa").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xf3073fc0359312a606E362F52a048AD70b16AC06")
})
pools.set(Address.fromString("0x405E74d83C8239F375EE851c6CE2B3E4426c3b10").toHexString(), {
  token0: Address.fromString("0x413E895E2a7eEbC4225634b784E71B1dD2395Fff"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x6d7f138414c324C0158e6B1692bB2E37997B94E3").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc05EBaDe407dF68a47021Bbb344BB08d9dfAa36F")
})
pools.set(Address.fromString("0x4b7928948f26E720d24CCf6fFCd0fEEfa4490BC6").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xfd8470c7Df8d1A5D37985e5477486CAa731e2Daf")
})
pools.set(Address.fromString("0x6D536BF02e2E87FA143B89557bcA45B02Bcc9fc5").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xB035474918a1d2628710f8d08744E1a7799eBA16")
})
pools.set(Address.fromString("0x5684d48C159292121ff28f5D9ef1836A4B6C99c9").toHexString(), {
  token0: Address.fromString("0x3a0A4c102117E51719830d67384432b06d08ACaD"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x8f0085A3F7DecfafDD2931553ccc759753d9D68F").toHexString(), {
  token0: Address.fromString("0x071e1E9B30b3dE89cE0a4A5FC24E1100F6010307"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x703f8013eb52Ca1C126379850Efad3b7DE3a7452").toHexString(), {
  token0: Address.fromString("0x3A23465e7E29B8511cB3e084a9120B711053D0D8"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xd97a3831A80BD5228E10B6AB14FE775d932028D2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC1acaCAcd9859ADA2eAEd61eDAf31A3316A31Bab")
})
pools.set(Address.fromString("0xdf09e57fdAB1B6e822688e1f1515C45663A70CdE").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb501c82A4A4cF5d18a4a3bef18B02C9Df05c7f35")
})
pools.set(Address.fromString("0xFc07fCF0A73845F280ADC81C1d9b5Bd9cc4E1B6E").toHexString(), {
  token0: Address.fromString("0x223B4268ef3159D0b3e5257018d48F030D622Ff9"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xc99c6AF9D56150a302C388E205eC29667FB32Bc6").toHexString(), {
  token0: Address.fromString("0x3f27f708bf39a83452CD986a4880DD32417B9f5e"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x4BAe277EA81E6301115a67464cA53207112Df1E2").toHexString(), {
  token0: Address.fromString("0x064d33603cEA4Ed3a74A30387e16BE51CCb0B7b9"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x27847198378Ac5F1A22aECa45633De29d161517A").toHexString(), {
  token0: Address.fromString("0x4F47656918a296937C2635462Edf3e5cEF8960AE"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xEBbFB3F1884b35c737B74c29B0EC02f57582E9D3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xea457FC9DE746339Db2351db39a560c3bE22AB49")
})
pools.set(Address.fromString("0x92Be1A88d2344902878A960961002307c9707bba").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc42942E17c2739dB8f4106FfA1ABeF297136f086")
})
pools.set(Address.fromString("0x22810F61B5845Fb8636FBF065D86Dbfa11a18092").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC41aeC42a8DBA3aCE6E77162521e59571CcF6CEE")
})
pools.set(Address.fromString("0x36e4291568a396dec7cAa6749b93fd7BbBDD3880").toHexString(), {
  token0: Address.fromString("0x3E2e3798032F74227dE22382e5C9b2A9e8109655"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xa8Cd8186762010A935Aa2F98af79DF453A835eEd").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8075074d4C2611c376229BeF7f036292960EDaa5")
})
pools.set(Address.fromString("0xa426Da52B504af0a089544C5D28b637172cE64A6").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xB836e1AD0Eea3fACDd4180b86455c9E475935Fe9")
})
pools.set(Address.fromString("0xD0ECCFA8F1FFD4472fD15ce0967C6BeF19f9C71d").toHexString(), {
  token0: Address.fromString("0x17953888d78cd71B598982efc7683B609E798B1e"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xb5331B7387d97CE3b6629B7486d6b372aDAa3EF0").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xf7Dbe49ae134a363839dDdE3c66Ff7980c14220a")
})
pools.set(Address.fromString("0x1EEAa01e5fAf99De2D40c0D63ce47DC9284e4B6A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x70EC834D05588E853182a5e29567F03A45bB003D")
})
pools.set(Address.fromString("0xd488FAF3774e297cAfC1DE305167497C05baD03B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb118a157a3b7E10dd88d581B355a703ACc4526f8")
})
pools.set(Address.fromString("0xdb43d96c75aD6263978Fc446ac7EF651Ba69b9fC").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcdEa19771862bE5ce719087E22318DD2E47588E3")
})
pools.set(Address.fromString("0x78772B8d9b3aF43349164A37b8F7CB22e9DFA1C7").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd341FA79d6F37236d8F1ddECF83cB5AF49902927")
})
pools.set(Address.fromString("0x3B308422DF69908e9720Db0BF755F0566b39a25E").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xb9b3B0202e070F28150573E2B9B108FB28f1F732")
})
pools.set(Address.fromString("0xd8C648df25d878C2D10D2068DC733D173a755112").toHexString(), {
  token0: Address.fromString("0x6A3c6a0CbB1d593860e94D9704617238701D87a6"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x0c9729cCEdE95e8aF5F912aF10B5c9f7E1f4674C").toHexString(), {
  token0: Address.fromString("0x158459009B0600b9651466f02b2EBF1389B010ce"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x0D9F0409182359e6eBCB2B86661d719CC5C8FAa8").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xa082C434502a2BBDEaf3D904C7D284FCD88c38b0")
})
pools.set(Address.fromString("0x329eae241bC975E157B427f108FcA4D4ED7bdC2c").toHexString(), {
  token0: Address.fromString("0x22e8BBE9725FF9085074494EA3D137EcE9df3FC2"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x1CcF4f2e30A24D8e3822AF9723Be4E257EC3D630").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdAe917b9200a22DAf17cd45d1FACb0509fc59363")
})
pools.set(Address.fromString("0xe07141DF13c15130c0bD25d6BD41149C6C84578A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x885Ac9BA25B33E0829E3D3fBC6693864e6c774A7")
})
pools.set(Address.fromString("0x0b6DE33e1421bdcF106d046cB93E7e7720f2D181").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4962594bD0D76752662ef66A3234D86683135499")
})
pools.set(Address.fromString("0xDaE71d446Ce87066b5CF2494c1C5073576DADA26").toHexString(), {
  token0: Address.fromString("0x16b1e6cf7BC20035caC6c305C840806c7dD7abe6"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x284E52B2CD2C29c3303746f66FbB3Fa66f4dAff9").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xE6D06F143254319E9A304329906cB426ad7c8674")
})
pools.set(Address.fromString("0xF534862f67c7Df8682CE6F576531f3D18522F0fC").toHexString(), {
  token0: Address.fromString("0x7daED1f1DA3ee5b0c29d16Da8301c53c5E3187AA"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x029e5cE9E20aC72dAf10afdFC545E1a8927CD492").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xA3d879D9CF6fFC7DF8Ec663730728D59957405C8")
})
pools.set(Address.fromString("0x06E5a61bb5cc2429Fd4a9E8580b4f88C52Dc58A6").toHexString(), {
  token0: Address.fromString("0x0242D9f618AaF94f433C3F8AFBc9424b42FF2Fb0"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xC17a90e6C59A960ad3bd80D2DD43931e36Be5a59").toHexString(), {
  token0: Address.fromString("0x2B6754232CDbA39b06DcD10f10e15A1FfF1eC9FE"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xB3c5486552DBf998f8cBAE99A80c7297a1e5cfDe").toHexString(), {
  token0: Address.fromString("0x2F169998BFF6A22bcC1f996a4D8796798Ef01071"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x15E97dAe328239563C6FC7C32c4032FdB299423b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdC293100AF3F67Fa10D51F139fee6ED1aA9a12d5")
})
pools.set(Address.fromString("0x1300b9c0A4C58d18300f65D174Dc700e9dE3ab16").toHexString(), {
  token0: Address.fromString("0x5038D5C0B9f37Cb929B8e8Cbe04488FE0eC52324"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x3bd54AF8f3f41daf4A5C904e2a3f7739b4aDDa84").toHexString(), {
  token0: Address.fromString("0x456F1707A615c4D2eaF79E96D7E34D5FC7d3908c"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x25399e09Cd14f33b447FFEbc6Eadc027e1995AA0").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xeE640377d4359D40177D53467EA0A6e616e8A3ee")
})
pools.set(Address.fromString("0x43880AE66cD4A75131d44A3988850DbF5528e4e0").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8E9A64560D14aC6189664C5457533c1A300fB6aA")
})
pools.set(Address.fromString("0x2BA072F3d6B0c516d215E1C020E2478d1BD7fF02").toHexString(), {
  token0: Address.fromString("0x4174476DB98e75B0C2298E528B10FeAc70248d2E"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x3cCF157818456Bcf38b297Ff8bB41b7Fd5449253").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x93Df0dc0419b06DC06f77c8Cecc3CfA534Ee573D")
})
pools.set(Address.fromString("0x7c078B9cc6a45673943Ff0E6C8331C05AC537A23").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD5553E9285Ed1E6484210a65647469C843265Dd2")
})
pools.set(Address.fromString("0x6EDC5819e03f3b42343Db10e16AF5A108ed0f16d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc45B2aB7C77e1C4Ae21F6270FeDF8B687eeB7EE0")
})
pools.set(Address.fromString("0x7fF2C5BF4Ef6781888586A233A48D361Db24856F").toHexString(), {
  token0: Address.fromString("0x5FF3D85d62A4933B7d17a74Cd30Df622471aCa93"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x7777856db6CBF8805c10ac74b72256d3447895c4").toHexString(), {
  token0: Address.fromString("0x353eEe42EA5E1C1b7c6f0456855C012375495bAB"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xA414E880C7B98FE7586958d9Ecee00C490ab34Ea").toHexString(), {
  token0: Address.fromString("0x1a4f75E63dEe12f3490385D69d72fDa9c3b79A45"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x5c8Cbc37E866c98F74082298F88ee50803848dDF").toHexString(), {
  token0: Address.fromString("0x78f9475d2938828073B4a98FB29a1a055e82f20f"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x57709066c4Aca8B7DD0e5640DF93ab4E2f6D615f").toHexString(), {
  token0: Address.fromString("0x2F85ab60Bb8c44E6fEA889b69be65550FCAc244B"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x8d5c4915D93730baC8f7f17dE732A4C79Dc82b78").toHexString(), {
  token0: Address.fromString("0x0fb32582901119b0E0ca7E2094cd950179914eC3"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xA89563Cb4A3320C7ad16e25C56CfbB6D32BA30b6").toHexString(), {
  token0: Address.fromString("0x3EcfDeEef1f935290901FD725E5DC3612aeFda4D"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x7abc4Ce5F5C0deC5b71Efc89044F4dBe667959f4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x854e32145A07C4b0145256Dc7b1D9158031941AF")
})
pools.set(Address.fromString("0xB440D8Bd06BC6BaE5E0A577dD139d1759b2375A2").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xf9A66C02835519fCe90E2Bf09719C7c3c964FcCc")
})
pools.set(Address.fromString("0x425E390187527eDEfa36B8BBC90eDE7e422173F7").toHexString(), {
  token0: Address.fromString("0x6D78ee7b06576Ea280e4c788277391C298218940"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x6338109aA729730643597A107F467259B1CaCDF8").toHexString(), {
  token0: Address.fromString("0x559181288E80F6021E35aDd9F475f5ABb4f8230f"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x9EbdaC68E40D8eB85e569F1b4bA699B7E379C28a").toHexString(), {
  token0: Address.fromString("0x545D6f21C439C105A6791A7b2ec4a3a143e449b1"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x75B46187f9a0BD0b214e02950C142829e046A2A9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xbCaD6115545BbB67eEc93658fF372A2Fd7E42A4D")
})
pools.set(Address.fromString("0x4E464A0904A5501b186954dF924aC58e37A8263D").toHexString(), {
  token0: Address.fromString("0x0280A531Df64191f3e59c319A2d596422e2e99c2"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x19aD8792ABeDa608E356005c4c72b2E63cB6b4B5").toHexString(), {
  token0: Address.fromString("0x03032Efe0914ED0ED0F895Cb8335621CB8eF0B06"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x645CD60E4dD2e12CD3D1b5ff574d34281BaCFBfc").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xA745F0A5f27F3f9865E80165616dC7eE1F5Eeb97")
})
pools.set(Address.fromString("0xCfc61F3A093AE1accc2276B5262f808Fc46799C4").toHexString(), {
  token0: Address.fromString("0x016d29CeF5734003941123451D644c5Ad792FfB1"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xaE3830A0D677fa860115b4A7EcfAf4b353796950").toHexString(), {
  token0: Address.fromString("0x61dcC2bc25B78586014Bf6A482AdcBff1A6740b3"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x70be957D356b6b1aC694FE65d2124c1674a01d28").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xb67709cbE4A5dcA6598BBc10b2aF44A218F4315E")
})
pools.set(Address.fromString("0xD4D57c3bC9D632593Fa015e4042A5eA2B54eA24F").toHexString(), {
  token0: Address.fromString("0x4CF2bf6b36c1b3ae50Cb30221f2D7eB229B0F1bB"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xE50746C68d70B446aE09879F772d9041554534F6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9Fa60D6654C867fD7999F986b7b36B38e873C929")
})
pools.set(Address.fromString("0x7421c26C86188BcE66690C4a271A2Ec61c8d534B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x644F23C548AFE7548e14981d98Cfa9633a2f8cc8")
})
pools.set(Address.fromString("0x2300d3D5470dDE83541988122A50023F43091908").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD7b7a11D68660D22EdFdfC9480e5c8c23f17B025")
})
pools.set(Address.fromString("0x328C2c436c99AbCB49D649e9eCcaD62f8c9712F8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xCc03f4985ABb48CCCa6F200f51222e0750e8C09b")
})
pools.set(Address.fromString("0x8AC2F9c9b94DDD6E614DdCfc65755fae3a2f4b3D").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x96Eee1a8145cebE9C6512AF14727B84328a445dF")
})
pools.set(Address.fromString("0x35fd84999B9E9C255887C15AcE7EEc54DdD30cA2").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8e9396601B07fD056181C11B86f69A20Dfee0773")
})
pools.set(Address.fromString("0x8f17cD2CA33328Da147da7AfAFF1687457198C53").toHexString(), {
  token0: Address.fromString("0x70CedC062B6B80198b64c2AAf155A22B1E5C2A7C"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xf77FFe51f06FAe8573dfB32d2b08f3Dbc9c9d6E9").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x88ba38EfB411E7bc5eA758e681c2D915ea7a515C")
})
pools.set(Address.fromString("0x54AeDa50e1698AF859Bd01b51023848bB0A3D319").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x45d7564436455EeEcC9779c18cB0A39Ba6933102")
})
pools.set(Address.fromString("0xd91282Fd9752706D289E9323d1aCcBC3C92311b3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xCA015BDdD388d7d66EDEd65A6Bc8Ae0699aaa5a2")
})
pools.set(Address.fromString("0x075cfB795f9b60d0cbCeE982618b6F1989aB1c6d").toHexString(), {
  token0: Address.fromString("0x32eA25A0221C7990e9f9b881373dbBCdAC1c47c3"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xC2d138D5fc6c3B88b513d5d0F3BF37652abd5eA2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4b5346901D40428A6f74aafaf9dfbaE3E07d466f")
})
pools.set(Address.fromString("0x8eBf45A09D2c5D637d60766DFba190e357cfC6A3").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xC7cC979e1A2F3307d1192a3563e612AE3612f60a")
})
pools.set(Address.fromString("0xc319AeA1c964aCAaD4Ba929f9eA40457d6424825").toHexString(), {
  token0: Address.fromString("0x02EAe3D32DFc5aC13EE5cE659fA55BBB2fef1B65"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x2486BBC9d9394c5345f90b4f7969f9EBc1753122").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xC4B04449e68f1f3a75F1ACAC41E9B557BEd8F49B")
})
pools.set(Address.fromString("0xCee3354a55148A5943116f0f1eEF782D885E7870").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xcc03a0E488B59377B7A70B800E17b14B3CCB74e7")
})
pools.set(Address.fromString("0xb11Fa744231fEB3e6A05dCFe3b1Ba57505E2158A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xA8d28DD55B7A426b0EE82206F9D6feDCcc247903")
})
pools.set(Address.fromString("0x634FA39faba653C50beC7678f4C463879a3B3515").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC757bf7EdEFdA4AC8801D3234ee356d6BEE5787C")
})
pools.set(Address.fromString("0xa6C164A763F635fE6823A68a936d233Adc16ADf2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x87120b4DFA548C4bbD6dA5F4d85C7f56aA889752")
})
pools.set(Address.fromString("0x5dC2a958b959764e6f8461425C3607A1d63a0809").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9c25Dad429AEDB3BBe02b228040fA10237ed1C1C")
})
pools.set(Address.fromString("0x0Dc5FEd3Fc2cAf965d5F0CD4D09e0E71Eae2f0AB").toHexString(), {
  token0: Address.fromString("0x486ff8fb4C533D974C999bfcc6eD1e5951405580"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x96C3104A183B1A1D280D2D040dFA916C853e7596").toHexString(), {
  token0: Address.fromString("0x268799764B22d3e35E8455ef2dF50d0b79fA8Cdc"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x889b0BFad63a03A9ae6f6238dEbdAf01B090117E").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xC4E69A0d1Cd8fB936AeA93a210De44F44a3D24aB")
})
pools.set(Address.fromString("0x240B069468c7c65Ac331f71876B19852A1fc9b8B").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xb0360b349f92B2a9C4a4440fD6aF46541d128A9a")
})
pools.set(Address.fromString("0xACE492Ec642b52fBAA0d1F3AdFDa45c2563294a6").toHexString(), {
  token0: Address.fromString("0x3a6A581528Ed86EC36aF229ac71825b01d6238F8"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xC96559eB0028D4A102c1bA0BeB65401A0dD71455").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xA0159D3aaD2b79711342c248F915A1be0CBD02dD")
})
pools.set(Address.fromString("0x6f6013c065eA6a3689aA745476F105764d783841").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb11dDB72F5811fB1D9Ec7CbD74536cAeD1A0af3f")
})
pools.set(Address.fromString("0x742bDBe7c4d1074d0374283e443b1AB662526a6F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD2F8a9A32d0d2Bc166970979Aebe21514eD4A484")
})
pools.set(Address.fromString("0x70f97e6fBf1A88f23123C300Fa6d7a9eED193640").toHexString(), {
  token0: Address.fromString("0x4A702D3E888a2d18EAddeb602EFaabb58db6cF2E"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xD74a176479A9a5b503A583A45D6cE624F44360a5").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xD1407D8262Fe27066B581489b61eDadAe3924b61")
})
pools.set(Address.fromString("0x0ADE5854492e4701AcC34d021520c98A875ceBf6").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xdDbFd3386D6Ac9B4676b6E925259a3F55E822224")
})
pools.set(Address.fromString("0xf5AdDef95f7F8dfA27f1FC85ea24b91f78C49e60").toHexString(), {
  token0: Address.fromString("0x10d9CE64bEd189B967C7734D6567bBcE47D501b9"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x00c415C22Fa62144589bb198371920c9358fbE85").toHexString(), {
  token0: Address.fromString("0x30FCA1A77d2E3aefc7d7056eD69865593CBc3A23"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x84F050938499d0FeBdf48D2255e3777bA8cF2484").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcf8998aF0a782420AC0B74256913BB5e914DFC3C")
})
pools.set(Address.fromString("0x70CDC7D1b7fe06361486141B9DEc1417B924c8fc").toHexString(), {
  token0: Address.fromString("0x3Dd0489079007Eb1806C2468616839a41Ef472BA"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x72bc239e662d17A8BE2Ff9366dA987611Bdc5272").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xf26B129dCd3d9C6257fD1b9a3dc4391b0bDa7C04")
})
pools.set(Address.fromString("0x1b92D354aa9e5aeB787eE5b8B52743d05Dab248D").toHexString(), {
  token0: Address.fromString("0x2B3dCb0B7593f1a60669C19558e1Fe252B87067B"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x1ce16590dD637282168300a0177823f8273EE57b").toHexString(), {
  token0: Address.fromString("0x6Dec5171F69696E45bc274667DAC63E6f55aeBA4"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x5aE0EA373f934879DB0F1fEb5416B9039347eDb4").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xA17E07E34eC4eC2c88629Fe7b541Ef3D2351f68C")
})
pools.set(Address.fromString("0x88e214A3c545bb5d575D08B2052953e7a872a4ae").toHexString(), {
  token0: Address.fromString("0x0F7338525F9D998970f262a3371079C79c6AB785"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xD23966A1F0f13769A81d8756C38F9e95c093bf7f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9F34D43D6Bf77ff5BC41ef41E2b921566bbC46BD")
})
pools.set(Address.fromString("0xb5d88aB570566DB79330DCdAb2b5235135783970").toHexString(), {
  token0: Address.fromString("0x22b6BD2F111F5B5dFc67346f503f854f1F1174D7"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xE6B0C15D0856B00c3643b6F4045642Aa452A861c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xAF2d3DcFd2512d9b08867b037494AADC734d6e1A")
})
pools.set(Address.fromString("0xA25b288a21B0181cE236E8E6083A14eBF7d850E5").toHexString(), {
  token0: Address.fromString("0x2ADBB067Cc1Cb6910e7b9e17f7CfA4D998fc999a"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x54e0Fd146d9D395144834D14eb05421fc4A8EC43").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xb44157F1C95578EB5Ef1A0e74612B918af843Ee6")
})
pools.set(Address.fromString("0xC5371fc4229267EdF44Fa98DC1FAB5e7981265E4").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x933b5e48fC14892708D784DBBf0c5F70334dB85F")
})
pools.set(Address.fromString("0x7454b72Ce0674D35f53E5FD58142f2DEA42C3BD1").toHexString(), {
  token0: Address.fromString("0x780C837E5CB55f527f8051d71526b8503E5f5A31"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xBEac03bc0F78431Eafd8A14b951dADea79960ea8").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xb2EB67b97Ecc021032c5674de244eFB19E679064")
})
pools.set(Address.fromString("0xd063C79cb2C5D97A430f487f7545420e80571127").toHexString(), {
  token0: Address.fromString("0x3f9875338133414435f273509fE73f674A195F82"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x553Ed1F8b30704982b23a7916dFee1F7104705d0").toHexString(), {
  token0: Address.fromString("0x142521988B097b56527B4e94833Cb6C26F014163"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xA31FAf3bF23cB4EEfb95eE2815506681a50D9Ff1").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8148a726691Af7e73cB38649741e28bB7CAA591D")
})
pools.set(Address.fromString("0x568bC87cE4B4E17b895B030221BfEBDa4056b185").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x66DA6eF44DA3B4471214506b38da67EF485EA26E")
})
pools.set(Address.fromString("0x249A1EcEECFee09C596EffdC3F5EB72eAC9C80cF").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xa91BC24E65f297AE1c775fa257219bD43577Ffd4")
})
pools.set(Address.fromString("0x30002A11D9Ebbff4736e5a6A6Ed19CAcf53253Ed").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xE9F5D845f75deD6d5f1FE84182285ee7F352e22E")
})
pools.set(Address.fromString("0xc57fE685266bF2237b176A81739c99694588870A").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xC33d3334Ca50939acD8De390f08185Dd06027FAf")
})
pools.set(Address.fromString("0x1d3a22702C3F9ca1Ac33b763594FE8092086d67c").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8a412228BF6Cde220c13AC2C44aB9bBE46cA0AD4")
})
pools.set(Address.fromString("0x8a7bf3cCD80d8E2AA28C1dcFf9C1dB1586F65baB").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xe549418a493AD4c53b0B420C377a479Da95F6f03")
})
pools.set(Address.fromString("0x5be43561c0F5169CFaE8891835A6EC70C66f3133").toHexString(), {
  token0: Address.fromString("0x3B51643188bA05Ef7777B78363C99BDbD08860Fc"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xd56E810edd826F8BB7DDC0e1238EBFC62c3eA77f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xe5e0763c6840BE2a16d15F8A00b718B05D566728")
})
pools.set(Address.fromString("0xbCC6463cB67E76d3e5dB5C6E64Eb5D44F68Cf813").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xEa682C915003d4BDb9d745A247D0880B076343b3")
})
pools.set(Address.fromString("0x4b5404d4552b4CB4D7bf0EDE1eEafd8eDECB3FD8").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8eD0f073eBfcf41aA17b7a52775187Ab117e3a65")
})
pools.set(Address.fromString("0x034BE8663DEdd2084C57c34F9ce70d5760709d68").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xbd51Ee4aEB9eB920238C851eD4a1e3Fd130451AF")
})
pools.set(Address.fromString("0x6FC227cB2260735F7BF6585269C0590891cDF013").toHexString(), {
  token0: Address.fromString("0x301dD6A3f89BB8cf24A7C0b026BA816E211417b6"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xf9EfB92119Ce66e0169D6d3b350a866D9ae5c600").toHexString(), {
  token0: Address.fromString("0x4325b6a8C5993Df008C97c20120c55e91c4B8566"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x32e73D40e8Bf47A5dbbC5BAaBb3730384d244E47").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5810e9221cc5C0E10CfEA124E649aE2F2BFc7462")
})
pools.set(Address.fromString("0x57c7E5CAC4cC8Fd92Eda25BF0944A6eF211A8b78").toHexString(), {
  token0: Address.fromString("0x20F53A2316f7f98E6a052e8f3C9623be8c20D5FB"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x84f0158653417A1509bA170c4a1880493Cf175AA").toHexString(), {
  token0: Address.fromString("0x00444a9cef6e9fA86A5e4CFcaF68b3eF59282959"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x69021E93aB6E4f1D219609Bac02D0fd264453498").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD7F551d5AF1750e95EB150E50623e9A55C834625")
})
pools.set(Address.fromString("0xdbA155aA16775185597bA298F694670e00aD411D").toHexString(), {
  token0: Address.fromString("0x05c093eFF9F1FD1fF3e6A6E9367DADa12943c40d"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x9471fBCE382CE2C2Eeae6bA4DFFd3a09e3Cf53cb").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x87B3E75C3dC238c890BDe00D2BD0DbbeED05EE14")
})
pools.set(Address.fromString("0x6fcc4cA29C1bc38fC2F5730EfD542931aDdCcFb8").toHexString(), {
  token0: Address.fromString("0x71cc018dBaD96eF4AAC89DaA04e31879F9062fA4"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xDeED0Df0518ced02cEB95841ba255aD1026132b6").toHexString(), {
  token0: Address.fromString("0x1B56Cd6Ee204D8232c576c4D2273c1E6F24d8176"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xA1fECF3b6C2881f2562c5D13e5994E3c4CCf7b38").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC79CDE9a77189AC541F6EBB3527413674641EA32")
})
pools.set(Address.fromString("0x2B37125A70FB631A64985Be67Ef7FcEbD8D94377").toHexString(), {
  token0: Address.fromString("0x0d2800E40EF43E1b4bCd12dAaAD2C83517023314"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x2E5f1065e9F564eC7ae17D5D4A6F98141a9A7eE5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF45a93B3b7E275A14Fd956d322Cf3C0274856688")
})
pools.set(Address.fromString("0xE3ca93fAc59932788dACe7d85F0280041aAe23Bd").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcF30548AD13ed75fACb3E00A9BFD32CFECF8E9eB")
})
pools.set(Address.fromString("0x73574b974184D0e8a7E04A20Ffba0ebDA4f10f6f").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8D0f06Bc68E269A95859691Cf163b78Bf7e27D41")
})
pools.set(Address.fromString("0xBbE44d9a7158EccD09CF00EE551f61497e04F0B6").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xF8C228F2937B2879CDCC7Ac7Fd32b50a988BaF51")
})
pools.set(Address.fromString("0x9a3066658E246D60CA3c0b60A6EEF497d3f06A43").toHexString(), {
  token0: Address.fromString("0x64fD42112824C23CF7d0E39e71647e82b1484BA3"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xd8F202Fab516810B30F5481E8dF4c41c6af7B85E").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9bE2B604A57E8e2aac1b63dE794B7F0084D76a2c")
})
pools.set(Address.fromString("0xa0EEC3c8a5524cF7161106b4E9B01874E1EC8888").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6AE2062a701125f12329Ff168c2f49B059F2d31D")
})
pools.set(Address.fromString("0xF6021Bc71d0F2F8Ede1A1782CdC234719aD0D094").toHexString(), {
  token0: Address.fromString("0x15C615335070bDe4484D26254e0329126953e597"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x002E87c86F26d3d306F7611c04bb3751213840ED").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7b7BD3993dD873A79582e1f06297f392a0786584")
})
pools.set(Address.fromString("0x6c0daF52Fa0064D642B508CBa8C1a5117556037d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xBA20896dCb32B8aF0dbDea56912Fc8649bc134a9")
})
pools.set(Address.fromString("0x8791602A60357a2255b7E4Cf6Fa309A6818EcA7c").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xAE46947bA3fF908675CF04c76f626F5f960a44B4")
})
pools.set(Address.fromString("0x3A48bD29BCE07B4C6eEF51Fea72eF5c39ceb2009").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xFb08D4a51D58De8a35AB80EEdaB8D180091ba56F")
})
pools.set(Address.fromString("0xe525736a5777758cD9981Fd9f5867F6E1e2eA8D5").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9A2230615b81A729F4FD3792CB9577B7C29bCe97")
})
pools.set(Address.fromString("0x8e7c2297f5032E579D2d170027D176354883D6dd").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x7fcAc6c24D065Bb48e43fFB508532Fb1fcE9688C")
})
pools.set(Address.fromString("0x78438722F601dd1B99e3A0EDc88Ad9a5B40772f1").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x83769aA80946Cfc95F0bB30B8a2269F45a9EfB14")
})
pools.set(Address.fromString("0x9066aeF970F4b0e4C3F78cb07E67DDA82600629a").toHexString(), {
  token0: Address.fromString("0x00aa79e95AD5939c6f07BCA41dC5c22505A59F3A"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xb48576bb375F5F2e082404CD1Ea95dEb74219030").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5e9C294Cb827a02C2612aB66Db2456f9Dd7553aE")
})
pools.set(Address.fromString("0xf9400bC185faA178f27E1659638a45f52877DB3B").toHexString(), {
  token0: Address.fromString("0x08DE64198f5171433ed64b693a42C5647834ce81"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x48aA69d327579D161489b5e43d325b6FfE192c18").toHexString(), {
  token0: Address.fromString("0x5d329F22bBb4F598D31E9e16e37d3229aAf44351"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xF80b60e19ff4AE2112C8b63a763a5C8B038E24d5").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xb3839F124CE1D57E8a0aebB4d1E698356583d0B8")
})
pools.set(Address.fromString("0x3f0593c470f9cD97FDfA22f0E874B6650b2E1e33").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc792F1230C2723d3c9E79C1232d6f62d141918AF")
})
pools.set(Address.fromString("0xB3f465bBC5733FecDAF5C141Ccb7Ad809bdC5Bf1").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xA39fC8B002e5A854ecD4fa24bf0Bb7e46FF5f184")
})
pools.set(Address.fromString("0x72604d015Bfe8829E3901ec5ec0a5B1AE1330196").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9f750cB47D5514E9C73d572b1910E72B2C5AF8A3")
})
pools.set(Address.fromString("0x28010301fd66287502b849ac6128D7bEF9AdAbe2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xf702821D9cD13A3848034b59Df0652c8d6f28d08")
})
pools.set(Address.fromString("0x7B9f9438d324aaDeE37fEF75b594D5931975de4a").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xbed6aaF45EacF41BaFeF28150944AB76dCc92169")
})
pools.set(Address.fromString("0x2c20E5A6EbeCC334D3AdCa0f92D9Fb6d2a69A539").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdc334EfEf2b4C598E8A993F9218389A21cD3bC33")
})
pools.set(Address.fromString("0x6674ee812B650E98D134E7A39846ecfFAA53F1D0").toHexString(), {
  token0: Address.fromString("0x10Ac60AD2D55277C26d8Af3d46189c7a4901CB47"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xAb62DbBA3645aD9d89ce57e2a60Ccfab764f7c21").toHexString(), {
  token0: Address.fromString("0x369CC959993Efd0D265762dD4777384bff99A1B8"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x2C63eC8689EcdA5716221B23E7B2af7D695e77Fc").toHexString(), {
  token0: Address.fromString("0x252a0522B2b77a921e9D0fFE23CBbe5a795386D3"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x415dED6Fb2DaabA056B00E6E8DB5dBbA7DF2E852").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8914329C084786C0cfE2D52a515A902AD7670Fe1")
})
pools.set(Address.fromString("0x594A20B1E6b95450569fbE2714D7f0f9711Eed30").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xDFe21DcB99edC8c60921071841A0C8C86624900a")
})
pools.set(Address.fromString("0x343CdFD74D17254227dDF2e5F3070fAA09EA2d08").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x80BE21fE61d8CE9Ff1b51354BA79E62602E28cD5")
})
pools.set(Address.fromString("0xFA11A466cDA9AE531cEA72F4d96B77175e1e23f1").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa34B45b210bbC69A925D70bB50C805e696e8F702")
})
pools.set(Address.fromString("0x1350BdD9f77DeeD20Ba7443a9D6c24Ef29fdBE9D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x77c47e48F9B90Dd0697D8316E02327464b962420")
})
pools.set(Address.fromString("0xe437585C584B5C6fed109cDB8B56a140b7636200").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xf34CE7D34048fcF6ce509D33D7715B6Ad4ae2fc9")
})
pools.set(Address.fromString("0x6F3bC21525ddb1C48BB2D0B672147379a3C69d46").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xdd324a7550EFfa0F422a34433f0008e1f4AaE6D2")
})
pools.set(Address.fromString("0xbE2C2291b23110Bccbec7134bE957aC34F546eb5").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xB9646Cebc2462698981A2ADA57E0511AfCd3353D")
})
pools.set(Address.fromString("0x20Ea508e5d563d0307FFd918fA39Acd39cAD9022").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xcdbD7f1261ED96593ADA15Ca8236e404863Ac557")
})
pools.set(Address.fromString("0x9c3C0F927A59B17A76AB314891c2531F449daf0B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB865ff617f09db4F7c9267D3AA7893D1fC7C8723")
})
pools.set(Address.fromString("0x3F7d2554129e6Dc0550E5B9cFE54e82B185692c9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x753FfD5BAAa6CaA67B975ab4bbc7C906048960a9")
})
pools.set(Address.fromString("0x1d2278a59c18A56e74b08E2F858C5B83743758e9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x554c1CD0a9bA0f18938c0e05d8264e0489Eb004D")
})
pools.set(Address.fromString("0xB7ee349afd1F2d012D0fc74ade67dCF1FcD42aD3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8c5E8a027aDB82efCDDb788CD594fbeCC7a80b64")
})
pools.set(Address.fromString("0x80F7c8699C46032e65103fA4ebe1753ec43e2120").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xAA2Cce7515b1B4dD92d9186deB0A736919aB9fa7")
})
pools.set(Address.fromString("0x041dE38E19b60D3e67B4234d3476021Ad75390eD").toHexString(), {
  token0: Address.fromString("0x2362E3167153330422fbC40b23cC05Fa434E3169"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x9829c5f9f795193590B196fD9533fab49EadAbb7").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xb775e1cbFC7A330B1763725D36C038f622DB0B0F")
})
pools.set(Address.fromString("0x1D27F4dCa6784fF61A342a5a0AEeeb86697eeC0a").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xA034188B243190388555E00deE9322A5cfB93DD4")
})
pools.set(Address.fromString("0xEAf498c890a060f6aCceC9865E4756FEd679E6eE").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD1175B6C401B9d9f45C5793c72ECe4EB88Bc52D5")
})
pools.set(Address.fromString("0x0b36769122F2De4f994a41C580Ed3DcDB77e2C58").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8179dbD3f86CEdB553708Af0753db9f5dE3cBA01")
})
pools.set(Address.fromString("0x39c5720aB05BBcAd997207ac404f2FEe3923fcC3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x80ed2493C3269dCF4030A860c42c5e1b7cd0f74B")
})
pools.set(Address.fromString("0x2262Fd2cc593D7cb9829dE8Fd4b2A906cA274aE8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7ea762AA8d0BCf3CCdC61Fcc55997C7875DC94a2")
})
pools.set(Address.fromString("0x85C17AB99e4e578a68621caC720486Db6f5FC52B").toHexString(), {
  token0: Address.fromString("0x01faF15d0F1100745bDe1325aCDD72535712ACeD"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x4129819223F4F7F572C267edA490Bb0a919489E6").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9009a1C79FbA35982FDcFd7af26900EA99E86538")
})
pools.set(Address.fromString("0x0915E0C8dEC8EfA1052884a855B386FCB29D3D05").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xB29F99621B7A4A9BeaF39dfB236e77642FA20eCc")
})
pools.set(Address.fromString("0xC08cB084a07ACcD558e376E7a343551f39E256dF").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xE934082CAd9Bcefd829dF43f2d5AeC040294f0d0")
})
pools.set(Address.fromString("0x43113eF31f7A0781fCd314a6D71B9011cDd7827b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xe00e6Ea7501021F06B4Cb96A08C8e1bf65f2cA11")
})
pools.set(Address.fromString("0x1Cd2c822D45aaB1003C35d4A404f6e75A31915d0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb6E6a9BD0b6219e3a2429A7487750eFFd9764A53")
})
pools.set(Address.fromString("0xF7c9b974564DC8883e177b732cac87EFe82429E5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdB7371B1863d3b0e2346D9696cD724331cce653f")
})
pools.set(Address.fromString("0xF4248BCd7A082FC1B4aDf254aCE054a9A0BA3E96").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xCA1981F065FB5c99231caFd38b1Bd3C68148013a")
})
pools.set(Address.fromString("0x16a5157d948f120CE4fE162D2A436950443e0C1e").toHexString(), {
  token0: Address.fromString("0x3044438E2F1D2a73eC54f7Cb0EF1cb93A1515d7C"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x82f82259531d5eE6Fa456b6353e94119480EcF3e").toHexString(), {
  token0: Address.fromString("0x07fbB0C9013BF74c3968F14c41930ebc23615270"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x057A89c2E0349A70F8074d384f85cd71E73348CF").toHexString(), {
  token0: Address.fromString("0x355C3C8d2FB99c45eCB8317608199b85a86C286D"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xBfE7a89D019767737E863c40FF67c2c9142b7b12").toHexString(), {
  token0: Address.fromString("0x3F7f314c474DA965ED13caE7005D0537a46677c3"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xB028108C73dce6D9fc63201F13799FE7Cf526936").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x703B87C87c33525B94dFbB2f17dC9aB0d869EB0b")
})
pools.set(Address.fromString("0x4b3e95C211464c058b4495ED0449cd0D1Fd832B9").toHexString(), {
  token0: Address.fromString("0x25B1cEB03DD907c1e235Ef20afF4BE3a24a0389d"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x63a22Cbfe793d437e6abe6b96b0aD1ff541338DF").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xe1105C7ecF6ff99D6a2dC79DBe408f8BFaAB5fe3")
})
pools.set(Address.fromString("0xd30a2496d0a719b28CCc60c24046223dAec9D56A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6e3908211370aFc3813d1a215Ed493d8edcb370B")
})
pools.set(Address.fromString("0xbfCD6AC97Df5F0AeF5F63c9a0B71C68001D21e73").toHexString(), {
  token0: Address.fromString("0x218582742AaC3Eb3078951fDF924aEFC37c2eaeE"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xAf409159760F5243f1A3FbFF7e65902375f8cF89").toHexString(), {
  token0: Address.fromString("0x6BF1Dd384DF8283407FCfFcb2D2606EF550f710A"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xc45188604C0FB7994b73b8Ee4868a3e866D8Ab9d").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xf83141913FAD235861a4111017a47A95F685C1a8")
})
pools.set(Address.fromString("0xb1Cc454D35671cdeE1328ac64405c697efBb9758").toHexString(), {
  token0: Address.fromString("0x618AA959AF89Bd55385BDAdC5c7346D40a94549a"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x50F3F5965eeB8f7015D46f03C4f9786bB031E377").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4660684600F7fEAED7A97AB63648F554A9A2F7b0")
})
pools.set(Address.fromString("0x07c898da849e48B0c5ABD6A57917bE330c5617C0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9e4B8507eEF7583FBC1eB5cd454C50e5316a32f6")
})
pools.set(Address.fromString("0x218C3bD1AFEB1F18cD9D5493B8539B0CCd648955").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcceC6fe3daE81e472909FD6BD01284E3Cc259eC0")
})
pools.set(Address.fromString("0x6ec59E2BdD5d57bD74C36513407501d2E4404d9a").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x93059c4e9f3059c97af2F1CFD1FFc978eAD2A5d5")
})
pools.set(Address.fromString("0xC6F851d9d9571EE37a0B42d651aC166E3F26808C").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xCD1F40fb16082Af219F7543f7B9719D6414cfe27")
})
pools.set(Address.fromString("0x475AcE064c60FacbafABC6199fC9cf5E4c1cab95").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x984Df307aF659484485A27D4067639310125B147")
})
pools.set(Address.fromString("0x19DB126BD2fF455a68312842AA3658CB3d97B766").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x91B311808DaEC44774d01a73264305CB57E3f689")
})
pools.set(Address.fromString("0x8a18b659c0099E8B347D240Aa3ae0bB0D1053dEb").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xfb21DD4FA8810a96688D69C2AfE1f9E65601123b")
})
pools.set(Address.fromString("0x6E10175b0971D2a5EF068793C25528772fAD6212").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x794cD924A7f6F83aaCF82ebF659A76fa7BD97c4A")
})
pools.set(Address.fromString("0xe765300307974C1BF8f2d1e272F24a90712E4F63").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc95E94755Fe75F4368191b09084ca84060b04091")
})
pools.set(Address.fromString("0x5346D6F452ea3B6D7633d328F5656Eb0B7F3B2a0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD401df34C3F24DB7075BdFa9E1ce514EaAF484de")
})
pools.set(Address.fromString("0xB9896b72c9f6d4813e41715066a9fd746e643bf1").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x92f2386F5F05EDD0C2E0E05869a370ED9952d732")
})
pools.set(Address.fromString("0x1b9CB023405283AA6dB6A6B0b9Db46B08A001d05").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x97A8ba2162eF9f6f57fdee92603ECBC668B7b0Fe")
})
pools.set(Address.fromString("0x1edcD09BC5F04c8B3007deCBEBEE667D33B1015C").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xC61B71aacCF6F7A52FeCE02597707D6D97c6026D")
})
pools.set(Address.fromString("0xbBE942eCA9F279094737238C99fd4d29EaE74bF1").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xEBe6dC163897134811320f565Da289ee3c9605d8")
})
pools.set(Address.fromString("0xAaF5AbfaD12721fEF4a3403fC00e27A5c987cc7d").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xd46A82F899B6b0CDba4619c681e35f2F01a6cac4")
})
pools.set(Address.fromString("0x5e2308E1f5a0b09e0fDF1d0E365507e34A658734").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x787120E81BBC9C90A1D4eB24e33EB07fD82ecAc4")
})
pools.set(Address.fromString("0x2c62dc349Be8836Be148225fCcF87C81eB8Ec9C0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x73dd4ac804E9237f33Dc4aDf83EDaab0Ef21D8e2")
})
pools.set(Address.fromString("0xa2fc86D50480E23Eb74EB510D95a40B0e2326e69").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xf63aad2944A8B6180668AD37e17814106455Fce8")
})
pools.set(Address.fromString("0x5Daa50D3eAe82C93a53A62f1D099B18c13669c14").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xbD710155618D07C29D42104847FE72Bb280Dc7Bd")
})
pools.set(Address.fromString("0xdca3df27cf7be46eAE5c7Fb7d829460863eb2658").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xFd93E62b7319C4A006CFEE2d17292dbBd3C53Cac")
})
pools.set(Address.fromString("0x5E19fC0BC5B5e309e940A2394a8DF915cfA3F107").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xe465E360b59ffbF8A19e33F3e3A6301cCc30F2c8")
})
pools.set(Address.fromString("0x3eb1F3EFcB712306a0e0d8cB4F9fcAF9aF6738B4").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xE91AA8df8A2edC534AFAce3D939952465bd18b04")
})
pools.set(Address.fromString("0xdf97B23fBa287fE402E4A367976609cFbd2c86C6").toHexString(), {
  token0: Address.fromString("0x0B44A180877A0668d7921a7E02f7C96E99F30861"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x3154Eaa447B44685bB2193885A68839A6f26772C").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6f17d71a55023a40c9896c1d8C0156cDC76Aec4B")
})
pools.set(Address.fromString("0x1cC46ca9E947F91A0Af26f716f6E066B3ec43493").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8a5982A2FdaF705cA4E861A2CbEd6fa7cC41b71c")
})
pools.set(Address.fromString("0xf91f5171eca19996387c6b27C4FEa503238E14D8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcee4925A099eA3c8C636F99E61874239ab3261De")
})
pools.set(Address.fromString("0x7582407cE7469e8ED862DF991b684DCDabDE3130").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xDE47E6B1F4158430c68A6A9c00D453BEe3e54e6F")
})
pools.set(Address.fromString("0xBC085a09CbFF99ddaF8Ed83A74e10C3DaA083559").toHexString(), {
  token0: Address.fromString("0x3Ad4690ac9CD21Cdc55BCBCebB4A6172B43255B4"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x0700752Cf5071BFd7bE62e0810b9f97aDe224401").toHexString(), {
  token0: Address.fromString("0x2F9D7de3DefC115644e5aA4dafe9404192084970"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x6AA7a164eD088498813Db3Ba52694cbd050aE509").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xEaEefb95Bb5EF593AA3B424148287e85fF47b8E0")
})
pools.set(Address.fromString("0xAc3E4635a34dEC4E891C627365f06C6A279C6B12").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xE3D65382eFE68d38627b55A042071b1326b9F6dc")
})
pools.set(Address.fromString("0x7f4656A9A2Dce67E0340eD2356c3D2a805627d7A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x47EEe8e3a4509F8256839B652262e5dE6958C21D")
})
pools.set(Address.fromString("0x527a581679bB288b59EB72bA2Fd869ef12C2dD87").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xbFD40121394ec00658a381990A36B1dbffa89305")
})
pools.set(Address.fromString("0x28896e61e5988fB5dA1b5181671cC4171F3bB8DE").toHexString(), {
  token0: Address.fromString("0x07B03ECdfcb48A33340EaDf7802f074bABA532C7"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x297F728780fd9F023d255F6B69dB4293F6E14763").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x925327D7943D0D4F885a398f344DdF9DC5b908f3")
})
pools.set(Address.fromString("0x60299a3F7090A45A809E8565c0F424e349007c06").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xf365d4608618864b1EdD2E603494D794FECfa387")
})
pools.set(Address.fromString("0x43105AE1845598F89c278F198BeF12D5BAB1C5d3").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xd6Ed10FBC98ff743d38c39b22DECD72aFD67b7Ee")
})
pools.set(Address.fromString("0x4bb91912129e9294939F31d17d88C727102D867F").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xA86c9399051eb0ce130aBFE9dF763382Af4353CE")
})
pools.set(Address.fromString("0x3C9a9342D1E5126Cd6589C0E5C1ed495086e8E29").toHexString(), {
  token0: Address.fromString("0x1Cc66E05b003E018fb12BabD52dF00B706024Cb6"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x6d39B271fe9516a6ac15B76C639f81d111a5aA39").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xfB7C29129bd3CA5C883471F0D938C2950Ed77abB")
})
pools.set(Address.fromString("0xf86d8BFBFA460DcD94e1899140483aAbe0e20203").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xEbBD51Ba7FB774F62ff2DCeceA0de08eda63Cc22")
})
pools.set(Address.fromString("0x784fc42DbC7F919194e48dBe2D9bE1D0FdCce4C2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa3e3D03695e09b1713C399686097d0B29E02064b")
})
pools.set(Address.fromString("0x68bAf3e19E82c38eaEC87F80aF24442C85776545").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x762B3F547Bfe78C4421eBfb53c780B6Ff24Eb96a")
})
pools.set(Address.fromString("0x7c1E6DeB06074922aC01D48A288aD0D0AF4b729A").toHexString(), {
  token0: Address.fromString("0x7639Eb7013771171C5250D4Ab869FB2BF94CC755"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x8c6c8E1E4Da5333fD739af00aB0196C46bbC3E32").toHexString(), {
  token0: Address.fromString("0x4C72f3dBD7E5Fe4D2093C8dcC076227bAb0D31BA"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xd62Ca059C0d551A2D4d212f40730267d811df319").toHexString(), {
  token0: Address.fromString("0x600d946b950cb1bA40BdcaD0915EA4Cce770fA87"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x4c07Ba8b87d651Cc77ae7d31f09F4FDD07bE8103").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xfEa39ea6abe273e83C58Ff7440BAE1404FacA8Df")
})
pools.set(Address.fromString("0x8eb3DA798f0FA29FfA047B194502A87E4006cddd").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc1c9060265758cf1BCd26bc7D018d12cdE30cB0C")
})
pools.set(Address.fromString("0xA92B418B2BD2E454c938b1a8AD6a6C192822d340").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x81b39C8Fb3E1e0Bfe7d2744c11f13221E94DaE82")
})
pools.set(Address.fromString("0x97d24d220FbA3B06A95b6283879Df835f61B4916").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdBdb5E1A722f73013D62a05591a35f8cFBF53aca")
})
pools.set(Address.fromString("0x0aC34A2C936E3A0E8479b27c6E8DB4e5AE8e70A5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4e1C1B2A4dD889567635B12123BeaB24256C7B25")
})
pools.set(Address.fromString("0x05330D018D7bB3D2CBb9E9b6FD221F1Eb572C209").toHexString(), {
  token0: Address.fromString("0x08dd9293587D7045787333cBA17d4969bfB12d31"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x48E71d9AB4e323497709016E738B92E01dF0CCA8").toHexString(), {
  token0: Address.fromString("0x6d7756F2a8AC64582066b6828E6c2122E3C6EF28"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x5254e9c5BB0ae48feeB47e38A9bc47579977e004").toHexString(), {
  token0: Address.fromString("0x42230b3f785413D14c7490c1d66A0d0ee4692678"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x34894F60d4c54AC6186DC8e6158502Db50ebeb46").toHexString(), {
  token0: Address.fromString("0x30cEB430a6a54231Be175f0e51a314eDDF230DF5"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xc9D0004569AE3F04b14b5465326eebeF91e69670").toHexString(), {
  token0: Address.fromString("0x30803Fe217d30876a3Bb01c54e0A8cC74Df4CDdA"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xB41597ECC82A582f3b582e7e2785cd4403a0B09A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xf219F55C2708ef1C525EA78E217017D8cb12503d")
})
pools.set(Address.fromString("0x70F0c90Aa6f697d1Ac29ac4C28859B1b03B443D3").toHexString(), {
  token0: Address.fromString("0x3B6FB583fCeCEAc826C3E3D14E3eaA19f6D8C7A7"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xf78B1191e7069536F4fbeFeb8f9b903DEA28ca92").toHexString(), {
  token0: Address.fromString("0x279060c43Bfe4BFB3558274F4adc545d7Efe3078"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xC51aF258F6dc7bcc3441f2E15e5B6A14A05C4D13").toHexString(), {
  token0: Address.fromString("0x39d179865A96e9d692Eb1E59C78b135Fd323f76b"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x99f1393B8Bd3E30D3a1fe7347e185C43C9729AEc").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xA543a0C7bDA6E75D09de9D9f5bac780A3ad59131")
})
pools.set(Address.fromString("0x4348d4Ee114cFB24d9055F606E91a6006a3d7066").toHexString(), {
  token0: Address.fromString("0x16Ed2B0688DCb6839Ba377A458C6d9a9acC7560a"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x54C80F24F6716a12bFcF55fD821156fABe5781BC").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xb7721D2Cfe09a6D71D7FC5EE04b6737CA7E81DcF")
})
pools.set(Address.fromString("0xbb0A0bBe7f92619b2233aF47F2aafAa0a627C133").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x633BADb3b6b583E6E9b348aC40D2c73Bce3Ce5BB")
})
pools.set(Address.fromString("0x01C6648EE59a093AD5538E321ba754604C11B622").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x472A83369d9B85B7213B7cc54c5d799F8DEaDE48")
})
pools.set(Address.fromString("0x89A11B2ba36A8E2302D5371b7ef4FaC80D5B44e5").toHexString(), {
  token0: Address.fromString("0x302acC6ca08fa4f6D701b5e83Bb0F2ebbA6042Fb"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x2A4710759A36d906926FcF9633036e19818F114c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9Cb996A00E098a4D7601A1217E01eF120Ca7743B")
})
pools.set(Address.fromString("0x67699D7412B42E48F805882825ce3A5c12Ea9935").toHexString(), {
  token0: Address.fromString("0x031C782C8c842eE60999ed70B26F8009CEF88C77"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xEC0a662A11D35b21981857311222BD98D7fB7798").toHexString(), {
  token0: Address.fromString("0x0F8306c50Dd367d4A538571081AAb7CD0dd5083C"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x4d8E5c069dc430E5E059182BD7E6BB5503edb620").toHexString(), {
  token0: Address.fromString("0x7ABb5a052A2A6eA9992B606e51e92F55Cb3597F4"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x87d2188d4916CC78BE7CB3340CB6DC0507A4b631").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xaa400631C9f6f3B533A9126163898931F64F7efb")
})
pools.set(Address.fromString("0x6A9E1cA76Be8338bAFe4a2ca2a9cF97bD53A8bC4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x425BA6Eb44701ae60148030b9321e12306a8b077")
})
pools.set(Address.fromString("0x4121D2112aEB573F178B1beEaFfdC69c4D4209Fb").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x73115065C93f07318D9EcE184b891fF74a086e44")
})
pools.set(Address.fromString("0x159f51E8E6D8235CE1F7B2552D050d073172d4F7").toHexString(), {
  token0: Address.fromString("0x089A9dF0eEB3CfeeEA77Ae3daC211d8685718103"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x4B0928a83AF0D99dAc206cDE175f3E16bCCD237d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x71b4C899EF872D0eD9764aeb95AD4c8619Ae5F92")
})
pools.set(Address.fromString("0xa19cf42096d6C44C726420B21bFf3c12b73cD084").toHexString(), {
  token0: Address.fromString("0x698409d769ECaCF6d111d1eaec2BA90CA1207529"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xb76D9eeE8886439b940518aDdfe2E11ac69F41Bc").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc9bAA6C2587863e5113f47f0AA1BEAA8e5853CeD")
})
pools.set(Address.fromString("0xB853fED81d53b7DaD09643805E2593C2EEaBEb53").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9f8804bdf0d05E6884eF91B0B66d2523250a9F45")
})
pools.set(Address.fromString("0x086491Fc5509fB13823ee7727c13CEF387869765").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xB09e10b93AC65ef10aC1f8Be4a2Da19020dc4f68")
})
pools.set(Address.fromString("0x54c97D6FD4d120FDA9060350f3cF7ae8Ac205f1c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x941f8e59B2B64B0A0481ffa2A20dC1a5dC5127dF")
})
pools.set(Address.fromString("0x9F066d380b8b99a7E37E7fEc45128e1950a6bbdB").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9357eB2FC11053ef64bF24591788D30D59023985")
})
pools.set(Address.fromString("0x12F274969425aA8fD0B07a8637dAF9F83D317221").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xBdc48e42F80D69FeEce7e8400F8c30A8a9c1820b")
})
pools.set(Address.fromString("0x99602bEBa0C49962F0A0535a6480A58065cAD0d0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc75124C032EF00DF99Aa4Fb61222517b05aEfaf1")
})
pools.set(Address.fromString("0x8667AD73588d021194A75b0862021c2F130E2c56").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xd4bf06688113D2DEb136F2c981FC702CAa25875C")
})
pools.set(Address.fromString("0x9dD7c719fFE77Ff3f4158393cFe6dcE042D320f7").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xCEE0f724DfE108E52FAdf82F9146f77830a68D0a")
})
pools.set(Address.fromString("0x80D6081E6F185e8248CBe124AC61631F212AbdaE").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xe587ca1ff2044B7aE6e42A37a8f6E05c9EC1b01A")
})
pools.set(Address.fromString("0xB15Fe48200EF5607a5d2C4102eB3A31C6878322E").toHexString(), {
  token0: Address.fromString("0x0Fee35bF0F7650020330F7D3d63Dc503Cf255c82"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xbe9d7CfE60d1e53d8B5f38c2462D1bd6390cD197").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x69F6e37F19E59a6DacfAdb22319B8f7e09761447")
})
pools.set(Address.fromString("0xADB40EDe6B43928c94215ba5c93DC26544AE1416").toHexString(), {
  token0: Address.fromString("0x3eF011F2f4D7beb357B031041493C9d6e1A302A7"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x48E75Ef9F9E524b6cCA4901ed1c10878c3735ce1").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xeb0F5CCFCFC32DACf70a9a0d6c2dF3c50CE7dD65")
})
pools.set(Address.fromString("0x7F15891556FA1f882E900fC1D47b830D32a2ED2B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xcee22aff423c21F4e253A319cB751ded7718baA7")
})
pools.set(Address.fromString("0x7A391749B729C919a01Fe809f98515eE0b4a6A26").toHexString(), {
  token0: Address.fromString("0x7C0e4E1f95A91C3ED124225faA2673d5558F43a6"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xA63515b35CA617Ab2e19cD67cF793Dc53Db0C985").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc80A04267DA2597eee4e900987EBad01ccbBC781")
})
pools.set(Address.fromString("0xAf02360B6E9dB06496B4fC2D92aeFe95D42b3910").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xe7102703d1dda41e799EEa2C950350f24bCCCAA5")
})
pools.set(Address.fromString("0x8Dd46b6a5933F8AfA72212fb8Ea22c244234724a").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xBa886B5cDad297f12B7f0E973C992E5C11a9852d")
})
pools.set(Address.fromString("0xE11dA0D03C80336a1DB940057bf3545FB69a513C").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc01C42f96C276D0e30ef7be16f074d9e01C2D0D8")
})
pools.set(Address.fromString("0xbD5A7De419B01A47974DB37a6180F97629178e44").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xbC22014F4FcD2a633f48A619cCB8E832EF02132f")
})
pools.set(Address.fromString("0x33AD2E49d8a84DD3196DA22353C92C64a1D0d603").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xe735778DD816e542812610404Fc361c8e0502FeF")
})
pools.set(Address.fromString("0xC171C5A991D2e7949679DBFEAdE13886d4008E58").toHexString(), {
  token0: Address.fromString("0x1Dd0aC045cc8cF3980d43b9B7355722Ed87C9689"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xd0af330Ce603851B8072D80A4d802c9a136FdF59").toHexString(), {
  token0: Address.fromString("0x481ddF43171e2865B0C6E7AAd07873Cfe3C85e81"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x87b46A12D87EeCF3E00c015Bd762AFd1738387d1").toHexString(), {
  token0: Address.fromString("0x5B65AecA95724687f7ED20d9118B03F0BCE67D1a"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xc1b121c9Ef1742677eb046D21e5B81BCA8f26a44").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x83F03b551a44b3779Bc634386B0DBA0B5eA6ff40")
})
pools.set(Address.fromString("0x7Dc191F4038b895f9dcfff96b60817c6Fc249C54").toHexString(), {
  token0: Address.fromString("0x3DDF9c55Dd2ca4831949C61a576e429E56286250"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xc533078356faCd8C4A29D89Bfe7671Be75881fb2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5bb411eD2495234af3530A190f7fDcaeBd3f2607")
})
pools.set(Address.fromString("0x2eE10EBC2B6B9e15db4aB63B99EBD90B4454107F").toHexString(), {
  token0: Address.fromString("0x1750b1E86F1Bb3ce6a1507011B435BCe8F176487"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xC498E4e891C1db38b492D70d7C1BB4A1A515375a").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4FBAcabe1198f16fb3739426c54D3363f7180e71")
})
pools.set(Address.fromString("0x8f5bc8FC79941039A5B915dB41dea66B05eA0627").toHexString(), {
  token0: Address.fromString("0x0f7890fB5E32E9b4C938bdB33E3ABf7dfB22163C"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x60A3e0334cDFD9aF9A30865c9FD7e565005c71a5").toHexString(), {
  token0: Address.fromString("0x185C751bdF4d134333bFF54767cC783F261d50ed"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x2689a778364C6B1B1Ac8205fe0aA8f8d36EB5cd8").toHexString(), {
  token0: Address.fromString("0x00F1643322Fb27A5C9733a1f6AeC649e1c353651"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x19D2ff15485B43BacFd72d2695a25208Ff65C52a").toHexString(), {
  token0: Address.fromString("0x40251B7DF9400919919696E870cCa7b33Cc59bac"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x6e3f5387EDabC02b046eC655eF5cCd61713669cc").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x834047a31BCdDA43c14330d90Dc8A3C829077924")
})
pools.set(Address.fromString("0x169a0B5f14e3eb197441C9B224379637Fbbb54Ec").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE22afbB2E389E2A408788b40A8f4Fc19293eCD71")
})
pools.set(Address.fromString("0xc70FD8d5eFb724A42E5bc6b50154E5BC5b9FF2cb").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb7Ff71a60E210A2a930473447484f35fA7e171A8")
})
pools.set(Address.fromString("0xdA8a41d8649570cCdF7CB6110DD3116CB687064a").toHexString(), {
  token0: Address.fromString("0x21d1Bb64706ee1F424Ec039bbEd6C1a11Dcc8212"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x31e206d9382157a678F9aBdcaB506f3a23740aD6").toHexString(), {
  token0: Address.fromString("0x0C92bB0F50152cF93727cAC23846472089a333d7"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x62Df168faf1628c4592B1CD35E703Cb461878E58").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xD768f57b2e4F68A650Fe0be8e519A9957120b4e3")
})
pools.set(Address.fromString("0xc30c1d52C97d7261E7d7100FfB8Fe370a0Dbfd6c").toHexString(), {
  token0: Address.fromString("0x414b1e823A4f2f5d35D22f97D375F0f5871111d8"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xDFa879a22B95ff8BE6C30c9d801735d3Bb5B9F20").toHexString(), {
  token0: Address.fromString("0x5803a19c78BA06FBF2271Ac24DE97eDDBAD061bA"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x094509F6abB2149e1cC31d5e06d1af5c3C935F4d").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xEA4E41B855AAeC5a28Fbe9C8152e0EBe6c618B13")
})
pools.set(Address.fromString("0x347d7db0F5D8f3c20a85933B8B08d3E67633c87e").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC48470FE182a4D0B6736F568eFBd96dcB3cb71Db")
})
pools.set(Address.fromString("0xA6778aD9D1325c42eB21Dc6C27F15737f38E6e02").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x58fBFe54904d390F5000BCA7F934836DFf8e0d76")
})
pools.set(Address.fromString("0x9879C7162cE4DE71A97295C0D0Ec7213A54c2e69").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x53B35D4Eb388f52A2d5a653341C104Eba431c99B")
})
pools.set(Address.fromString("0x964f203CA33aA90170E083a9B792C84C1d2e08da").toHexString(), {
  token0: Address.fromString("0x17E4603E092d8564cb42e31Fb78B16D885F1bb24"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x8Cda4B383Ff5F3cA00813662f492841962d0fa99").toHexString(), {
  token0: Address.fromString("0x7b9Ce54152b753adc333b0fC479547BBe27F714F"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xD2069f1ccFB19caba343549b0e37394AF72A880d").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9144CFa8AE8C72574401C9871F93113842B41297")
})
pools.set(Address.fromString("0xB75a8549ABAE92dFdD58518927fb4B9165Eb94b0").toHexString(), {
  token0: Address.fromString("0x51143084fb3fBF20687546A3c2edf028ed5aD5a5"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x2d889b91E7B15415ecdCEDD44715fd4f00785B94").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xd97742e89d8a64f5E26e6b56d556BCF120A3846f")
})
pools.set(Address.fromString("0xFe41E097dfE0E656667ef2D4cc6433915c1e2306").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xA0DC5073263692b5ec6217382ECE8299142d1001")
})
pools.set(Address.fromString("0x688502bf51d5FA8176ACcB472cC249428Fe33B15").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xeb8ED690C1c16A6D6b222582Be0ffF3604cc1979")
})
pools.set(Address.fromString("0xb12594021450c2EE7E6A860E5C083E731113DDC7").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x528aa57BDEAAc55edc5325c585A3f3361740CB93")
})
pools.set(Address.fromString("0xD7839dB768E8C4f9b53e7467cfcd26D7CCE02197").toHexString(), {
  token0: Address.fromString("0x31F5de1d6BE177de99BEeeF12dc3c60F5a4b5BD6"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x7454895C5F0ce8EE79d2EE861e57138aD61214da").toHexString(), {
  token0: Address.fromString("0x2f88fBF0415Ca6b894bF57aFF891925d8Ab64eE8"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x0522bD564F0BBF277b14D746D959e25c18704861").toHexString(), {
  token0: Address.fromString("0x07E491dA650aD4D1C9f8Fa0c7c729e3c6382CD89"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x3059496B9587F8A7deCcbd09CC1c372Be34aE75d").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xfCe9e41503B345054d3Db816A7E22222F6c9f168")
})
pools.set(Address.fromString("0x53E369a0ebA2df9e1fF737C18feb2a92FF5D61db").toHexString(), {
  token0: Address.fromString("0x17733E1866D35B70FF791FaE6FE77FD6ed0227F1"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xB946000739333EecD54C6a01afD95b77913D518F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xea71096E5303947B19984a4f88D71792809769F8")
})
pools.set(Address.fromString("0xc7D2d87c9c560B5E295E050F0F15Cffa95D139cd").toHexString(), {
  token0: Address.fromString("0x3574D6C3210ED6EAc79ab17d8112413c9e4d111d"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xD74b5e5089bB2fF2f51cb295361a8593FEc47947").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5097dd249E414659Ef1810EDb856dc6f0F7E1E0A")
})
pools.set(Address.fromString("0x062E3Bc57a084E9d4d388580E1855e7af9C342B6").toHexString(), {
  token0: Address.fromString("0x3BA732F6F5E3d7c57d2de834C056b78b38482095"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xC81Ff2F3e99b32E220E17B93Dc947F7Bc02300aA").toHexString(), {
  token0: Address.fromString("0x20B396547d4Ca471a92025564128F6f08914DB2d"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xdd1a51cfca188d0d2807e6B9824F9363160E11AA").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xb050E6a851b65822aA48B38698f660905F34f596")
})
pools.set(Address.fromString("0xbb64c27423E9Fe463be15689a1263561aD199FC5").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xF3AbdF6455Fe5b269e7d13F80B7d446b9D908e7b")
})
pools.set(Address.fromString("0x554BC950B73609399684e799dE9F5C41FdF3577C").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x954B9705C40a64B136183704675cb86a65f72d3F")
})
pools.set(Address.fromString("0x9F97b1D2317b61fC38dFf44122BfC5bAb8c68b56").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC28EA91a957E7bCdeED3c20D9011ECFcbBc17949")
})
pools.set(Address.fromString("0xDa23692466fad986e5c7e584E7162aeDCA0D0374").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5cDD70D39dF02bE5fF7f82aCb55939b991fc8186")
})
pools.set(Address.fromString("0x0393410f54Ff57631Dd482aF0FF8E9eaf4B5bE5f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x60dc14F1BcF8eF0490899c42e92D42D2BD4c7DDB")
})
pools.set(Address.fromString("0x15b31094876153049E949b62E323714564fB5bE1").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4f46816A0C7A1762EAABe640dc7d1d411af39E59")
})
pools.set(Address.fromString("0x2D327a10BD55292Ad9429d1D48F5c0ADa9e0Cf1d").toHexString(), {
  token0: Address.fromString("0x06Bc77EC95ADB51a4CeEF8970699f242f457709c"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x24d3c0A1de1948bb1159B8b936dd62E395B24c4B").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xbE8930C0563245A1712cd4C6766D0637B6AAEc79")
})
pools.set(Address.fromString("0x8672BDD58c1510dD1d204a21e97676740F40D7B1").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8a8431d026179480353374A5301F496bD57bd961")
})
pools.set(Address.fromString("0xB340678595b48D6C0B42f33D629680F3114295a9").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9e45B639Bf8A3470D1869b7f036f7444ad1b5cE3")
})
pools.set(Address.fromString("0x18665a8A44c896f8B614C5f017Eb3A51FcbE5127").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xAb97FD5858c3B81ff238Cb5a16fE10B21A748291")
})
pools.set(Address.fromString("0xD5206f6Dc2284dFe70d8c5fa90c3f0828cD76D55").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4e291e51Ad698A39045BE44CEaA71CAEfCfd53D3")
})
pools.set(Address.fromString("0x6490690c5FD35Cd451f5e0BCd44a7089205E346f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x71FE7DeD4afD3E8a8AEFAf0fee51df87AdB84CDe")
})
pools.set(Address.fromString("0xFAaf3eDe5b407292366C21e8400ea3c5537C823A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x86B0E0F282c2d28F6c3CcCcff91ff717D7F6397F")
})
pools.set(Address.fromString("0xb39B22016B026E4015F4894337A9144f8AF7Cd57").toHexString(), {
  token0: Address.fromString("0x2346BBBB100e0EFA425Ed6cE72bf7b41b0A5ac83"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x351415f021D44523767eEB194A172fF423d4fe29").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xfe0444EeC99013FeCd8D2f97D5d330a3F213D800")
})
pools.set(Address.fromString("0x7088F2DA44c6BFc22bF9bc0e0C2402C2844DED6b").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xd125cbD787e7560cd6b141708E9297Bf94ff1AeA")
})
pools.set(Address.fromString("0xdc3e8ea362FD648Fa69035a2919699a1CE09a5BE").toHexString(), {
  token0: Address.fromString("0x019F68fFF034621F6FaeF47D604536009ba4E471"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x33482d28560c48eEedF7573B4452296c9143dC70").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x94c37b9d8561a7c01dDDabF8240b1125751C32DE")
})
pools.set(Address.fromString("0x593fC910dB761992FA1CB499E3736798e6Ce7b68").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xf2009Db79e538d3B3c30C8514e7363FB067B77A9")
})
pools.set(Address.fromString("0xB0D713953A7a9B4E3BC16a16C6C63859406Db2D8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x52b81604ae31C02389e1798ABEe4BCea57c49f71")
})
pools.set(Address.fromString("0x4F5cBEf744cEc467beDdA2719A8BbA0c39289C57").toHexString(), {
  token0: Address.fromString("0x191fC370F2c49A011D231B866E0146ECEecf2c6b"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x2268c697EcEAD81A922ADde2F9e3a27958C81B3F").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xC9d51B4EEeAFBD767c4c89E5f3c369909Fc04561")
})
pools.set(Address.fromString("0xfb6DA2cC215CbA3F96F636d189F61A2CdB5da473").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xF11EFD00D8f728b2B55fe79Fcb039C012486B091")
})
pools.set(Address.fromString("0x00f3a3eFA151db571B39fa2ed5bff231D2B62102").toHexString(), {
  token0: Address.fromString("0x16cbE09c28E3aB106b076aA6e1044b7d2bAAD025"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x3461979776f4db705148779B0B9F8d5CD75Be10e").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8EAB8ae345b4B3918E857413c7a3783669CFE2fb")
})
pools.set(Address.fromString("0x6C0e3e0115597bE0d3d0Ebb89d6dB73974D1D876").toHexString(), {
  token0: Address.fromString("0x37B15fDbddDB70B0660a5635364239d712625E5c"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x36F2cbD70426ACAee3cA0038b8d20e3f6800464e").toHexString(), {
  token0: Address.fromString("0x2E7397f85352749B64CFCC5f62c30EAc8E0FC369"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x65763E4Af5576aBAac53E0ae9cAA13DDc5bF0Ee4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB54789aC42F081464d2BA1ccF44b9Ea938dd4Fd8")
})
pools.set(Address.fromString("0x185f50010B9F6C733F169bb2EA23c751ec99248B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5fC7A3349364d7F710932ec4deAB40382a27Fe30")
})
pools.set(Address.fromString("0x58cB8A5EEe96649Ae06d354BfcD6111B0F18C389").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc28428cEf8F3D7239B0e6271b81b2D3e51FBe36F")
})
pools.set(Address.fromString("0xFc159C435536B4cc5ba9De84E0dF86a47cce1d31").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xF73be4D81BA8cfCc0B997Bd2512B18a037b57898")
})
pools.set(Address.fromString("0x38ae5aF3ef6f5e59635830C19a4Ab412c7684940").toHexString(), {
  token0: Address.fromString("0x2F0f83388d2623557d3C7f3613934D5c3FA26FD3"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xD3924C93d3016081F72016c6978663EF62a31D73").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xaF4603A2c298bDC2a03e338c2777715e10b0C268")
})
pools.set(Address.fromString("0xBc14d604f6dD21474195E9D5fC7f4D7b8376f848").toHexString(), {
  token0: Address.fromString("0x4124227E9dBE1eFF88f4329BdA7A2a1159c06a17"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xA37cb9289f95152f922758407055e8D0ACD89DAb").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8B4c4F592d53EDe44521d36F7dD5663F4Dc102D0")
})
pools.set(Address.fromString("0x501a129107fC2CCbE1E508038A1Cb291E6b640Bb").toHexString(), {
  token0: Address.fromString("0x0fABa58f8e7c40E8c0525EA03BFEb67Eb4F804C0"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xd4267334D0c322ed7a803CA83765D1F4eB121a4a").toHexString(), {
  token0: Address.fromString("0x096EA915BE7f754a51C3DBBd092802523A678e82"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x6F48c84c8E319488370727eC8D3a600752FA2A5C").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xEC1D2E88EB63879749C2195A83d2BE5ABB625d1d")
})
pools.set(Address.fromString("0x6068C5C5a9C451571bfa0ac1688265dDE3242ecF").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xab0e5878DE974F278450C10799e8aDa135bDf5D1")
})
pools.set(Address.fromString("0xab7050d8Eca544De085B36Cc86b2CAca9d8cb148").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x91412E947DaB1b39035A57dcAC9080998f7CF2F3")
})
pools.set(Address.fromString("0x25f61F09644d78A450A2eB5456eD51241db457D7").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9550a48b1ed0cAF6E2ACbB49FdCb44F6C80D2359")
})
pools.set(Address.fromString("0x4007Db30A1f82B606310ec2Dfb1265C217450fb5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x55AbA76D01AE1De446d9962f8d2eaA0fa877E94B")
})
pools.set(Address.fromString("0x2aA7263530BD23fAc38173ED520bACa8f045f334").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdD0A165296479fd4B1026043225DA509F6DD4D23")
})
pools.set(Address.fromString("0x775B1f4AD84d0c83A42612A3bbb1e89194Ef7c77").toHexString(), {
  token0: Address.fromString("0x25902C90FDCa864E234404B134d1609bdA5Cb1F0"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x3528149fe89B559E6A0e7601955c0a9e500e8F8F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x63443F6C6086D4E67F8C06C69A3fe9d6aDe4eB1e")
})
pools.set(Address.fromString("0x3d3a62DE2249733257A77B2A3daAD9Ac4981F809").toHexString(), {
  token0: Address.fromString("0x25A7bB90e89b9D9a77ce5a7Da302673c1D971c9D"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x3A7e8cdb5D4BF669FfDC2d90e8dd5fE1C0a5FF9D").toHexString(), {
  token0: Address.fromString("0x43EEE79603D84fb56b21e471565d43Da0F690dA7"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xBC1e492058eA352aB9F622915048D14C09D1262E").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xA494C86d3105eb5d2A60535E59AFB0dF7A9255C4")
})
pools.set(Address.fromString("0x4aaf21aD452e76d6C2869593AB2f6b31C7636E1A").toHexString(), {
  token0: Address.fromString("0x16f05F3A91063BcbDc78B1a0013E0Cc2796068a3"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xA45DFc4E6ED367398C08f8343d40e06bD252434F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x64549cf0281bB46f6047c2f63Cb3aDD28fb845B4")
})
pools.set(Address.fromString("0xF8ba8373113e71586d79e19700648CE691d931dc").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE5b8Fa9e68299824863dEdA5A8d41787D09b5CB1")
})
pools.set(Address.fromString("0x291110FA25496168D7D336F9403dc6FE3E9C4fDa").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xCB914BffC68AC8d4FcCA997b5b904dF4eF35F38F")
})
pools.set(Address.fromString("0x2694Cf8E4eF1CA15368AB911055aAC8586B3e6A0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC4d8C5303B9D0F236358e08E1d8A7e2C6C5Ef9B3")
})
pools.set(Address.fromString("0x1780a76f234b36115812c0C333B62B03EA718BD8").toHexString(), {
  token0: Address.fromString("0x37487E8DFc32F92B9Bfc3F75F894D8E87F89836A"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x9d134F7894352997891077cBE91157e6B94e616C").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9Bb4075C7f61b8124339374BDA64d7b695828199")
})
pools.set(Address.fromString("0xD9Eb6B069aCF029Bc16A904c2f44817570E81A9A").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x98930c1313BA4dadcfDA47CCe953bd91F8155Cf2")
})
pools.set(Address.fromString("0x5a2311862c7377B8c97Bcf758AD55d60b5B29a1F").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x81572a01F89585B0a3288Ff2FbBCEeBcd612B4cf")
})
pools.set(Address.fromString("0xF174727C94Fb61e8De399b97a8dB2484b4E81377").toHexString(), {
  token0: Address.fromString("0x35446a520dCCF2555F9A957Cc9e18EaDEBAd4371"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x11Dc9A68e7274Cd4967C8F55BA08319f614A617b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x486F32704232fc1dbF2cB87028F6cf0093991739")
})
pools.set(Address.fromString("0x2B70aa212cD9AFe7bC4DFD8996fF16B3245C4A42").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF377D06edC703A657a16d5e96CCc8609DdfE3CdC")
})
pools.set(Address.fromString("0xD4d54575B9c0Bd3824C153a96Aa534307344bE3F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x98222908d8f8eb468066b17475fef1672FCdb1Ed")
})
pools.set(Address.fromString("0x180EAa5926604bACbE35dcb68Ab53d1d616870b6").toHexString(), {
  token0: Address.fromString("0x7c990f500196f84e192061e4650c870B50ce008C"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xd1d6Af1B39D21979EF1695018630d8Ae0ECEB365").toHexString(), {
  token0: Address.fromString("0x0a0d34F91FC107450D9b39C23Cf2D09C4F3aede7"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xe416e0Bc952569CfB07887B786E4d8a348354Ac3").toHexString(), {
  token0: Address.fromString("0x04C3fE749893cc9dDC6a6Bd08D1f3F4FD122374B"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x907039bBE1cA12dFC8aD4591578283C8693Eaaa4").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc86F5952C7acf741721BB22f79EaC8cbCB80E694")
})
pools.set(Address.fromString("0x0A89B4891992F62Ac46696F30dBEBb5D50009dCf").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6E4a29a91592dd845BA2dEEb80cda1db0091dc38")
})
pools.set(Address.fromString("0x51836ef1f0746B88fBe98Abd1490Bb60BeE42EDc").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9b69362A0982Fa0F7e28e0CDb35A9adCDf42F0C7")
})
pools.set(Address.fromString("0x09c880d70088a156C3dCf05e15AB3DF1455cAa0F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8387EAF403767205080391b9e82f915012b95274")
})
pools.set(Address.fromString("0xD400864540C883Ae55CfE2c81dBFc04df6A85a0b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9A076570CDd06949D1DFBE52a199F1B28AD575f1")
})
pools.set(Address.fromString("0x2267035b696EA562caFF0FDb3acd540238271751").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xEc958De8Cc078034aEAb115Dd8aee26f8cf2A2e4")
})
pools.set(Address.fromString("0x038d958D405f61d26D81ba47667F0e337cA7644e").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xcCF8863e56CB226d1AC52E66f022703B7D59C397")
})
pools.set(Address.fromString("0x3bf46a1bD12a1255b471c2B7c2eF6E22aBaCEd8b").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xA72d7De76A33b73b49c3a0874aD622d2b15CD961")
})
pools.set(Address.fromString("0x495ef6618f65bBE4b8669C4ECF57c6Befec96883").toHexString(), {
  token0: Address.fromString("0x7Bf7D597488378Ae0195EDe94888e884122A2beB"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xDCFAED6C86e52A86db6ff0A65471e05B4A02B8fF").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9fd59c7E379bE71aE01eaadb6fEdd3469Bf95141")
})
pools.set(Address.fromString("0x60a646411AF54Aa737Bb6a9fCe33AD3f621e19c3").toHexString(), {
  token0: Address.fromString("0x0434E70DBB51381CdD874EF06eDBb7C8Fe0BaEeA"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x03cb6b49E57cb783215387Abe43E8bbaf86ae6B0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB480D5627a8431d29d51Da73CD55064578aA5A72")
})
pools.set(Address.fromString("0xE7EEd4228F7B185e9a1708b2f2DaB544A43e6dce").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5d83596520ab875EDA96e1bF1cd158159A39Ea80")
})
pools.set(Address.fromString("0xeD961c64A1A62Bb38080a8e03B0D69d6CbdF90dC").toHexString(), {
  token0: Address.fromString("0x157acE6704F859cB21Bf5cDA9C197DB9943d3E09"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x8465539C35Ea1C3e00E93e9C7D73dB3e5b1b3592").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xDD41F1541B0893AA01233Ee98B1aDbEa071E27F2")
})
pools.set(Address.fromString("0x1e316F303Bc9E6e5fa6f5ecf610aEaEd92660082").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9B88627ec60A7A45482c593E0f5d88DA9bf66DBd")
})
pools.set(Address.fromString("0xEddd3A8C424CC0eB521db5cD89B2228735895Bad").toHexString(), {
  token0: Address.fromString("0x158a94b4219e76c86a52b8B41Da535E927118267"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x4C344E3E42E441A302Af4F7E8e2C333bB6166a3F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE1678EE9Bc598F156ce9Ae266DC1e73F2EAd3cc6")
})
pools.set(Address.fromString("0xeaB1E16B7F9dD35D80646613C4607d6A7b5Ed079").toHexString(), {
  token0: Address.fromString("0x3908392e98cB9230b5FACb9Ad3ac40039fB43E7D"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x765774001d715b9ea65aB01e5c0017e1FCBC9721").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD55CF829850b7Df9c33B6460ceD05060EeC66fb7")
})
pools.set(Address.fromString("0x3C85731486d167c573136D6a66f4fCa5C07990D6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa678f6dC17B83444AAA1F81951B541D3134dE64F")
})
pools.set(Address.fromString("0x1FfD370F9D01F75DE2cC701956886aCeC9749e80").toHexString(), {
  token0: Address.fromString("0x000000000000Be0aB658f92dddAc29d6dF19a3Be"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x5500721E5A063F0396C5e025A640e8491EB89aAC").toHexString(), {
  token0: Address.fromString("0x000000000000Be0aB658f92dddAc29d6dF19a3Be"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x5738dE8D0B864D5ef5d65b9E05B421b71f2c2Eb4").toHexString(), {
  token0: Address.fromString("0x000000000000Be0aB658f92dddAc29d6dF19a3Be"),
  token1: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb")
})
pools.set(Address.fromString("0x282B7d6bef6C78927f394330DCA297eCa2bD18cd").toHexString(), {
  token0: Address.fromString("0x000000000000Be0aB658f92dddAc29d6dF19a3Be"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x53BEC310AeCb373c70F0B98c4B7abF6864a2b22C").toHexString(), {
  token0: Address.fromString("0x3168e3489d8A0fd1781D8FF4098a53B3bAf4Af27"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xfF1B745A6DfD1b58b9D2998F7954F11aac9b3659").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7B0C1C99df3F0F4A0df24B881422fA691d52f272")
})
pools.set(Address.fromString("0x96D03eb7E4eE29a600F1AB52879E69C4C168dCaa").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5DF0e32aedAd21caFaFEb3248602cDf0556a600c")
})
pools.set(Address.fromString("0xbcD759DdBdE4e979dA0609DbCCDD8ae0f3F771d1").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xDDF2e1974A0fdb6dE9426DaB19AF5368042EB946")
})
pools.set(Address.fromString("0xaF8d517d4F443C355DFdBD15514842AF1309abF5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8Dc334Dd99FF2532B16Fbc0549a91FC2ad5E4669")
})
pools.set(Address.fromString("0x9e29926465f2fb09833B22d911437f803Bd117AB").toHexString(), {
  token0: Address.fromString("0x37daA04F32a1055a7c20bc090598A4508B3B9094"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x63aeAbf1a8367945EA70000e2B94296D9265ad67").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE1f66f2a52b3a7F3Fe4b9BC28c52Eaec538EE74C")
})
pools.set(Address.fromString("0xf30f4EbD6FBA3d8AA6B3cca855e925273A662f8C").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4f7B7F02De3A8BD718ED189CB383Ad5c4f144c95")
})
pools.set(Address.fromString("0x470523CdEe511ab875f3823685A162d47D35ed04").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0xB8aebc6d0aA9D4edb6741ceB40fed569E4bB3153").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x64ba55A341EC586A4C5d58d6297CdE5125aB55bC")
})
pools.set(Address.fromString("0xfB1f40E3f38bb9B197EB32D6CEf36CbBb7b6513A").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D")
})
pools.set(Address.fromString("0x30321c6EfDB9a9aD321065c9A1F1E752Ee73Ac13").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xBe827F2975f2da78feb3683c558B143E3C6dCD07")
})
pools.set(Address.fromString("0x432819e3057DcFE912ca615F93ae9A612a9F7E76").toHexString(), {
  token0: Address.fromString("0x2D3606bcc1F6A6043976d00A7b2121A5d54a8089"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x66fdaCb340f76D2Ea70539230AA7450468dc7b6a").toHexString(), {
  token0: Address.fromString("0x2992580b2CA38ac8e7129b4e96487e3e7928CBA9"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x99e687e9F5B78e596fc76d6d631edEa1b6Cf4A34").toHexString(), {
  token0: Address.fromString("0xAb1047894dA4ec207c71bE0AEF5c7885e07B2DaF"),
  token1: Address.fromString("0xBe827F2975f2da78feb3683c558B143E3C6dCD07")
})
pools.set(Address.fromString("0xe463BAeb53bB3a2b7C6AacB703a2b31BE36862aF").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xBe827F2975f2da78feb3683c558B143E3C6dCD07")
})
pools.set(Address.fromString("0xAe416c6D053d5f94328107d557b4b12d32148eB6").toHexString(), {
  token0: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x1173aa5b7a50603AfCf175bC6E742bCE9aA84997").toHexString(), {
  token0: Address.fromString("0x2efbAD2f8Add1DA0aEc5626E0ABA7aECbe6af273"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xF918b56daB3372104589cf3DCcf6B73635dCe777").toHexString(), {
  token0: Address.fromString("0x2efbAD2f8Add1DA0aEc5626E0ABA7aECbe6af273"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x132D58f3f0062196F8F0f198cD3280d9DD18b970").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x71c2A2d62F2fe9446ED808e17C113F80Aa1EeF48")
})
pools.set(Address.fromString("0x6173537233315272709efC3c12a2ce260C8312B8").toHexString(), {
  token0: Address.fromString("0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x0009E67Dc49f8C55CA57850dAbC61C1a7Cbb026F").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x80bC8126EDd1d0F6CC38F14a1296566d253D6658").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xBC7B1Ff1c6989f006a1185318eD4E7b5796e66E1")
})
pools.set(Address.fromString("0xB7387dbbC3aC7DF5f53Eb2053e2900b8946a83ED").toHexString(), {
  token0: Address.fromString("0x0eb8963b6e948Ce15Cb672224029F373c587D990"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xD05e05392A91A26Ab9ae11A4E7F6ad7B371a079A").toHexString(), {
  token0: Address.fromString("0x0807483A12fD8a474137B73a67CC6bF167b54Baa"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xFCBC5685B17f57b23c2ed6778917DFc80353137D").toHexString(), {
  token0: Address.fromString("0x2E3D870790dC77A83DD1d18184Acc7439A53f475"),
  token1: Address.fromString("0xBe827F2975f2da78feb3683c558B143E3C6dCD07")
})
pools.set(Address.fromString("0x0465d73928D76878a70170cD176fD05Eb7A54cD7").toHexString(), {
  token0: Address.fromString("0x1488c6Cc3b18f905578970096FE2bED83470330f"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x6c52B13b8d7aBcc1B801741fAfcA2e727193b5f8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x80c16e19B78c7f6e5b5daC8017A37fe34A02bb86")
})
pools.set(Address.fromString("0x323d440cC6FF92916e216D9BE1c48752b426f5Ce").toHexString(), {
  token0: Address.fromString("0x00e1724885473B63bCE08a9f0a52F35b0979e35A"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x40Aa025D66aa7BE915cF8c8633571B700b11A88B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xEfC6F4fA3b92fA1DC3D4bC501df3FA6718972eff")
})
pools.set(Address.fromString("0xF8F773B33997Adc240c812Ed6e170C7854D0B54D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB0b3Da6C7bd015f865163d8f37eaB52d64d81E23")
})
pools.set(Address.fromString("0xb0b5b4bB23a693e8ece78E9167EB293FaC70985F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2")
})
pools.set(Address.fromString("0x600c3528C2FFA2B56b3b68d164Aa6D3e9372C881").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2")
})
pools.set(Address.fromString("0x4e92A3825AdBb964a0f48131a898D7265f24847A").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x8aE125E8653821E851F12A49F7765db9a9ce7384")
})
pools.set(Address.fromString("0x712bd500ac867369a5d61C4C0F8D49f1Cc4906FE").toHexString(), {
  token0: Address.fromString("0x18A4642a1fdE595750C4A0008ab9f65559E0ce06"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x777662F4d004ff6cD986319E25806cAD359456c5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0xa01850Bc11126C4b853ebADd66eC97D2E1076124").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa4DfCc04bB196a6e8f96ecDa8111ea17C80C1672")
})
pools.set(Address.fromString("0x3a001F7d958cf7D2aA85331227435a2e500b8Dff").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x855cd4D5C034D18754023486a8EAF6D82D94f6c5")
})
pools.set(Address.fromString("0x09B699855Aad285D098726b760f08A7931F5Bc2f").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xF98dCd95217E15E05d8638da4c91125E59590B07")
})
pools.set(Address.fromString("0xF244A2Ef5f12D2992eEe8677c38f21B785AFe4F7").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0x15806cDca6Cd84B741EF9e5791f99117d6212150").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0xCc5F03d783C000eAf72f6A5cCF929c59DFD64C85").toHexString(), {
  token0: Address.fromString("0x31515cfC4550d9C83E2d86E8a352886d1364E2D9"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xF0c012F08A58AbdeB578b462aB8AEFe7c0Db23A2").toHexString(), {
  token0: Address.fromString("0x1732Ce5486ea47f607550Ccbe499cd0f894E0494"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xbCFaC19a0036Ada56496316eE5cf388c2aF2BF58").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db")
})
pools.set(Address.fromString("0x3FdA812fb3c47d99126acEeC7f68fd40c5B82dDF").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D")
})
pools.set(Address.fromString("0x2bdB6bFbC2a9fd6516742092600C841862F38524").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xe453d6649643F1F460C371dC3D1da98F7922fe51")
})
pools.set(Address.fromString("0x322B087D7906c121Bc5604d5D11cF3B8111DAe8b").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x4062726537e4775A9DBFC745A5398e24ba457433").toHexString(), {
  token0: Address.fromString("0xBe827F2975f2da78feb3683c558B143E3C6dCD07"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x155647dF960dA51daecb007cAfa72408906b20F5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x58b9cB810A68a7f3e1E4f8Cb45D1B9B3c79705E8")
})
pools.set(Address.fromString("0x4E5ABEc3ADbcD9A3Dc0D25a174EafE0bc482AA7C").toHexString(), {
  token0: Address.fromString("0x58b9cB810A68a7f3e1E4f8Cb45D1B9B3c79705E8"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xE35b5076CAA9FEb6D25031B545546f9C31ACEb9A").toHexString(), {
  token0: Address.fromString("0x58b9cB810A68a7f3e1E4f8Cb45D1B9B3c79705E8"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xceaB457C051d7530fBE49fbe0139cAfEF0217D51").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x58b9cB810A68a7f3e1E4f8Cb45D1B9B3c79705E8")
})
pools.set(Address.fromString("0x2aB22ac86b25BD448A4D9dC041Bd2384655299c4").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x28500a960fE2B73EFA5b2c2414b27b730d7fD920").toHexString(), {
  token0: Address.fromString("0x58b9cB810A68a7f3e1E4f8Cb45D1B9B3c79705E8"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xb1B9DcB9F3a25e390fB37F597C2bF90B16889e41").toHexString(), {
  token0: Address.fromString("0x31515cfC4550d9C83E2d86E8a352886d1364E2D9"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x2E2D190AD4e0d7BE9569BAeBD4d33298379b0502").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x280854be611fd1Ed9fb218e96135ffE128ffCC29").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xe7BC9b3A936F122f08AAC3b1fac3C3eC29A78874")
})
pools.set(Address.fromString("0xe070ef3B0C9Ef6086f7cedA3912a1aAe3D9D5A52").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xe7BC9b3A936F122f08AAC3b1fac3C3eC29A78874")
})
pools.set(Address.fromString("0x4dff6274af12db8c319f228b929Fcebfe2c8C345").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xE39607E422c71735e8e7875546B407A08c589f14")
})
pools.set(Address.fromString("0x22CFd8f19e51d945DA57c211C691B65a5575Cc7b").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xEb88E8065C4c6a071421C97aa70EBE894dEB4224")
})
pools.set(Address.fromString("0xc1738D90E2E26C35784A0d3E3d8A9f795074bcA4").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x9C1630da3d6c9d5eF977500478E330b0a56B2f23").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x38c0c83Baa45d0778711f50f1837E4F53974aF82").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xb04b96914F3D948F3d890075Fb9E520FeB06267d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337")
})
pools.set(Address.fromString("0xA73C628eaf6e283E26A7b1f8001CF186aa4c0E8E").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x9B0c2660B535a156aDf827481b2F9b61f31EBc49").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x101b2Fb29696493A345CDf33af19C7998518325b").toHexString(), {
  token0: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x1883eFea9A380dB36e3f78D6eE565BbC20384C95").toHexString(), {
  token0: Address.fromString("0x6785e136188C56085CfEB0C15e88Dc92C998b85a"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x9e00EE5Af053ebE5F476A9F0Af89a3e902dfc910").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xA7a203f275E5b9f7873305A7Da74b03EfC207B02")
})
pools.set(Address.fromString("0xb2C5Dc665d2eD1A8092D82416749565113e13f82").toHexString(), {
  token0: Address.fromString("0x711e53D031ea9B0bb0C24dD506df11b41AEA419e"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xC878B4D4c3b3fb362Ee950FEc2e50Bff0e59C168").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x49Da88004655A3e4b16375C0e4644d1C2258bAE6")
})
pools.set(Address.fromString("0x6700c0f1a948Dc6bDCE2914BdF11784035A7C7BE").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6d5AD3802645216e208ef5054b9d98A5442372fd")
})
pools.set(Address.fromString("0x17125b2AB0DD60B3774AEb072c1B8a12B2B0Eb63").toHexString(), {
  token0: Address.fromString("0x2600Fb1d7c74d9FD9318B23c7184b74eC112c3a1"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xD797CBBDaAFb6DfD829a6af8346DAC78A753b206").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x671dEa85Ab1fBbE75287CAd119A8F759Bb7E36Ce")
})
pools.set(Address.fromString("0x23B854f8e30d33d29766A5842524e1a8C7F3295d").toHexString(), {
  token0: Address.fromString("0x15afCB53D741b1E29d48Da0C5Da3C632b59F8145"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x218d402d887Eee7135659e86802D497ee89D3B01").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5162DFD32500c3a5B3CD728dC16904Ce0A765399")
})
pools.set(Address.fromString("0xC455d164E5de9b7F5bFf91Cf1B5828a0C8bA4B94").toHexString(), {
  token0: Address.fromString("0x395Ae52bB17aef68C2888d941736A71dC6d4e125"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xDc223197A613ef4683b4Fe362F3eB1a1D573048B").toHexString(), {
  token0: Address.fromString("0x2297aEbD383787A160DD0d9F71508148769342E3"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0xFDf64C32F4A03923547e6061911483b793e8d7E2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xeB585163DEbB1E637c6D617de3bEF99347cd75c8")
})
pools.set(Address.fromString("0xC81398a279811BAf659af310c5DC0adB2B24A0Df").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9c9cd655f41246C4dF830676a7bb785AAeF26FE3")
})
pools.set(Address.fromString("0xa684F8f25D5D2a17C65C02A2D07F48fa63F45F6b").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xeB585163DEbB1E637c6D617de3bEF99347cd75c8")
})
pools.set(Address.fromString("0xd9E466404f462D9E3d3E586A38b733aD942eEd9A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xeB585163DEbB1E637c6D617de3bEF99347cd75c8")
})
pools.set(Address.fromString("0x13C6A8C6f8814ce838A8D0967005a3a5B2cCe6C8").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xeB585163DEbB1E637c6D617de3bEF99347cd75c8")
})
pools.set(Address.fromString("0x6f462587c8a1299026B152fAB4f7f07Af41461c9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x62491b39c9680C5a199689B6AE9A5d0873b1F7B5")
})
pools.set(Address.fromString("0xbe66624e5BA2e5B42CdcBFCC75ADa2F4ea57CBaE").toHexString(), {
  token0: Address.fromString("0x1c41Ece6d840BDFE6b1BF430dCdba4524D864634"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xBB8C6f750DCC5cd95870825bABd1F2315f8dD76e").toHexString(), {
  token0: Address.fromString("0x5A5fFf6F753d7C11A56A52FE47a177a87e431655"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x141C3264642264976baa2F41b3BDEad67d6690c1").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db")
})
pools.set(Address.fromString("0xbC7eF64240e0db7B6941b13e2DFB8A67dE06d5a1").toHexString(), {
  token0: Address.fromString("0x0F5d45a7023612e9e244fe84FAc5fCf3740d1492"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xa762888153F135cf26ed905fEc6Bb997481BAFEa").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xAa170003c5BA7AeFcf8A9240e9f643925DF1be98")
})
pools.set(Address.fromString("0x4Ba61243ee4245DA344e09Bf8008472117729d69").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc99c520cb8481FC440Ba0AA24A55240bB5977694")
})
pools.set(Address.fromString("0xA912c34Bb1e81361627DCF1Ebe4526a6532BC17E").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc99c520cb8481FC440Ba0AA24A55240bB5977694")
})
pools.set(Address.fromString("0x0F84580824409246AF88036486cDa1A82C5fFa4b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc99c520cb8481FC440Ba0AA24A55240bB5977694")
})
pools.set(Address.fromString("0xbf30090ea35301cF7FE39b7da3624Da92b40D9F8").toHexString(), {
  token0: Address.fromString("0x3417E54A51924C225330f8770514aD5560B9098D"),
  token1: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db")
})
pools.set(Address.fromString("0x373292CC18D66B45206048A3b4634A7F814a52F4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x428b5e88aA4024431D4B3521fC4DD73886A34f05")
})
pools.set(Address.fromString("0x3e215D3D7b251f48289F38928B1DC8bA7212F119").toHexString(), {
  token0: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0x313aAB30396B6682CdF6Dd77332F58D270078055").toHexString(), {
  token0: Address.fromString("0x2cc6e15EC3626DF851318a03446bBA93f4B26772"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xe42Bc0B3A5638B28fa2af8e649e3e19F4e2aafCD").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337")
})
pools.set(Address.fromString("0xE7Db3c1f57961a9F3e5Ce067b7c54C865d63f847").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc418B123885d732ED042b16e12e259741863F723")
})
pools.set(Address.fromString("0x525ac1E9Fa71bd1c49308F065A54Eb9F37Ae0072").toHexString(), {
  token0: Address.fromString("0x1722E1973cbe8aFA927f65baf29e0dC39db60510"),
  token1: Address.fromString("0x7959152F0fF4a14C9a4D4130CD07f4CfD72560C1")
})
pools.set(Address.fromString("0x0F5E86F91F0d9ca7245729931c1438d0D04C93b3").toHexString(), {
  token0: Address.fromString("0x1722E1973cbe8aFA927f65baf29e0dC39db60510"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xcb9Aa52bD0F9b567740D4948f8f967c7344ea698").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7a1263eC3Bf0a19e25C553B8A2C312e903262C5E")
})
pools.set(Address.fromString("0xB26e9c571474BCcc8445b332Ea67C3f1c8CADdA6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x75c478093f3305889a0319D6F2bF29d36f93cd37")
})
pools.set(Address.fromString("0x3241D44066033aea8b34eb4bae95A6a4e3516b70").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8eFdF70C92D4E89d5C02b33bA7c287D51A293CFB")
})
pools.set(Address.fromString("0x5659571a02de29Bf854747C36a968BB1779f8CCA").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x956F8C0B6d494Bc6F243ECB5fcb15c82E0660f7E")
})
pools.set(Address.fromString("0x11B41eE68757Dc8fD9Ab42089d2E99f091Bf11bA").toHexString(), {
  token0: Address.fromString("0x2C2a90f3e10F134a264dA5F72696C51Bc6E5AB26"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x56d3381E63DA6370A0469Be0eC41ad0d448A614e").toHexString(), {
  token0: Address.fromString("0x2Eaa2AA08045Ac19493a86A816B2C602F076f755"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x22d9c30cAdFBb74776837328648Adaeb8769B888").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xEb1FB53Cb2A9587f351dc61AeD0285C7fF652FE4")
})
pools.set(Address.fromString("0x294585E33da5F5960E9f6037E18AcaC88aE8BF1A").toHexString(), {
  token0: Address.fromString("0xc418B123885d732ED042b16e12e259741863F723"),
  token1: Address.fromString("0xeB585163DEbB1E637c6D617de3bEF99347cd75c8")
})
pools.set(Address.fromString("0x06864896Df4721E42890df834a2633f1535827B5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7D14206C937E70e19E3A5B94011fAF0d5b3928e2")
})
pools.set(Address.fromString("0x6CE89bFFcBDDe5B4a60c61251872E3753a391d36").toHexString(), {
  token0: Address.fromString("0x7959152F0fF4a14C9a4D4130CD07f4CfD72560C1"),
  token1: Address.fromString("0xE3DBFF4789cDFEcDe326b0F2c79Cb6E22989f63c")
})
pools.set(Address.fromString("0x8b3Ea70127d8AfAe95b5D592cEE15109E8AE72fE").toHexString(), {
  token0: Address.fromString("0x7959152F0fF4a14C9a4D4130CD07f4CfD72560C1"),
  token1: Address.fromString("0xE3DBFF4789cDFEcDe326b0F2c79Cb6E22989f63c")
})
pools.set(Address.fromString("0xae93FbbE3151aD55ED9eA8991541e650450c23a5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE3DBFF4789cDFEcDe326b0F2c79Cb6E22989f63c")
})
pools.set(Address.fromString("0x83f2bC3dE884912218b0C20aE3477ECc1Bf16971").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE3DBFF4789cDFEcDe326b0F2c79Cb6E22989f63c")
})
pools.set(Address.fromString("0x5db948be88e9D7A7E77A349f2Eb6e908A87F6dc2").toHexString(), {
  token0: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D"),
  token1: Address.fromString("0xE3DBFF4789cDFEcDe326b0F2c79Cb6E22989f63c")
})
pools.set(Address.fromString("0x042E9620D4f472AeBa0728D2087e20188D59Bb2A").toHexString(), {
  token0: Address.fromString("0x078f358208685046a11C85e8ad32895DED33A249"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0xB533c12fB4e7b53b5524EAb9b47d93fF6C7A456F").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xb895f041BdF6a95e4B396Ab8dabc25A74Fb150a1").toHexString(), {
  token0: Address.fromString("0x3417E54A51924C225330f8770514aD5560B9098D"),
  token1: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db")
})
pools.set(Address.fromString("0x3fb0F64Eb93bf2F69ee1907043c088e804Fdef66").toHexString(), {
  token0: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0x853fC92821040a8f48Be1EA4e858ec74408eA4d1").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337")
})
pools.set(Address.fromString("0x716aA6ecB4c3bA0C95331a968C206f1D85115A5F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337")
})
pools.set(Address.fromString("0xe5D644526afe7F231148160fD136cAA1d07f3888").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337")
})
pools.set(Address.fromString("0x5521Ad5b344B313818D5cDD3Ebd2458c46Ab1fcC").toHexString(), {
  token0: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0xDA9a29086C1cb5Ec891AA5879a3c6f92c31a0199").toHexString(), {
  token0: Address.fromString("0x3637c864d4965c31f8d0Ce40c6e8eC891262c287"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x7DA6319a56231D90deeA6B6469F7Ba5acdb0ea91").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x67B52D17c50d15849a6755D22954dED2372464d3")
})
pools.set(Address.fromString("0xec381aEdeA0bDB75b991e49BcA10F277916F78f4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x528CDc92eAB044E1E39FE43B9514bfdAB4412B98")
})
pools.set(Address.fromString("0xB8FF0ea637C1F3f09136C6af792989d1dA58E44B").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xE3DBFF4789cDFEcDe326b0F2c79Cb6E22989f63c")
})
pools.set(Address.fromString("0xD7d148F3c53107C55a49ce2629f847D9A402b38b").toHexString(), {
  token0: Address.fromString("0x3Eb398fEc5F7327C6b15099a9681d9568ded2e82"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x1fb3cf6e48F1E7B10213E7b6d87D4c073C7Fdb7b").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x30Dea4627D8833C871D42aa411fE6AE23eD0BF50").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9db118D43069B73B8a252bF0be49d50Edbd81fc8")
})
pools.set(Address.fromString("0xb01F985538F55A83346b6B74D0A37298d06Cc927").toHexString(), {
  token0: Address.fromString("0x7959152F0fF4a14C9a4D4130CD07f4CfD72560C1"),
  token1: Address.fromString("0xE3DBFF4789cDFEcDe326b0F2c79Cb6E22989f63c")
})
pools.set(Address.fromString("0x79cE0122a03ea8B2984120B70DB169fbD9e7d823").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xa34Ba3176A2997768437b40E8a8325897641dBA0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7126853351a50198f658e315b873620bf464bDd3")
})
pools.set(Address.fromString("0x78E0C097ee7D5b76B2A22f4411Bdf9b57896Ec61").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7126853351a50198f658e315b873620bf464bDd3")
})
pools.set(Address.fromString("0x39d22235266c4976E2C5Db37E4cE73Ab4b63198c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xf9078110F73B5c08dd327369993106091D3a4BBF")
})
pools.set(Address.fromString("0x0E09EE025F8F21BDbB05BC6BD8cEFEa04eDB1909").toHexString(), {
  token0: Address.fromString("0x183ec7dC050C8Ad2134e8Db8f200c55d02D9f083"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x2f86E304A958650A6733AD4209A9f5684Ba863E8").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x9a3E111a659a9a52585Ab2f1a85657D5073cD676")
})
pools.set(Address.fromString("0x6B3a3d6eD64FAF933a7a4B1Bd44b2efbA47614AC").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9b88D293b7a791E40d36A39765FFd5A1B9b5c349")
})
pools.set(Address.fromString("0x03E307C240BbB02dB958cB72fC35021Cb84E99cA").toHexString(), {
  token0: Address.fromString("0xBe827F2975f2da78feb3683c558B143E3C6dCD07"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x781aF68a29bbc6F50E1E31B2cdacd162E67022d2").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xBe827F2975f2da78feb3683c558B143E3C6dCD07")
})
pools.set(Address.fromString("0x8d022794e3c7695645427b70c45FD13Db33ecAc5").toHexString(), {
  token0: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db"),
  token1: Address.fromString("0xBe827F2975f2da78feb3683c558B143E3C6dCD07")
})
pools.set(Address.fromString("0xB7048E677B581C17Bc204AC8dA7941D8978062B6").toHexString(), {
  token0: Address.fromString("0x7D2382b1f8Af621229d33464340541Db362B4907"),
  token1: Address.fromString("0xBe827F2975f2da78feb3683c558B143E3C6dCD07")
})
pools.set(Address.fromString("0x622D9a745674caA67c0e3410Eed4E9893d4059e8").toHexString(), {
  token0: Address.fromString("0x3b08fcd15280e7B5A6e404c4abb87F7C774D1B2e"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x8AE4D978d3fe9d80BABB51Bb8CD7A921Ba4e6DC0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xf9078110F73B5c08dd327369993106091D3a4BBF")
})
pools.set(Address.fromString("0x402d859620ab03B289aC61D0753C1C5DAaa820ae").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x5A5fFf6F753d7C11A56A52FE47a177a87e431655")
})
pools.set(Address.fromString("0x23A6e42A82F5842795444ABd10d87A967D2F72e5").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xf9078110F73B5c08dd327369993106091D3a4BBF")
})
pools.set(Address.fromString("0x3C5499d28bD37cd96b70f5ebA25555101DAff402").toHexString(), {
  token0: Address.fromString("0x1da650C3B2DaA8AA9Ff6F661d4156Ce24d08A062"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x91CA94a12De9129A7AAd999EFEC6b5A15D386191").toHexString(), {
  token0: Address.fromString("0x00e1724885473B63bCE08a9f0a52F35b0979e35A"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xf06DF9bE653437B9D77b03C7fa716e40cE6E515c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9FD22a17b4A96Da3F83797d122172C450381fb88")
})
pools.set(Address.fromString("0xECb27E8af347Ee4c408C967bD1a735fD544b0680").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xf3481939e4F8C205231849A4e39078953710df6f")
})
pools.set(Address.fromString("0x02746cA393a04Bc1d54bfF7876251ad8BeB49D48").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xf3481939e4F8C205231849A4e39078953710df6f")
})
pools.set(Address.fromString("0xaefec3328b6F10782A8EEcFD620FaBBfba09D0b1").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x868654C8d6F032692Dd1Dc10a56859764E08569A")
})
pools.set(Address.fromString("0x3Ea6283554a91ba9B8ed7E9651365fD738caeC10").toHexString(), {
  token0: Address.fromString("0x028FfEf3Cfc8D6f7fDc60412F89058344B9FE212"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xAB386138e178fab32eAdaF859fD77Ba3595AC625").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9aE44E51dA80CA2BDe192F7CA652ED9E856d3164")
})
pools.set(Address.fromString("0xe1802d5c96eCF52D6EfCcBDf2c7CD960C5bb8050").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6794110cc44b023187Fe7C27b09d85F4123E2800")
})
pools.set(Address.fromString("0x90Caee711D8395c42aF0Bbbe8503CF43e99E5992").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x57Bd2806A0d7544DDFC156b9464c5025Ad06b599")
})
pools.set(Address.fromString("0xa2Adfd3CB36A5b67604365e5F79341e41d4454a0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD92f8fEc26fc84bf528F6E3EaaF82d69afC06fae")
})
pools.set(Address.fromString("0x003FB311071C2082586834DfB17CA98A1F43CCe4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4EB28D39Cd77a4C4E5863A36b00D6BC3d59B73B2")
})
pools.set(Address.fromString("0x244012463B252B21766F8F59f2A20DCEc6ac6370").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa5367E535c0585d61775b9866e85380Dddb8304B")
})
pools.set(Address.fromString("0xFD9045bfc7b663bd03D976c9F5851558229AC8B3").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xfeB677eD25CDaCe78c47a42faD43Ac8eBcF9390f")
})
pools.set(Address.fromString("0x1EdffD065EdB78Ba5D63646bca6D348Dc50Fb0db").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd6B9D8F938326FcdfFE082e270BD0f0A9f39E8FB")
})
pools.set(Address.fromString("0x7ae1A520982674F3668D5Ef971d7D74D497d39b0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xA8Af96ede30218175863dd307c310C9Ba350E0D7")
})
pools.set(Address.fromString("0x8A0F60a4544c712Becdf9d6c4A920F4b756186ec").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xB88a5Ac00917a02d82c7cd6CEBd73E2852d43574")
})
pools.set(Address.fromString("0xd28f71e383E93C570D3EdFe82EBbcEb35Ec6C412").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x6f7f2b90df7456Da48470eBAc35c100cFE11C7F9").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0xC03b43d492d904406db2d7D57e67C7e8234bA752")
})
pools.set(Address.fromString("0x4C541006c73c9e3e96873dDA54a4a2047Fc710DA").toHexString(), {
  token0: Address.fromString("0x1CeF2d62aF4cd26673C7416957CC4Ec619A696a7"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xBe48ECa863da4e1BEC36bC02305D33A67a06318B").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xC03b43d492d904406db2d7D57e67C7e8234bA752")
})
pools.set(Address.fromString("0xaF07078C106D10710975238C2DeE531255172671").toHexString(), {
  token0: Address.fromString("0x4B91e10595bCbD9520b71b78c44207d947fE4f4D"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x1AD2d5A7C221b8A757735fA07f74f211410D9c5c").toHexString(), {
  token0: Address.fromString("0x4B91e10595bCbD9520b71b78c44207d947fE4f4D"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x132f409f757E7597A4291DF17baD2db41dB5e23b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4d289A5a5038e644C8fCbf5dfc76Db5A1a7D9Cb4")
})
pools.set(Address.fromString("0x16b29399220FE06a6ae1378994120c4737c47b2E").toHexString(), {
  token0: Address.fromString("0x22a36D1b8A3051F6360202554472fBF27FBE8a52"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x9aBB10e49720b82B25000d1b7588f72b9abd4511").toHexString(), {
  token0: Address.fromString("0x68Bc0a8C9352571b9d125ceA60752E1026D53fDd"),
  token1: Address.fromString("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")
})
pools.set(Address.fromString("0x97D96b004eC49E46D00CfFa26Fe83047b8Aa21a8").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xba082500478cc29f23fFb16b85E3c06B28497Af5")
})
pools.set(Address.fromString("0x4935b3c688cBa4e907cb8526b99C60A816908Fc9").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xba082500478cc29f23fFb16b85E3c06B28497Af5")
})
pools.set(Address.fromString("0x5440C2649Eae688EbD14ba88c3C01bcA57bc7f57").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xba082500478cc29f23fFb16b85E3c06B28497Af5")
})
pools.set(Address.fromString("0x0E97d0bFA89dCC036D7Ef66557cDe0F548ef22de").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xba082500478cc29f23fFb16b85E3c06B28497Af5")
})
pools.set(Address.fromString("0x9b696b258084a955f6f1D600BF9b76E2eBBeA94d").toHexString(), {
  token0: Address.fromString("0xba082500478cc29f23fFb16b85E3c06B28497Af5"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xF4502993412EcFB1CA50638A5FFcC9aC39431247").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xba082500478cc29f23fFb16b85E3c06B28497Af5")
})
pools.set(Address.fromString("0xC98a2f2Aa9898745C021aE1198bD2aF08e093236").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xba082500478cc29f23fFb16b85E3c06B28497Af5")
})
pools.set(Address.fromString("0x4898f444C57321C13AE6d7B7056DF843Dc1ea8bF").toHexString(), {
  token0: Address.fromString("0x0c3827522c199422AF82585eB67C9Fde4A589ce6"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xA548E213404adB45BeBCf3FC22e7ED6A4B6D7479").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC7cba464525E21dDA0142DAb63f4d697077B7DE1")
})
pools.set(Address.fromString("0x089a49B96947a1F3f01095A7074623dA9c3a363D").toHexString(), {
  token0: Address.fromString("0x38c4c6299c7e8aCae3b7396d98641dBA919BC422"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xc510564C85CBfDf61bB26a0e7273f522055E06b5").toHexString(), {
  token0: Address.fromString("0x062B10cdC21Ace97A72ba3D3CA9BeB415e33B764"),
  token1: Address.fromString("0x38c4c6299c7e8aCae3b7396d98641dBA919BC422")
})
pools.set(Address.fromString("0xA8f95C90210A0B88f07100D1d8FD400CC26d95DD").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9501177E8fAD1AFc6259b41a075B2177747311CE")
})
pools.set(Address.fromString("0xa6bff948C25cBC42Aa9DB8376d9cBb4BDB852aF7").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xabcEdE94A88Db08D6b97cBB712CAF0384830b7E2")
})
pools.set(Address.fromString("0xAE68BD6D457819153E580491a7fB2808Fb9e76A7").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x71b322f93010f5c4C28d21df268518ee7b65B6F2")
})
pools.set(Address.fromString("0xa7FF917d5f301f0d5831B180691Ad85BA076B10C").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x48a69FafaaaCC6500Dd56050D225F8648f0446Ee")
})
pools.set(Address.fromString("0xc6D912a70095459d759Cd5AF4b4226AbAA5128DE").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd5635F8dD2B387239bEe8513F5370072ffB9CbE0")
})
pools.set(Address.fromString("0x61e8026F2041D37627eDc2e2201304Fe7b7507b0").toHexString(), {
  token0: Address.fromString("0x33682b0b8bFfA2F78455eEf4ffc380129dCa2446"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x368C712eEfC67b7F5A9597A8aECf8ABf36805b77").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb24ed78B0D70504bE75fAeC2e06abC085De4b0Af")
})
pools.set(Address.fromString("0xdbFc772DBcC9860fe7747fD0BC646155E5cbF989").toHexString(), {
  token0: Address.fromString("0x033Ce6220D73B6D10582Eb3b1B49cA364eD7aBA1"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xBC6e2a593B8e814F7DEdf19006a7d04992b01565").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4af19a19dB278e1A3fB5BE6c4a3fC707d8279B66")
})
pools.set(Address.fromString("0xFbF4f89c7a9ecee48F65033097feCeA257EB4049").toHexString(), {
  token0: Address.fromString("0x29Cb69D4780B53c1e5CD4D2B817142D2e9890715"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x593069A2272448a7978135F82e40A6e9dA820b41").toHexString(), {
  token0: Address.fromString("0x1d72a9dEAF53c06F665040B7fCC29dDD0f2DD535"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xf9BAA3cD7b8c1F205Fd3A6861Dca693FED683684").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xE3B3a464ee575E8E25D2508918383b89c832f275")
})
pools.set(Address.fromString("0x8530f0272a4EfE974CF8b9f7FE024711d08dAf70").toHexString(), {
  token0: Address.fromString("0x395Ae52bB17aef68C2888d941736A71dC6d4e125"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x511308Bb56d65b238B7E041B790497797265e83E").toHexString(), {
  token0: Address.fromString("0x360E1b1B7f2Db04EE21F56f9c12EFD809FfFd6B1"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xaC85eaf55E9C60eD40a683DE7e549d23FDfbEb33").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb47bC3ed6D70F04fe759b2529c9bc7377889678f")
})
pools.set(Address.fromString("0x0FE030bF5873a75c3092D32eb4f70b7206765Dd7").toHexString(), {
  token0: Address.fromString("0x29Be94D2137DdC40A1a371DD178B7b6d6FC5e049"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x3F9ccB93d97Ed52EA40cd000e5F5f8421e2D9125").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5A18547B86C561E0A4da524561eCE985A89793Eb")
})
pools.set(Address.fromString("0xE3a2e92d9EF41B301aeBF33525De9D020B28642c").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x645AB0ab7A8f89B57f398366541d8981B42Ea655")
})
pools.set(Address.fromString("0x4886e8E8959Cf659E895F6C45E57C55657Cf3A6F").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE8BaB2d01eB1d3e969a8df3545264fd0873442e6")
})
pools.set(Address.fromString("0x3fd46B6B3f4884B23bbAeD04699D33B6B5bD17b1").toHexString(), {
  token0: Address.fromString("0x7c1714EF8D774DEFF7ceaf1AE66FF15069F04eC2"),
  token1: Address.fromString("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")
})
pools.set(Address.fromString("0xd068cD7ad2d3383Df5E76eF00e44BeAfbe234f0D").toHexString(), {
  token0: Address.fromString("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
  token1: Address.fromString("0xD26fafBAe87011240f85aaadC9e345a86ECC163e")
})
pools.set(Address.fromString("0x4fa42CF00241C61c69EF0534bEd0B93A09699CcC").toHexString(), {
  token0: Address.fromString("0x1625C7E5BBd7719e44d69F65D635f217B4ce54B2"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x12Fef95248Ed2bd3fb04605FF77947E6db1C15B3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD84CA10b8824EF877c418a8EaCf9B00742a1b6ff")
})
pools.set(Address.fromString("0xFD4eE2ceFc1cbB428BaF72b9cd4Afca4bC46e484").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x741618d6dE384d96CCA5CBDD4c2025a7d65033A5")
})
pools.set(Address.fromString("0xD2ee6Ef3E4072123e49B6f7925C154f3E551ACd4").toHexString(), {
  token0: Address.fromString("0x00317283e598A85c37E06A7da2499aa4f735419A"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x059E6a4B06Edb442C1A8E05E7d7D4E3AE6074717").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xDC27a266a370e0eef0Ea7871E44D4fC89c181d6b")
})
pools.set(Address.fromString("0xda4a1991bb2a124337d5Da49AB01b5b086D42D34").toHexString(), {
  token0: Address.fromString("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
  token1: Address.fromString("0xFae3bDc0a0F407126E1ecbD1DC5a256C6ea9BBfd")
})
pools.set(Address.fromString("0x893B4b2280a251ADBa2039672E1618F3050183B6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x782783c530be42dEDAD9F42bCa54F32b6b13513f")
})
pools.set(Address.fromString("0x00882AeebF284FaBC31c5BaaB9eBf1FED8a86eBF").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xe5EE95d8a2fFEf6F31253d8ca322AD5E4D999a13")
})
pools.set(Address.fromString("0xe733A3E87Da7065845fE1097A7665eA74ce3C739").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9dd0E22e056Dc48cD37e32F910e0FeBDb6583B32")
})
pools.set(Address.fromString("0x531A8814a34a9610bA57e87C8e4aeb3D1dfBCf46").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x78fbF94E718291D258945e78b82Ac09Ea80eC7FE")
})
pools.set(Address.fromString("0xf2dA76588CA803e9Bf53F0BFd1651b0d2F966a15").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xb532178708814F0c174B29B991D2b355106Afbc3")
})
pools.set(Address.fromString("0x06f6928553a2952beFe48DBE344cfBC663b80870").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0xDe09856cf2d7c0AeAC6b09437a175612261229e2").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x855CFcEEe998c8ca34F9c914F584AbF72dC88B87")
})
pools.set(Address.fromString("0xB002d0D526E465A6526A0a42A8401689cd172587").toHexString(), {
  token0: Address.fromString("0x1509706a6c66CA549ff0cB464de88231DDBe213B"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xacd6FeFB9d72B66d9135Ea72758FEf06B2642A1D").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xf8191D3584c996Bf3dE3B733573f2cD6FBC18dA6")
})
pools.set(Address.fromString("0xf800BA6e79CDe93465AACe9B5095E22c00A18709").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc55E93C62874D8100dBd2DfE307EDc1036ad5434")
})
pools.set(Address.fromString("0xde9C23c2273B794c3667B24CF06D96d2DEfAFe9C").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc55E93C62874D8100dBd2DfE307EDc1036ad5434")
})
pools.set(Address.fromString("0x2005b32c7F9a35d1251151444cDfB0c748853389").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc55E93C62874D8100dBd2DfE307EDc1036ad5434")
})
pools.set(Address.fromString("0x71409285d5B324A082E761E54ea0AA413DA51db9").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xE3B3a464ee575E8E25D2508918383b89c832f275")
})
pools.set(Address.fromString("0x1Db4238EBacC4b62c493A77114c8D099f79d4c06").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5625113eC2C9146e541286Bd7781de9E87Ca7D27")
})
pools.set(Address.fromString("0x59fd78E411D49b356E38037Ae3572a6063997A98").toHexString(), {
  token0: Address.fromString("0x36ddf274F062a42F749c7E225A51F847534550Ca"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x45Beb893000FA73F48e399ad43d6bAaFAe666928").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x77EA80ff1630AADAEfb0aB557FDED5B443871069")
})
pools.set(Address.fromString("0x3b5AaDa67bcb7BD46d43E2DA85393cB28E35b239").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x71Cf3A349dfbC1eD3F607592c281ddbDD360a263")
})
pools.set(Address.fromString("0xD53a59ac53135570059Ae29acc9eb130fb194097").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xeb51a729CA01CC25057953eB85491197BDD883a6")
})
pools.set(Address.fromString("0x2ab0bCc2805486d3b0E4aa87221ad12dB84D43c5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc2e3f1105ABf125B279eB90E6b2653cA30d25680")
})
pools.set(Address.fromString("0xadBb6C90d9016e0c713D6ffa8d77DAc23D5CF283").toHexString(), {
  token0: Address.fromString("0x75C5f6D32d8Ef3a4f0F43F7792Aa08e8678972F9"),
  token1: Address.fromString("0xeb51a729CA01CC25057953eB85491197BDD883a6")
})
pools.set(Address.fromString("0x4a775804282A9F528Cbb397E9Cd0537bB50a4dc3").toHexString(), {
  token0: Address.fromString("0x75C5f6D32d8Ef3a4f0F43F7792Aa08e8678972F9"),
  token1: Address.fromString("0xc2e3f1105ABf125B279eB90E6b2653cA30d25680")
})
pools.set(Address.fromString("0xC9D639D95EC954e5554c6A23EE8Bf77982aE2899").toHexString(), {
  token0: Address.fromString("0xc2e3f1105ABf125B279eB90E6b2653cA30d25680"),
  token1: Address.fromString("0xeb51a729CA01CC25057953eB85491197BDD883a6")
})
pools.set(Address.fromString("0xe14bC1D24974b349d15a2f4636e6Ab2db30BE0B3").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x119685fE98F37524E59A3E91f7108D6a693818F3")
})
pools.set(Address.fromString("0x9418B088C80d52168a51495c9AC4b169B722182B").toHexString(), {
  token0: Address.fromString("0x119685fE98F37524E59A3E91f7108D6a693818F3"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x47F16C3b4c1DfCe1583b82DA7EdD372Fe0A168eb").toHexString(), {
  token0: Address.fromString("0x8d4fd08F00E1dBf88CF50FC6970B0F79C394D9A4"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x4f97a276A5B00d25fd20631B80Ff2Ef2c9880506").toHexString(), {
  token0: Address.fromString("0x62c665db19015a2d99311Cd4689b4dd4C56ae2F9"),
  token1: Address.fromString("0xE525dda331Aea56bd412F5CA091c3051dfc0A9F9")
})
pools.set(Address.fromString("0xA5feEb4855a1F9618c047Da9b285659780F7c742").toHexString(), {
  token0: Address.fromString("0x05362c1312199A911e4dD39411A63513d2e55E86"),
  token1: Address.fromString("0x241BDf4848134dBf0B1bC67113c1114F4a8097C8")
})
pools.set(Address.fromString("0x0b09b44764334980aD04D9ee839829a0ac9bB64f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5042868E3b683724b6a6955dab189AFC7356B4D4")
})
pools.set(Address.fromString("0x66Bf40C2D2470D4EC16580BdC923BfB816D8Ad88").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb7b3C0eAe8f6eF085b0993d66af0Bce3EBB4256a")
})
pools.set(Address.fromString("0x9d28cC4d48bfb277924d5db98e8e44161dD9CEBb").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xE6f7Fbde35eA92d0Df50172aAd117790d7Bc13FA")
})
pools.set(Address.fromString("0xDc6cb16B8d635Ef255cEF370263C35ac0007186A").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0xDE7b8F1874fCcc235476036db3B9473c8eDdb81b").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0xFaB2fFb25fb664e537a436Fa61801e10EF83A709").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0xC0e1eFCfbC9d657b7B871b7A3088637DdE915F8B").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xCf215E62a2e0c840d52eD4edad7d8f0881159da4").toHexString(), {
  token0: Address.fromString("0x00e1724885473B63bCE08a9f0a52F35b0979e35A"),
  token1: Address.fromString("0xc5b001DC33727F8F26880B184090D3E252470D45")
})
pools.set(Address.fromString("0x4cf606e47509692De857Ce4b8506CB50c5DC8d04").toHexString(), {
  token0: Address.fromString("0x395Ae52bB17aef68C2888d941736A71dC6d4e125"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xA02C2d3e9AD2adE7CDd13A454Fd1E46Ac97Fe5cc").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40")
})
pools.set(Address.fromString("0xaDAb76dD2dcA7aE080A796F0ce86170e482AfB4a").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0x6b59aAA3FA310D6781c5Fb55Cc242Da3F60fC2D4").toHexString(), {
  token0: Address.fromString("0x381d3Af45f0a1830367F5D0c78AB54772a3d0339"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x74D0b80199519AbCb9d9ac9c2D48fa5a9BB80B32").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x381d3Af45f0a1830367F5D0c78AB54772a3d0339")
})
pools.set(Address.fromString("0xe470FFD55649Abc4A14D2F9397C84b0D64c61013").toHexString(), {
  token0: Address.fromString("0x14a48463c7629DEd22d029471eA7AE3c7291f561"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x929F66d1fDA41131B4Ac35975826D4e98F68119B").toHexString(), {
  token0: Address.fromString("0x395Ae52bB17aef68C2888d941736A71dC6d4e125"),
  token1: Address.fromString("0xE3B3a464ee575E8E25D2508918383b89c832f275")
})
pools.set(Address.fromString("0xfB9fFbAC1a648888f49f007c952CD78cEc92A9b3").toHexString(), {
  token0: Address.fromString("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
  token1: Address.fromString("0xF71272884798a795C348b8c639998d7237Ccd0e9")
})
pools.set(Address.fromString("0x7d2793248F4443302Fdea09d995C2b3E1130191e").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF71272884798a795C348b8c639998d7237Ccd0e9")
})
pools.set(Address.fromString("0x2F08c595B6a58e3425452738ccB27f55fDcc8d8C").toHexString(), {
  token0: Address.fromString("0x1cCA43fa8338eeD360A141669B64302080d6c2b2"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x52c2d8d578a74f71272Ab400050FdB9D5a3b9175").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x2161855a624631E2F76831739981C6e4Ff8510A8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x44c655a6EBCa68a9593EB2770c290D3F5C7D5ebB")
})
pools.set(Address.fromString("0x0F2A9c79E3f38b06e1F8dA871ecE687e0eBd10Fb").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xbdDc73440B823B75D512456eCB2d0C96439D8D69")
})
pools.set(Address.fromString("0xeBDf111918575cAEba5587287E1df86F173dFcB2").toHexString(), {
  token0: Address.fromString("0xb47bC3ed6D70F04fe759b2529c9bc7377889678f"),
  token1: Address.fromString("0xbdDc73440B823B75D512456eCB2d0C96439D8D69")
})
pools.set(Address.fromString("0xA1D1C6C15f7f03b81dEa7C88d54A435fc6a51Dc0").toHexString(), {
  token0: Address.fromString("0x8088Bc767c392b5769b94c9ec1D07c62874c8d5f"),
  token1: Address.fromString("0xbdDc73440B823B75D512456eCB2d0C96439D8D69")
})
pools.set(Address.fromString("0xF8Db010DB38f7fC2c600EBB3D3d5c03fA272C203").toHexString(), {
  token0: Address.fromString("0x2740220fFa4b206280907ce12b7cDC57445f3B92"),
  token1: Address.fromString("0xbdDc73440B823B75D512456eCB2d0C96439D8D69")
})
pools.set(Address.fromString("0xD998ff9dB7DDB2870CC9b8b6bC8f59484Cf566e9").toHexString(), {
  token0: Address.fromString("0x825206E1D29456337769e6f1384101E997C6A732"),
  token1: Address.fromString("0xbdDc73440B823B75D512456eCB2d0C96439D8D69")
})
pools.set(Address.fromString("0x961fF05339E42B6cA2543F12fEdE5616b6Cc84CF").toHexString(), {
  token0: Address.fromString("0xbdDc73440B823B75D512456eCB2d0C96439D8D69"),
  token1: Address.fromString("0xBe6EA3e70e2bbB0dbD093B657fbbc0DFF0BA67eC")
})
pools.set(Address.fromString("0x6F70Bc9a034364240332A7eA8F43dA1A0759eE2D").toHexString(), {
  token0: Address.fromString("0x3F369a664fa665e01e8EB9f20bFcE03A0CAb8971"),
  token1: Address.fromString("0xbdDc73440B823B75D512456eCB2d0C96439D8D69")
})
pools.set(Address.fromString("0xA107b7D915c789638bba5D9828351929FaAa766A").toHexString(), {
  token0: Address.fromString("0x711e53D031ea9B0bb0C24dD506df11b41AEA419e"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x2F3e9d4E54576f220C85cF70F7Bc7Fc879440040").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x00D5dD92d9eAa33Ea55bdc0D6A183fC11C95bd21").toHexString(), {
  token0: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA"),
  token1: Address.fromString("0xf6B4185FCf8aF291c0E3927fbEab7046b4f6A8CA")
})
pools.set(Address.fromString("0xd7f40822DfceB5F9E3c17d5f76162aD3BFCcFF7E").toHexString(), {
  token0: Address.fromString("0x6F974A6dfD5B166731704Be226795901c45Bb815"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x2c3dFf73dA407C38cC77fBC8010AEB2e23F73563").toHexString(), {
  token0: Address.fromString("0xb03ba7EC3F38CeC5A7EA0Cf7e675F31A69B858eD"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x58237f541ec743ffd2035eAD914286e839c60B4b").toHexString(), {
  token0: Address.fromString("0x1C15057d1F3794C934a6cBC1f7EceE934050F219"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x5a86f226D66eA1884C131C2A74ab1EE6614197bc").toHexString(), {
  token0: Address.fromString("0xa9A78f45944372cc51B7aEF0C2F6817C9729A21D"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x89370C071E4438F6a656d7649C217658d06aCe81").toHexString(), {
  token0: Address.fromString("0x8ab72605E48C1f70A20BdD2B3A217FEc24d777f9"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x6833627577A7e7C09624e288Ec05ec811dFc2ca1").toHexString(), {
  token0: Address.fromString("0xbB1EaB9Eb8fDf65F0E291D013DA07B4b65a27a01"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x369D5b04e69a50D7885F67E83cd41584f831EdAD").toHexString(), {
  token0: Address.fromString("0x71502667a00334dEE00c5bA34A07f7FeFF03832d"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0xAFeD17b9D071f2Ea208471e8a66c2Ece5292e310").toHexString(), {
  token0: Address.fromString("0xa6252F56cc6eEA21165d56744C795F91c8a3Cf68"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x05CCF052a1aCA15726fD99996DDCBBDBE62A545F").toHexString(), {
  token0: Address.fromString("0x599B1DA6E0361cEF0AAd630Eb6f58302b7f343F3"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x84918E648752cF7B6b85165C6DaF1f30A2708C81").toHexString(), {
  token0: Address.fromString("0x355f0a8a7ecAeD971b8Fbd50994558291ff2413a"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x1Aa686974122C428055aa1998e8C4C826ceE8893").toHexString(), {
  token0: Address.fromString("0xca285C6Fd23CB7577751C14473EeaBeA5d1aa6C7"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0xcEF17cA9e81601FD1f81Ec649837d335EB0C7774").toHexString(), {
  token0: Address.fromString("0x47C0Dd498D8872843C2a861009e18Bc4458c2f67"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x0281C831B5F3B711dEC6a9556Fc6d855772a1310").toHexString(), {
  token0: Address.fromString("0xb931c7BbD87A6e249EaA7355B13927F9c99Bce87"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x8831d1Be9dd6195A3eb0CB2098a228F10f585812").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x0815A827C04E49ca78e0FE9730DbE29340183ebc").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x8B2bF757B472b103A9B1Ec5380EA0a673E18A083").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x1D3e21346737f86Eae4B0f96a39B7E5Db261208d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xe007125C6A6d3071cFA804Ce4eDF42F2d3C5B9cA")
})
pools.set(Address.fromString("0x2926736C30EF3649F9e6b5c5918ea88871F79f2B").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x51Ea9855c843423E64c023693EB89B8707fEA436").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x78BE30F2a60d63244425AA2466B90CA677d5Aa77")
})
pools.set(Address.fromString("0xC786EF232494B7E3D9352925718a136aE037BBe3").toHexString(), {
  token0: Address.fromString("0x17637e738D095f4E480CabBF55038E4E9e2B235E"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x50aed45B08be0Ee5D3f372e02EF6B32224278eB9").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0x8d2A7584489aE6DE3E607195a19E35c209df650E").toHexString(), {
  token0: Address.fromString("0x3df169B460Bd8Ff97781e8E90D28c5A1117183f5"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xe7a218f08132661b540013E5685c588B0EE15a4C").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7F6EA0929D8A2D66325de4A624c809110f802225")
})
pools.set(Address.fromString("0xd39DcD940722581aFB5eE43bD7524b584b4DFB7A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7f99F05bE1469b87E413DC4e60Afc6426cA41a47")
})
pools.set(Address.fromString("0x08ba688E101cF4DA0c633d80D406Bc0D5a6d0869").toHexString(), {
  token0: Address.fromString("0x17637e738D095f4E480CabBF55038E4E9e2B235E"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xa1507A6D0aa14F61Cf9195EBD10cc15ecf1e40F2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40")
})
pools.set(Address.fromString("0xf00F7986ED7175a7826806F05bBb05a78D3643F2").toHexString(), {
  token0: Address.fromString("0xc5b001DC33727F8F26880B184090D3E252470D45"),
  token1: Address.fromString("0xfD389Dc9533717239856190F42475d3f263a270d")
})
pools.set(Address.fromString("0x63922e6805e8809B5E27E55a78CEF36ba2331a6f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4269749984682474b6602B7904Abf2244712cF5F")
})
pools.set(Address.fromString("0x722FA6f92e0d79fcc429678443846ED5a774517b").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4269749984682474b6602B7904Abf2244712cF5F")
})
pools.set(Address.fromString("0xC6AB211d1A77Fa4a489e2b85B5118b3b608a7E79").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4269749984682474b6602B7904Abf2244712cF5F")
})
pools.set(Address.fromString("0xda0FFE2806Da10F65715F8539b211Ff1F87148A3").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0")
})
pools.set(Address.fromString("0x94895C830E75a4b646e85Fa93F1320da53a636e1").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97")
})
pools.set(Address.fromString("0x821c4BfBcBF27756d457143Dc134E298d0be59Ea").toHexString(), {
  token0: Address.fromString("0xc55E93C62874D8100dBd2DfE307EDc1036ad5434"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x2264Ba9dC0b257C69EEAE7782E8FF608cC65D6a7").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9A601C5bb360811d96A23689066af316a30c3027")
})
pools.set(Address.fromString("0x4533bAD2dc588F0faDf8d2E72386d4cD6A19B519").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x9A601C5bb360811d96A23689066af316a30c3027")
})
pools.set(Address.fromString("0xf7c416f6B209aCc3aD1A4F8B5AA4A2ABab5B8Bed").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0xcff19fA275c8255Cb2E0dF0aC33adc71537c44Fb").toHexString(), {
  token0: Address.fromString("0x91E2813D7d3314Fd33dCB9CE1251cCce2caB2c31"),
  token1: Address.fromString("0xf3e610b020f7A19bEE7483B02fd14A730244b2a9")
})
pools.set(Address.fromString("0x9c6Aa762aC2bDE1AfC09d17Ab38431D53ebc48ab").toHexString(), {
  token0: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0xdc37A52d3cA881BeA04D065a1a325c03215cBF99").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xeB585163DEbB1E637c6D617de3bEF99347cd75c8")
})
pools.set(Address.fromString("0x5cbc838Bfa126e20cEA3bD1aeb40d7225Cd9caEA").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x9FD22a17b4A96Da3F83797d122172C450381fb88")
})
pools.set(Address.fromString("0x7652e9c157220719ba0C400B742E3e21F6253278").toHexString(), {
  token0: Address.fromString("0x65559aA14915a70190438eF90104769e5E890A00"),
  token1: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278")
})
pools.set(Address.fromString("0x1585F17449cbb7C05F124A434A85F1dE7b834D89").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x9485aca5bbBE1667AD97c7fE7C4531a624C8b1ED")
})
pools.set(Address.fromString("0x3Ee7b02885d8e0d0Fb8a935BD999952574653A27").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85")
})
pools.set(Address.fromString("0x376000a2Fb94397b8269db382e843B10D56ecB8A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xBC7B1Ff1c6989f006a1185318eD4E7b5796e66E1")
})
pools.set(Address.fromString("0xEE7f25De28e6a69dC692E67de4E36A1820202b8C").toHexString(), {
  token0: Address.fromString("0x323665443CEf804A3b5206103304BD4872EA4253"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x7Ae51b10132818e85B0AeE8aA49470b5F8dBEAcc").toHexString(), {
  token0: Address.fromString("0x2873f2780DDb7CC4A50f1BEfE55758Ec97BFd27E"),
  token1: Address.fromString("0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889")
})
pools.set(Address.fromString("0x3C5e9fe9bF8d5A7B91334f133408bA30a7BA993E").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xCf157D51e1EBa9cF7d525af1BA106aC977dd0C40")
})
pools.set(Address.fromString("0x2E78ECbFd7Cb1cA6963463fc102Eb499f85ecef7").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x76843968216411EBAB7B147c4B1876DC90ea40C4")
})
pools.set(Address.fromString("0xd5e6f2EBDc31283C4E587173eA55f4248e6B06B6").toHexString(), {
  token0: Address.fromString("0x3500D6908535d603f0b7919CCcdA530662569743"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x6F34C2D9df72edf015Aa772A1D1493F87262dbB5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa7f5E86c3f096b40a67186516794221B5D51691B")
})
pools.set(Address.fromString("0x875093381750f2e4480eEA7cc673196993c873b4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7b7C683c4Ed07745B406c65B539f7A82be1ffEA5")
})
pools.set(Address.fromString("0x364D31c0B9aF78B42E1C43AB115b461935e547f2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x67Ba744dbcdce1D3d4728FbB7105Bc645a5a8b54")
})
pools.set(Address.fromString("0xa78D793FDf44475f61109A499DF464E32dB5A81f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xb47bC3ed6D70F04fe759b2529c9bc7377889678f")
})
pools.set(Address.fromString("0xB146Be90538737993A424b5DaCE8BEcA0870858d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x63bCf8f73E9A6D7280161Fe36fb13937a49A6E29")
})
pools.set(Address.fromString("0x0b6cce2DbAB6f0c77B01b12Bf28Ccde14b6b4F2E").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x825206E1D29456337769e6f1384101E997C6A732")
})
pools.set(Address.fromString("0x66a6aD31659dc707eE91dC644cf75657dA50F41d").toHexString(), {
  token0: Address.fromString("0x3F369a664fa665e01e8EB9f20bFcE03A0CAb8971"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xDB52Aeaa5A23530Cc22a65aC64c14C3a4d58eAD0").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xFdb794692724153d1488CcdBE0C56c252596735F")
})
pools.set(Address.fromString("0x11b6394f84c601d4cAda4d96Bf282C0Bd2747dd4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB8AC3cE1Cf83782165985Cc3D3078786589a5d46")
})
pools.set(Address.fromString("0x7f21b2E7498A7947205F0de721e48Cd699972215").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xDDcB83569B4ad0B4de28d96E1BE84e1B063d9432")
})
pools.set(Address.fromString("0xcddAA1d5f0Ca29eB3dfe1d071Cca1abb435E0E92").toHexString(), {
  token0: Address.fromString("0x0756338c38BD0a3002334A396601D5e6ACD0f8D5"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x16484D4A2c047cF9b5F91b3585cFcc7EF79468fd").toHexString(), {
  token0: Address.fromString("0x793A4678e861FF4F0061c2D115F0BCc5aB942aA0"),
  token1: Address.fromString("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")
})
pools.set(Address.fromString("0x95909435135f3B5224637625D934a1B6aaf342e0").toHexString(), {
  token0: Address.fromString("0xa469904A417567e097114B866Bf0c86e61040266"),
  token1: Address.fromString("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")
})
pools.set(Address.fromString("0x4b8a2633943b95105F073CC62EBd6CA7BfdB3C78").toHexString(), {
  token0: Address.fromString("0x59496d16792D691f9C5DB59724233F4aE020384c"),
  token1: Address.fromString("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")
})
pools.set(Address.fromString("0x75a2673BED5489AEb69a8029B8cDD9fb6A3C6c60").toHexString(), {
  token0: Address.fromString("0x0AC3Dbc6b35CB841F2472f726952eCdeCDdD981c"),
  token1: Address.fromString("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")
})
pools.set(Address.fromString("0xD4344Ea0c5aDE7e22B9B275F0BdE7a145dEC5A23").toHexString(), {
  token0: Address.fromString("0x50Bce64397C75488465253c0A034b8097FeA6578"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0xb28F2C326a901A9E8586AD2Fd2EFE31BBbe6bCDA").toHexString(), {
  token0: Address.fromString("0x32327525E01F75Bc4B0ED30a5E6CfFCf145D14AD"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x5D1AbA431C5E7D9a6AA35fA5a772B56590BD32eA").toHexString(), {
  token0: Address.fromString("0x32327525E01F75Bc4B0ED30a5E6CfFCf145D14AD"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xA24f9cC45adF13B01422E8A3Ec4F2765fdfD818e").toHexString(), {
  token0: Address.fromString("0x323665443CEf804A3b5206103304BD4872EA4253"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x140254751C4bF1f48B36E36535Fd64eB8519904f").toHexString(), {
  token0: Address.fromString("0x323665443CEf804A3b5206103304BD4872EA4253"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xd35e380d586B59FE99b417662402D92bccB3492E").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xf9FB20B8E097904f0aB7d12e9DbeE88f2dcd0F16")
})
pools.set(Address.fromString("0xBCe00644e5535B68daf73d1528E8B08e6a14472c").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x1AE6a0bfF0061f0928284C1be543922e22A3Bde5").toHexString(), {
  token0: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0"),
  token1: Address.fromString("0xdFA46478F9e5EA86d57387849598dbFB2e964b02")
})
pools.set(Address.fromString("0x394A9fcBab8599437d9Ec4e5A4a0EB7cb1fd2F69").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0xBc6dF20553c29C66cCbc7dA557053B1cf38ec0ae").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0x90A039797E93f2c671DE25DD24E5333b5e8F9Ab3")
})
pools.set(Address.fromString("0x8AfEf5d2Ee6A7543Bb2FcfF52c3af2498eC11f26").toHexString(), {
  token0: Address.fromString("0x2494A64ea1B3AB49b0A9F185087E77BC2049863C"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x0dBc1541Fda97cd6d082E6FFD0178fDc23b5276F").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0xE6f8f2af4e9a5C2D71Ba37FfE7646d7201ff6d42")
})
pools.set(Address.fromString("0x975a5dE5BD0DE26bF7C6312737B2056c990ab610").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0xE6f8f2af4e9a5C2D71Ba37FfE7646d7201ff6d42")
})
pools.set(Address.fromString("0x28B45BDD8276884a87Fe783bE8d3E1E4cCFbF61d").toHexString(), {
  token0: Address.fromString("0x2494A64ea1B3AB49b0A9F185087E77BC2049863C"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0x6A0e827E2Cb39E1D4F6465572Dd7e7850F7aDaA8").toHexString(), {
  token0: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9"),
  token1: Address.fromString("0x90A039797E93f2c671DE25DD24E5333b5e8F9Ab3")
})
pools.set(Address.fromString("0xf65dd8C4Ba174FeF478Cee98dDB6009b948B9fb1").toHexString(), {
  token0: Address.fromString("0x32327525E01F75Bc4B0ED30a5E6CfFCf145D14AD"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x7FdAcfa33C1eC2DD5E1C1F5083C70Dc33AA2875B").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xeF2210b934FAd647470931f5C4853A41a212e949")
})
pools.set(Address.fromString("0x3eA11bAF7964e5F1F04824Aa8C95c8D9dB7BA0BF").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x66F5E63c4F1A875810d3b6E8BbF4c0147D8C4363")
})
pools.set(Address.fromString("0xB524a5540E6eA7Fcdf9b648c29bb1b7E569dDbFB").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xB5D58a15Ac358Bc5E60955A8fb1880AEf4605b1F")
})
pools.set(Address.fromString("0x3449e71557ad982396781e7A96CAB6d1479326B0").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x1d96b638c3BC848a1C98eBf59c73f0c37B2CEE3c")
})
pools.set(Address.fromString("0xad73D6227887AE2F8E0aB8d2d13a30EF8Be8a73a").toHexString(), {
  token0: Address.fromString("0x029ffDF0B2961892ec4Aa1D12a69737233CB84B5"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xE1644156289209fC16d4Aa1d057D4bba5CD18980").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xCb9b0aC7f1B6118C46cb9626Cda7CbBA0cCB2f0E")
})
pools.set(Address.fromString("0x1569e06E42264a2959f7650f20200F15Eaa02798").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0xafd03A4eDd31ef50cE4d11123a93cA176CeDA762").toHexString(), {
  token0: Address.fromString("0x323665443CEf804A3b5206103304BD4872EA4253"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x13958B46Ec8AbAb47c5E60d1CbEdB999BAd2A426").toHexString(), {
  token0: Address.fromString("0x32327525E01F75Bc4B0ED30a5E6CfFCf145D14AD"),
  token1: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095")
})
pools.set(Address.fromString("0x1cDADf5A772b70ec7300772202566113aD61E5c1").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2")
})
pools.set(Address.fromString("0xc130fB414DBE302Fc2cf91b5a9a7e4469AaaDfed").toHexString(), {
  token0: Address.fromString("0x6F974A6dfD5B166731704Be226795901c45Bb815"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xA052500DdEC0e62033164a2a07FC720f4989d8F2").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x8B21e9b7dAF2c4325bf3D18c1BeB79A347fE902A")
})
pools.set(Address.fromString("0x5fBFACdA8E9935dB3e0a2817d17Ef28313029ec3").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2")
})
pools.set(Address.fromString("0x2761024f61403B177d323d138fb1f24Ffc98cA60").toHexString(), {
  token0: Address.fromString("0x323665443CEf804A3b5206103304BD4872EA4253"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xA8a5356ee5d02Fe33d72355e4F698782F8f199e8").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xEB466342C4d449BC9f53A865D5Cb90586f405215")
})
pools.set(Address.fromString("0xf2CfCa0566DA204f59062f17f5F62A1d49e093AD").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0x99C59ACeBFEF3BBFB7129DC90D1a11DB0E91187f")
})
pools.set(Address.fromString("0x1D789E3b2146CfA96761996D14Cd3cc54A8b133A").toHexString(), {
  token0: Address.fromString("0x323665443CEf804A3b5206103304BD4872EA4253"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x1cf29C475552F04624b6A99cB66a81032362c450").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278")
})
pools.set(Address.fromString("0xa5D60fD9cF3143026dcdD7628F72fD0f0C5B5a9f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xd93E206DDA6Bf44130D4A9F5977e448E67d22274")
})
pools.set(Address.fromString("0x559246436575E436425cB8e5B492f7b88d0CCA7a").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921")
})
pools.set(Address.fromString("0x1439FB405a14aa4Fc0BA2f13A30169e04Bd52805").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x49da947778DC281dBb84B191BE0ab5bBA6504b2B")
})
pools.set(Address.fromString("0x893B92a5B2FeDB7F60652F8BEa379f4ebE3bc7Bc").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x14778860E937f509e651192a90589dE711Fb88a9")
})
pools.set(Address.fromString("0x12646b17c544138e5cb4b9976c547E8EF29A2Bb8").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xc55E93C62874D8100dBd2DfE307EDc1036ad5434")
})
pools.set(Address.fromString("0xf2F4C09657f78D2C8CB5596d1B7FE9e47D274128").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xA049dC95596ef54810070bdC9adaF3525e9226fa")
})
pools.set(Address.fromString("0xCab238565Bb464eB5c03E712Dde469b20319c7EF").toHexString(), {
  token0: Address.fromString("0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0x1A975Ffe1d48c83c0d112EBC515Ea17ABa9aA5C3").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xc5b001DC33727F8F26880B184090D3E252470D45")
})
pools.set(Address.fromString("0xFD3283513c619F06e5BF14852ce53ccF2f2c8576").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x375488F097176507e39B9653b88FDc52cDE736Bf")
})
pools.set(Address.fromString("0xb23cd6CD965e5B8080328D900Ee39986271D35D9").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xfFaDbf2b6568C81f0049331A6AfEa43F00200fF4")
})
pools.set(Address.fromString("0x2bfBADe0540Ec09Ed818EDB00D974129B91781EE").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x58b9cB810A68a7f3e1E4f8Cb45D1B9B3c79705E8")
})
pools.set(Address.fromString("0xE39Da81731A889336530E5C0D45ec1609Ba9bF07").toHexString(), {
  token0: Address.fromString("0xcB40cDaFB091c6597987E496bb648E36d4923F36"),
  token1: Address.fromString("0xD8F594834138eeB0923213a889f513556a48db78")
})
pools.set(Address.fromString("0x660AbA84A990B0084FbA480bA849AD48d489bBA7").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2")
})
pools.set(Address.fromString("0x7daA2EeEAF6735eBBB354Aa1c3d47192408ef6c3").toHexString(), {
  token0: Address.fromString("0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53"),
  token1: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb")
})
pools.set(Address.fromString("0x03F6c25F408E39f2C58B4F53b51ca2322Ac34398").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xF1a0DA3367BC7aa04F8D94BA57B862ff37CeD174")
})
pools.set(Address.fromString("0x5D7f6058C504F5d86d31A40b3AB10FE19C452704").toHexString(), {
  token0: Address.fromString("0x1CeF2d62aF4cd26673C7416957CC4Ec619A696a7"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x67099A7F18a438C35c668e090246603dd27A972a").toHexString(), {
  token0: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0xE593a3F3956D9abA07fce945Cc54f8767612adf4").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xF444B6252D05bF500Fd61CCc71888149742dfe12")
})
pools.set(Address.fromString("0xc42BF5CD16D9eb1E892b66bB32A3892Dcb7bb75C").toHexString(), {
  token0: Address.fromString("0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"),
  token1: Address.fromString("0xD6DF932A45C0f255f85145f286eA0b292B21C90B")
})
pools.set(Address.fromString("0x21084768DA12b30696EB26c95873A70e938d77bD").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xD6DF932A45C0f255f85145f286eA0b292B21C90B")
})
pools.set(Address.fromString("0x6ABc73EF8841030ce6085035b0A9E526FA1345C2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD6DF932A45C0f255f85145f286eA0b292B21C90B")
})
pools.set(Address.fromString("0xb9f7609EE05b1492A51662B33957ecDD490bf77E").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD6DF932A45C0f255f85145f286eA0b292B21C90B")
})
pools.set(Address.fromString("0x38405903Fd810471861AFFB119F80c2bC0B4bf65").toHexString(), {
  token0: Address.fromString("0x017557194713D864367e1F217cFBCf0470247B23"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x49bB6Cce782921758aA1f6752A69CA098C28191e").toHexString(), {
  token0: Address.fromString("0x3Af74994de6C433003332c8311eFb5b6B1A531b5"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x82D8787734C7D6FA016ABDCccfD4A322A9cAC658").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x920Cf626a271321C151D027030D5d08aF699456b")
})
pools.set(Address.fromString("0xB06B3259c816f5B4cB2BBC55952467B0abeD3c84").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb")
})
pools.set(Address.fromString("0xFD32aA9dD68E55495A9fc7dffC19f1dA69fc67EB").toHexString(), {
  token0: Address.fromString("0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x9Ca6dCaABab451E1BD235c965085811472B27A8C").toHexString(), {
  token0: Address.fromString("0x017557194713D864367e1F217cFBCf0470247B23"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xeb0D8D9e19B749eFB20c67D71EE50b46dFE5755F").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x5d1DE581a217560ca15694E57F51C6eE3d090697").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x4F604735c1cF31399C6E711D5962b2B3E0225AD3")
})
pools.set(Address.fromString("0x9a336c233e25c9b3c55aBcd5C155f985D9Fb64d9").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xf6B4185FCf8aF291c0E3927fbEab7046b4f6A8CA")
})
pools.set(Address.fromString("0xe1d99A17D38c398FcdA1808FB5c7BA14196B5de8").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x1C15057d1F3794C934a6cBC1f7EceE934050F219")
})
pools.set(Address.fromString("0xA16c8728352e12789ba5f7fb4a16b72ae3BC505d").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xa9A78f45944372cc51B7aEF0C2F6817C9729A21D")
})
pools.set(Address.fromString("0x50aCdfc8C96264761Fe4393f6570f92b4595ae22").toHexString(), {
  token0: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),
  token1: Address.fromString("0xE6cDD3a275c976BcA5d3De4F96c7514B899f0434")
})
pools.set(Address.fromString("0xC35aaECEE1faB33c5D0d1A78ec744E10f91EF7bc").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xE6cDD3a275c976BcA5d3De4F96c7514B899f0434")
})
pools.set(Address.fromString("0x98c3648A2087df2a1C2a5b695de908bF95fA4f39").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x4F604735c1cF31399C6E711D5962b2B3E0225AD3")
})
pools.set(Address.fromString("0x5d842035577706383c10579a0803435cD1555a5d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc789163D22d2758c2b72bF74c1189D8AdcbBE2E6")
})
pools.set(Address.fromString("0xC9eb41fd47feBdea341b5B4CC557b2E6b210C906").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xBe6EA3e70e2bbB0dbD093B657fbbc0DFF0BA67eC")
})
pools.set(Address.fromString("0xF8445B244c6d2ccBd87b89797971167a78bDF3a0").toHexString(), {
  token0: Address.fromString("0x2740220fFa4b206280907ce12b7cDC57445f3B92"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xA530EDf2Ece27413F67A030716f4bc50B5Ff8299").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8088Bc767c392b5769b94c9ec1D07c62874c8d5f")
})
pools.set(Address.fromString("0x9490e281C4f738fA7b3B2343F07998bEef66a060").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278")
})
pools.set(Address.fromString("0x5535624F2aD3F4a3ec462cCcD138CFdeB507e588").toHexString(), {
  token0: Address.fromString("0x3D88699A854ac4Bb05E25D4C799Df48016B9ed3e"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x168F378560AC0bb2a5CeE917caA313E67155db5b").toHexString(), {
  token0: Address.fromString("0x1Dc8989BA2cA318869c29FEBa3493c3afa6FA6a7"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x9149DA2471Cd7DF81413a1639dAc7BFb7475B054").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xb03ba7EC3F38CeC5A7EA0Cf7e675F31A69B858eD")
})
pools.set(Address.fromString("0xE4212958ED7f4eeacC4Ef98D88C99D64782D8331").toHexString(), {
  token0: Address.fromString("0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db"),
  token1: Address.fromString("0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1")
})
pools.set(Address.fromString("0xc4e6C560eB2c6F3642c8955E394e4F67cA347d1d").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4")
})
pools.set(Address.fromString("0xAeFDbAecc04Dcdc4e0C5E0D18c8e1a624Ca4fcA6").toHexString(), {
  token0: Address.fromString("0x1F514A61bcde34F94Bc39731235690ab9da737F7"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x25Fbbe89c4D851b5091F7B08900fF9b50980F805").toHexString(), {
  token0: Address.fromString("0x1CeF2d62aF4cd26673C7416957CC4Ec619A696a7"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0xf43190D86aecf4a8EB6B5b308E9bA841e92B4df4").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xab7bAdEF82E9Fe11f6f33f87BC9bC2AA27F2fCB5")
})
pools.set(Address.fromString("0x02e60aA3B8E7FF1BD8d81128Ee509f102Dc03688").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xbdDc73440B823B75D512456eCB2d0C96439D8D69")
})
pools.set(Address.fromString("0x3288fe800d9734817E6f8d8Fa00A2dFCDc4c89aA").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x395Ae52bB17aef68C2888d941736A71dC6d4e125")
})
pools.set(Address.fromString("0x77D14a4dE5cFc83aCbEC2C091077Fa379226f340").toHexString(), {
  token0: Address.fromString("0x363D5e37747feC6Fda87A316ddE8a0E24B77B7C0"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x869F3471f09574A112AB704DA9c9A2437AE51Eb5").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x363D5e37747feC6Fda87A316ddE8a0E24B77B7C0")
})
pools.set(Address.fromString("0xCbDF8B2A7215B7d3eD3ec68dec2BDeE39c2b2a19").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xc40F949F8a4e094D1b49a23ea9241D289B7b2819")
})
pools.set(Address.fromString("0x61B2d01b8e9f2175222696253d308419B4896780").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x75af675b1B9Da84363c60E7697b5d4e417491f36")
})
pools.set(Address.fromString("0xc9C670C0aAFCEC1D1D94012D248aE37602940E43").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337")
})
pools.set(Address.fromString("0xF3BB19A2B6b6Dacb582077E66939a273DBC3a2Ae").toHexString(), {
  token0: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337"),
  token1: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1")
})
pools.set(Address.fromString("0x34Ac4F515A38FA742Eb7a83185090337A796F3DE").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337")
})
pools.set(Address.fromString("0x9a50dFa3191FA0A7d516Bede368f17B3444aB295").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xa925f4057d6E6C8FAf8bdE537Ad14BA91A1D0337")
})
pools.set(Address.fromString("0xaCdB637584d275A632c0F160D2551f1ae80Db009").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xc5b001DC33727F8F26880B184090D3E252470D45")
})
pools.set(Address.fromString("0xF0a84498855B89b7f777466a7E5165d3F523f4f8").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF2648F2Fa3D8ef5aF26a41cD5a8f25cf72a9Ec2b")
})
pools.set(Address.fromString("0x99B14de0049c2033f136deF00E858bF2eE5AF0a7").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xFdb794692724153d1488CcdBE0C56c252596735F")
})
pools.set(Address.fromString("0xe32bc162A11a6fFa54D72dca0A83dC26864E1962").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x76FB31fb4af56892A25e32cFC43De717950c9278")
})
pools.set(Address.fromString("0xE43d8918B378547fb490bFAe486745D9D42a75D7").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0xBe827F2975f2da78feb3683c558B143E3C6dCD07")
})
pools.set(Address.fromString("0x5720AE5cA8cB5059Abef67ae992d748D968cb020").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x6F974A6dfD5B166731704Be226795901c45Bb815")
})
pools.set(Address.fromString("0xE2101D19B78e695982975CC1A27b6A9117e02b09").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")
})
pools.set(Address.fromString("0xBEC6274597120f03811DB8F22c32B6508EA70Ad3").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x9A601C5bb360811d96A23689066af316a30c3027")
})
pools.set(Address.fromString("0xeB0c3177f310CFfFAb4016524BcFffc6307eF294").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4F89cc53608241238FC6E44c2B25B1eeF90606eF")
})
pools.set(Address.fromString("0x345F0110616bFAfbAdE2F509E713AFf56d688139").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x8ab72605E48C1f70A20BdD2B3A217FEc24d777f9")
})
pools.set(Address.fromString("0x0b3B6edB7B156E3cF1D9a4c733B91de930be74F0").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xbB1EaB9Eb8fDf65F0E291D013DA07B4b65a27a01")
})
pools.set(Address.fromString("0x87228b8dB4928C1Eae87C7EB8c3eE0b1E24d7D95").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x71502667a00334dEE00c5bA34A07f7FeFF03832d")
})
pools.set(Address.fromString("0x136E2548750236cd391fDb0219348aDEde353663").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xa6252F56cc6eEA21165d56744C795F91c8a3Cf68")
})
pools.set(Address.fromString("0xd6b105BBA6DE245dfe2A5E34986f3D068D1C83B0").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x599B1DA6E0361cEF0AAd630Eb6f58302b7f343F3")
})
pools.set(Address.fromString("0xA632631A18C08461b492C06fD52F4737dF72C388").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x355f0a8a7ecAeD971b8Fbd50994558291ff2413a")
})
pools.set(Address.fromString("0x86B4f8142bDdB403b65A24c932AF1a1f2dB9cA8B").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xca285C6Fd23CB7577751C14473EeaBeA5d1aa6C7")
})
pools.set(Address.fromString("0xE6f273FDcFf0c14473B96DbEBe1F066c56dB60b1").toHexString(), {
  token0: Address.fromString("0x47C0Dd498D8872843C2a861009e18Bc4458c2f67"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x137e34B0613cdB6cCB6a9A33b691F1CeC6a157CC").toHexString(), {
  token0: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607"),
  token1: Address.fromString("0xb931c7BbD87A6e249EaA7355B13927F9c99Bce87")
})
pools.set(Address.fromString("0x814f1c112a01b5b38074c9486cf0c2786F5b9C98").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x363D5e37747feC6Fda87A316ddE8a0E24B77B7C0")
})
pools.set(Address.fromString("0x64ecE0340c1C4173b3e3Ebb5BBfb5FF02089669d").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x52912baBEF22a4CF81e8c313226D7bB2A2aEF11A")
})
pools.set(Address.fromString("0x3856FA6334544B77426FEeFcdD5027d8B2750041").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x743928d8066bda55F163c8317595dc67f3C76486")
})
pools.set(Address.fromString("0x4125b794E28521681e9B856dfb07B0ef56e41A19").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD45A52e8a6272bD9C79A612963c491110cCAB97A")
})
pools.set(Address.fromString("0xCEECD64DB17ceaBe8283cB687AB92A929af2feB2").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x711e53D031ea9B0bb0C24dD506df11b41AEA419e")
})
pools.set(Address.fromString("0xeEe29fE655DFE74187B9B04E3d17a55368E2f265").toHexString(), {
  token0: Address.fromString("0x25B46De59deB610a33d31Fe8f7beF450C2320f74"),
  token1: Address.fromString("0x94b008aA00579c1307B0EF2c499aD98a8ce58e58")
})
pools.set(Address.fromString("0x8D9c67429a0a68c996A794A38e679726E6D19257").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x9Bcef72be871e61ED4fBbc7630889beE758eb81D")
})
pools.set(Address.fromString("0x0be31Ae4659A4075c71651541a8a0a13eC3190C0").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0x8637725aDa78db0674a679CeA2A5e0A0869EF4A1")
})
pools.set(Address.fromString("0xED43F990a55234dF940987cE2e9d63CFC1F91f4E").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD32cBdEeCC96232291E1FfFbC5DBD9edb3d15603")
})
pools.set(Address.fromString("0x5adbA6c5589c50791dd65131dF29677595C7Efa7").toHexString(), {
  token0: Address.fromString("0x17Aabf6838a6303fc6E9C5A227DC1EB6d95c829A"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x45e806CACAE8c44DbD172637DCBF0662E0029C82").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xD32cBdEeCC96232291E1FfFbC5DBD9edb3d15603")
})
pools.set(Address.fromString("0x2352d8966a98747B231C16083c51b33405d007D6").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x97DCb0a55936B142e90Aa7275939B1aFcbDa1f41")
})
pools.set(Address.fromString("0x88cfca0156BA20D3b645AE623096F66648b1A72c").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x3F89273B38ED273F50A3232eC8aaBb0a9bae6417")
})
pools.set(Address.fromString("0xF039BB88bec72F110594A30cACc99897D8534361").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xa11F67e7FcE2FbE31749bf9242A1799C54563f28")
})
pools.set(Address.fromString("0xc14C5EAE0A14848F8bb2437d60710C3e4F1f0dE9").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x6D2E5b8841a6Aa5f0f973436357f75D3Eeb93312")
})
pools.set(Address.fromString("0xDAd51A33B2A6ce1A1EE5137DF2EBfe1F2e680130").toHexString(), {
  token0: Address.fromString("0x1b27b8d2A362fB9c5E40CA56cfc0Abd5A8c84439"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xae3Bd0fbE20657CE83b36F04d5398f0493DAdD0B").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x8Dc87ABb372Bb685672A4f0ffc8c39Ca582a12F0")
})
pools.set(Address.fromString("0xeDE761955c4F11589282051a340823d613BBc654").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x77935F2c72b5eB814753a05921aE495aa283906B")
})
pools.set(Address.fromString("0xf82800e214667D2C78a3e89B43c399cf2453480D").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xCD118e531A17B7AA49eea47f2078d4AAAC80E6F4")
})
pools.set(Address.fromString("0xDe0dbF2f2413956484A242667e0E0De4bdD8278e").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4B227A90dDFd55e15762a5F9D5482BD76BEEdd4E")
})
pools.set(Address.fromString("0x62009eb270c5C15402f0A22F168b332B3031132A").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7Fb90b356e94906669e2c3EeC56ddCbc6c3E0F90")
})
pools.set(Address.fromString("0x0b4f36573CAc83766583d2716e6D88fcFc46E1f1").toHexString(), {
  token0: Address.fromString("0x18cdA9b7472f7c856b9678403767c8A356C43366"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x6A2dBC96a30a97C70dF6b11185C6FF7bE76001fA").toHexString(), {
  token0: Address.fromString("0x08369F9ad14C921267148423C85BDf4B6Ac7E01d"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x91f80c454dE907d1DbcC3Dfd85b7f764B7A1ec13").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xef682B0a75Fb96c841bd878f1403b73462B64B8f")
})
pools.set(Address.fromString("0xdACADD310Db19230C2219033dD675984F58aadA2").toHexString(), {
  token0: Address.fromString("0x26870bf4620f56f38b94DbF4df615C79F57e7b87"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x18DE137fb0e7ee08d83Aa678bae9FeC028570842").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x513F3CcbFD2a835Fd6C2122773b3246899a9Ece2")
})
pools.set(Address.fromString("0x7A9A605d25fBDC68CB8978bD7f37ca029Ff5A02F").toHexString(), {
  token0: Address.fromString("0x26feEc998f676a4975Db3a373eE234AefAa3e45f"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xcA1b837C87c6563910c2BEFA48834fA2a8c3D72D").toHexString(), {
  token0: Address.fromString("0x68f180fcCe6836688e9084f035309E29Bf0A2095"),
  token1: Address.fromString("0xC3248A1bd9D72fa3DA6E6ba701E58CbF818354eB")
})
pools.set(Address.fromString("0x0c3561D3B72e17378D99684414Aa8669daEb8BD0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x78b1Bd624791eB8AFf5F0724Ac2c3539142108BF")
})
pools.set(Address.fromString("0xA0CFb3733edc82D1f382236D2a8A233c9f9e5309").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x744abDB1CE9454c99bb4D4fE9beEe47990f55b30")
})
pools.set(Address.fromString("0x9fb3612d7CD75aa2988EeB0A8387914A93EC0C0C").toHexString(), {
  token0: Address.fromString("0x119685fE98F37524E59A3E91f7108D6a693818F3"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x8d5D73f8b5355D7adb4A9748aa33EfD157062716").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xba83014B80685003d873cF80906a77f8A54712Fe")
})
pools.set(Address.fromString("0xD5c134A1C8fe2Cc66312fF8a4d45087ce8BE5315").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6")
})
pools.set(Address.fromString("0xd71335a327d14Df92eF3563d4D35751596d4da94").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x71252D00AaB90eCd9D9E002fe2a122B1c1E668c3")
})
pools.set(Address.fromString("0x38e96F800e70d37C334dfEd400fa30DEe3f186a5").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x819845b60A192167Ed1139040B4F8ecA31834f27")
})
pools.set(Address.fromString("0xcE7448efd5c093A688928b137e4F37319A9ffc30").toHexString(), {
  token0: Address.fromString("0x79AF5dd14e855823FA3E9ECAcdF001D99647d043"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0x0B929B2B1Af80dF2812325AE1D8DF770199Be13B").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x9e1028F5F1D5eDE59748FFceE5532509976840E0")
})
pools.set(Address.fromString("0x714BFABb853030b2aC765BC70D059093a0B27e0d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xC86e2fF1Fa386082955aa6b3676f1Df9A59dc356")
})
pools.set(Address.fromString("0xA2F2AD6674B64642e6a9e1B69C04F2d320E91d04").toHexString(), {
  token0: Address.fromString("0x17Aabf6838a6303fc6E9C5A227DC1EB6d95c829A"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x42F4930A25D6dC0bEDd705a3a6A629550B37d14D").toHexString(), {
  token0: Address.fromString("0x135c78D7F52Aab6e9f17BcF4A9e8627AA233D050"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xD00a075eCB226a07B5968a7586deB8f2F1bE17e9").toHexString(), {
  token0: Address.fromString("0x135c78D7F52Aab6e9f17BcF4A9e8627AA233D050"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x5a92a3Ee212B3c418f6607ec91c9C55bBfB97f58").toHexString(), {
  token0: Address.fromString("0x18dCc9c88975850593855f1745E22766F0415c70"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x13C02BAeb85a3ee2Fe961bBA2Ea2890e486e1Bc2").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33")
})
pools.set(Address.fromString("0x94d8F74aBda2C311ade8f23230d8F7EDdBa8C6DE").toHexString(), {
  token0: Address.fromString("0x50Bce64397C75488465253c0A034b8097FeA6578"),
  token1: Address.fromString("0xeB585163DEbB1E637c6D617de3bEF99347cd75c8")
})
pools.set(Address.fromString("0x6d5061E0C5431810F721d080d65ef7A9800BE838").toHexString(), {
  token0: Address.fromString("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),
  token1: Address.fromString("0xFdb794692724153d1488CcdBE0C56c252596735F")
})
pools.set(Address.fromString("0xa23b7f19C2Cc3c51c53c20FDB98E7beD06661CF0").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x5F3d4CDADc69c6dc8599403E671Bf90A6673A326")
})
pools.set(Address.fromString("0xF4919FFA2Ce8d08F0f761d4dAf5f77268e165b41").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xe7BC9b3A936F122f08AAC3b1fac3C3eC29A78874")
})
pools.set(Address.fromString("0x09901209E64B39aa8e3221020555CC22518b8B52").toHexString(), {
  token0: Address.fromString("0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1"),
  token1: Address.fromString("0xFff77187d01fD533C7219C516AebB1a790F57F8E")
})
pools.set(Address.fromString("0xE38DEB1748B32D7FF31c6A2c59b8663F33883ebD").toHexString(), {
  token0: Address.fromString("0x2598c30330D5771AE9F983979209486aE26dE875"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0xE13a102b14F7df5D54bD909179b1485Be5FFfc42").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0x17Aabf6838a6303fc6E9C5A227DC1EB6d95c829A")
})
pools.set(Address.fromString("0x84C605834F0e06408f96C50aC886d7C9b239537f").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0xD1793646733E3B463e65316FCEf7e6716d9C9C70")
})
pools.set(Address.fromString("0x07D8CC72B808072C8E10Af36208B9Eb930442C58").toHexString(), {
  token0: Address.fromString("0x17Aabf6838a6303fc6E9C5A227DC1EB6d95c829A"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xE795A0D97C747aEa706A6E472b3b203bBEb09EBE").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x4d5b4a5dcf58f33A135E9975035fbFbf7d1A27e5")
})
pools.set(Address.fromString("0x8A4A360071bCdF1B3163b7840717957dcA6E64aC").toHexString(), {
  token0: Address.fromString("0x0B10Db0b6E1E91acC6a10fe02677f5CA7Ac87d34"),
  token1: Address.fromString("0x4200000000000000000000000000000000000006")
})
pools.set(Address.fromString("0x2Fc806dd83621219E505Ad9237671691b27cC228").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x922d3EC00c558DaAf06580Ecef1bC7Ce17dCc566")
})
pools.set(Address.fromString("0xC86A71b2C43E81531d3648C34A6Ee466d35040dA").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xc2A8f11eA4fBdECD22a4cFCD213fF6acEcA455FC")
})
pools.set(Address.fromString("0x448096758b4079EA5EBc852EDB5fBA65971b496d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xaf20f5f19698f1D19351028cd7103B63D30DE7d7")
})
pools.set(Address.fromString("0x95B44122C487A99d12A0a8b17C601F614F0414D8").toHexString(), {
  token0: Address.fromString("0xAeAeeD23478c3a4b798e4ed40D8B7F41366Ae861"),
  token1: Address.fromString("0xe05A08226c49b636ACf99c40Da8DC6aF83CE5bB3")
})
pools.set(Address.fromString("0x10C5FB1AECE0220537356C02CED6b568Fab2665d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x738f1129244bEF878e8908fCb9e65D5CedEdab0a")
})
pools.set(Address.fromString("0x927BdC717e8AcE1ad11DD8C7464dfCB6a89E6485").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xF3BE95A4aAB7597cE16e2F8a57157c93f2B492f0")
})
pools.set(Address.fromString("0x384586Ec6C3d7F99c753Fce3695FCea816E5038d").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xFf733b2A3557a7ed6697007ab5D11B79FdD1b76B")
})
pools.set(Address.fromString("0xEa8908e78b9bc294E178BC3B59D69012321c76c6").toHexString(), {
  token0: Address.fromString("0x2513486f18eeE1498D7b6281f668B955181Dd0D9"),
  token1: Address.fromString("0xc3864f98f2a61A7cAeb95b039D031b4E2f55e0e9")
})
pools.set(Address.fromString("0xf3e63a86A7EF8541418670442D06228Df12969fB").toHexString(), {
  token0: Address.fromString("0x2513486f18eeE1498D7b6281f668B955181Dd0D9"),
  token1: Address.fromString("0xc3864f98f2a61A7cAeb95b039D031b4E2f55e0e9")
})
pools.set(Address.fromString("0x0D165f5bCC9cBB9CF75cEf8b09CC77b1749A2A33").toHexString(), {
  token0: Address.fromString("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"),
  token1: Address.fromString("0xEB466342C4d449BC9f53A865D5Cb90586f405215")
})
pools.set(Address.fromString("0xA050fbdE0C38a8Aa9c4Ba52A87539Fb07B444219").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x922d3EC00c558DaAf06580Ecef1bC7Ce17dCc566")
})
pools.set(Address.fromString("0x2FBbE8b0e743948D0435774e3F6DE43651ef7092").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000042"),
  token1: Address.fromString("0x922d3EC00c558DaAf06580Ecef1bC7Ce17dCc566")
})
pools.set(Address.fromString("0xa44f824bd1954345317Ec82B27b42744B90131d9").toHexString(), {
  token0: Address.fromString("0x2598c30330D5771AE9F983979209486aE26dE875"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0x47092e00978be69B15f163550ADb850d6F819bd7").toHexString(), {
  token0: Address.fromString("0x2598c30330D5771AE9F983979209486aE26dE875"),
  token1: Address.fromString("0x4200000000000000000000000000000000000042")
})
pools.set(Address.fromString("0xcfd2087B424564f2c4c948B7E4F36728FA722b5a").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0xe312Da35D73ec4784b675a1fd611cCB6D68889DF")
})
pools.set(Address.fromString("0xf6fe5ED537e3bd803871cC08e227F8a6feBc1178").toHexString(), {
  token0: Address.fromString("0x711e53D031ea9B0bb0C24dD506df11b41AEA419e"),
  token1: Address.fromString("0x7F5c764cBc14f9669B88837ca1490cCa17c31607")
})
pools.set(Address.fromString("0xe47C09Dd276c49AD4b3ee4e49b57b59feE97cF48").toHexString(), {
  token0: Address.fromString("0x4200000000000000000000000000000000000006"),
  token1: Address.fromString("0x7346547cE53570893f694616B5e399b7e83369Ad")
})
