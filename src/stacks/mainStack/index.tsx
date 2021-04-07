import { Flex, List, Picker } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/core';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { COLOR } from 'constants/color';
import IconFont from 'iconfont';
import Homepage from 'modules/homepage/screens';
import React, { useCallback, useState } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//
const Stack = createStackNavigator();

const MainStack = (screenOptions: StackNavigationOptions) => {
  const [room, setRoom] = useState([1]);
  const [open, setOpen] = useState(false);
  const { navigate } = useNavigation();

  const onChange = useCallback(value => {
    console.log('value', value);
    setOpen(false);
    setRoom(value);
  }, []);

  const seasons = [
    [
      {
        label: 'room1',
        value: 1,
      },
      {
        label: 'room2',
        value: 2,
      },
    ],
  ];
  console.log('district', open);

  return (
    <Stack.Navigator
      initialRouteName="Homepage"
      mode="card"
      headerMode="screen"
      screenOptions={{
        ...screenOptions,
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Picker
                extra={` Room: ${room}`}
                title={
                  <>
                    <Flex>
                      <Text style={{ marginRight: 10 }}>All Room</Text>
                      <TouchableOpacity
                        onPress={() => {
                          setOpen(false);
                          navigate('Settings');
                        }}
                      >
                        <IconFont name="icon-add-blue-copy" size={20} />
                      </TouchableOpacity>
                    </Flex>
                  </>
                }
                data={seasons}
                cols={1}
                value={room}
                // onChange={onChange}
                onOk={onChange}
                visible={open}
              >
                <List.Item arrow="down" thumb={<IconFont name="icon-house_alt" color={COLOR.red6} size={26} />} />
              </Picker>
            </TouchableOpacity>
          );
        },
      }}
    >
      <Stack.Screen name="Homepage" component={Homepage} options={{ headerTitle: 'Homepage' }} />
    </Stack.Navigator>
  );
};

export default MainStack;
