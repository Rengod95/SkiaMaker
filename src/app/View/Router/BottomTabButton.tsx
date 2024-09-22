import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Button, Theme, View} from 'tamagui';
import {RouteService} from '@/Service/lib/Route/Adapter.ts';

export const GlobalBottomTabBar = ({navigation, state, descriptors}: BottomTabBarProps) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = typeof options.tabBarLabel === 'string' ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

        if (label === 'WebView') {
          return null;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const Icon = RouteService.getInstance().getMatchedNameTabRoute(label)?.icon ?? null;
        const blr = index === 0 ? '$8' : 0;
        const brr = index === state.routes.length - 1 ? '$8' : 0;

        return (
          <Button
            key={label}
            unstyled
            flex={1}
            h={50}
            br={0}
            btlr={blr}
            btrr={brr}
            bg={'$color1'}
            btc={'transparent'}
            onPress={onPress}
            ai={'center'}
            jc={'center'}
            icon={
              Icon ? (
                <Theme name={'accent'}>
                  <Icon size={'$1.5'} color={isFocused ? '$color4' : '$background025'} />
                </Theme>
              ) : null
            }
          />
        );
      })}
    </View>
  );
};
