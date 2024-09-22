import 'react-native-reanimated';
import 'react-native-gesture-handler';

import {SplashScreen, Stack} from 'expo-router';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {PortalProvider, TamaguiProvider} from 'tamagui';
// @ts-ignore
import config from '../../tamagui.config.ts';
import {useColorScheme} from 'react-native';

import {Platform} from 'react-native';
import {AuthStoreProvider} from '@/app/View/Store/AuthStoreProvider.tsx';
import {ApplicationStoreProvider} from '@/app/View/Store/ApplicationStoreProvider.tsx';
import {registerServices} from '@/app/View/BootStrap/registerServices.ts';
import {configuretGoogleSignin} from '@/app/View/BootStrap/configuretGoogleSignin.ts';

//for eslint
if (Platform.OS === 'web') {
  // @ts-ignore
  global._frameTimestamp = null;
}

SplashScreen.preventAutoHideAsync();

registerServices();
configuretGoogleSignin();

export const unstable_settings = {
  initialRouteName: 'root',
};

export default function ApplicationLayout() {
  const colorScheme = useColorScheme();

  return (
    <ApplicationStoreProvider>
      <AuthStoreProvider>
        <PortalProvider shouldAddRootHost>
          <SafeAreaProvider>
            <TamaguiProvider config={config} defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}>
              <Stack
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen name={'root'} />
              </Stack>
            </TamaguiProvider>
          </SafeAreaProvider>
        </PortalProvider>
      </AuthStoreProvider>
    </ApplicationStoreProvider>
  );
}
