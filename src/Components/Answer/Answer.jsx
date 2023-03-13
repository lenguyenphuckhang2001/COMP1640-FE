import React from 'react';
import './Answer.scss';
import { BsFillCaretUpFill, BsFillCaretDownFill, BsBookmark } from 'react-icons/Bs';
export const Answer = () => {
  return (
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
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className='infoanswer'>
            <p>Create At: 10/1/2021</p>
            <p>Modified At: 20/1/2021</p>
          </div>
          <div className='user-answer'>
            <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' />
            <p>Khang</p>
          </div>
        </div>
      </div>
    </div>
  );
};
