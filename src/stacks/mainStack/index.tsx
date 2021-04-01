import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import IconFont from 'iconfont';
import Homepage from 'modules/homepage/screens';
import React from 'react';
import { Text, View } from 'react-native';

const Stack = createStackNavigator();

const MainStack = (screenOptions: StackNavigationOptions) => {
  return (
    <Stack.Navigator
      initialRouteName="Homepage"
      mode="card"
      headerMode="screen"
      screenOptions={{
        ...screenOptions,
        headerRight: () => {
          return (
            <View
              style={{
                display: 'flex',
                width: 100,
                paddingHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <IconFont name="icon-user" />
              <Text style={{ color: 'green', textTransform: 'uppercase', fontWeight: 'bold' }}>Sila</Text>
            </View>
          );
        },
      }}
    >
      <Stack.Screen name="Homepage" component={Homepage} options={{ headerTitle: 'Homepage' }} />
    </Stack.Navigator>
  );
};

export default MainStack;
