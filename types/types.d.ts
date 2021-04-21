declare type MethodType = 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH';

export declare type IWithFalse<T> = T | false;

declare namespace ICommon {
  interface IKeyValue<T = any> {
    [key: string]: T;
  }
}
