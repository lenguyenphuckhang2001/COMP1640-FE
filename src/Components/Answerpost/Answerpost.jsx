import React, { useRef, useState, useEffect } from 'react';
import './Answerpost.scss';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useMutation, useQueryClient } from 'react-query';
import CommentApi from '../../Api/CommentApi';
import { toast } from 'react-toastify';

export const Answerpost = ({ postId }) => {
  const answer = useRef(null);
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

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
    retry: 3,
    onSuccess: async (data) => {
      toast.info('🥳 Create answer successfully');
      await queryClient.invalidateQueries(['posts', postId]);
    },
  });

  const handleSummit = () => {
    createAnswerMutation.mutate({
      content: answer.current.value,
      author: userId,
      isAnonymous: isAnonymous,
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
        <Form.Check
          type='switch'
          id='custom-switch'
          label='Anonymous Answer'
          onChange={(e) => {
            setIsAnonymous(e.target.checked);
          }}
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
