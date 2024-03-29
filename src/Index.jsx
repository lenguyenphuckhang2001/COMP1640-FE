import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import Navbar from './Components/NavBar/Navbar';
import { TagbarLeft } from './Components/TagBar/Tagbar-left';
import { TagbarRight } from './Components/TagBar/Tagbar-right';
import './index.scss';
export const Index = () => {
  let params = useLocation();
  return (
    <>
      {params['pathname'].includes('admin') || params['pathname'].includes('Manage') ? (
        ''
      ) : (
        <Navbar />
      )}
      <main>
        <Container>
          <Row>
            {params['pathname'].includes('Account') ||
            params['pathname'].includes('change-password') ? (
              ''
            ) : (
              <TagbarLeft />
            )}
            <Outlet />
            {params['pathname'].includes('Account') ||
            params['pathname'].includes('change-password') ? (
              ''
            ) : (
              <TagbarRight />
            )}
          </Row>
        </Container>
      </main>
    </>
  );
};
export default Index;
