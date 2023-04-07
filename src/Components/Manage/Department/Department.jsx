import React from 'react';
import './Department.scss';
import { Button, Card, Col } from 'react-bootstrap';
import DepartmentApi from '../../../Api/DepartmentApi';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

export const Department = () => {
  const navigate = useNavigate();
  const fetchAllDepartments = useQuery({
    queryKey: 'departments',
    queryFn: async () => {
      const res = await DepartmentApi.getAll();
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
        Department
      </h1>
      <Button
        variant='secondary'
        className='mb-3'
        onClick={() => {
          navigate('/Account/admin/create-department');
        }}
      >
        Add department
      </Button>
      {fetchAllDepartments &&
        fetchAllDepartments?.data?.map((department) => (
          <Card className='mb-2 bg-primary'>
            <Card.Body>
              <Card.Title>{department.name}</Card.Title>
              <Card.Subtitle className='mb-2 text-white'>{department.description}</Card.Subtitle>
              <Card.Text className='text-white'>Member:{department.members?.length}</Card.Text>
              <Button variant='secondary'>Add member</Button>
            </Card.Body>
          </Card>
        ))}
    </Col>
  );
};
