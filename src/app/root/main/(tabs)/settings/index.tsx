import {observer} from 'mobx-react-lite';

import {Avatar, ListItem, ScrollView, Text, View, XStack, YGroup, YStack} from 'tamagui';
import {BookA, Cloud, LogOut, Scroll} from '@tamagui/lucide-icons';
import {AuthService} from '@/Service/lib/Auth/Adapter.ts';
import {useGlobalStore} from '@/app/View/Store/hooks/useGlobalStore.ts';

const RootMainTabsSettingScreen = observer(() => {
  const AuthStore = useGlobalStore('AuthStore');

  return (
    <View flex={1} bg={'$background'}>
      {/*<XStack pos={'absolute'} bg={'$background'} zIndex={10} w={'100%'} p={'$space.3'} shop={0.2} shar={10} shac={'$shadowColor'}>*/}
      {/*  <View w={'100%'} fd={'row'} jc={'flex-end'} ai={'center'} gap={'$space.2'}>*/}
      {/*    <Theme name={'accent'}>*/}
      {/*      <Chip size={'md'} icon={<Shell size={'$1'} />} textProps={{color: '$color11'}}>*/}
      {/*        999*/}
      {/*      </Chip>*/}
      {/*    </Theme>*/}
      {/*  </View>*/}
      {/*</XStack>*/}
      <ScrollView pos={'relative'} mt={'$space.10'}>
        <YStack flex={1}>
          <XStack gap={'$space.4'} p={'$space.4'} bbc={'$color1'}>
            <Avatar circular size="$7">
              <Avatar.Image source={{uri: AuthStore.session?.photoURL || undefined}} />
              <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
            </Avatar>

            <YStack flex={1} jc={'center'}>
              <View>
                <Text fos={'$6'} fow={'$7'}>
                  {AuthStore.session?.displayName}
                </Text>
              </View>
              <View>
                <Text fos={'$4'} fow={'$4'} ellipse>
                  {AuthStore.session?.email}
                </Text>
              </View>
            </YStack>
          </XStack>
        </YStack>

        <YGroup flex={1} alignSelf="center" br={0}>
          <YGroup.Item>
            <ListItem size={'$5'} pressTheme icon={Scroll} bg={''} w={'100%'} bbw={1} bc={'$color2'}>
              개인정보 보호 정책
            </ListItem>
          </YGroup.Item>
          <YGroup.Item>
            <ListItem size={'$5'} pressTheme icon={BookA} bg={''} w={'100%'} bbw={1} bc={'$color2'}>
              용어
            </ListItem>
          </YGroup.Item>
          <YGroup.Item>
            <ListItem size={'$5'} pressTheme icon={Cloud} bg={''} w={'100%'} bbw={1} bc={'$color2'}>
              Cloud
            </ListItem>
          </YGroup.Item>

          <YGroup.Item>
            <ListItem
              size={'$5'}
              pressTheme
              icon={LogOut}
              bg={''}
              w={'100%'}
              bc={'$color2'}
              onPress={() => {
                AuthService.getInstance().signOut();
              }}>
              로그아웃
            </ListItem>
          </YGroup.Item>
        </YGroup>
      </ScrollView>
    </View>
  );
});

export default RootMainTabsSettingScreen;
