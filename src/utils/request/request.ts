import {
  addRequestInterceptor,
  addResponseInterceptor,
  commonRequestInterceptor,
  commonResponseInterceptor,
  configGlobalHeader,
  configInstance,
  IRequestOption,
  request,
} from './nextRequestUtil';

export type INextRequest = {
  method: MethodType;
  url: string;
  opt?: IRequestOption;
};

const getToken = () => {
  const token = '';
  return {
    token,
  };
};
export async function nextRequest<TResult = any>(method: MethodType, url: string, opt?: IRequestOption) {
  const { hasParam, hasParamData, hasPassByParam } = opt || {};
  const defaultParam = hasParam ? { accessKey: getToken()?.token } : {};
  const dfPramData = hasParamData ? { accessKey: getToken()?.token } : {};

  /**
   * @hasPassByParam if true url will have default
   */
  url = hasPassByParam ? `${url}/${getToken()?.token}` : url;

  /**
   * @configInstance
   */

  configInstance({
    baseURL: 'https://gorest.co.in/public-api',
    params: defaultParam,
  });

  /**
   * @configGlobalHeader set header default id Bearer auth
   */
  configGlobalHeader(() => {
    return {
      Authorization: '', //  remove Bearer auth
    };
  });

  /**
   * @axiosInterceptor handle global res and req
   */
  addRequestInterceptor(...commonRequestInterceptor);
  addResponseInterceptor(...commonResponseInterceptor);
  try {
    const response: any = await request<TResult>({
      url,
      fullTip: method !== 'GET',
      ...opt,
      data: { ...dfPramData, ...opt?.data }, // has default data
      method,
    });
    return response;
  } catch (catchAxiosError) {
    return catchAxiosError;
  }
}
