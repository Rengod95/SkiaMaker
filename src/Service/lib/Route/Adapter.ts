import {InitializationSingleTon} from '@/Service/lib/shared.ts';
import {ScreenProps} from 'expo-router/build/useScreens';
import type {FunctionComponent} from 'react';
import {Home, Settings} from '@tamagui/lucide-icons';

type RouteMeta = ScreenProps & {
  icon?: FunctionComponent<{color?: any; size?: any}>;
};

const GLOBAL_TAB_ROUTE_METAS = [
  {name: 'home', icon: Home},
  {name: 'settings', icon: Settings},
];

export class RouteService extends InitializationSingleTon<RouteService> {
  private globalTabRouteMetas: RouteMeta[] = [];

  constructor() {
    super();

    this.globalTabRouteMetas = GLOBAL_TAB_ROUTE_METAS;
  }

  public addRouteMeta(meta: RouteMeta) {
    this.globalTabRouteMetas.push(meta);
  }

  public getTabRouteMetas() {
    return this.globalTabRouteMetas;
  }

  public getMatchedNameTabRoute(name: string) {
    return this.getTabRouteMetas().find(meta => meta.name === name);
  }
}
