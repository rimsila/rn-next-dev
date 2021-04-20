import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { STACK } from 'constants/StackNav';
import { CreateExpense } from 'modules/expense/screen/CreateExpense';
import React from 'react';

const Stack = createStackNavigator();

const ExpanseStack = (screenOptions: StackNavigationOptions) => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      mode="card"
      headerMode="screen"
      screenOptions={{
        ...screenOptions,
      }}
    >
      <Stack.Screen name={STACK.expense.create} component={CreateExpense} options={{ headerTitle: 'Create Expense' }} />
    </Stack.Navigator>
  );
};
export default ExpanseStack;
