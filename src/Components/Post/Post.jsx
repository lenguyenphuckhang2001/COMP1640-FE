import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Post.scss';
import { Link } from 'react-router-dom';
import { MdInsertPhoto } from 'react-icons/Md';
import { BsLink45Deg } from 'react-icons/Bs';
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/Bs';
import { CgComment } from 'react-icons/Cg';
import { FiShare2 } from 'react-icons/Fi';
import { MdSaveAlt } from 'react-icons/Md';
import { TagbarLeft } from '../TagBar/Tagbar-left';
import { TagbarRight } from '../TagBar/Tagbar-right';
export const Post = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <TagbarLeft />
        </Col>
        <Col md={{ span: 6 }}>
          <div className='main-post'>
            <div className='post'>
              <div className='user-post'>
                <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' />
              </div>
              <div className='create-post'>
                <a className='create-post-1'>Create Post</a>
                <a>
                  <MdInsertPhoto />
                </a>
                <a>
                  <BsLink45Deg />
                </a>
              </div>
            </div>
          </div>
          <div className='List-post'>
            <div className='postcontent'>
              <div className='postlike'>
                <span className='upvote'>
                  <BsFillCaretUpFill />
                </span>
                <span>200</span>
                <span className='downvote'>
                  <BsFillCaretDownFill />
                </span>
              </div>
              <div className='user-post'>
                <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' />
                <h4>Khoa</h4>
              </div>
              <h2 className='title-content'>cxzczxczx</h2>
              <ul className='tag-content'>
                <li>#reactjs</li>
                <li>#java</li>
              </ul>
            </div>
            <div className='dost'>
              <span>
                <CgComment />
              </span>
              <span>
                <FiShare2 />
              </span>
              <span>
                <MdSaveAlt />
              </span>
            </div>
          </div>
          <div className='List-post'>
            <div className='postcontent'>
              <div className='postlike'>
                <span className='upvote'>
                  <BsFillCaretUpFill />
                </span>
                <span>200</span>
                <span className='downvote'>
                  <BsFillCaretDownFill />
                </span>
              </div>
              <div className='user-post'>
                <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' />
                <h4>Khoa</h4>
              </div>
              <h2 className='title-content'>cxzczxczx</h2>
              <ul className='tag-content'>
                <li>#reactjs</li>
                <li>#java</li>
              </ul>
            </div>
            <div className='dost'>
              <span>
                <CgComment />
              </span>
              <span>
                <FiShare2 />
              </span>
              <span>
                <MdSaveAlt />
              </span>
            </div>
          </div>
          <div className='List-post'>
            <div className='postcontent'>
              <div className='postlike'>
                <span className='upvote'>
                  <BsFillCaretUpFill />
                </span>
                <span>200</span>
                <span className='downvote'>
                  <BsFillCaretDownFill />
                </span>
              </div>
              <div className='user-post'>
                <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' />
                <h4>Khoa</h4>
              </div>
              <h2 className='title-content'>cxzczxczx</h2>
              <ul className='tag-content'>
                <li>#reactjs</li>
                <li>#java</li>
              </ul>
            </div>
            <div className='dost'>
              <span>
                <CgComment />
              </span>
              <span>
                <FiShare2 />
              </span>
              <span>
                <MdSaveAlt />
              </span>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <TagbarRight />
        </Col>
      </Row>
    </Container>
  );
};
