import { Button, Flex, List, WhiteSpace } from '@ant-design/react-native';
import { COLOR } from 'constants/color';
import IconFont from 'iconfont';
import React, { Fragment } from 'react';
import { ScrollView, Text } from 'react-native';
const Item = List.Item;

export const TransactionMonthlyList = () => {
  const data = [
    {
      year: 2021,
      total: 500000,
      item: [
        {
          title: 'Jan, 2021',
          price: -600000,
        },
        {
          title: 'Feb, 2021',
          price: -600000,
        },
        {
          title: 'Seb, 2021',
          price: -600000,
        },
        {
          title: 'Dec, 2021',

          price: -2000000,
        },
      ],
    },
    {
      year: 2020,
      total: 500000,
      item: [
        {
          title: 'Jan, 2021',
          price: -600000,
        },
        {
          title: 'Feb, 2021',
          price: -600000,
        },
        {
          title: 'Seb, 2021',
          price: -600000,
        },
        {
          title: 'Dec, 2021',

          price: -2000000,
        },
      ],
    },
    {
      year: 2019,
      total: 500000,
      item: [
        {
          title: 'Jan, 2021',
          price: -600000,
        },
        {
          title: 'Feb, 2021',
          price: -600000,
        },
        {
          title: 'Seb, 2021',
          price: -600000,
        },
        {
          title: 'Dec, 2021',

          price: -2000000,
        },
      ],
    },
  ];
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'white', marginVertical: 20 }}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
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
                      Year: {v?.year}
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
    </ScrollView>
  );
};
