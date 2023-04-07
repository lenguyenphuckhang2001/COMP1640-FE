import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import {
  Button,
  HStack,
  Select,
  Spinner,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Col } from 'react-bootstrap';
import { useMutation, useQuery } from 'react-query';
import UserApi from '../../../Api/UserApi';
import { useState } from 'react';
import DepartmentApi from '../../../Api/DepartmentApi';
import { toast } from 'react-toastify';

const CreateDepartment = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState([]);
  const [QaId, setQaId] = useState('');
  const name = useRef(null);
  const description = useRef(null);
  const fetchAllNormalUser = useQuery({
    queryKey: 'normal-user',
    queryFn: async () => {
      return await UserApi.getAllNormalUser();
    },
  });
  const fetchAllQaCordinator = useQuery({
    queryKey: 'qa-coordinator',
    queryFn: async () => {
      return await UserApi.getAllQaCoordinator();
    },
  });

  const createDepartmentMutation = useMutation({
    mutationFn: async (department) => {
      const test = await DepartmentApi.create(department);
      return test;
    },
    retry: 3,
    onSuccess: (data) => {
      console.log('🚀 ~ file: CreateDepartment.jsx:47 ~ CreateDepartment ~ data:', data);
      toast.success('🥳 Create department successfully');
    },
    onError: async (error) => {
      if (error.response.status === 500) {
        return toast.error('🥺 Department name already exists');
      }
      toast.error('🥺 Create department failed');
    },
  });
  console.log(
    '🚀 ~ file: CreateDepartment.jsx:56 ~ CreateDepartment ~ createDepartmentMutation:',
    createDepartmentMutation,
  );

  const handleSummit = (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      description: description.current.value,
      QACordinator: QaId,
      members: userId,
    };
    createDepartmentMutation.mutate(data);
  };

  return (
    <Col md={8}>
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
      >
        Create Department
      </Text>
      <form onSubmit={handleSummit}>
        <FormControl>
          <FormLabel color={'white'}>Name</FormLabel>
          <Input placeholder='Name' color={'white'} ref={name} />
          <FormLabel color={'white'}>Description</FormLabel>
          <Input placeholder='Description' color={'white'} ref={description} />
          <FormLabel color={'white'}>Add QaCordinator</FormLabel>
          <Select
            placeholder='Select option'
            color={'blueviolet'}
            onChange={(e) => {
              setQaId(e.target.value);
            }}
          >
            {fetchAllQaCordinator &&
              fetchAllQaCordinator.data?.map((user) => {
                return (
                  <option value={user._id}>
                    Username: {user.username} Email: {user.email}
                  </option>
                );
              })}
          </Select>
          <FormLabel color={'white'}>Add Member</FormLabel>
          <Select
            placeholder='Select option'
            color={'blueviolet'}
            onChange={(e) => {
              setUsers([...users, e.target.value.split(',')[0]]);
              setUserId([...userId, e.target.value.split(',')[1]]);
            }}
          >
            {fetchAllNormalUser &&
              fetchAllNormalUser.data?.map((user) => {
                return (
                  <option value={[user.username, user._id]}>
                    Username: {user.username} Email: {user.email}
                  </option>
                );
              })}
          </Select>
          <HStack spacing={4}>
            {users.map((user, index) => (
              <Tag size='md' key={index} borderRadius='full' variant='solid' colorScheme='green'>
                <TagLabel>{user}</TagLabel>
                <TagCloseButton
                  onClick={() => {
                    setUsers(users.filter((u) => u !== user));
                    setUserId(userId.filter((u) => u !== userId[index]));
                  }}
                />
              </Tag>
            ))}
          </HStack>
          <Button
            colorScheme='blue'
            type='submit'
            style={{
              marginTop: '10px',
            }}
            disabled={createDepartmentMutation?.isLoading}
          >
            {createDepartmentMutation?.isLoading ? <Spinner /> : 'Create'}
          </Button>
        </FormControl>
      </form>
    </Col>
  );
};

export default CreateDepartment;
