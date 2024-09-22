import {styled} from '@tamagui/core';
import {View} from 'tamagui';

export const TouchableFrame = styled(View, {
  name: 'Touchable',
  alignItems: 'center',
  flexDirection: 'row',

  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },

  pressStyle: {
    backgroundColor: '$backgroundPress',
  },
});
