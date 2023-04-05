import React from 'react';
import { ListPost } from '../../Components/ListPost/Listpost';
import { Col } from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './Home.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Home = () => {
  return (
    <>
      <Col md={{ span: 6 }}>
        <ListPost />
      </Col>
    </>
  );
};
