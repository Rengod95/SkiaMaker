import {HeaderBackButtonProps} from '@react-navigation/native-stack/src/types.tsx';
import {Square} from 'tamagui';
import {ArrowLeft} from '@tamagui/lucide-icons';
import {router} from 'expo-router';

// @ts-ignore
export const HeaderBackButton = (props: HeaderBackButtonProps) => {
  return (
    <Square
      hitSlop={{right: 100, bottom: 100}}
      pressStyle={{
        backgroundColor: 'transparent',
      }}
      onPress={() => {
        router.back();
      }}>
      <ArrowLeft size={'$2'} color={'$color10'} />
    </Square>
  );
};
