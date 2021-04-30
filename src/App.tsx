import { NavigationContainer } from '@react-navigation/native';
import { FormProvider } from 'rc-field-form';
import { ValidateMessages } from 'rc-field-form/es/interface';
import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
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

  const myMessages: ValidateMessages = {
    required: '${name} can not be empty!',
  };

  return (
    <FormProvider validateMessages={myMessages}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </FormProvider>
  );
}
