import React, { useState } from 'react';
import './Answer.scss';
import { BsFillCaretUpFill, BsFillCaretDownFill, BsBookmark } from 'react-icons/Bs';
import { useQuery } from 'react-query';
import CommentApi from '../../Api/CommentApi';
import ReactPaginate from 'react-paginate';
import { FcPrevious, FcNext } from 'react-icons/Fc';

export const Answer = ({ comments }) => {
  //   const [sort, setSort] = React.useState('newest');
  //     const [sortedComments, setSortedComments] = React.useState(comments);
  //     React.useEffect(() => {
  //         if (sort === 'newest') {
  //             setSortedComments([...comments].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  //         } else if (sort === 'oldest') {
  //             setSortedComments([...comments].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
  //         } else if (sort === 'most-voted') {
  //             setSortedComments([...comments].sort((a, b) => b.votes - a.votes));
  //         } else if (sort === 'least-voted') {
  //             setSortedComments([...comments].sort((a, b) => a.votes - b.votes));
  //         }
  //     }, [sort, comments]);
  const newest = comments?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const [itemOffset, setItemOffset] = useState(0);
  const [itemLimit, setItemLimit] = useState(5);

  const currentItems = newest.slice(itemOffset, itemOffset + itemLimit);
  console.log('🚀 ~ file: Answer.jsx:29 ~ Answer ~ currentItems:', currentItems);
  const pageCout = Math.ceil(comments.length / itemLimit);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setItemOffset(selectedPage * itemLimit);
  };

  return (
    <>
      {currentItems.map((comment) => (
        <div className='MainAnswer'>
          <div className='answerpost'>
            <div className='answerdost'>
              <span className='upvote'>
                <BsFillCaretUpFill />
              </span>
              <span>200</span>
              <span className='downvote'>
                <BsFillCaretDownFill />
              </span>
              <span>
                <BsBookmark />
              </span>
            </div>
            <div className='answer'>
              <p>{comment.content}</p>
              <div className='infoanswer'>
                <p>Create At: {comment.createdAt}</p>
                <p>Modified At: {comment.updatedAt}</p>
              </div>
              <div className='user-answer'>
                <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' />
                <p>{comment.isAnonymous ? 'Anonymous' : comment.author.username}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ReactPaginate
        breakLabel='...'
        nextLabel={<FcNext />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCout}
        previousLabel={<FcPrevious />}
        renderOnZeroPageCount={null}
        breakLinkClassName='test'
        className='test'
      />
    </>
  );
};
