import React from 'react';
import { useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { BiUnderline } from 'react-icons/Bi';
import { BiItalic } from 'react-icons/Bi';
import { BiBold } from 'react-icons/Bi';
import './CreatePost.scss';
import {
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Spinner,
  Stack,
  Switch,
  Tag,
  TagCloseButton,
  TagLabel,
  Textarea,
} from '@chakra-ui/react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import TagApi from '../../Api/TagApi';
import DepartmentApi from '../../Api/DepartmentApi';
import { useRef } from 'react';
import { useEffect } from 'react';
import PostApi from '../../Api/PostApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CreatePost = () => {
  const [tagss, setTagss] = useState([]);
  const [tagId, settagId] = useState([]);
  const [department, setDepartment] = useState(null);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [userId, setUserId] = useState('');
  const [term, setTerm] = useState(false);

  const title = useRef(null);
  const content = useRef(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    const user = localStorage.getItem('Information');
    if (user) {
      const userObj = JSON.parse(user);
      const { userId: id } = userObj.data.user;
      setUserId(id);
    }
  }, []);

  const createPostMutation = useMutation({
    mutationFn: async (post) => {
      return await PostApi.create(post);
    },
    onSuccess: (data) => {
      toast.success('🥳 Create post successfully');
    },
    onError: async (error) => {
      if (error.response.status === 400 && error.response.data.error) {
        return toast.error('🥺 ' + error.response.data.error);
      }
    },
  });

  const tags = useQuery({
    queryKey: 'tags',
    queryFn: async () => {
      return await TagApi.getAll();
    },
    staleTime: 1000 * 60,
  });
  const fetchAllDepartment = useQuery({
    queryKey: 'departments',
    queryFn: async () => {
      return await DepartmentApi.getAll();
    },
    staleTime: 1000 * 60,
  });

  const handleSummit = (e) => {
    e.preventDefault();

    const data = {
      title: title.current.value,
      content: content.current.value,
      tags: tagId,
      department: department,
      author: userId,
      isAnonymous: isAnonymous,
    };
    createPostMutation.mutate(data);
  };

  return (
    <Col md={{ span: 6 }}>
      <form onSubmit={handleSummit}>
        <FormControl isRequired>
          <FormLabel color={'white'}>Title</FormLabel>
          <Input placeholder='Title' color={'white'} ref={title} />
          <FormLabel color={'white'}>Content</FormLabel>
          <Textarea placeholder='Content' color={'white'} size='md' ref={content} />
          <FormLabel color={'white'}>Tags</FormLabel>
          <Select
            placeholder='Select tags'
            color={'blueviolet'}
            onChange={(e) => {
              const filter = e.target.value.split(',');
              if (filter[0] === '') return;
              if (!tagss.includes(filter[0])) {
                setTagss([...tagss, filter[0]]);
                settagId([...tagId, filter[1]]);
              }
            }}
          >
            {tags.data?.map((tag) => {
              return <option value={[tag.name, tag._id]}>{tag.name}</option>;
            })}
          </Select>
          <HStack spacing={4}>
            {tagss.map((tag, index) => (
              <Tag size='md' key={index} borderRadius='full' variant='solid' colorScheme='green'>
                <TagLabel>{tag}</TagLabel>
                <TagCloseButton
                  onClick={() => {
                    setTagss(tagss.filter((t) => t !== tag));
                    settagId(tagId.filter((t) => t !== tagId[index]));
                  }}
                />
              </Tag>
            ))}
          </HStack>
          <FormLabel color={'white'}>Departments</FormLabel>
          <Select
            placeholder='Select departments'
            color={'blueviolet'}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          >
            {fetchAllDepartment.data?.map((department) => {
              return <option value={department._id}>{department.name}</option>;
            })}
          </Select>
        </FormControl>

        <FormControl display='flex' alignItems='center' justifyContent='space-between'>
          <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='email-alerts' mb='0' color={'white'}>
              post anonymously
            </FormLabel>
            <Switch
              id='email-alerts'
              onChange={(e) => {
                setIsAnonymous(e.target.checked);
              }}
            />
          </FormControl>

          <Button>Upload</Button>
        </FormControl>
        <Stack spacing={5} direction='column'>
          <Checkbox
            colorScheme='red'
            color={'white'}
            onChange={(e) => {
              setTerm(e.target.checked);
            }}
          >
            Accep Term
          </Checkbox>
          <Button
            style={{
              marginTop: '10px',
            }}
            colorScheme='blue'
            type='submit'
            disabled={!term || createPostMutation.isLoading}
          >
            {term ? 'Create Post' : 'Please accept term'}
            {createPostMutation.isLoading ? <Spinner /> : ''}
          </Button>
        </Stack>
      </form>
    </Col>
  );
};
