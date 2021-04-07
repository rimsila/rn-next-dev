/**
 * @description 校验角色是否已经存在
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = [];
export const url = '/role/resource/validateRoleName';

export async function fetch(params = {}) {
  const request = initRequest();
  const result = await request.get(backEndUrl + '/role/resource/validateRoleName', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}
