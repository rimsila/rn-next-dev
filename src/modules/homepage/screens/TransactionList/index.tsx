import { ActivityIndicator, Button, Flex, List, WhiteSpace } from '@ant-design/react-native';
import { COLOR } from 'constants/color';
import dayjs from 'dayjs';
import IconFont from 'iconfont';
import Container from 'modules/auth/components/Container';
import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTransactionList } from './useTransactionList';

const Item = List.Item;

export const TransactionList = () => {
  const { dataTransaction, loadingGetDailyTran } = useTransactionList();

  if (loadingGetDailyTran) {
    <Container>
      <ActivityIndicator toast />
    </Container>;
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
      {dataTransaction?.map((v, i) => {
        // console.log('v', v);

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
                      {dayjs(v?.transactionDate).format('YYYY-MM-DD')}
                    </Button>
                  </Flex.Item>
                  <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                    <Button size="small" type="primary">
                      Total:${v?.amount}
                    </Button>
                  </Flex.Item>
                </Flex>
              }
            >
              {v?.transactions?.map((v, i) => {
                return (
                  <Item
                    key={i}
                    thumb={<IconFont name="icon-food-o" size={30} color={COLOR?.cyan7} />}
                    extra={<Text style={{ color: COLOR.red6, fontSize: 16 }}>{'$' + v?.amount}</Text>}
                  >
                    {' ' + v?.note}
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
