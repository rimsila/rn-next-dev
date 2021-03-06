import type { IRequestOption } from '@next-dev/core/es/nextRequest';

export const handlerGlobalErr = (configMsg: any) => {
  const { data, config, isErr, response, status } = configMsg || {};
  const { errorTip = false, fullTip, debug, method } = (config as IRequestOption) || {};

  /**
   * @message_description_code  it will do diff actin such as alert/succ/err or redirect /auto logout
   */
  const codeStatus = data?.message?.code || response?.data?.message?.code || status || response?.status;
  const msg1 = response?.data?.message?.description || data?.message?.description;
  const msg2 = data?.message?.description;
  const invalidUser = codeStatus === 1399;
  const dfError = isErr ? 'It seem the connection it not working! or something went wrong!' : 'operation successfully!';

  const showFinalMsg = (typeof msg1 === 'string' && msg1) || (typeof msg2 === 'string' && msg2) || dfError;

  const showFullTipFunc = (newMsg?: string | undefined) => {
    const newMsgParam = newMsg || showFinalMsg;
    if ((fullTip && isErr) || errorTip || isErr) {
      // message.error(newMsgParam);
    }
    if (fullTip && !isErr) {
      // message.success(newMsgParam);
    }
  };

  /**
   * @General //* handler base on response data
   */

  if (debug) {
    console.log(`debug ${isErr ? 'err' : 'succ'}`, codeStatus);
  }

  //* ---------- invalid token ----------------

  if (invalidUser) {
    // if (history.location.pathname !== ROUTE.auth.login.index) {
    //   clearToken();
    //   history.replace(ROUTE.auth.login.index);
    // }
    // Modal.error({
    //   title: 'Incorrect user!',
    //   content: 'Please click on OK and try to login again!',
    // });
  }

  /**
   * @Method diff GET will handler here
   */
  if (method !== 'GET') {
    if (!invalidUser) {
      showFullTipFunc();
    }
  }

  /**
   * @Method for GET
   */
  return null;
};
