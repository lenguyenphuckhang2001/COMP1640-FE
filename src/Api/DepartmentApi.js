import axiosClient1 from './AxiosSetup/axiosClient';

const DepartmentApi = {
  getAll: () => {
    const url = '/departments';

    return axiosClient1.get(url);
  },

  getOne: (id) => {
    const url = `/departments/${id}`;
    return axiosClient1.get(url);
  },

  create: (data) => {
    const url = `/departments/`;
    return axiosClient1.post(url, data);
  },

  update: (id, data) => {
    const url = `/departments/${id}`;
    return axiosClient1.patch(url, data);
  },

  delete: (id) => {
    const url = `/departments/${id}`;
    return axiosClient1.delete(url);
  },

  deleteMember: (id, memberId, data) => {
    const url = `/departments/${id}/members/${memberId}`;
    return axiosClient1.delete(url, data);
  },
  addMember: (id, data) => {
    const url = `/departments/${id}/members`;
    return axiosClient1.post(url, data);
  },
};

export default DepartmentApi;
