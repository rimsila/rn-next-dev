import { useEffect } from 'react';
import { tranCtx } from 'store/homepage/transaction';
import { useContextSelector } from 'use-context-selector';

export const useTransactionList = () => {
  const runGetProductsData = useContextSelector(tranCtx, v => v[1]?.runGetProductsData);
  const productsData = useContextSelector(tranCtx, v => v[0]?.productsData);

  useEffect(() => {
    if (runGetProductsData) {
      runGetProductsData();
    }
  }, [runGetProductsData]);

  return {
    productsData,
  };
};
