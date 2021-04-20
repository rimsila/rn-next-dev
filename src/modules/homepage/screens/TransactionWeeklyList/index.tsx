import { Button, Flex, List, WhiteSpace } from '@ant-design/react-native';
import { COLOR } from 'constants/color';
import IconFont from 'iconfont';
import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const Item = List.Item;

export const TransactionWeeklyList = () => {
  const data = [
    {
      week: 1,
      total: 30000,
      item: [
        {
          title: 'Monday, 1, 2021',
          price: -60,
        },
        {
          title: 'Sunday, 7, 2021',

          price: -20000,
        },
        {
          title: 'Monday, 7, 2021',
          price: -40000,
        },
        {
          title: 'Sunday, 7, 2021',

          price: -40000,
        },
      ],
    },
    {
      total: 40000,
      week: 2,
      item: [
        {
          title: 'Monday, 1, 2021',
          price: -100,
        },
        {
          title: 'Sunday, 7, 2021',

          price: -34000,
        },
      ],
    },
    {
      week: 3,
      total: 30000,
      item: [
        {
          title: 'Monday, 1, 2021',
          price: -60,
        },
        {
          title: 'Sunday, 7, 2021',

          price: -20000,
        },
        {
          title: 'Monday, 7, 2021',
          price: -40000,
        },
        {
          title: 'Sunday, 7, 2021',

          price: -40000,
        },
      ],
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
                    marginBottom: 10,
                  }}
                >
                  <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                    <Button size="small" type="ghost">
                      Week: {v?.week}
                    </Button>
                  </Flex.Item>
                  <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                    <Button size="small" type="primary">
                      Total Expend: {v?.total}
                    </Button>
                  </Flex.Item>
                </Flex>
              }
            >
              {v?.item?.map((v, i) => {
                return (
                  <Item
                    key={i}
                    thumb={<IconFont name="icon-date" color={COLOR?.cyan7} size={18} />}
                    extra={<Text style={{ color: COLOR.red6, fontSize: 14 }}>{'$  ' + v?.price}</Text>}
                  >
                    <Text>{'   ' + v?.title}</Text>
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
