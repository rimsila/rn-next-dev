/**
 * @description 校验用户是否拥有权限
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = undefined;
export const url = '/resource/getPermissionByUrl';

export async function fetch(params = {}) {
  const request = initRequest();
  const result = await request.get(backEndUrl + '/resource/getPermissionByUrl', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}
