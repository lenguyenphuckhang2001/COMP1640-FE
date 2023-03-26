import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { FcPrevious, FcNext} from 'react-icons/Fc';
import PostApi from '../../Api/PostApi';
import { ListPost } from '../../Components/ListPost/Listpost';
import ReactPaginate from 'react-paginate';
import { Col } from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './Home.scss';

export const Home = () => {
  const queryClient = useQueryClient();
  const handlePageClick = async (data) => {
    let selected = data.selected;
    const res = await PostApi.getAll(selected + 1);
    return res;
  };

  const newPostMutation = useMutation({
    mutationFn: handlePageClick,
    onSuccess: (data) => {
      queryClient.setQueryData('posts', data);
    },
  });

  const fetchPosts = async () => {
    return await PostApi.getAll();
  };

  const { data, isLoading } = useQuery({
    queryKey: 'posts',
    queryFn: fetchPosts,
  });

  return (
    <>
      <Col md={{ span: 6 }}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data.docs.map((post) => (
              <ListPost key={post._id} post={post} />
            ))}
            <ReactPaginate
              breakLabel='...'
              nextLabel={<FcNext/>}
              onPageChange={newPostMutation.mutate}
              pageRangeDisplayed={5}
              pageCount={data.totalPages}
              previousLabel={<FcPrevious/>}
              renderOnZeroPageCount={null}
              breakLinkClassName='test'
              className='test'
            />
          </>
        )}
      </Col>
    </>
  );
};
