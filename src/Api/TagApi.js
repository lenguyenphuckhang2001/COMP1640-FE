import axiosClient1 from './AxiosSetup/axiosClient';

const TagApi = {
  getAll: () => {
    const url = '/tags';
    return axiosClient1.get(url);
  },

  getOne: (id) => {
    const url = `/tags/${id}`;
    return axiosClient1.get(url);
  },

  create: (data) => {
    const url = `/tags/`;
    return axiosClient1.post(url, data);
  },

  update: (id, data) => {
    const url = `/tags/${id}`;
    return axiosClient1.patch(url, data);
  },

  delete: (id) => {
    const url = `/tags/${id}`;
    return axiosClient1.delete(url);
  },
};

export default TagApi;
