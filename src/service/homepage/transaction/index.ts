import { nextRequest } from '../../../utils/request';

export const transactionAPI = {
  // * ------ getCompaniesList ------
  getProduct: async () => {
    return await nextRequest('GET', '/products');
  },
};
