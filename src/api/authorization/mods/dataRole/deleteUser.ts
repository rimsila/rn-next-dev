/**
 * @description 数据角色解绑用户
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = undefined;
export const url = '/role/data/remove/user';

export async function fetch(params = {}) {
  const request = initRequest();
  const result = await request.post(backEndUrl + '/role/data/remove/user', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params,
  });
  return result;
}
