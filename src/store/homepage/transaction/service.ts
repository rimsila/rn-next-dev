import { request } from 'utils/request';

export const transactionApi = {
  // * ------ getDailyTransactions ------
  getDailyTransactions: async (filter?: API.RoomTransactionGroupFilter) => {
    return await request.post('', {
      variables: {
        filter,
      },
      query: `
       query getDailyTransactions($filter: RoomTransactionGroupFilter!){
          getDailyTransactions(filter: $filter){
            transactionDate
            month
            amount
            transactions{
              categoryId
              category{
                name
                image
                status
              }
              createdTransactionAt
              accountType
              type
              currencyCode
              amount
              shareWith{
                user{
                  avatar
                  fullName
                  email
                  username
                }
                amount
              }
              shareFor{
                user{
                  avatar
                  fullName
                  email
                  username
                }
              }
              note
              image
              isApproved
              isReturned
              description
              status
            }
            total
         }
        }
        `,
    });
  },
  // * ------ getMonthlyTransactions ------
  getMonthlyTransactions: async (filter?: API.RoomTransactionGroupFilter) => {
    return await request.post('', {
      variables: {
        filter,
      },
      query: `
       query getMonthlyTransactions($filter: RoomTransactionGroupFilter!){
          getMonthlyTransactions(filter: $filter){
            year
            month
            amount
            total
         }
        }
        `,
    });
  },
};
