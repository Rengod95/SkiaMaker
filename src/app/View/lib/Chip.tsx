import {styled, TextProps} from '@tamagui/core';
import {Button, ButtonProps, Text} from 'tamagui';

export const DS = {
  Container: {
    bw: 1,
    bc: '$color8',
    bg: '$color7',
    pressStyle: {
      scale: 0.9,
    },
    animation: 'fastest',
  },
};

const ButtonRoot = styled(Button, {
  px: '$3',
  br: 999,
  size: '$3',
  color: '$color10',
  ...DS.Container,
  variants: {
    size: {
      sm: {
        h: '$2.5',
      },
      md: {
        h: '$2.5',
      },
      lg: {
        h: '$4',
      },
    },
  },
});

const ButtonInnerText = styled(Text, {
  color: '$color10',
  fos: '$3',
  fow: '$8',

  variants: {
    size: {
      sm: {
        lh: '$4',
        fos: '$2',
        fow: '$6',
      },
      md: {
        lh: '$4',
        fos: '$3',
        fow: '$8',
      },
      lg: {
        lh: '$4',
        fos: '$4',
        fow: '$8',
      },
    },
  },
});

type ChipProps = React.PropsWithChildren<
  ButtonProps & {
    size: 'sm' | 'md' | 'lg';
    textProps?: TextProps;
  }
>;

export const Chip = ({size, children, textProps, ...rest}: ChipProps) => {
  return (
    <ButtonRoot hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} size={size} {...rest} scaleIcon={1.3}>
      <ButtonInnerText size={size} {...textProps}>
        {children}
      </ButtonInnerText>
    </ButtonRoot>
  );
};
