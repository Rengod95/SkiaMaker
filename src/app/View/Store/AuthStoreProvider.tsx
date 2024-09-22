import {createContext} from 'react';
import AuthStore, {AuthStoreInterface} from '@/Service/lib/Auth/Store.ts';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const AuthStoreContext = createContext<AuthStoreInterface>();

type AuthStoreProviderProps = React.PropsWithChildren<object>;

export const AuthStoreProvider = ({children}: AuthStoreProviderProps) => {
  return <AuthStoreContext.Provider value={AuthStore}>{children}</AuthStoreContext.Provider>;
};
