import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import { AllTypes } from '../types/CommonTypes';
import { TaskType } from '../types/TaskTypes';
import { UserType } from '../types/UserTypes';

export const storeString = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const storeObject = async (
  key: keyof typeof AllTypes,
  value: UserType | TaskType
) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
};

export const getString = async (key: string): Promise<string> => {
  return (await AsyncStorage.getItem(key)) || '';
};

export const getData = async (key: string) => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export const clearAll = async () => {
  await AsyncStorage.clear();
};

export const showErrorToast = (message: string, header = 'Error') =>
  Toast.show({
    text1: header,
    text2: message,
    type: 'error',
  });
