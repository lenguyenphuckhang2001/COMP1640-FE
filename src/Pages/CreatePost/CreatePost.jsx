import React from 'react';
import { Col } from 'react-bootstrap';
import { BiUnderline } from 'react-icons/Bi';
import { BiItalic } from 'react-icons/Bi';
import { BiBold } from 'react-icons/Bi';

import './CreatePost.scss';

export const CreatePost = () => {
  return (
    <Col md={{ span: 6, offset: 3 }}>
      <div className='createpost'>
        <div className='center'>
          <form>
            <p className='title'> Create a post</p>
            <input className='ip_title' type='text' id='fname' name='fname' placeholder='Title' />
            <p className='post'>Post</p>
            <div className='text-icon'>
              <span className='icon'> 
                <BiBold />
              </span>
              <span className='icon'>
                <BiItalic />
              </span>
              <span className='icon'>
                <BiUnderline />
              </span>
            </div>
            <input
              className='ip_post'
              type='text'
              id='fname'
              name='fname'
              placeholder='&#xf007;Write description'
            />
            <p className='img'>IMG</p>
            <input
              className='ip_img'
              type='text'
              id='fname'
              name='fname'
              placeholder='Upload or drop file here'
            />
            <br />
            <button className='bt_post'>Post</button>
          </form>
        </div>
      </div>
    </Col>
  );
};
