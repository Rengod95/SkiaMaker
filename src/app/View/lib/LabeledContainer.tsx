import {View, XStack, Text, ScrollView} from 'tamagui';
import {ChevronRight} from '@tamagui/lucide-icons';

type LabeledContainerProps = React.PropsWithChildren<{
  title: string;
  redirect?: () => void;
}>;

export const LabeledContainer = ({title, redirect, children}: LabeledContainerProps) => {
  const handleRedirect = () => {
    typeof redirect === 'function' && redirect();
  };

  return (
    <View flex={1} gap={'$space.2'}>
      <XStack
        animation={'flip'}
        enterStyle={{
          scale: 1.1,
          x: -50,
          opacity: 0,
        }}
        py={'$space.3'}
        jc={'space-between'}
        onPress={handleRedirect}>
        <Text fos={'$4'} fow={'$8'}>
          {title}
        </Text>
        <ChevronRight />
      </XStack>
      <ScrollView horizontal>
        <XStack gap={'$space.6'}>{children}</XStack>
      </ScrollView>
    </View>
  );
};
