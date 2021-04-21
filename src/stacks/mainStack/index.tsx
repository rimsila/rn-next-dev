import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Homepage from 'modules/homepage/screens';
import React from 'react';
//
const Stack = createStackNavigator();

const MainStack = (screenOptions: StackNavigationOptions) => {
  return (
    <Stack.Navigator
      initialRouteName="Homepage"
      mode="card"
      headerMode="screen"
      screenOptions={{
        ...screenOptions,
      }}
    >
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{
          headerTitle: 'Homepage',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
