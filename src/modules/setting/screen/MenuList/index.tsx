import { Flex, List, WhiteSpace } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/core';
import { COLOR } from 'constants/color';
import { STACK } from 'constants/StackNav';
import IconFont from 'iconfont';
import React, { Fragment } from 'react';
import { ScrollView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuthModel } from 'store';
const Item = List.Item;

export const MenuList = () => {
  const { logout } = useAuthModel(m => [m.logout]);
  const { navigate } = useNavigation();

  const data = [
    {
      menuName: 'User',
      item: [
        {
          icon: 'icon-user',
          title: 'Profile',
          size: 26,
          link: STACK.settings.profile,
        },
      ],
    },
    {
      menuName: 'Money',
      item: [
        {
          icon: 'icon-user',
          title: 'Currency',
          size: 26,
          link: '',
        },
      ],
    },
  ];
  return (
    <>
      <ScrollView
        style={{ flex: 1, backgroundColor: 'white', marginVertical: 10 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {data?.map((v, i) => {
          return (
            <Fragment key={i}>
              <List renderHeader={`${v?.menuName}`}>
                {v?.item?.map((v, i) => {
                  return (
                    <Item
                      key={i}
                      disabled={Boolean(v?.link)}
                      onPress={() => navigate(v?.link)}
                      thumb={<IconFont name={v?.icon as any} size={v?.size} color={COLOR?.cyan7} />}
                      arrow="horizontal"
                    >
                      {'  ' + v?.title}
                    </Item>
                  );
                })}
              </List>
              <WhiteSpace size="xl" />
            </Fragment>
          );
        })}
        <TouchableOpacity style={{ paddingHorizontal: 15 }} onPress={logout}>
          <Flex>
            <IconFont name="icon-back-pink-circle" size={30} color={COLOR?.red6} />
            <Text style={{ marginLeft: 10, color: COLOR?.red6, fontWeight: 'bold' }}>LOG OUT</Text>
          </Flex>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
