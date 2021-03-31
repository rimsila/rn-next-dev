/**
 * @description 获取已经定义的规则列表
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = [];
export const url = '/data/rule/def/list';

export async function fetch(params = {}) {
  const request = initRequest();
  const result = await request.get(backEndUrl + '/data/rule/def/list', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}
