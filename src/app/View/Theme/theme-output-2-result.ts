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

function t(a: [number, number][]) {
  let res: Record<string, string> = {};
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string;
  }
  return res as Theme;
}
const vs = [
  'hsla(250, 50%, 48%, 1)',
  'hsla(240, 20%, 99%, 0)',
  'hsla(240, 20%, 99%, 0.25)',
  'hsla(240, 20%, 99%, 0.5)',
  'hsla(240, 20%, 99%, 0.75)',
  'hsla(210, 23%, 99%, 1)',
  'hsla(210, 22%, 93%, 1)',
  'hsla(213, 23%, 88%, 1)',
  'hsla(212, 22%, 83%, 1)',
  'hsla(212, 21%, 77%, 1)',
  'hsla(212, 19%, 72%, 1)',
  'hsla(211, 18%, 66%, 1)',
  'hsla(211, 16%, 61%, 1)',
  'hsla(210, 15%, 55%, 1)',
  'hsla(210, 13%, 50%, 1)',
  'hsla(0, 15%, 15%, 1)',
  'hsla(0, 15%, 10%, 1)',
  'hsla(0, 14%, 10%, 0)',
  'hsla(0, 14%, 10%, 0.25)',
  'hsla(0, 14%, 10%, 0.5)',
  'hsla(0, 14%, 10%, 0.75)',
  'hsla(250, 50%, 57%, 1)',
  'hsla(210, 23%, 5%, 0)',
  'hsla(210, 23%, 5%, 0.25)',
  'hsla(210, 23%, 5%, 0.5)',
  'hsla(210, 23%, 5%, 0.75)',
  'hsla(210, 23%, 5%, 1)',
  'hsla(205, 22%, 9%, 1)',
  'hsla(213, 23%, 9%, 1)',
  'hsla(212, 22%, 15%, 1)',
  'hsla(212, 21%, 21%, 1)',
  'hsla(212, 19%, 27%, 1)',
  'hsla(211, 18%, 33%, 1)',
  'hsla(211, 16%, 38%, 1)',
  'hsla(210, 15%, 44%, 1)',
  'hsla(0, 15%, 93%, 1)',
  'hsla(0, 15%, 95%, 1)',
  'hsla(0, 15%, 95%, 0)',
  'hsla(0, 15%, 95%, 0.25)',
  'hsla(0, 15%, 95%, 0.5)',
  'hsla(0, 15%, 95%, 0.75)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.8)',
];

const ks = [
  'accentBackground',
  'accentColor',
  'background0',
  'background025',
  'background05',
  'background075',
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
  'color9',
  'color10',
  'color11',
  'color12',
  'color0',
  'color025',
  'color05',
  'color075',
  'background',
  'backgroundHover',
  'backgroundPress',
  'backgroundFocus',
  'borderColor',
  'borderColorHover',
  'borderColorPress',
  'borderColorFocus',
  'color',
  'colorHover',
  'colorPress',
  'colorFocus',
  'colorTransparent',
  'placeholderColor',
  'outlineColor',
];

const n1 = t([
  [0, 0],
  [1, 0],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 4],
  [6, 5],
  [7, 6],
  [8, 7],
  [9, 8],
  [10, 9],
  [11, 10],
  [12, 11],
  [13, 12],
  [14, 13],
  [15, 14],
  [16, 15],
  [17, 16],
  [18, 17],
  [19, 18],
  [20, 19],
  [21, 20],
  [22, 5],
  [23, 4],
  [24, 6],
  [25, 6],
  [26, 8],
  [27, 7],
  [28, 9],
  [29, 8],
  [30, 16],
  [31, 15],
  [32, 16],
  [33, 15],
  [34, 17],
  [35, 13],
  [36, 18],
]);

export const light2 = n1;
const n2 = t([
  [0, 21],
  [1, 21],
  [2, 22],
  [3, 23],
  [4, 24],
  [5, 25],
  [6, 26],
  [7, 27],
  [8, 28],
  [9, 29],
  [10, 30],
  [11, 31],
  [12, 32],
  [13, 33],
  [14, 34],
  [15, 14],
  [16, 35],
  [17, 36],
  [18, 37],
  [19, 38],
  [20, 39],
  [21, 40],
  [22, 26],
  [23, 27],
  [24, 25],
  [25, 25],
  [26, 29],
  [27, 30],
  [28, 28],
  [29, 29],
  [30, 36],
  [31, 35],
  [32, 36],
  [33, 35],
  [34, 37],
  [35, 34],
  [36, 38],
]);

export const dark2 = n2;
const n3 = t([
  [30, 15],
  [31, 14],
  [32, 15],
  [33, 14],
]);

