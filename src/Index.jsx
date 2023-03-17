import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/Navbar';
import { TagbarLeft } from './Components/TagBar/Tagbar-left';
import { TagbarRight } from './Components/TagBar/Tagbar-right';
import './index.scss';
export const Index = () => {
  let params = useLocation();
  console.log(params);
  return (
    <>
      {params['pathname'].includes('admin') ? console.log('oke') : <Navbar />}
      <main>
        <Container>
          <Row>
            {params['pathname'].includes('Account') ||
            params['pathname'].includes('change-password') ? (
              console.log('oke')
            ) : (
              <TagbarLeft />
            )}
            <Outlet />
            {params['pathname'].includes('Account') ||
            params['pathname'].includes('change-password') ? (
              console.log('oke')
            ) : (
              <TagbarRight />
            )}
          </Row>
        </Container>
      </main>
      {params['pathname'].includes('admin') ? console.log('oke') : <Footer />}
    </>
  );
};
export default Index;
