import { Tabs } from '@ant-design/react-native';
import Container from 'modules/auth/components/Container';
import React from 'react';
import { TransactionList } from './TransactionList';
import { TransactionMonthlyList } from './TransactionMonthlyList';

export default function Homepage() {
  const tabs = [{ title: 'Daily' }, { title: 'Monthly' }];

  return (
    <Container
      {...{
        content: {
          style: {
            backgroundColor: 'white',
            // padding: 0,
          },
        },
      }}
    >
      <Tabs tabs={tabs} animated>
        <TransactionList />
        <TransactionMonthlyList />
      </Tabs>
    </Container>
  );
}
