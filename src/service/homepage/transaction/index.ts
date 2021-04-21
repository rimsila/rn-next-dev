import { nextRequest } from 'utils/request/request';

export const transactionAPI = {
  // * ------ get ------
  getProduct: async (params?: ITransactionAPI.Pagination) =>
    await nextRequest('GET', '/products', {
      debug: true, //log response
      params,
    }),

  // * ------ delete ------
  deleteUser: async (id: string) => await nextRequest('POST', `/user/${id}`),

  updateUser: async (data: ITransactionAPI.CreateUser) =>
    await nextRequest('POST', 'users', {
      data,
    }),
};
