import React from 'react';
import { Col } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import PostApi from '../../Api/PostApi';
import { Answer } from '../../Components/Answer/Answer';
import { Answerpost } from '../../Components/Answerpost/Answerpost';
import { PostDetail } from '../../Components/PostDetail/PostDetail';
import { Sort } from '../../Components/Sort/Sort';

export const QuestionDetail = () => {
  const { postId } = useParams();
  const getPostById = async () => {
    const res = await PostApi.getOne(postId);
    return res;
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts', postId],
    queryFn: getPostById,
  });

  return (
    <Col md={{ span: 6 }}>
      {isLoading ? (
        <h1 className='load-screen'>Loading...</h1>
      ) : isError ? (
        <h1 className='load-screen'>{error.message}</h1>
      ) : (
        <>
          <PostDetail post={data} />
          <Sort commentsNumber={data?.comments?.length} />
          <Answerpost postId={postId} />
          <Answer comments={data?.comments} />
        </>
      )}
    </Col>
  );
};
