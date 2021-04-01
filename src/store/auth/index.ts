import { useUpdateAtom } from 'jotai/utils';
import authService from 'modules/auth/authService';
import { MMKV } from 'react-native-mmkv';

export const useAuth = () => {
  const updateAuth = useUpdateAtom(authService.authAtom);

  const logout = () => {
    updateAuth({ signedIn: false });
    MMKV.delete('token');
  };

  return {
    logout,
  };
};
