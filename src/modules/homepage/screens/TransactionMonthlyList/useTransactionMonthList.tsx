import { useEffect } from 'react';
import { useTransactionModel } from 'store';
export const useTransactionMonthList = () => {
  const { runGetMonthTransaction, dataGetMonthTransaction, loadingGetMonthTransaction } = useTransactionModel(m => [
    m.runGetMonthTransaction,
    m.dataGetMonthTransaction,
    m.loadingGetMonthTransaction,
  ]);

  useEffect(() => {
    runGetMonthTransaction({ roomId: '6076b84c086bd50faa5a0fb6' });
  }, [runGetMonthTransaction]);

  return { dataGetMonthTransaction, loadingGetMonthTransaction };
};
