import { GlobalContext } from '@/contexts';
import { useContext } from 'react';

export default function useGlobalContext() {
  const ctx = useContext(GlobalContext);
  if (ctx === null) {
    throw new Error('GlobalContext provider not available.');
  }
  return ctx;
}
