/**
 * @description 更新ResourceRole基本信息
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = undefined;
export const url = '/role/update';

export async function fetch(data = {}) {
  const request = initRequest();
  const result = await request.post(backEndUrl + '/role/update', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  return result;
}
