import {styled} from '@tamagui/core';
import {Card} from 'tamagui';

const CardRoot = styled(Card, {
  bg: '$color1',
  animation: 'flip',
  enterStyle: {
    scale: 1.0,
    y: -30,
    opacity: 0,
  },
  shadowOpacity: 0.25,
  shadowColor: '$shadowColor',
  shadowRadius: 5,
  borderRadius: '$6',
});

export {CardRoot as BasicCard};
