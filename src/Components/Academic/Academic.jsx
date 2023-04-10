import React from 'react';
import { Col } from 'react-bootstrap';
import { useQuery } from 'react-query';
import AcademicApi from '../../Api/AcademicApi';
import { Button, Card, CardBody, CardHeader, Heading, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const Academic = () => {
  const navigate = useNavigate();

  const fetchAllDate = useQuery({
    queryKey: 'closeDate',
    queryFn: async () => {
      const res = await AcademicApi.getAll();
      return res;
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
              <Button colorScheme='red'>Delete</Button>
            </Card>
          ))}
      </Stack>
    </Col>
  );
};

export default Academic;
