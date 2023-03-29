import React from 'react';
import './Listpost.scss';
import { Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FcPrevious, FcNext } from 'react-icons/Fc';
import PostApi from '../../Api/PostApi';
import ReactPaginate from 'react-paginate';
import { useMutation, useQuery, useQueryClient } from 'react-query';

// TODO 1. Get all comments of post use http://localhost:3000/api/comments/post/6419734483db3492d0d1edbf insted of this way
// TODO 2. Add pagination to comments or infinite scroll

export const ListPost = () => {
  const queryClient = useQueryClient();
  const handlePageClick = async (data) => {
    const res = await PostApi.getAll(data.selected + 1);
    console.log('🚀 ~ file: Listpost.jsx:14 ~ handlePageClick ~ res:', res);
    return res;
  };

  const newPostMutation = useMutation({
    mutationFn: handlePageClick,
    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData('posts', data);
    },
  });
  const fetchPosts = async () => {
    return await PostApi.getAll();
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: 'posts',
    queryFn: fetchPosts,
  });
  if (isLoading) {
    return <h1 className='load-screen'>Loading...</h1>;
  }

  if (isError) {
    return <h1 className='load-screen'>{error.message}</h1>;
  }

  return (
    <Col>
      {data?.docs.map((post) => (
        <div className='List-post'>
          <div className='postcontent'>
            <div className='postlike'>
              <span>{post.votes} Vote</span>
              <span>200 view</span>
              <span className='downvote'>{post?.comments.length} Comment</span>
            </div>
            <div className='user-post'>
              <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' />
              <h4>Hihi</h4>
              <h2 className='title-content'>
                <Link
                  to={{
                    pathname: `/QuestionDetail/${post?._id}`,
                    state: {
                      post: post,
                    },
                  }}
                >
                  {post?.title}
                </Link>
              </h2>
              <h2 className='title-content'>{post?.content}</h2>
              <ul className='tag-content'>
                <li>#reactjs</li>
                <li>#java</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
      <ReactPaginate
        breakLabel='...'
        nextLabel={<FcNext />}
        onPageChange={newPostMutation?.mutate}
        pageRangeDisplayed={5}
        pageCount={data?.totalPages}
        previousLabel={<FcPrevious />}
        renderOnZeroPageCount={null}
        breakLinkClassName='test'
        className='test'
      />
    </Col>
  );
};
