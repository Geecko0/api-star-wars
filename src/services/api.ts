import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const get = async <T = any>(url: string, params?: any, headers?: any): Promise<AxiosResponse<T>> => {
  return await request({ url, method: 'GET', params, headers });
};

const post = () => {};

const put = () => {};

const del = () => {};

const handleError = (): Promise<AxiosResponse<any> | null> => {
  return Promise.resolve(null);
};

const request = async (options: AxiosRequestConfig): Promise<AxiosResponse<any>> => {
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
