import React from 'react';
import { Col } from 'react-bootstrap';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import AcademicApi from '../../Api/AcademicApi';
import { Button, Card, CardBody, CardHeader, Heading, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { toast } from 'react-toastify';

const Academic = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const fetchAllDate = useQuery({
    queryKey: 'closeDate',
    queryFn: async () => {
      const res = await AcademicApi.getAll();
      return res;
    },
  });
  const deleteDate = useMutation({
    mutationFn: async (id) => {
      const res = await AcademicApi.delete(id);
      return res;
    },
    onSuccess: (data) => {
      toast.success('🥳 Delete date successfully');
      queryClient.invalidateQueries('closeDate');
    },
    onError: async (error) => {
      if (error.response.status === 500) {
        return toast.error('🥺 Date already exists');
      }
      toast.error('🥺 Delete date failed');
    },
  });

  return (
    <Col md={8}>
      <h1
        style={{
          color: 'white',
        }}
      >
        Academic Date
      </h1>
      <Button
        onClick={() => {
          navigate('/Account/admin/create-academic');
        }}
        colorScheme='teal'
      >
        Add academic
      </Button>
      <Stack spacing='4'>
        {fetchAllDate.data &&
          fetchAllDate.data.map((date) => (
            <Card bg={'#144272'}>
              <CardHeader color={'white'}>
                <Heading size='md'>
                  closeDate: {moment(date.closeDate).format('DD/MM/YYYY HH:mm')}
                </Heading>
                <Heading size='md'>
                  finalCloseDate: {moment(date.finalCloseDate).format('DD/MM/YYYY HH:mm')}
                </Heading>
                <Heading size='md'>
                  startDate: {moment(date.startDate).format('DD/MM/YYYY HH:mm')}
                </Heading>
              </CardHeader>
              <Button
                colorScheme='red'
                onClick={() => {
                  deleteDate.mutate(date._id);
                }}
              >
                Delete
              </Button>
            </Card>
          ))}
      </Stack>
    </Col>
  );
};

export default Academic;
