import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';

import { AllTypes, AllTypesType } from '../types/CommonTypes';
import { TaskType } from '../types/TaskTypes';

export const storeString = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const storeObject = async (
  key: keyof typeof AllTypes,
  value: AllTypesType[keyof typeof AllTypes]
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

export const getExampleTasks = (
  userId: string,
  number: number
): Array<TaskType> => {
  const result: TaskType[] = [];
  const today = new Date();
  const oneHourLater = new Date(today);
  oneHourLater.setHours(oneHourLater.getHours() + 1);
  for (let i = 0; i < number; i += 1) {
    result.push({
      id: uuid.v1() as string,
      remindAt: oneHourLater.getTime(),
      summary: `This is an example task (${i + 1})`,
      title: `Example task ${i + 1}`,
      userId,
    });
  }
  return result;
};

export const formatDate = (date: number, withTime = false): string => {
  const dateTime = new Date(date);
  let dateFormated = `${dateTime.getDate()} - ${
    dateTime.getMonth() + 1
  } - ${dateTime.getFullYear()}`;
  if (withTime) {
    dateFormated += ` at ${dateTime.getHours()}:${dateTime.getMinutes()}`;
  }
  return dateFormated;
};
