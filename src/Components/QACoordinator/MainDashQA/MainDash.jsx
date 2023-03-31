import React from 'react';
import { Col } from 'react-bootstrap';
import Table from "../Table/Table";
import "./MainDash.scss"
export const MainDash = () => {
  return (
    <Col md={9}>
        <div className='MainDash'>
          <Table/>
        </div>
    </Col>
  );
};
