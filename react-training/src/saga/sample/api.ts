import {apiClient, ExtendedAxiosResponse} from "../../redux/api-client";

const api = {
  getData: (name: string): Promise<ExtendedAxiosResponse> => {
    return apiClient.get('https://jsonplaceholder.typicode.com/posts/', {
      responseType: 'text',
    });
  },
};

export default api;
