import React from 'react';
import './Listpost.scss';
import { Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FcPrevious, FcNext } from 'react-icons/Fc';
import PostApi from '../../Api/PostApi';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.css';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const ListPost = () => {
  const queryClient = useQueryClient();
  const handlePageClick = async (data) => {
    const res = await PostApi.getAll(data.selected + 1);
    return res;
  };
  const updateViewMutation = useMutation({
    mutationFn: async (data) => {
      const res = await PostApi.update(data.id, { views: data.views });
      return res;
    },
    onSuccess: async (data) => {
      console.log(data);
      await queryClient.invalidateQueries('posts');
    },
  });

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
      {data &&
        data?.docs.map((post) => (
          <div className='List-post'>
            <div className='postcontent'>
              <div className='user-post'>
                <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' />
                <h4>
                  {post.isAnonymous
                    ? 'Anonymous'
                    : post?.author?.username
                    ? post?.author?.username
                    : 'Anonymous'}
                </h4>
                <h2 className='title-content'>
                  <Link
                    to={{
                      pathname: `/QuestionDetail/${post?._id}`,
                    }}
                    onClick={() => {
                      updateViewMutation.mutate({
                        id: post?._id,
                        views: post?.views + 1,
                      });
                    }}
                  >
                    {post?.title}
                  </Link>
                </h2>
                <h2 className='title-content'>{post?.content}</h2>
              </div>
            </div>
            <div className='postlike'>
              <span className='vote'>
                <i class=' fa-solid fa-check-to-slot'></i>
                <p> {post.votes} Vote</p>
              </span>
              <span className='comment'>
                <i class='fa-solid fa-comment'></i>
                <p>{post?.comments.length} Comments</p>
              </span>
              <span className='view'>
                <i class='fa-solid fa-eye'></i>
                <p>{post.views}</p>
              </span>
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
        breakLinkClassName='paginate-link'
        className='paginate-link'
      />
    </Col>
  );
};
