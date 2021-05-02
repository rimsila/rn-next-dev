import { useCreation, useRequest } from 'ahooks';
import { createModel } from 'hox';
import { transactionApi } from './service';

const useTransactionModel = () => {
  const { run: runGetTransaction, data: dataTransactionApi, loading: loadingGetDailyTran } = useRequest(
    transactionApi.getDailyTransactions,
    {
      manual: true,
    }
  );
  const {
    run: runGetMonthTransaction,
    data: dataGetMonthTransactionApi,
    loading: loadingGetMonthTransaction,
  } = useRequest(transactionApi.getMonthlyTransactions, {
    manual: true,
  });

  const dataTransaction: API.RoomTransactionGroupType[] = useCreation(
    () => dataTransactionApi?.data?.data?.getDailyTransactions,
    [dataTransactionApi?.data?.data]
  );

  const dataGetMonthTransaction: API.RoomTransactionGroupByMonthType[] = useCreation(
    () => dataGetMonthTransactionApi?.data?.data?.getMonthlyTransactions,
    [dataGetMonthTransactionApi?.data?.data]
  );

  return {
    dataGetMonthTransaction,
    runGetTransaction,
    dataTransaction,
    loadingGetDailyTran,
    runGetMonthTransaction,
    dataGetMonthTransactionApi,
    loadingGetMonthTransaction,
  };
};
export default createModel(useTransactionModel);
