import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { SWRConfig } from 'swr';
import { useUpdateAtom } from 'jotai/utils';

import Stack from './stacks';
import authService from 'modules/auth/authService';
import { ValidateMessages } from 'rc-field-form/es/interface';
import { FormProvider } from 'rc-field-form';

export default function App() {
  const updateAuth = useUpdateAtom(authService.authAtom);

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  /**
   * Global error handling, when the interface returns a login failure, automatically log out and enter the login page to log in again
   * @param error
   */
  const handleError = (error: Error) => {
    if (error.message === 'LoginFailure') {
      updateAuth({ signedIn: false });
    }
  };
  const myMessages: ValidateMessages = {
    required: '${name} can not be empty!',
  };

  return (
    <SafeAreaProvider>
      <SWRConfig
        value={{
          onError: handleError,
        }}
      >
        <FormProvider validateMessages={myMessages}>
          <NavigationContainer>
            <Stack />
          </NavigationContainer>
        </FormProvider>
      </SWRConfig>
    </SafeAreaProvider>
  );
}
