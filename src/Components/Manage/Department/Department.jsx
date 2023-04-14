import './Department.scss';
import DepartmentApi from '../../../Api/DepartmentApi';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Col } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import UserApi from '../../../Api/UserApi';
import { toast } from 'react-toastify';

export const Department = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [departmentName, setDepartmentName] = useState('');
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState([]);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchAllDepartments = useQuery({
    queryKey: 'departments',
    queryFn: async () => {
      const res = await DepartmentApi.getAll();
      return res;
    },
  });

  const fetchAllNormalUser = useQuery({
    queryKey: 'normal-user',
    queryFn: async () => {
      return await UserApi.getAllNormalUser();
    },
    enabled: isOpen,
  });
  const addMemberMutation = useMutation({
    mutationFn: async (department) => {
      const test = await DepartmentApi.addMember(department.name, { members: department.members });
      return test;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries('departments');
      toast.success('🥳 Create department successfully');
    },
    onError: async (error) => {
      if (error.response.status === 400) {
        return toast.error('🥺 User already exists in the department');
      }
      toast.error('🥺 Add member failed');
    },
  });

  const deleteDepartmentMutation = useMutation({
    mutationFn: async (data) => {
      return await DepartmentApi.delete(data);
    },
    retry: 3,
    onSuccess: (data) => {
      queryClient.invalidateQueries('departments');
      if (data) {
        toast.success('🥳 Delete department successfully');
      }
    },
    onError: async (error) => {
      toast.error('🥺 Delete department failed');
    },
  });

  return (
    <Col md={8}>
      <Heading size='lg' fontSize='50px' color={'white'}>
        Departments
      </Heading>
      <Button
        onClick={() => {
          navigate('/Account/admin/create-department');
        }}
        colorScheme='teal'
      >
        Add department
      </Button>
      {fetchAllDepartments &&
        fetchAllDepartments?.data?.map((department) => (
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            bg={'#144272'}
            mt={5}
            _hover={{
              bgGradient: 'linear(to-r, #144272, #216ebe)',
              cursor: 'pointer',
            }}
          >
            <Stack>
              <CardBody
                onClick={(e) => {
                  navigate(`/Account/admin/department/${department._id}`);
                }}
              >
                <Heading color={'white'} size='md'>
                  {department.name}
                </Heading>

                <Text py='2'>Description: {department.description}</Text>
                <Text m={0}>
                  Member:
                  {department.QACordinator
                    ? department.members?.length + 1
                    : department.members?.length}
                </Text>
              </CardBody>

              <CardFooter m={0}>
                <Button
                  variant='solid'
                  leftIcon={<AddIcon />}
                  colorScheme='teal'
                  onClick={() => {
                    setDepartmentName(department._id);
                    onOpen();
                  }}
                >
                  Add member
                </Button>
                <Drawer isOpen={isOpen} placement='right' onClose={onClose} id={department._id}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                      <FormLabel htmlFor='owner'>Select Member</FormLabel>
                      <Select
                        id='owner'
                        placeholder='Select option'
                        color={'blueviolet'}
                        onChange={(e) => {
                          setUsers([...users, e.target.value.split(',')[0]]);
                          setUserId([...userId, e.target.value.split(',')[1]]);
                        }}
                      >
                        {fetchAllNormalUser?.data?.map((user) => (
                          <option value={[user.username, user._id]}>{user.username}</option>
                        ))}
                      </Select>
                      <Stack spacing={4} direction='column'>
                        {users.map((user, index) => (
                          <Tag
                            size='md'
                            key={index}
                            borderRadius='full'
                            variant='solid'
                            colorScheme='cyan'
                          >
                            <TagLabel>{user}</TagLabel>
                            <TagCloseButton
                              onClick={() => {
                                setUsers(users.filter((u) => u !== user));
                                setUserId(userId.filter((u) => u !== userId[index]));
                              }}
                            />
                          </Tag>
                        ))}
                      </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                      <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button
                        colorScheme='blue'
                        onClick={() => {
                          console.log({
                            name: departmentName,
                            members: userId,
                          });
                          setUsers([]);
                          setUserId([]);
                          addMemberMutation.mutate({
                            name: departmentName,
                            members: userId,
                          });
                          onClose();
                        }}
                      >
                        Save
                      </Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
                <Button
                  variant='solid'
                  colorScheme='red'
                  ml={5}
                  onClick={() => {
                    deleteDepartmentMutation.mutate(department._id);
                  }}
                >
                  Delete
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}
    </Col>
  );
};
