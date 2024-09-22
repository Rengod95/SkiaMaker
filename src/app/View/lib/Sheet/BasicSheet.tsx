import {Sheet} from 'tamagui';

type ExtendableSheetProps = {
  sheetProps: React.ComponentProps<typeof Sheet>;
};

type BasicSheetProps = React.PropsWithChildren<ExtendableSheetProps>;

export const BasicSheet = ({sheetProps, children}: BasicSheetProps) => {
  return (
    <Sheet {...sheetProps}>
      <Sheet.Overlay bg={'rgba(0,0,0,0.65)'} animation={sheetProps.animation} enterStyle={{opacity: 0}} exitStyle={{opacity: 0}} />
      <Sheet.Handle bg={'$color4'} />
      <Sheet.Frame flex={1} p={'$space.7'} pb={'$space.3'} gap={'$space.4'} btw={1.5} btlr={'$10'} btrr={'$10'}>
        {children}
      </Sheet.Frame>
    </Sheet>
  );
};
