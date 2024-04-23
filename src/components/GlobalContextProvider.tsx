import { GlobalContext } from '@/contexts';
import { Token } from '@/contexts/GlobalContext';
import { APP_DATA } from '@/utils';
import { useMemo, useState } from 'react';

export default function GlobalContextProvider({
  children,
}: React.PropsWithChildren) {
  const [chain, setChain] = useState(APP_DATA.chains[0]);
  const [token, setToken] = useState<Token>(chain.nativeToken);

  const ctx = useMemo(
    () => ({
      chain,
      setChain,
      token,
      setToken,
    }),
    [chain, token]
  );

  return (
    <GlobalContext.Provider value={ctx}>{children}</GlobalContext.Provider>
  );
}
