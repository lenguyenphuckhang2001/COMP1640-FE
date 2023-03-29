import React from 'react';
import { ListPost } from '../../Components/ListPost/Listpost';
import { Col } from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './Home.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Home = () => {
  //check cookie here and redirect to login page if cookie is not exist
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('true');
    if (token) {
      setIsLogin(true);
    } else {
      navigate('/Account/login');
    }
  }, []);

  return (
    <>
      <Col md={{ span: 6 }}>
        <ListPost />
      </Col>
    </>
  );
};
