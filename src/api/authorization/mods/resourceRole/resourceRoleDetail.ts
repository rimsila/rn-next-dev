/**
 * @description 获取ResourceRole详情
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = new defs.authorization.ResourcePageObject();
export const url = '/role/resource/detail';

export async function fetch(params = {}) {
  const request = initRequest();
  const result = await request.get(backEndUrl + '/role/resource/detail', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}
