import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators, StackHeaderLeftButtonProps, StackNavigationOptions } from '@react-navigation/stack';
import IconFont from 'iconfont';
import { useAtomValue } from 'jotai/utils';
import authService from 'modules/auth/authService';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import Icon from 'react-native-vector-icons/AntDesign';
import AuthStack from './authStack';
import MainStack from './mainStack';

const screenOptions: StackNavigationOptions = {
  headerTitleStyle: {
    fontWeight: '500',
    fontSize: 18,
  },
  headerTitleAlign: 'left',
  headerLeft: (props: StackHeaderLeftButtonProps) =>
    props.canGoBack && (
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={{ marginLeft: 0, padding: 10 }}>
        <Icon name="left" size={20} />
      </TouchableOpacity>
    ),
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const HomeScreen = () => {
  return <MainStack {...screenOptions} />;
};

export default () => {
  const auth = useAtomValue(authService.authAtom);

  const isAuth = MMKV.getString('token');
  const Tab = createBottomTabNavigator();

  if (isAuth || auth?.signedIn) {
    return (
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
      </Tab.Navigator>
    );
  }
  return <AuthStack {...screenOptions} />;
};
