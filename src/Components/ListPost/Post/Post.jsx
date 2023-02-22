import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Post.scss';
import { Link } from 'react-router-dom';
import { MdInsertPhoto } from 'react-icons/Md';
import { BsLink45Deg } from 'react-icons/Bs';
export const Post = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
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
        </Col>
      </Row>
    </Container>
  );
};
