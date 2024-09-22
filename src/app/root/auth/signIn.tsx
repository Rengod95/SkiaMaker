import {Button, View, YStack, Text, XStack, H3} from 'tamagui';
import {observer} from 'mobx-react-lite';
import {AuthService} from '@/Service/lib/Auth/Adapter.ts';
import GoogleLogo from 'assets/icons/google_logo.svg';
import AppleLogo from 'assets/icons/apple_logo.svg';
import {Shell} from '@tamagui/lucide-icons';

const AuthSignInScreen = observer(() => {
  return (
    <View flex={1} p={'$space.5'} bg={'$background'}>
      <YStack flex={1} gap={'$space.4'}>
        <View flex={1} ai={'center'} jc={'center'}>
          <YStack ai={'center'} gap={'$space.3'}>
            <Shell size={'$10'} />
            <YStack ai={'center'}>
              <H3>Shell AI</H3>
              <Text letterSpacing={3}>AI 뷰티를 혁신합니다</Text>
            </YStack>
          </YStack>
        </View>

        <View flex={1}>
          <YStack flex={1} gap={'$space.4'} jc={'flex-end'}>
            <Button
              unstyled
              bg={'#000'}
              br={'$10'}
              h={55}
              ai={'center'}
              jc={'center'}
              bc={'#000'}
              bw={1}
              p={0}
              onPress={() => AuthService.getInstance().signInWithApple()}>
              <XStack>
                <AppleLogo viewBox={'17 4 30 45'} width={35} height={55} />
                <XStack jc={'center'} ai={'center'}>
                  <Text ff={'roboto'} fow={'$8'} fos={'$4'} color={'#fff'}>
                    Apple
                  </Text>
                  <Text ff={'roboto'} fow={'$8'} fos={'$4'} color={'#fff'}>
                    로 계속하기
                  </Text>
                </XStack>
              </XStack>
            </Button>

            <Button
              unstyled
              bg={'#fff'}
              br={'$10'}
              h={55}
              ai={'center'}
              jc={'center'}
              bc={'#000'}
              bw={1}
              onPress={() => AuthService.getInstance().signInWithGoogleSSO()}>
              <XStack>
                <GoogleLogo width={40} height={40} />
                <XStack jc={'center'} ai={'center'}>
                  <Text ff={'roboto'} fow={'$8'} fos={'$4'} color={'#000'}>
                    Google
                  </Text>
                  <Text ff={'roboto'} fow={'$8'} fos={'$4'} color={'#000'}>
                    로 계속하기
                  </Text>
                </XStack>
              </XStack>
            </Button>
            <Text color={'$color9'} fos={'$1'} ta={'center'}>
              회원가입과 함께 이용약관 및 개인정보처리방침에 동의합니다
            </Text>
          </YStack>
        </View>
      </YStack>
    </View>
  );
});

export default AuthSignInScreen;
