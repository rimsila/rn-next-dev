import { Tabs } from '@ant-design/react-native';
import Container from 'modules/auth/components/Container';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from 'store/auth';
import { TransactionList } from './TransactionList';

export default function Homepage() {
  const { logout } = useAuth();
  const tabs = [{ title: 'Daily' }, { title: 'Second Tab' }, { title: 'Third Tab' }];
  const style: any = {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    backgroundColor: '#fff',
  };

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
        <View style={style}>
          <Text>Content of Second Tab</Text>
        </View>
        <View style={style}>
          <Text>Content of Third Tab</Text>
        </View>
      </Tabs>
      <TouchableOpacity
        onPress={logout}
        style={{
          marginVertical: 15,
          backgroundColor: '#3171F0',
          height: 44,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </Container>
  );
}
