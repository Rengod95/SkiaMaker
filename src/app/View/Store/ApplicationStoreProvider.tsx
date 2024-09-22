import {createContext} from 'react';
import ApplicationStore, {ApplicationStoreInterface} from '@/Service/lib/Application/Store.ts';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const ApplicationStoreContext = createContext<ApplicationStoreInterface>();

type GlobalStoreProviderProps = React.PropsWithChildren<object>;

export const ApplicationStoreProvider = ({children}: GlobalStoreProviderProps) => {
  return <ApplicationStoreContext.Provider value={ApplicationStore}>{children}</ApplicationStoreContext.Provider>;
};
