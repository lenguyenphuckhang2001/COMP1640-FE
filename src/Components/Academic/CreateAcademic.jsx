import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { Col } from 'react-bootstrap';
import AcademicApi from '../../Api/AcademicApi';
import { useRef } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

const CreateAcademic = () => {
  const closeDate = useRef(null);
  const finalCloseDate = useRef(null);
  const startDate = useRef(null);
  const createAcademicMutation = useMutation({
    mutationFn: async (academic) => {
      const test = await AcademicApi.create(academic);
      return test;
    },
    onSuccess: (data) => {
      if (data) {
        toast.success('🥳 Create academic successfully');
      }
    },
    onError: async (error) => {
      if (error.response.status === 500) {
        return toast.error('🥺 Academic name already exists');
      }
      toast.error('🥺 Create academic failed');
    },
  });

  const handleSummit = (e) => {
    e.preventDefault();
    const data = {
      closeDate: closeDate.current.value,
      finalCloseDate: finalCloseDate.current.value,
      startDate: startDate.current.value,
    };
    createAcademicMutation.mutate(data);
  };
  return (
    <Col md={8}>
      <h1
        style={{
          color: 'white',
        }}
      >
        Create-Academic
      </h1>
      <form onSubmit={handleSummit}>
        <FormControl color={'white'}>
          <FormLabel>Close Date</FormLabel>
          <Input
            ref={closeDate}
            placeholder='Select Date and Time'
            size='md'
            type='datetime-local'
          />
          <FormLabel>final Close Date</FormLabel>
          <Input
            ref={finalCloseDate}
            placeholder='Select Date and Time'
            size='md'
            type='datetime-local'
          />
          <FormLabel>start Date</FormLabel>
          <Input
            ref={startDate}
            placeholder='Select Date and Time'
            size='md'
            type='datetime-local'
          />
          <Button
            colorScheme='blue'
            type='submit'
            style={{
              marginTop: '10px',
            }}
          >
            Create
          </Button>
        </FormControl>
      </form>
    </Col>
  );
};
export default CreateAcademic;
