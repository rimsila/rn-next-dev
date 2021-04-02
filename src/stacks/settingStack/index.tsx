import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Homepage from 'modules/homepage/screens';
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
      <Stack.Screen name="Settings" component={Homepage} options={{ headerTitle: 'Settings' }} />
    </Stack.Navigator>
  );
};
export default SettingStack;
