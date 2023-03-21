import axiosClient1 from './AxiosSetup/axiosClient';

const PostApi = {
  getAll: (query) => {
    const url = '/posts';
    if (query) return axiosClient1.get(url, { params: query });
    return axiosClient1.get(url);
  },

  getOne: (id) => {
    const url = `/posts/${id}`;
    return axiosClient1.get(url);
  },

  create: (data) => {
    const url = '/posts';
    return axiosClient1.post(url, data);
  },

  update: (id, data) => {
    const url = `/posts/${id}`;
    return axiosClient1.patch(url, data);
  },

  delete: (id) => {
    const url = `/posts/${id}`;
    return axiosClient1.delete(url);
  },
};

export default PostApi;