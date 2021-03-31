/**
 * @description 获取用户已绑定的ResourceRole
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = [];
export const url = '/role/resource/listByUserId';

export async function fetch(params = {}) {
  const request = initRequest();
  const result = await request.get(backEndUrl + '/role/resource/listByUserId', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}
