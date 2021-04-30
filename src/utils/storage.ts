import { MMKV } from 'react-native-mmkv';

export const setApiKey = (value: string) => {
  MMKV.set('apiKey', value);
};

export const getApiKey = () => {
  return MMKV.getString('apiKey');
};

export const getToken = () => {
  return MMKV.getString('token');
};

export const setToken = (value: string) => {
  MMKV.set('token', value);
};
export const removeToken = () => {
  MMKV.delete('token');
};
