import React, {createContext, useContext, useState} from 'react';
import {useImageService} from '@/Service/lib/Image/Adapter.ts';

type ImageSelectType = 'Gallery' | 'Camera';
type ImageContextType = {
  fromImage: string | null;
  toImage: string | null;
  maskedImage: string | null;
  selectFromImage: (type: ImageSelectType) => Promise<void>;
  selectToImage: (type: ImageSelectType) => Promise<void>;
  maskFromImage: (image: string) => void;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const useImageSelectionContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};

export const ImageSelectionProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const {pickImageFromGallery: pickFromImage, takeImageWithCamera: takeFromImageWithCamera, image: fromImage} = useImageService();
  const {pickImageFromGallery: pickToImage, takeImageWithCamera: takeToImageWithCamera, image: toImage} = useImageService();
  const [maskedImage, setMaskedImage] = useState<string | null>(null);

  const selectFromImage = async (type: ImageSelectType) => {
    if (type === 'Camera') {
      await takeFromImageWithCamera();
      return;
    }
    await pickFromImage();
  };

  const selectToImage = async (type: ImageSelectType) => {
    if (type === 'Camera') {
      await takeToImageWithCamera();
      return;
    }
    await pickToImage();
  };

  const maskFromImage = (image: string) => {
    setMaskedImage(image);
  };

  return (
    <ImageContext.Provider
      value={{
        fromImage,
        toImage,
        maskedImage,
        selectFromImage,
        selectToImage,
        maskFromImage,
      }}>
      {children}
    </ImageContext.Provider>
  );
};
