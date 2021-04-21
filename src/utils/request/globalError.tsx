import type { IRequestOption } from '@next-dev/core/es/nextRequest';
import { Alert } from 'react-native';

export type IGlobalError = {
  data?: any;
  isErr: boolean;
  response?: any;
  status?: any;
};

export const globalError = (configMsg: IGlobalError) => {
  const { data, isErr, response, status } = configMsg || {};
  const { errorTip = false, fullTip, debug, successTip } = (response?.config as IRequestOption) || {};

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
      Alert.alert('error');
    }
    if ((fullTip && !isErr) || successTip) {
      Alert.alert('success');
    }
  };

  if (debug) {
    console.log(`debug ${isErr ? 'error' : 'success'}`, response);
  }

  //* =============== Error ===============
  if (isErr) {
    showFullTipFunc();
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
  }
  //* =============== Success ===============
  if (!isErr) {
    showFullTipFunc();
  }

  return null;
};
