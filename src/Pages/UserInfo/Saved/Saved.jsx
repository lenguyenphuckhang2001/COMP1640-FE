import React, { useEffect, useState } from 'react';
import './Saved.scss';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { useMutation, useQuery } from 'react-query';
import { FcPrevious, FcNext } from 'react-icons/Fc';

import PostApi from '../../../Api/PostApi';
import ReactPaginate from 'react-paginate';

export const Saved = () => {
  const [user, setUser] = useState(() => {
    const localData = JSON.parse(localStorage.getItem('Information'));
    const userData = localData?.data.user;
    return userData;
  });

  const paginateMutation = useMutation({
    mutationFn: async (page) => {
      const res = await PostApi.userPosts(user.userId, page.selected + 1);
      return res;
    },

    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData('posts', data);
    },
  });

  const fetchAllUserPost = useQuery({
    queryKey: 'userPost',
    queryFn: async () => {
      if (!user) return;
      const res = await PostApi.userPosts(user.userId);
      return res;
    },
  });

  return (
    <div>
      {fetchAllUserPost?.data?.docs.map((post) => (
        <div className='posts'>
          <div className='icon'>
            <p>{post.votes} Votes</p>
          </div>
          <div className='p-1'>
            <div className='time'>
              <p>Create at: {post.createdAt}</p>
              <p>Modified At: {post.updatedAt}</p>
            </div>
            <div className='content'>
              <p>{post.content}</p>
            </div>
            <div className='tag'>
              {post.tags.map((tag) => (
                <p>
                  <b># {tag.name}</b>
                </p>
              ))}
            </div>
            <div className='post-b'>
              <div className='comment'>
                <i class='fa-solid fa-comment'></i>
                <p>{post.comments.length} Comments</p>
              </div>

              <div className='view'>
                <i class='fa-solid fa-eye'></i>
                <p> {post.views} Views</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ReactPaginate
        breakLabel='...'
        nextLabel={<FcNext />}
        onPageChange={paginateMutation?.mutate}
        pageRangeDisplayed={5}
        pageCount={fetchAllUserPost?.data?.totalPages}
        previousLabel={<FcPrevious />}
        renderOnZeroPageCount={null}
        breakLinkClassName='paginate-link'
        className='paginate-link'
      />
    </div>
  );
};
