import axios from './axios';

const instance = axios();
export default {
  get(url: any, params: any, headers: any) {
    const options = {
      params: '',
      headers: '',
    };
    if (params) {
      options.params = params;
    }
    if (headers) {
      options.headers = headers;
    }
    return instance.get(url, options);
  },
  post(url: any, params: any, headers: any) {
    const options = {
      headers: '',
    };
    if (headers) {
      options.headers = headers;
    }
    return instance.post(url, params, options);
  },
  put(url: any, params: any, headers: any) {
    const options = {
      headers: '',
    };
    if (headers) {
      options.headers = headers;
    }
    return instance.put(url, params, options);
  },
  delete(url: any, params: any, headers: any) {
    const options = {
      params: '',
      headers: '',
    };
    if (params) {
      options.params = params;
    }
    if (headers) {
      options.headers = headers;
    }
    return instance.delete(url, options);
  },
};
