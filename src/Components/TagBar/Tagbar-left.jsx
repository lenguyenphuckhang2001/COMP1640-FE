import React from 'react';
import { Col } from 'react-bootstrap';
import { BsFillTagFill } from 'react-icons/Bs';
import './Tagbar-left.scss';
export const TagbarLeft = () => {
  return (
    <Col md={3}>
      <div className='tagbar'>
        <h4 className='tag'>
          <BsFillTagFill />
          Tag
        </h4>
        <a className='tagname'>#java</a>
        <a className='tagname'>#reactjs</a>
        <a className='tagname'>#chatgpt</a>
        <a className='tagname'>#html</a>
        <a className='tagname'>#java</a>
        <a className='tagname'>#reactjs</a>
        <a className='tagname'>#chatgpt</a>
        <a className='tagname'>#html</a>
      </div>
    </Col>
  );
};
