import { useEffect } from 'react';
import { useTransactionModel } from 'store';
export const useTransactionList = () => {
  const { runGetTransaction, dataTransaction, loadingGetDailyTran } = useTransactionModel(m => [
    m.runGetTransaction,
    m.dataTransaction,
    m.loadingGetDailyTran,
  ]);

  useEffect(() => {
    runGetTransaction({
      roomId: '6076b84c086bd50faa5a0fb6',
      startedAt: new Date('2021-01-01').toISOString(),
      endedAt: new Date('2021-01-31').toISOString(),
    });
  }, [runGetTransaction]);

  return { dataTransaction, loadingGetDailyTran };
};
