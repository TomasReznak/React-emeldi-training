import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';

export interface ExtendedAxiosResponse<T = any> {
  ok: boolean;
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
  error?: any;
}

export const apiClient = axios.create({
  responseType: 'json',
  withCredentials: true,
  paramsSerializer: (params: any) => {
    return qs.stringify(params);
  },
});

apiClient.interceptors.response.use(
  (response) => normalizeSuccessResponse(response),
  (error) => normalizeErrorResponse(error)
);

const normalizeSuccessResponse = (response: AxiosResponse): ExtendedAxiosResponse => {
  return {
    ...response,
    ok: true,
  };
};

const formatAxiosError = (error: any): ExtendedAxiosResponse => {
  return {
    ok: false,
    data: error.response?.data,
    status: error.response?.status,
    statusText: error.response?.statusText,
    headers: error.response?.headers,
    config: error.config,
    request: error.request,
    error,
  };
};

const normalizeErrorResponse = (error: any): ExtendedAxiosResponse => {
  if (!error.response || error.isAxiosError) {
    return formatAxiosError(error);
  }

  return formatAxiosError(error);
};
