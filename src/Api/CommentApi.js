import axiosClient1 from './AxiosSetup/axiosClient';

const CommentApi = {
  getAll: () => {
    const url = '/comments';

    return axiosClient1.get(url);
  },

  getOne: (id) => {
    const url = `/comments/${id}`;
    return axiosClient1.get(url);
  },

  create: (postId, data) => {
    const url = `/comments/post/${postId}`;
    return axiosClient1.post(url, data);
  },

  update: (id, data) => {
    const url = `/comments/${id}`;
    return axiosClient1.patch(url, data);
  },

  delete: (id) => {
    const url = `/comments/${id}`;
    return axiosClient1.delete(url);
  },

  getCommentsByPostId: (postId) => {
    const url = `/comments/post/${postId}`;
    return axiosClient1.get(url);
  },
};

export default CommentApi;
