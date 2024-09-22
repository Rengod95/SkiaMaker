import {BasicSheet} from '@/app/View/lib/Sheet/BasicSheet.tsx';
import {Button, Sheet, Theme, Text} from 'tamagui';

type ImagePickerSheetProps = {
  sheetProps: React.ComponentProps<typeof Sheet>;
  onPressPickImage: () => void;
  onPressTakePicture: () => void;
};

// ex
// <ImagePickerSheet
//     sheetProps={fromImageControl.modalProps}
//     onPressPickImage={() => {
//       fromImageControl.closeSheet();
//       imageSelectionContext.selectFromImage('Gallery');
//     }}
//     onPressTakePicture={() => {
//       fromImageControl.closeSheet();
//       imageSelectionContext.selectFromImage('Camera');
//     }}
// />

export const ImagePickerSheet = ({onPressPickImage, onPressTakePicture, sheetProps}: ImagePickerSheetProps) => {
  return (
    <BasicSheet sheetProps={{...sheetProps, unmountChildrenWhenHidden: true}}>
      <Theme name={'accent'}>
        <Button h={'$size.5'} br={'$8'} shar={3} shop={0.5} shac={'black'} onPress={onPressTakePicture}>
          <Text fow={'$8'} fos={'$3'}>
            사진 촬영
          </Text>
        </Button>
        <Button h={'$size.5'} br={'$8'} shar={3} shop={0.5} onPress={onPressPickImage}>
          <Text fow={'$8'} fos={'$3'}>
            갤러리에서 이미지 선택
          </Text>
        </Button>
      </Theme>
    </BasicSheet>
  );
};
