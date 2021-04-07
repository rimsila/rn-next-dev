import { useUpdateAtom } from 'jotai/utils';
import authService from 'modules/auth/authService';
import { useCallback } from 'react';
import { MMKV } from 'react-native-mmkv';

export const useAuth = () => {
  const updateAuth = useUpdateAtom(authService.authAtom);

  const logout = useCallback(() => {
    updateAuth({ signedIn: false });
    MMKV.delete('token');
  }, [updateAuth]);

  return {
    logout,
  };
};
