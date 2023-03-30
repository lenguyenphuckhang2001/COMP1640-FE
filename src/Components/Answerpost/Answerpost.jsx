import React, { useRef, useState, useEffect } from 'react';
import './Answerpost.scss';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useMutation, useQueryClient } from 'react-query';
import CommentApi from '../../Api/CommentApi';
import UserApi from '../../Api/UserApi';

export const Answerpost = ({ postId }) => {
  const answer = useRef(null);
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState('');
  console.log('🚀 ~ file: Answerpost.jsx:12 ~ Answerpost ~ userId:', userId);

  useEffect(() => {
    const user = localStorage.getItem('Information');
    if (user) {
      const userObj = JSON.parse(user);
      const { userId: id } = userObj.data.user;
      setUserId(id);
    }
  }, []);
  const createAnswer = async (data) => {
    const res = await CommentApi.create(postId, data);
    return res;
  };
  const createAnswerMutation = useMutation({
    mutationFn: createAnswer,
    retry: false,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries(['posts', postId]);
    },
  });

  const handleSummit = () => {
    console.log(answer.current.value);
    createAnswerMutation.mutate({
      content: answer.current.value,
      author: userId,
    });
  };

  if (createAnswerMutation.isError)
    return (
      <h1 className='load-screen'>
        {createAnswerMutation.error.response.data.message || createAnswerMutation.error.message}
      </h1>
    );

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
