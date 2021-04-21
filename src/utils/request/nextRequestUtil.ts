// import { getToken, setToken } from '@next-dev/core/es/authority';
// import { CryptoType, IKeyValue } from '@next-dev/core/es/core';
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { ICommon } from '../../../types/types';
import { globalError } from './globalError';

export type IRequestOption = {
  /**
   * Whether the operation is successful
   */
  successTip?: boolean;
  errorTip?: boolean;
  fullTip?: boolean;
  hasParam?: boolean;
  hasParamData?: boolean;
  hasPassByParam?: boolean;
  debug?: boolean;
  hasDfHandleErr?: boolean;
  /**
   * Request method
   */
  method?: Method;
  /**
   * Encrypted transmission method
   */
} & AxiosRequestConfig;

/**
 * function alert/redirect/log message base on err/succ
 * @param configMsg
 */

let instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  // timeout: 6000,
  timeoutErrorMessage: 'Request timed out, please try again!',
});

/**
 * Modify axios instance
 * @param config configuration
 */
export const configInstance = (config: AxiosRequestConfig) => {
  instance = axios.create(config);
};

/**
 * Header set globally
 */
let globalHeaders: () => ICommon.IKeyValue<string>;

export const configGlobalHeader = (func: () => ICommon.IKeyValue<string>) => {
  globalHeaders = func;
};

/**
 * Universal request interceptor
 */
const commonRequestInterceptor = [
  (option: any) => {
    const config: IRequestOption = option as IRequestOption;

    const tokenStore = '';

    if (tokenStore && tokenStore) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${tokenStore}`,
      };
    }

    // Globally set request header
    if (globalHeaders) {
      const otherHeaders = globalHeaders();
      if (otherHeaders) {
        config.headers = {
          ...config.headers,
          ...otherHeaders,
        };
      }
    }

    return config;
  },
];

/**
 * General response interception, interception of abnormal information (non-status code between 200-302), unauthorized, etc.
 */
const commonResponseInterceptor = [
  (response: AxiosResponse): any => {
    const { data, config } = response || {};
    const requestConfig = config as IRequestOption;
    if (requestConfig.responseType && requestConfig.responseType.toLowerCase() === 'arraybuffer') {
      return Promise.resolve(data);
    }

    //* handle succ message
    // console.log('sss', );
    globalError({ isErr: false, response });

    return Promise.resolve(data);
  },
  ({ response }: { response: AxiosResponse }) => {
    //* handle succ message
    globalError({ isErr: true, response });

    return Promise.reject(response);
  },
];

export async function request<TResult = any>(opt: IRequestOption) {
  const result = await instance.request<TResult>(opt);
  return (result as unknown) as TResult;
}

function addRequestInterceptor(onFulfilled?: (value: any) => any | Promise<any>, onRejected?: (error: any) => any) {
  return instance.interceptors.request.use(onFulfilled, onRejected);
}

function ejectRequestInterceptor(interceptorId: number) {
  return instance.interceptors.request.eject(interceptorId);
}

function addResponseInterceptor(onFulfilled?: (value: any) => any | Promise<any>, onRejected?: (error: any) => any) {
  return instance.interceptors.response.use(onFulfilled, onRejected);
}

function ejectResponseInterceptor(interceptorId: number) {
  return instance.interceptors.response.eject(interceptorId);
}

export {
  axios,
  instance,
  globalHeaders,
  commonRequestInterceptor,
  commonResponseInterceptor,
  addRequestInterceptor,
  ejectRequestInterceptor,
  addResponseInterceptor,
  ejectResponseInterceptor,
};
