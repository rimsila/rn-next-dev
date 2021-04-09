import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { STACK } from 'constants/StackNav';
import SettingPage from 'modules/setting/screen';
import { Profile } from 'modules/setting/screen/Profile';
import React from 'react';

const Stack = createStackNavigator();

const CreateRoomStack = (screenOptions: StackNavigationOptions) => {
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
      <Stack.Screen name={STACK.settings.profile} component={Profile} options={{ headerTitle: 'Profile' }} />
    </Stack.Navigator>
  );
};
export default CreateRoomStack;
