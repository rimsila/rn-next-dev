import { UseRequestProvider } from '@ahooksjs/use-request';
import { NavigationContainer } from '@react-navigation/native';
import { FormProvider } from 'rc-field-form';
import { ValidateMessages } from 'rc-field-form/es/interface';
import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootContextProvider } from 'store';
import Stack from './stacks';

export default function App() {
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

  const myMessages: ValidateMessages = {
    required: '${name} can not be empty!',
  };

  return (
    <UseRequestProvider
      value={{
        manual: true,
        onError: err => {
          console.log('err', err);
        },
        // throwOnError: true,
      }}
    >
      <SafeAreaProvider>
        <RootContextProvider>
          <FormProvider validateMessages={myMessages}>
            <NavigationContainer>
              <Stack />
            </NavigationContainer>
          </FormProvider>
        </RootContextProvider>
      </SafeAreaProvider>
    </UseRequestProvider>
  );
}
