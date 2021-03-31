/**
 * @description 获取ResourceRole详情包含对应用户
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = new defs.authorization.ResourcePageObject();
export const url = '/role/resource/detail/user';

export async function fetch(params = {}) {
  const request = initRequest();
  const result = await request.get(backEndUrl + '/role/resource/detail/user', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}
