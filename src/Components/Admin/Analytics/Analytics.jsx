import React from 'react';
import { Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import "./Analytics.scss"
export const Analytics = () => {
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
