import {config as defaultConfig} from '@tamagui/config/v3';
import {createAnimations} from '@tamagui/animations-moti';
import {createMedia, createTamagui, createTokens} from 'tamagui';
import {
  dark,
  dark_accent,
  dark_accent_active,
  dark_accent_alt1,
  dark_accent_alt2,
  dark_accent_Button,
  dark_accent_Card,
  dark_accent_Checkbox,
  dark_accent_Input,
  dark_accent_ListItem,
  dark_accent_Progress,
  dark_accent_RadioGroupItem,
  dark_accent_SelectTrigger,
  dark_accent_SliderTrack,
  dark_accent_SliderTrackActive,
  dark_accent_surface1,
  dark_accent_surface2,
  dark_accent_surface3,
  dark_accent_surface4,
  dark_accent_Switch,
  dark_accent_TextArea,
  dark_accent_TooltipArrow,
  dark_accent_TooltipContent,
  dark_active,
  dark_alt1,
  dark_alt2,
  dark_Button,
  dark_Card,
  dark_Checkbox,
  dark_Input,
  dark_ListItem,
  dark_Progress,
  dark_RadioGroupItem,
  dark_SelectTrigger,
  dark_SliderTrack,
  dark_SliderTrackActive,
  dark_surface1,
  dark_surface2,
  dark_surface3,
  dark_surface4,
  dark_Switch,
  dark_TextArea,
  dark_TooltipArrow,
  dark_TooltipContent,
  light,
  light_accent,
  light_accent_active,
  light_accent_alt1,
  light_accent_alt2,
  light_accent_Button,
  light_accent_Card,
  light_accent_Checkbox,
  light_accent_Input,
  light_accent_ListItem,
  light_accent_Progress,
  light_accent_RadioGroupItem,
  light_accent_SelectTrigger,
  light_accent_SliderTrack,
  light_accent_SliderTrackActive,
  light_accent_surface1,
  light_accent_surface2,
  light_accent_surface3,
  light_accent_surface4,
  light_accent_Switch,
  light_accent_TextArea,
  light_accent_TooltipArrow,
  light_accent_TooltipContent,
  light_active,
  light_alt1,
  light_alt2,
  light_Button,
  light_Card,
  light_Checkbox,
  light_Input,
  light_ListItem,
  light_Progress,
  light_RadioGroupItem,
  light_SelectTrigger,
  light_SliderTrack,
  light_SliderTrackActive,
  light_surface1,
  light_surface2,
  light_surface3,
  light_surface4,
  light_Switch,
  light_TextArea,
  light_TooltipArrow,
  light_TooltipContent,
} from '@/app/Theme/theme-output.ts';
import {createFont} from '@tamagui/core';
import {
  dark2,
  dark2_active,
  dark2_alt1,
  dark2_alt2,
  dark2_Button,
  dark2_Card,
  dark2_Checkbox,
  dark2_Input,
  dark2_ListItem,
  dark2_Progress,
  dark2_RadioGroupItem,
  dark2_SelectTrigger,
  dark2_SliderTrack,
  dark2_SliderTrackActive,
  dark2_surface1,
  dark2_surface2,
  dark2_surface3,
  dark2_surface4,
  dark2_Switch,
  dark2_TextArea,
  dark2_TooltipArrow,
  dark2_TooltipContent,
  light2,
  light2_active,
  light2_alt1,
  light2_alt2,
  light2_Button,
  light2_Card,
  light2_Checkbox,
  light2_Input,
  light2_ListItem,
  light2_Progress,
  light2_RadioGroupItem,
  light2_SelectTrigger,
  light2_SliderTrack,
  light2_SliderTrackActive,
  light2_surface1,
  light2_surface2,
  light2_surface3,
  light2_surface4,
  light2_Switch,
  light2_TextArea,
  light2_TooltipArrow,
  light2_TooltipContent,
} from '@/app/Theme/theme-output-2-result.ts';

type Theme = {
  accentBackground: string;
  accentColor: string;
  background0: string;
  background025: string;
  background05: string;
  background075: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color0: string;
  color025: string;
  color05: string;
  color075: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  borderColor: string;
  borderColorHover: string;
  borderColorPress: string;
  borderColorFocus: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  placeholderColor: string;
  outlineColor: string;
};

const Pretendard = createFont({
  family: 'Pretendard Variable, PretendardStdVariable',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 22,
    6: 24,
    7: 28,
    8: 32,
    9: 35,
    true: 16,
  },
  lineHeight: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 22,
    6: 24,
    7: 28,
    8: 32,
    9: 35,
    true: 16,
  },
  weight: {
    4: '400',
    5: '500',
    6: '600',
    7: '700',
    8: '800',
    true: '500',
  },
  letterSpacing: {
    4: 0,
    5: 0,
    7: -0.5,
    true: 0,
  },
});

