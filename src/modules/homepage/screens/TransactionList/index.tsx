import { List, WhiteSpace } from '@ant-design/react-native';
import IconFont from 'iconfont';
import React, { Fragment } from 'react';
import { ScrollView } from 'react-native';
const Item = List.Item;

export const TransactionList = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'white', marginVertical: 20 }}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {[{}, {}, {}].map((v, i) => {
        return (
          <Fragment key={i}>
            <List renderHeader={'Saturday,25,'}>
              {[{}, {}].map((v, i) => {
                return (
                  <Item key={i} thumb={<IconFont name="icon-car" size={35} />} extra="No arrow">
                    Title text
                  </Item>
                );
              })}
            </List>
            <WhiteSpace size="lg" />
          </Fragment>
        );
      })}
    </ScrollView>
  );
};
