import React from 'react';
import { Col } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import Table from "../Table/Table";
import "./MainDash.scss"
export const MainDash = () => {
  return (
    <Col md={8}>
        <div className='MainDash'>
          <Cards/>
          <Table/>
        </div>
    </Col>
  );
};
