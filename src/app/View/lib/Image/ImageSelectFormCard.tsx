import {AnimatePresence, Button, Form, Image, Square, Text} from 'tamagui';
import {Edit3, Plus} from '@tamagui/lucide-icons';

type ImageSelectFormCardProps = {
  image: string | null;
  onPressCard?: () => void;
};

export const ImageSelectFormCard = ({image, onPressCard}: ImageSelectFormCardProps) => {
  return (
    <>
      {image ? (
        <Square br={'$6'} bw={1} bc={'$color5'} p={0} pos={'relative'}>
          <Image
            br={'$6'}
            w={'100%'}
            h={300}
            objectFit={'fill'}
            source={{
              uri: image,
            }}
          />

          <Button theme={'accent'} br={3000} pos={'absolute'} bottom={10} right={10} onPress={onPressCard} shar={5} shop={0.3}>
            <Edit3 />
            <Text fow={'$5'}>재선택</Text>
          </Button>
        </Square>
      ) : (
        <AnimatePresence>
          <Form
            pressStyle={{
              bg: '$backgroundPress',
            }}
            hoverStyle={{
              bg: '$backgroundHover',
            }}
            onPressOut={onPressCard}
            alignItems="center"
            minWidth={300}
            gap="$2"
            borderWidth={1}
            borderRadius="$4"
            backgroundColor="$background"
            borderColor="$borderColor"
            padding="$8">
            <Square animation={'flip'} enterStyle={{opacity: 0, y: 30, x: 0}} exitStyle={{opacity: 0, y: -10, x: 10}}>
              <Plus />
            </Square>
          </Form>
        </AnimatePresence>
      )}
    </>
  );
};
