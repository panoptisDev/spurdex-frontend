import { ChainId, Token } from '@danielvindax/spurdexswap-sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { CHAIN_ID } from './networks'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

export const defineTokens = <T extends TokenList>(t: T) => t

export const mainnetTokens = defineTokens({
  wcredit: new Token(
    MAINNET,
    '0x7c827E6B3EA27b2F726e036d94B2b5eD18Da87a9',
    18,
    'WCREDIT',
    'Wrapped CREDIT',
    'https://www.binance.com/',
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  credit: new Token(MAINNET, '0x7c827E6B3EA27b2F726e036d94B2b5eD18Da87a9', 18, 'CREDIT', 'CREDIT', 'https://https://explorer.cscscan.io/'),
  spdx: new Token(MAINNET, '0x0C609476442DC803721BD8F697609050CBbe814E', 18, 'SPDX', 'SPDX', 'https://explorer.cscscan.io/'),
  
  lazio: new Token(
    MAINNET,
    '0x9dc4Cc360E50051EBaF6Cd34da8AFcD5f1ee2dc5',
    18,
    'LAZIO',
    'LAZIO',
    'https://tether.to/',
  ),
  porto: new Token(
    MAINNET,
    '0x9dc4Cc360E50051EBaF6Cd34da8AFcD5f1ee2dc5',
    18,
    'PORTO',
    'PORTO',
    'https://tether.to/',
  ),
  santos: new Token(
    MAINNET,
    '0x5ac338e348b7229A00d7CB1670F94e621514a4d8',
    18,
    'SANTOS',
    'SANTOS',
    'https://tether.to/',
  ),
  mbox: new Token(
    MAINNET,
    '0xfeb9A7ae1B42E46509cE917CC5B42fF5FF332B88',
    18,
    'MBOX',
    'MBOX',
    'https://tether.to/',
  ),
  dar: new Token(
    MAINNET,
    '0xa885f5BCDA64E5BcC76Df95dB0D2996A54d8a16b',
    18,
    'MBOX',
    'MBOX',
    'https://tether.to/',
  ),


  usdt: new Token(
    MAINNET,
    '0xebe8262a7111E5Acd0e5DE8675F49f35842044dB',
    18,
    'USDT',
    'Tether USD',
    'https://tether.to/',
  ),
  cusd: new Token(
    MAINNET,
    '0xB3A94227032856b71E522984c79D6De68bEf6BcA',
    18,
    'CUSD',
    'Credit USD',
    '',
  ),
  syrup: new Token(
    MAINNET,
    '0xD4e84480993b0a463555DE8999dF54252fbEF953',
    18,
    'SYRUP',
    'SYRUP',
    '',
  ),
  trx: new Token(
    MAINNET,
    '0xCeF7cac6abc2b5646D4B188bDb6b5Dbb19C79B49',
    18,
    'TRX',
    'TRON',
    '',
  ),
  btc: new Token(
    MAINNET,
    '0x793A1404F7e44f42B1E42283D9ed5DeaAdA81af9',
    18,
    'BTC',
    'Bitcoin Token',
    '',
  ),
  
  // dai: new Token(
  //   MAINNET,
  //   '0x8c9513EC3075904Edd9423Fbfa4B367085D9080a',
  //   18,
  //   'DAI',
  //   'DAI',
  //   'https://binance.com/',
  // ),
  // btcb: new Token(
  //   MAINNET,
  //   '0x43f5e794C6167a7BdEA2CB930458FB0aE63593bF',
  //   18,
  //   'BTC',
  //   'Bitcoin Token',
  //   'https://bitcoin.org/',
  // ), 
  eth: new Token(
    MAINNET,
    '0x7EDA29098b5974fd9d1b73BaC4167360D489772e',
    18,
    'ETH',
    'Credit-Peg Ethereum Token',
    'https://ethereum.org/en/',
  ),
  // xrp: new Token(
  //   MAINNET,
  //   '0x25CedE3b006a9779C65d834Ce26CB5D6eB385f24',
  //   18,
  //   'XRP',
  //   'Ripple Token',
  //   'https://www.ripple.com/',
  // ),
  // zec: new Token(
  //   MAINNET,
  //   '0x7Fd90641AcD65d5cE9a0c54731A54b1d4BaE5d75',
  //   18,
  //   'ZEC',
  //   'Zcash Token',
  //   'https://www.z.cash/',
  // ),
} as const)

export const testnetTokens = defineTokens({
  wcredit: new Token(
    TESTNET,
    '0x7c827E6B3EA27b2F726e036d94B2b5eD18Da87a9',
    18,
    'WCREDIT',
    'Wrapped CREDIT',
    'https://www.binance.com/',
  ),
  spdx: new Token(
    TESTNET,
    '0xfdA0F4361258dFD4Cc7f936285874605e46a490D',
    18,
    'SPDX',
    'SpurDex Token',
    'https://spurdex.exchange/',
  ),
  cusd: new Token(
    TESTNET,
    '0x8B92eD4F4A663F75561c452caf4fdA801eFefCCd',
    18,
    'CUSD',
    'Credit Smart USD',
    '',
  ),
  syrup: new Token(
    TESTNET,
    '0x12f369B5a821f56924970262670b1aA10b0D62fF',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://spurdex.exchange/',
  ),
  // bake: new Token(
  //   TESTNET,
  //   '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //   18,
  //   'BAKE',
  //   'Bakeryswap Token',
  //   'https://www.bakeryswap.org/',
  // ),
} as const)

const tokens = () => {
  const chainId = CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {} as typeof testnetTokens & typeof mainnetTokens)
  }

  return mainnetTokens
}

const unserializedTokens = tokens()

type SerializedTokenList = Record<keyof typeof unserializedTokens, SerializedToken>

export const serializeTokens = () => {
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {} as SerializedTokenList)

  return serializedTokens
}

export default unserializedTokens
