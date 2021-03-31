/**
 * @description 获取已创建的数据角色列表
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = [];
export const url = '/role/data/list';

export async function fetch(params = {}) {
  const request = initRequest();
  const result = await request.get(backEndUrl + '/role/data/list', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}
