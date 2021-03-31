/**
 * @description 获取数据角色详情
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = new defs.authorization.DataRoleVO();
export const url = '/role/data/detail';

export async function fetch(params = {}) {
  const request = initRequest();
  const result = await request.get(backEndUrl + '/role/data/detail', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}
