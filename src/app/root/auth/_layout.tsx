import {Redirect, Stack} from 'expo-router';
import {observer} from 'mobx-react-lite';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'tamagui';
import {useGlobalStore} from '@/app/View/Store/hooks/useGlobalStore.ts';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'signIn',
};

const AuthLayout = observer(() => {
  const inset = useSafeAreaInsets();
  const AuthStore = useGlobalStore('AuthStore');

  if (AuthStore.isSessionValid) {
    return <Redirect href={'/root/main'} />;
  }

  return (
    <View flex={1} bg={'$background'} pt={inset.top}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'signIn'} />
      </Stack>
    </View>
  );
});

export default AuthLayout;
