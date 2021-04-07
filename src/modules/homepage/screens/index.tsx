import { Tabs } from '@ant-design/react-native';
import Container from 'modules/auth/components/Container';
import React from 'react';
import { TransactionList } from './TransactionList';
import { TransactionMonthlyList } from './TransactionMonthlyList';
import { TransactionWeeklyList } from './TransactionWeeklyList';

export default function Homepage() {
  const tabs = [{ title: 'Daily' }, { title: 'Weekly' }, { title: 'Monthly' }];

  return (
    <Container
      {...{
        content: {
          style: {
            backgroundColor: 'white',
            padding: 0,
          },
        },
      }}
    >
      <Tabs tabs={tabs} animated>
        <TransactionList />
        <TransactionWeeklyList />
        <TransactionMonthlyList />
      </Tabs>
    </Container>
  );
}
