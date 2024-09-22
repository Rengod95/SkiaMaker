import {AnimatePresence, Button, ButtonProps, View, YStack} from 'tamagui';
import {Children, useState} from 'react';
import {Brush} from '@tamagui/lucide-icons';

type FABDirection = 'up' | 'down' | 'left' | 'right';

interface FABProps extends ButtonProps {
  directionList: FABDirection;
}

const getAnimationProps = (direction: FABDirection) => {
  switch (direction) {
    case 'up':
      return {
        enterStyle: {opacity: 0, y: -30, x: 0},
        animateStyle: {opacity: 1, y: 0, x: 0},
        exitStyle: {opacity: 0, y: -30, x: 0},
      };
    case 'down':
      return {
        enterStyle: {opacity: 0, y: 30, x: 0},
        animateStyle: {opacity: 1, y: 0, x: 0},
        exitStyle: {opacity: 0, y: 30, x: 0},
      };
    case 'left':
      return {
        enterStyle: {opacity: 0, y: 0, x: 30},
        animateStyle: {opacity: 1, y: 0, x: 0},
        exitStyle: {opacity: 0, y: 0, x: 30},
      };
    case 'right':
      return {
        enterStyle: {opacity: 0, y: 0, x: -30},
        animateStyle: {opacity: 1, y: 0, x: 0},
        exitStyle: {opacity: 0, y: 0, x: -30},
      };
    default:
      return {
        enterStyle: {opacity: 0, y: 0, x: 0},
        animateStyle: {opacity: 1, y: 0, x: 0},
        exitStyle: {opacity: 0, y: 0, x: 0},
      };
  }
};
export const FAB = ({directionList = 'down', children, ...props}: FABProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <YStack display={'flex'} ai={'center'} position="absolute" bottom={20} right={20} {...props}>
      <AnimatePresence>
        {isOpen && (
          <YStack alignItems="center" mb="$space.4" animation={'flip'} gap={'$3'}>
            {Children.map(children, (child, index) => (
              <View key={index} animation={'flip'} {...getAnimationProps(directionList)}>
                {child}
              </View>
            ))}
          </YStack>
        )}
      </AnimatePresence>
      <Button br={333} w={'$size.6'} h={'$size.6'} onPress={toggleMenu}>
        <Brush size={'$2'} />
      </Button>
    </YStack>
  );
};
