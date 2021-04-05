import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import SettingPage from 'modules/setting/screen';
import React from 'react';

const Stack = createStackNavigator();

const SettingStack = (screenOptions: StackNavigationOptions) => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      mode="card"
      headerMode="screen"
      screenOptions={{
        ...screenOptions,
      }}
    >
      <Stack.Screen name="Settings" component={SettingPage} options={{ headerTitle: 'Settings' }} />
    </Stack.Navigator>
  );
};
export default SettingStack;
