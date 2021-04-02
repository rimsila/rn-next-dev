import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators, StackHeaderLeftButtonProps, StackNavigationOptions } from '@react-navigation/stack';
import IconFont from 'iconfont';
import { useAtomValue } from 'jotai/utils';
import authService from 'modules/auth/authService';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import AuthStack from './authStack';
import MainStack from './mainStack';
import SettingStack from './settingStack';

const screenOptions: StackNavigationOptions = {
  headerTitleStyle: {
    fontWeight: '500',
    fontSize: 18,
  },
  headerTitleAlign: 'center',
  headerLeft: (props: StackHeaderLeftButtonProps) => (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={{ marginLeft: 0, padding: 10 }}>
      <IconFont name="icon-back-pink1" color="red" />
    </TouchableOpacity>
  ),
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerRight: () => {
    return (
      <View
        style={{
          display: 'flex',
          width: 'auto',
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconFont name="icon-user" />
        <Text style={{ color: 'green', textTransform: 'uppercase', fontWeight: 'bold', marginLeft: 6 }}>Sila</Text>
      </View>
    );
  },
};

const HomeScreen = () => {
  return <MainStack {...{ ...screenOptions, headerTitleAlign: 'left', headerLeft: () => null }} />;
};

const SettingsScreen = () => {
  return <SettingStack {...{ ...screenOptions }} />;
};

export default () => {
  const auth = useAtomValue(authService.authAtom);

  const isAuth = MMKV.getString('token');
  const Tab = createBottomTabNavigator();

  if (isAuth || auth?.signedIn) {
    return (
      <>
        <Tab.Navigator
          initialRouteName="HomeStack"
          tabBarOptions={{
            activeTintColor: 'blue',
          }}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => <IconFont name="icon-merchant-blue" color={color} />,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color }) => <IconFont name="icon-merchant-blue" color={color} />,
            }}
          />
        </Tab.Navigator>
      </>
    );
  }
  return <AuthStack {...screenOptions} />;
};
