/** The code returned by the backend */
export enum LoginFailure {
  Login_expired = 50400,
  Login_is_not_allowed = 50402,
}

/** Get the verification code enumeration */
export enum SmsTypeEnum {
  Registration = 0,
  Change_password = 1,
  Login = 2,
}
