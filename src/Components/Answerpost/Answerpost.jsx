import React, { useRef, useState, useMemo } from 'react';
import './Answerpost.scss';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useMutation, useQueryClient } from 'react-query';
import CommentApi from '../../Api/CommentApi';

export const Answerpost = ({ postId }) => {
  const answer = useRef(null);
  const queryClient = useQueryClient();

  const createAnswer = async (data) => {
    const res = await CommentApi.create(postId, data);
    console.log('🚀 ~ file: Answerpost.jsx:13 ~ createAnswer ~ res:', res);
    return res;
  };
  const createAnswerMutation = useMutation({
    mutationFn: createAnswer,
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['posts', postId]);
      console.log('ok');
    },
  });
  const handleSummit = () => {
    console.log(answer.current.value);
    createAnswerMutation.mutate({
      content: answer.current.value,
      author: '641b315f45798c1fe8f35414',
    });
  };

  if (createAnswerMutation.isError)
    return <h1 className='load-screen'>{createAnswerMutation.error.message}</h1>;

  return (
    <div className='answer-form'>
      <h4>Your Answer</h4>
      <FloatingLabel
        controlId='floatingTextarea2'
        label='Answer'
        style={{
          color: 'white',
        }}
      >
        <Form.Control
          as='textarea'
          placeholder='Leave a answer here'
          style={{ height: '100px', backgroundColor: '#2267a7', color: 'white', border: 'none' }}
          ref={answer}
        />
      </FloatingLabel>
      <Button
        variant='primary'
        type='submit'
        style={{
          marginTop: '10px',
        }}
        onClick={handleSummit}
        disabled={createAnswerMutation.isLoading}
      >
        {createAnswerMutation.isLoading ? 'Loading...' : 'Post Your Answer'}
      </Button>
    </div>
  );
};
