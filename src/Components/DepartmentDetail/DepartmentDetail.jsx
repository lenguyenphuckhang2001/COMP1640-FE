import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { Col } from 'react-bootstrap';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import DepartmentApi from '../../Api/DepartmentApi';
import { toast } from 'react-toastify';

const DepartmentDetail = () => {
  const { departmentId } = useParams();
  const queryClient = useQueryClient();

  const getDepartmentById = useQuery({
    queryKey: ['department', departmentId],
    queryFn: async () => {
      const res = await DepartmentApi.getOne(departmentId);
      return res;
    },
  });
  const deleteMemberMutation = useMutation({
    mutationFn: async (memberId) => {
      return await DepartmentApi.deleteMember(departmentId, memberId);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(['department', departmentId]);
      if (data) {
        toast.success('🥳 Delete User successfully');
      }
    },
    onError: async (error) => {
      toast.error('🥺 Delete User failed');
    },
  });
  return (
    <Col md={8}>
      <TableContainer color={'white'}>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Role</Th>
            </Tr>
          </Thead>
          <Tbody>
            {getDepartmentById.data && (
              <Tr>
                <Td>{getDepartmentById.data.QACordinator.username}</Td>
                <Td>QACordinator</Td>
                <Td>
                  <Button
                    variant='solid'
                    colorScheme='red'
                    onClick={() => {
                      deleteMemberMutation.mutate(getDepartmentById.data.QACordinator._id);
                    }}
                  >
                    Delete member
                  </Button>
                </Td>
              </Tr>
            )}
            {getDepartmentById.data &&
              getDepartmentById.data.members.map((member) => (
                <Tr>
                  <Td>{member.username}</Td>
                  <Td>{member.role}</Td>
                  <Td>
                    <Button
                      variant='solid'
                      colorScheme='red'
                      onClick={() => {
                        deleteMemberMutation.mutate(member._id);
                      }}
                    >
                      Delete member
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Col>
  );
};

export default DepartmentDetail;
