import axios from 'axios';
import { BASE_URL_API, CREDENTIAL } from 'constants/common';
import { request } from 'utils/request';

export const authService = {
  // * ------ register ------
  userRequestApiKey: async () => {
    const res = axios.post(
      '',
      {
        query: `
          mutation RequestApiKey{
            requestApiKey(authKey: "${CREDENTIAL?.devAuthKey}"){
              apiKey
            }
          }
      `,
      },
      {
        baseURL: BASE_URL_API.ybizTech,
      }
    );
    return res;
  },
  loginRoomUser: async (variables?: API.MutationLoginRoomUserArgs) => {
    return await request.post('', {
      variables,
      query: `
        mutation loginRoomUser($password: String!, $username: String!){
          loginRoomUser(password: $password , username: $username){
           token
          }
        }
        `,
    });
  },
  getUserProfile: async () => {
    return await graphRequest({
      hasParamData: true,
      data: {
        query: `
        query GetProfile($accessKey: String!){
          getProfile(accessKey: $accessKey){
            id
            type
            accessKey
            avatar
            firstName
            lastName
            fullName
            gender
            dob
            email
            mobileDetail {
              mobileNumber
            }
            vendors {
              company {
                id
                nameKh
                nameEn
              }
              companyBranch {
                branchNameKh
                branchNameEn
              }
            }
            employee {
              company {
                id
                nameKh
                nameEn
              }
              companyBranch {
                id
                branchNameKh
                branchNameEn
              }
              job {
                id
                title
              }
              hiredAt
            }
          }
        }
        `,
      },
    });
  },
};
