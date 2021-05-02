import useRequest from '@ahooksjs/use-request';
import { createModel } from 'hox';
import { useState } from 'react';
import { removeToken, setApiKey, setToken } from 'utils/storage';
import { authService } from './authService';

const useAuthModel = () => {
  const [isAuth, setIsAuth] = useState(false);

  const logout = () => {
    removeToken();
    setIsAuth(false);
  };

  const getUserRequestApiKey = async () => {
    const res: API.AuthType = (await authService.userRequestApiKey()).data?.data?.requestApiKey;
    if (res) {
      setApiKey(res?.apiKey);
    }
    return res;
  };

  const { run: runLogin, loading: loadingLogin } = useRequest(authService.loginRoomUser, {
    manual: true,
    onSuccess: res => {
      const token = res?.data?.data?.loginRoomUser?.token;
      if (token) {
        setIsAuth(true);
        setToken(token);
      }
      // console.log('res', res?.data?.data?.);
    },
  });

  return {
    loadingLogin,
    logout,
    runLogin,
    getUserRequestApiKey,
    isAuth,
    setIsAuth,
  };
};

export default createModel(useAuthModel);
