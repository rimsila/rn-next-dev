/**
 * @description 获取数据规则详情
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = new defs.authorization.DataRuleDTO();
export const url = '/data/rule/detail';

export async function fetch(params = {}) {
  const request = initRequest();
  const result = await request.get(backEndUrl + '/data/rule/detail', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}
