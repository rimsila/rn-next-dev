import Container from 'modules/auth/components/Container';
import React from 'react';
import { CreateExpense } from './CreateExpense';

export default function Homepage() {
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
      <CreateExpense />
    </Container>
  );
}
