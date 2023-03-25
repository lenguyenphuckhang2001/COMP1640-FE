import React from 'react';
import './Listpost.scss';
import { Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const ListPost = ({ post }) => {
  return (
    <Col>
      <div className='List-post'>
        <div className='postcontent'>
          <div className='postlike'>
            <span>0 votes</span>
            <span>200 view</span>
            <span className='downvote'>0 answers</span>
          </div>
          <div className='user-post'>
            <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' />
            <h4>{post.author?.username}</h4>
            <h2 className='title-content'>
              <Link to='/QuestionDetail'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Link>
            </h2>
            <ul className='tag-content'>
              <li>#reactjs</li>
              <li>#java</li>
            </ul>
          </div>
        </div>
      </div>
    </Col>
  );
};
