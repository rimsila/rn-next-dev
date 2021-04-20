import { Provider } from '@ant-design/react-native';
import enUS from '@ant-design/react-native/locale-provider/en_US';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/core';
import { CardStyleInterpolators, StackNavigationOptions } from '@react-navigation/stack';
import { COLOR } from 'constants/color';
import { STACK } from 'constants/StackNav';
import IconFont from 'iconfont';
import { useAtomValue } from 'jotai/utils';
import authService from 'modules/auth/authService';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthStack from './authStack';
import ExpanseStack from './expanseStack';
import MainStack from './mainStack';
import SettingStack from './settingStack';

export const HeaderLeft = ({ goBack }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={goBack} style={{ marginLeft: 0, padding: 10 }}>
      <IconFont name="icon-back-pink1" color="red" />
    </TouchableOpacity>
  );
};

const HeaderRight = () => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate(STACK.settings.profile)}>
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
    </TouchableOpacity>
  );
};

const screenOptions: StackNavigationOptions = {
  headerTitleStyle: {
    fontWeight: '500',
    fontSize: 18,
  },
  headerTitleAlign: 'center',
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const HomeScreen = ({ navigation: { goBack } }) => {
  return (
    <MainStack
      {...{
        ...screenOptions,
        headerLeft: () => {
          return <HeaderLeft {...{ goBack }} />;
        },
        headerRight: () => {
          return <HeaderRight />;
        },
      }}
    />
  );
};

const SettingsScreen = ({ navigation: { goBack } }) => {
  return (
    <SettingStack
      {...{
        ...screenOptions,
        headerLeft: () => {
          return <HeaderLeft {...{ goBack }} />;
        },
        headerRight: () => {
          return <HeaderRight />;
        },
      }}
    />
  );
};

const CreateExpanseScreen = ({ navigation: { goBack } }) => {
  return (
    <ExpanseStack
      {...{
        ...screenOptions,
        headerLeft: () => {
          return <HeaderLeft {...{ goBack }} />;
        },
        headerRight: () => {
          return <HeaderRight />;
        },
      }}
    />
  );
};

export default () => {
  const auth = useAtomValue(authService.authAtom);

  const isAuth = true;
  const Tab = createBottomTabNavigator();

  if (isAuth || auth?.signedIn) {
    return (
      <>
        <Provider locale={enUS}>
          <Tab.Navigator
            initialRouteName="HomeStack"
            tabBarOptions={{
              activeTintColor: COLOR.cyan7,
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
              name={STACK.expense.create}
              component={CreateExpanseScreen}
              options={{
                tabBarLabel: 'New Expense',
                tabBarIcon: ({ color }) => <IconFont name="icon-add-green" color={color} size={32} />,
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => <IconFont name="icon-setting-white" color={color} />,
              }}
            />
          </Tab.Navigator>
        </Provider>
      </>
    );
  }
  return (
    <Provider>
      <AuthStack {...screenOptions} />
    </Provider>
  );
};
