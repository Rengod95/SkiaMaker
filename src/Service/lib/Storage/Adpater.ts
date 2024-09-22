import {InitializationSingleTon} from '@/Service/lib/shared.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageService extends InitializationSingleTon<StorageService> {
  public storeData = async <T extends object | string>(key: string, value: T) => {
    try {
      const parsedToString = typeof value === 'object' ? JSON.stringify(value) : (value as string);

      await AsyncStorage.setItem(key, parsedToString);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  public getData = async <T = unknown>(key: string): Promise<T | null> => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      console.log(jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  public removeDataAsync = async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e: unknown) {
      console.error(e);
    }
  };
}
