/**
 * @description 获取模块列表
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = [];
export const url = '/data/module/list';

export async function fetch(params = {}) {
  const request = initRequest();
  const result = await request.get(backEndUrl + '/data/module/list', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}
