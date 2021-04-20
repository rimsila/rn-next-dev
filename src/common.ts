import type { ResponseError } from 'umi-request';
import { extend } from 'umi-request';
import { LoginFailure } from './enums';

const codeMessage: Record<number, string> = {
  200: 'The server successfully returned the requested data. ',
  201: 'Create or modify data successfully. ',
  202: 'A request has entered the background queue (asynchronous task). ',
  204: 'Delete data successfully. ',
  400: 'There was an error in the request sent, and the server did not create or modify data. ',
  401: 'The user does not have permission (the token, username, password are wrong). ',
  403: 'The user is authorized, but access is forbidden. ',
  404: 'The request is for a record that does not exist, and the server is not operating. ',
  406: 'The requested format is not available. ',
  410: 'The requested resource has been permanently deleted and will no longer be available. ',
  422: 'When creating an object, a validation error occurred. ',
  500: 'An error occurred in the server, please check the server. ',
  502: 'Gateway error. ',
  503: 'The service is unavailable, the server is temporarily overloaded or maintained. ',
  504: 'The gateway has timed out. ',
  405: 'xxxx',
};

export function errorHandler(error: ResponseError) {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    throw new Error(
      JSON.stringify({
        message: errorText,
        description: `Request error ${status}: ${url}`,
      })
    );
  }
  throw error;
}

export const initRequest = () => {
  const token = '';
  const request = extend({
    timeout: 10000,
    headers: {
      accessToken: token,
    },
    errorHandler,
  });

  request.interceptors.response.use(response => {
    response
      .clone()
      .json()
      .then(res => {
        if ([LoginFailure.Login_is_not_allowed, LoginFailure.Login_expired].includes(res.code)) {
          throw new Error('LoginFailure');
        }
      });
    return response;
  });

  return request;
};
