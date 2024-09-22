import {useContext} from 'react';

import {AuthStoreContext} from '@/app/View/Store/AuthStoreProvider.tsx';

import {ApplicationStoreContext} from '@/app/View/Store/ApplicationStoreProvider.tsx';

import {ApplicationStoreInterface} from '@/Service/lib/Application/Store.ts';
import {AuthStoreInterface} from '@/Service/lib/Auth/Store.ts';

export type Store = {
  ApplicationStore: React.Context<ApplicationStoreInterface>;
  AuthStore: React.Context<AuthStoreInterface>;
};

const stores: Store = {
  ApplicationStore: ApplicationStoreContext,
  AuthStore: AuthStoreContext,
};

type ContextType<T> = T extends React.Context<infer U> ? U : never;

export const useGlobalStore = <K extends keyof Store>(key: K): ContextType<Store[K]> => {
  const store = useContext<ContextType<Store[K]>>(stores[key as K] as React.Context<any>);
  return store as ContextType<Store[K]>;
};
