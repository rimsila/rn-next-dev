import Container from 'modules/auth/components/Container';
import React from 'react';
import { MenuList } from './MenuList';

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
      <MenuList />
    </Container>
  );
}
