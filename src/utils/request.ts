import axios from 'axios';
import { BASE_URL_API } from 'constants/common';
import { getApiKey, getToken } from './storage';

const params = {};

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: BASE_URL_API.ybizTech,
  params,
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (getToken() || getApiKey()) {
      config.headers = {
        Authorization: `Bearer ${getToken()}`,
        'api-key': getApiKey(),
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  }
);

const defaultParam: typeof params = instance.defaults.params;

export { instance as request, defaultParam };
