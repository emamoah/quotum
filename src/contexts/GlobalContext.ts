import { createContext } from 'react';

export type Token = {
  symbol: string;
  name: string;
  addresses?: Record<string, string>;
};

export type Chain = {
  chainId: number;
  name: string;
  nativeToken: {
    symbol: string;
    name: string;
  };
};

type GlobalContext = {
  token: Token;
  chain: Chain;
  setToken: (token: Token) => void;
  setChain: (chain: Chain) => void;
};

const GlobalContext = createContext<GlobalContext | null>(null);

export default GlobalContext;
