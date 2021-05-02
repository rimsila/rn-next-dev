import { ActivityIndicator, List, WhiteSpace } from '@ant-design/react-native';
import { COLOR } from 'constants/color';
import IconFont from 'iconfont';
import Container from 'modules/auth/components/Container';
import React, { Fragment } from 'react';
import { Text } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTransactionMonthList } from './useTransactionMonthList';

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
  const { dataGetMonthTransaction, loadingGetMonthTransaction } = useTransactionMonthList();
  if (loadingGetMonthTransaction) {
    return (
      <Container>
        <ActivityIndicator toast />
      </Container>
    );
  }
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
      {dataGetMonthTransaction?.map((v, i) => {
        const getFullDate = (v.month > 9 ? v.month : '0' + v.month) + '-' + v?.year;
        console.log('v', getFullDate);

        return (
          <Fragment key={i}>
            <List
            // renderHeader={
            //   <Flex
            //     style={{
            //       marginBottom: 10,
            //     }}
            //   >
            //     <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
            //       <Button size="small" type="ghost">
            //         Year: {v?.year}
            //       </Button>
            //     </Flex.Item>
            //     <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
            //       <Button size="small" type="primary">
            //         Total Expend: {v?.total}
            //       </Button>
            //     </Flex.Item>
            //   </Flex>
            // }
            >
              <Item
                key={i}
                thumb={<IconFont name="icon-date" color={COLOR?.cyan7} size={18} />}
                extra={
                  <CurrencyInput
                    style={{ color: COLOR.red6, fontSize: 15 }}
                    value={v?.amount}
                    unit="$"
                    delimiter=","
                    separator="."
                    precision={0}
                  />
                }
              >
                <Text>{'   ' + getFullDate}</Text>
              </Item>
            </List>
            <WhiteSpace size="xl" />
          </Fragment>
        );
      })}
    </KeyboardAwareScrollView>
  );
};
