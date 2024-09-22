import {useState} from 'react';
import {SheetProps} from 'tamagui';

const DEFAULT_ANIMATION = 'flip';
const DEFAULT_SHEET_Z_INDEX = 100_000;
const DEFAULT_SNAP_POINTS_PERCENT = [30, 50, 80];

export const useControlledSheet = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [position, setPosition] = useState(0);

  const modalProps: SheetProps = {
    open: isOpen,
    modal: false,
    forceRemoveScrollEnabled: isOpen,
    position: position,
    onPositionChange: setPosition,
    dismissOnSnapToBottom: false,
    snapPointsMode: 'percent',
    zIndex: DEFAULT_SHEET_Z_INDEX,
    snapPoints: DEFAULT_SNAP_POINTS_PERCENT,
    animation: DEFAULT_ANIMATION,
    onOpenChange: (open: boolean) => setIsOpen(open),
  };

  return {
    openSheet: () => setIsOpen(true),
    closeSheet: () => setIsOpen(false),
    modalProps,
  };
};
