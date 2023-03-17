import axiosClient1 from './AxiosSetup/axiosClient';

const UserApi = {
  getAll: () => {
    const url = '/users';
    return axiosClient1.get(url);
  },

  getOne: (userId) => {
    const url = `/users/${userId}`;
    return axiosClient1.get(url);
  },

  update: (userId, data) => {
    const url = `/users/${userId}`;
    return axiosClient1.patch(url, data);
  },

  delete: (userId) => {
    const url = `/users/${userId}`;
    return axiosClient1.delete(url);
  },

  login: (data) => {
    const url = '/users/login';
    return axiosClient1.post(url, data);
  },

  register: (data) => {
    const url = '/users/register';
    return axiosClient1.post(url, data);
  },

  logout: () => {
    const url = '/users/logout';
    return axiosClient1.post(url);
  },
};

export default UserApi;
