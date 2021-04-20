import { Button, Flex, List, WhiteSpace } from '@ant-design/react-native';
import { COLOR } from 'constants/color';
import IconFont from 'iconfont';
import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const Item = List.Item;

export const TransactionList = () => {
  const data = [
    {
      item: [
        {
          icon: 'icon-food-o',
          title: 'Food',
          price: -60,
          size: 30,
        },
        {
          icon: 'icon-car',
          title: 'Car',
          price: -20000,
          size: 34,
        },
        {
          icon: 'icon-house_alt',
          title: 'House',
          price: -40000,
          size: 25,
        },
        {
          icon: 'icon-si-glyph-customer-support',
          title: 'Boy',
          price: -40000,
          size: 25,
        },
      ],
      date: 'Monday, 20 ,2021',
      total: 30000,
    },
    {
      item: [
        {
          icon: 'icon-car',
          title: 'Car',
          price: -20000,
          size: 34,
        },
        {
          icon: 'icon-house_alt',
          title: 'House',
          price: -40000,
          size: 25,
        },
      ],
      total: 30000,

      date: 'Sunday, 10 ,2021',
    },
    {
      item: [
        {
          icon: 'icon-merchant-blue',
          title: 'Shop',
          price: -6000,
          size: 30,
        },
        {
          icon: 'icon-car',
          title: 'Car',
          price: -20000,
          size: 34,
        },
        {
          icon: 'icon-house_alt',
          title: 'House',
          price: -40000,
          size: 25,
        },
      ],
      total: 30000,

      date: 'Monday, 20 ,2021',
    },
    {
      item: [
        {
          icon: 'icon-food-o',
          title: 'Food',
          price: -60,
          size: 30,
        },
        {
          icon: 'icon-car',
          title: 'Car',
          price: -20000,
          size: 34,
        },
        {
          icon: 'icon-house_alt',
          title: 'House',
          price: -40000,
          size: 25,
        },
      ],
      total: 30000,

      date: 'Monday, 20 ,2021',
    },
    {
      item: [
        {
          icon: 'icon-food-o',
          title: 'Food',
          price: -60,
          size: 30,
        },
        {
          icon: 'icon-car',
          title: 'Car',
          price: -20000,
          size: 34,
        },
        {
          icon: 'icon-house_alt',
          title: 'House',
          price: -40000,
          size: 25,
        },
      ],
      total: 30000,

      date: 'Sunday, 20 ,2021',
    },
    {
      item: [
        {
          icon: 'icon-food-o',
          title: 'Food',
          price: -60,
          size: 30,
        },
        {
          icon: 'icon-car',
          title: 'Car',
          price: -20000,
          size: 34,
        },
        {
          icon: 'icon-house_alt',
          title: 'House',
          price: -40000,
          size: 25,
        },
      ],
      total: 30000,

      date: 'Monday, 20 ,2021',
    },
    {
      item: [
        {
          icon: 'icon-food-o',
          title: 'Food',
          price: -60,
          size: 30,
        },
        {
          icon: 'icon-car',
          title: 'Car',
          price: -20000,
          size: 34,
        },
        {
          icon: 'icon-house_alt',
          title: 'House',
          price: -40000,
          size: 25,
        },
      ],
      total: 30000,

      date: 'Monday, 200 ,2021',
    },
  ];
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{
        paddingVertical: 15,
      }}
    >
      {data?.map((v, i) => {
        return (
          <Fragment key={i}>
            <List
              renderHeader={
                <Flex
                  style={{
                    marginVertical: 10,
                  }}
                >
                  <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                    <Button size="small" type="ghost">
                      {v?.date}
                    </Button>
                  </Flex.Item>
                  <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                    <Button size="small" type="primary">
                      Total: {v?.total}
                    </Button>
                  </Flex.Item>
                </Flex>
              }
            >
              {v?.item?.map((v, i) => {
                return (
                  <Item
                    key={i}
                    thumb={<IconFont name={v?.icon as any} size={v?.size} color={COLOR?.cyan7} />}
                    extra={<Text style={{ color: COLOR.red6, fontSize: 14 }}>{'$  ' + v?.price}</Text>}
                  >
                    {' ' + v?.title}
                  </Item>
                );
              })}
            </List>
            <WhiteSpace size="xl" />
          </Fragment>
        );
      })}
    </KeyboardAwareScrollView>
  );
};
