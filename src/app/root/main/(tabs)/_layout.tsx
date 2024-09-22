import {Tabs} from 'expo-router';
import {GlobalBottomTabBar} from '@/app/View/Router/BottomTabButton.tsx';
import {RouteService} from '@/Service/lib/Route/Adapter.ts';
import {View} from 'tamagui';

export const unstable_settings = {
  initialRouteName: 'home',
};

export default function RootTabsLayout() {
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          backgroundColor: '$background',
        },
        tabBarBackground: () => {
          return <View bg={'red'}></View>;
        },
      }}
      tabBar={GlobalBottomTabBar}>
      {RouteService.getInstance()
        .getTabRouteMetas()
        .map(routeMeta => {
          return <Tabs.Screen key={routeMeta.name} name={routeMeta.name} options={routeMeta?.options ?? {}} />;
        })}
    </Tabs>
  );
}
