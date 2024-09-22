import {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';

export const useImageService = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImageFromGallery = async () => {
    // 이미지를 선택할 수 있는 권한을 요청합니다.
    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('카메라 롤에 접근할 수 있는 권한이 필요합니다.');
      return;
    }

    // 이미지 선택기 실행
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takeImageWithCamera = async () => {
    const {status} = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('카메라에 접근할 수 있는 권한이 필요합니다.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]?.uri);
    }
  };

  return {
    image,
    pickImageFromGallery,
    takeImageWithCamera,
  };
};
