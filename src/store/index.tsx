import React from 'react';
import { TranProvider } from './homepage/transaction';

/**
 * more context here don't for get use
 * @RootContextProvider wrap all context here
 */

export const RootContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TranProvider>{children}</TranProvider>
    </>
  );
};
