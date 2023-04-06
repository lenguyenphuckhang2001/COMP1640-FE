import { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import './Statistical.scss';
export const Statistical = () => {
  

  return (
    <Col md={9}>
      <div className='Main-Analytics'>
        <Link to=""><div className='Analytics-Option'>Statistics for Tag </div></Link>
        <Link to="post"><div className='Analytics-Option'>Statistics for post </div></Link>
      </div>
      <Outlet/>
    </Col>
  );
};
