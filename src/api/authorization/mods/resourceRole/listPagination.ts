/**
 * @description 获取ResourceRole列表（含分页）
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = new defs.authorization.PagingEntity();
export const url = '/role/resource/listPagination';

export async function fetch(params = {}) {
  const request = initRequest();
  const result = await request.get(backEndUrl + '/role/resource/listPagination', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}
