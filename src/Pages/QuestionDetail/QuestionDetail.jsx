import React from 'react';
import { Col } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import PostApi from '../../Api/PostApi';
import { Answer } from '../../Components/Answer/Answer';
import { Answerpost } from '../../Components/Answerpost/Answerpost';
import { PostDetail } from '../../Components/PostDetail/PostDetail';
import { Sort } from '../../Components/Sort/Sort';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const QuestionDetail = () => {
  const { postId } = useParams();
  const getPostById = async () => {
    const res = await PostApi.getOne(postId);
    return res;
  };
  const test = useQuery({
    queryKey: ['posts', postId],
    queryFn: getPostById,
    refetchInterval: 1000 * 7,
  });

  return (
    <Col md={{ span: 6 }}>
      {test.isLoading ? (
        <h1 className='load-screen'>Loading...</h1>
      ) : test.isError ? (
        <h1 className='load-screen'>{test.error.message}</h1>
      ) : (
        <>
          <PostDetail post={test.data} postId={postId} />
          <Sort commentsNumber={test.data?.comments?.length} />
          <Answerpost postId={postId} />
          <Answer comments={test.data?.comments} />
        </>
      )}
    </Col>
  );
};
