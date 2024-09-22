import {Stack} from 'expo-router';
import {View} from 'tamagui';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function RootMainTabsSettingLayout() {
  const inset = useSafeAreaInsets();
  return (
    <View flex={1} bg={'$background'} pb={inset.bottom + 10} pt={inset.top}>
      <Stack>
        <Stack.Screen name={'index'} options={{headerShown: false}}></Stack.Screen>
      </Stack>
    </View>
  );
}
