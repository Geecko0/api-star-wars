import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { promises } from 'dns';

const get = async (url: string, params?: any, headers?: any) => {
  return await request({ url, method: 'GET', params, headers });
};

const post = () => {};

const put = () => {};

const del = () => {};

const handleError = (): Promise<AxiosResponse<any> | null> => {
  return Promise.resolve(null);
};

const request = async (options: AxiosRequestConfig): Promise<AxiosResponse<any> | null> => {
  try {
    const result = await axios({
      ...options,
      baseURL: 'https://swapi.dev/api/',
      headers: {
        'Content-type': 'application/json',
        ...options.headers
      }
    });
    return result;
  } catch (error) {
    return handleError() as any;
  }
};

export default { get };