export const light2_alt1 = n3;
const n4 = t([
  [30, 14],
  [31, 13],
  [32, 14],
  [33, 13],
]);

export const light2_alt2 = n4;
const n5 = t([
  [22, 8],
  [23, 7],
  [24, 9],
  [25, 9],
  [26, 11],
  [27, 10],
  [29, 11],
  [28, 12],
]);

export const light2_active = n5;
export const light2_surface3 = n5;
export const light2_Button = n5;
export const light2_SliderTrackActive = n5;
const n6 = t([
  [22, 6],
  [23, 5],
  [24, 7],
  [25, 7],
  [26, 9],
  [27, 8],
  [29, 9],
  [28, 10],
]);

export const light2_surface1 = n6;
export const light2_ListItem = n6;
export const light2_SelectTrigger = n6;
export const light2_Card = n6;
export const light2_Progress = n6;
export const light2_TooltipArrow = n6;
export const light2_SliderTrack = n6;
export const light2_Input = n6;
export const light2_TextArea = n6;
const n7 = t([
  [22, 7],
  [23, 6],
  [24, 8],
  [25, 8],
  [26, 10],
  [27, 9],
  [29, 10],
  [28, 11],
]);

export const light2_surface2 = n7;
export const light2_Checkbox = n7;
export const light2_Switch = n7;
export const light2_TooltipContent = n7;
export const light2_RadioGroupItem = n7;
const n8 = t([
  [22, 10],
  [23, 10],
  [24, 11],
  [25, 11],
  [26, 10],
  [27, 10],
  [29, 11],
  [28, 11],
]);

export const light2_surface4 = n8;
const n9 = t([
  [30, 35],
  [31, 14],
  [32, 35],
  [33, 14],
]);

export const dark2_alt1 = n9;
const n10 = t([
  [30, 14],
  [31, 34],
  [32, 14],
  [33, 34],
]);

export const dark2_alt2 = n10;
const n11 = t([
  [22, 29],
  [23, 30],
  [24, 28],
  [25, 28],
  [26, 32],
  [27, 33],
  [29, 32],
  [28, 31],
]);

export const dark2_active = n11;
export const dark2_surface3 = n11;
export const dark2_Button = n11;
export const dark2_SliderTrackActive = n11;
const n12 = t([
  [22, 27],
  [23, 28],
  [24, 26],
  [25, 26],
  [26, 30],
  [27, 31],
  [29, 30],
  [28, 29],
]);

export const dark2_surface1 = n12;
export const dark2_ListItem = n12;
export const dark2_SelectTrigger = n12;
export const dark2_Card = n12;
export const dark2_Progress = n12;
export const dark2_TooltipArrow = n12;
export const dark2_SliderTrack = n12;
export const dark2_Input = n12;
export const dark2_TextArea = n12;
const n13 = t([
  [22, 28],
  [23, 29],
  [24, 27],
  [25, 27],
  [26, 31],
  [27, 32],
  [29, 31],
  [28, 30],
]);

export const dark2_surface2 = n13;
export const dark2_Checkbox = n13;
export const dark2_Switch = n13;
export const dark2_TooltipContent = n13;
export const dark2_RadioGroupItem = n13;
const n14 = t([
  [22, 31],
  [23, 31],
  [24, 30],
  [25, 30],
  [26, 31],
  [27, 31],
  [29, 30],
  [28, 30],
]);

export const dark2_surface4 = n14;
const n15 = t([
  [30, 6],
  [31, 5],
  [32, 7],
  [33, 7],
  [22, 16],
  [23, 15],
  [24, 16],
  [25, 15],
  [26, 14],
  [27, 13],
  [29, 12],
  [28, 11],
]);

export const light2_SwitchThumb = n15;
export const light2_SliderThumb = n15;
export const light2_Tooltip = n15;
export const light2_ProgressIndicator = n15;
const n16 = t([[22, 41]]);

export const light2_SheetOverlay = n16;
export const light2_DialogOverlay = n16;
export const light2_ModalOverlay = n16;
const n17 = t([
  [30, 27],
  [31, 28],
  [32, 26],
  [33, 26],
  [22, 36],
  [23, 35],
  [24, 36],
  [25, 35],
  [26, 14],
  [27, 34],
  [29, 33],
  [28, 32],
]);

export const dark2_SwitchThumb = n17;
export const dark2_SliderThumb = n17;
export const dark2_Tooltip = n17;
export const dark2_ProgressIndicator = n17;
const n18 = t([[22, 42]]);

export const dark2_SheetOverlay = n18;
export const dark2_DialogOverlay = n18;
export const dark2_ModalOverlay = n18;
