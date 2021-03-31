/**
 * @description 获取能访问businessValue的RoleId
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = undefined;
export const url = '/deployment/authz/getRoleIdToBusinessValue';

export async function fetch(params = {}) {
  const request = initRequest();
  const result = await request.get(
    backEndUrl + '/deployment/authz/getRoleIdToBusinessValue',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  return result;
}
