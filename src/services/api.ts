import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const get = async <T = any>(url: string, params?: any, headers?: any): Promise<AxiosResponse<T>> => {
  return await request({ url, method: 'GET', params, headers });
};

const post = async <T = any>(url: string, params?: any, headers?: any): Promise<AxiosResponse<T>> => {
  return await request({ url, method: 'POST', params, headers });
};

const put = async <T = any>(url: string, params?: any, headers?: any): Promise<AxiosResponse<T>> => {
  return await request({ url, method: 'PUT', params, headers });
};

const del = async <T = any>(url: string, params?: any, headers?: any): Promise<AxiosResponse<T>> => {
  return await request({ url, method: 'DELETE', params, headers });
};

const handleError = (): Promise<AxiosResponse<any> | null> => {
  return Promise.resolve(null);
};

const request = async (options: AxiosRequestConfig): Promise<AxiosResponse<any>> => {
  try {
    return await axios({
      ...options,
      baseURL: 'https://www.swapi.tech/api/',
      headers: {
        'Content-type': 'application/json',
        ...options.headers
      }
    });
  } catch (error) {
    return handleError() as any;
  }
};

export default { get, post, put, del };