const config = createTamagui({
  animations: createAnimations({
    flip: {
      type: 'spring',
      mass: 1,
      damping: 20,
      stiffness: 150,
    },
    fastest: {
      type: 'spring',
      damping: 3,
      mass: 0.2,
      stiffness: 50,
    },
    fast: {
      type: 'spring',
      damping: 20,
      mass: 1.2,
      stiffness: 250,
    },
    medium: {
      type: 'spring',
      damping: 10,
      mass: 0.9,
      stiffness: 100,
    },
    slow: {
      type: 'spring',
      damping: 20,
      stiffness: 60,
    },
  }),
  shorthands: defaultConfig.shorthands,
  tokens: createTokens({
    ...defaultConfig.tokens,
    size: {
      ...defaultConfig.tokens.size,
      sm: 3,
      md: 6,
      lg: 9,
    },
    color: {
      ...defaultConfig.tokens.color,
      bgp: '#0A0D10',
      bgse: '#12171D',
      bgsu: '#1a221d',
      bgt: '#223038',
    },
  }),
  settings: defaultConfig.settings,
  fonts: {
    heading: Pretendard,
    body: Pretendard,
    mono: defaultConfig.fonts.mono,
    silkscreen: defaultConfig.fonts.silkscreen,
  },
  selectionStyles: defaultConfig.selectionStyles,
  media: createMedia(defaultConfig.media),

  themes: {
    ...defaultConfig.themes,
    light,
    dark,
    light2,
    dark2,
    light_accent,
    dark_accent,
    light_alt1,
    light_alt2,
    light_active,
    light_surface3,
    light_Button,
    light_SliderTrackActive,
    light_surface1,
    light_ListItem,
    light_SelectTrigger,
    light_Card,
    light_Progress,
    light_TooltipArrow,
    light_SliderTrack,
    light_Input,
    light_TextArea,
    light_surface2,
    light_Checkbox,
    light_Switch,
    light_TooltipContent,
    light_RadioGroupItem,
    light_surface4,
    dark_active,
    dark_alt1,
    dark_alt2,
    dark_Button,
    dark_Card,
    dark_Checkbox,
    dark_Input,
    dark_ListItem,
    dark_Progress,
    dark_RadioGroupItem,
    dark_SelectTrigger,
    dark_SliderTrack,
    dark_SliderTrackActive,
    dark_surface1,
    dark_surface2,
    dark_surface3,
    dark_surface4,
    dark_Switch,
    dark_TextArea,
    dark_TooltipArrow,
    dark_TooltipContent,
    light2_alt1,
    light2_alt2,
    light2_active,
    light2_surface3,
    light2_Button,
    light2_SliderTrackActive,
    light2_surface1,
    light2_ListItem,
    light2_SelectTrigger,
    light2_Card,
    light2_Progress,
    light2_TooltipArrow,
    light2_SliderTrack,
    light2_Input,
    light2_TextArea,
    light2_surface2,
    light2_Checkbox,
    light2_Switch,
    light2_TooltipContent,
    light2_RadioGroupItem,
    light2_surface4,
    dark2_alt1,
    dark2_alt2,
    dark2_active,
    dark2_surface3,
    dark2_Button,
    dark2_SliderTrackActive,
    dark2_surface1,
    dark2_ListItem,
    dark2_SelectTrigger,
    dark2_Card,
    dark2_Progress,
    dark2_TooltipArrow,
    dark2_SliderTrack,
    dark2_Input,
    dark2_TextArea,
    dark2_surface2,
    dark2_Checkbox,
    dark2_Switch,
    dark2_TooltipContent,
    dark2_RadioGroupItem,
    dark2_surface4,
    light_accent_alt1,
    light_accent_alt2,
    light_accent_active,
    light_accent_surface3,
    light_accent_Button,
    light_accent_SliderTrackActive,
    light_accent_surface1,
    light_accent_ListItem,
    light_accent_SelectTrigger,
    light_accent_Card,
    light_accent_Progress,
    light_accent_TooltipArrow,
    light_accent_SliderTrack,
    light_accent_Input,
    light_accent_TextArea,
    light_accent_surface2,
    light_accent_Checkbox,
    light_accent_Switch,
    light_accent_TooltipContent,
    light_accent_RadioGroupItem,
    light_accent_surface4,
    dark_accent_alt1,
    dark_accent_alt2,
    dark_accent_active,
    dark_accent_surface3,
    dark_accent_Button,
    dark_accent_SliderTrackActive,
    dark_accent_surface1,
    dark_accent_ListItem,
    dark_accent_SelectTrigger,
    dark_accent_Card,
    dark_accent_Progress,
    dark_accent_TooltipArrow,
    dark_accent_SliderTrack,
    dark_accent_Input,
    dark_accent_TextArea,
    dark_accent_surface2,
    dark_accent_Checkbox,
    dark_accent_Switch,
    dark_accent_TooltipContent,
    dark_accent_RadioGroupItem,
    dark_accent_surface4,
  },
});

export type AppConfig = typeof config;

declare module 'tamagui' {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}

  interface TypeOverride {
    themes: {
      light: Theme;
      dark: Theme;
      light_accent: Theme;
      dark_accent: Theme;
    };
  }
}

declare module '@tamagui/core' {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}

  interface TypeOverride {
    themes: {
      light: Theme;
      dark: Theme;
      light_accent: Theme;
      dark_accent: Theme;
    };
  }
}

export default config;
