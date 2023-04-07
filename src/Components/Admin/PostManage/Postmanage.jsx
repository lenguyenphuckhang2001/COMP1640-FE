import React from 'react';
import { Col } from 'react-bootstrap';
import './Postmanage.scss';
import { useQuery } from 'react-query';
import PostApi from '../../../Api/PostApi';
export const Postmanage = () => {
  const fetchAllAnonymousPost = useQuery({
    queryKey: ['posts', 'anonymous'],
    queryFn: async () => {
      const res = await PostApi.anonymousPosts();
      return res;
    },
  });

  console.log(fetchAllAnonymousPost.data);
  return (
    <Col md={8}>
      <h2
        style={{
          color: 'white',
        }}
      >
        Anonymous post
      </h2>
      {fetchAllAnonymousPost?.data?.map((post) => (
        <div className='posts'>
          <div className='icon'>
            <p>{post?.votes}Votes</p>
          </div>
          <div className='p-1'>
            <div className='time'>
              <p>Create at: {post?.createdAt} </p>
              <p>Modified At:{post?.updatedAt} </p>
            </div>
            <div className='content'>
              <p>{post?.author?.username}</p>
            </div>
            <div className='content'>
              <p>{post.content}</p>
            </div>
            <div className='tag'></div>
            <div className='post-b'>
              <div className='comment'>
                <i className='fa-solid fa-comment'></i>
                <p>{post?.comments?.length} Comments</p>
              </div>
              <div className='view'>
                <i className='fa-solid fa-eye'></i>
                <p>{post?.views} Views</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Col>
  );
};
