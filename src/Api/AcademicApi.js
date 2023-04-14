import axiosClient1 from './AxiosSetup/axiosClient';

const AcademicApi = {
  getAll: () => {
    const url = '/closeDate';
    return axiosClient1.get(url);
  },

  create: (data) => {
    const url = `/closeDate`;
    return axiosClient1.post(url, data);
  },

  update: (id, data) => {
    const url = `/closeDate/${id}`;
    return axiosClient1.patch(url, data);
  },

  delete: (id) => {
    const url = `/closeDate/${id}`;
    return axiosClient1.delete(url);
  },
};

export default AcademicApi;
