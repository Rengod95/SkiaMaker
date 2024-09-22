import {SplashScreen, Stack} from 'expo-router';
import {observer} from 'mobx-react-lite';

import {Spinner, Text, View} from 'tamagui';
import {StatusBar} from 'expo-status-bar';
import {useInitializeServices} from '@/app/View/BootStrap/hooks/useInitializeApp.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useColorScheme} from 'react-native';
import {useGlobalStore} from '@/app/View/Store/hooks/useGlobalStore.ts';

export const unstable_settings = {
  initialRouteName: 'main',
};

const RootLayout = observer(() => {
  const inset = useSafeAreaInsets();
  const scheme = useColorScheme();
  useInitializeServices({autoInit: true, callback: SplashScreen.hideAsync});

  const ApplicationStore = useGlobalStore('ApplicationStore');

  if (!ApplicationStore.isApplicationInitialized)
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Spinner size="large" color="$color6" />
        <Text>loading...</Text>
      </View>
    );

  console.log('application initialized?', ApplicationStore.isApplicationInitialized);

  return (
    <View flex={1} bg={'$background'} pb={inset.bottom}>
      <StatusBar style={scheme === 'light' ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
        <Stack.Screen name={'main'} />
        <Stack.Screen name={'auth'} />
      </Stack>
    </View>
  );
});

export default RootLayout;
