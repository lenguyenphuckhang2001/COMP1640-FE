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
<<<<<<< HEAD
      {params['pathname'].includes('admin') ? '' : <Navbar />}
=======
      {params['pathname'].includes('admin') || params['pathname'].includes('Manage') ? console.log('oke') : <Navbar />}
>>>>>>> 7560dfa (fix style Qamanagement)
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
<<<<<<< HEAD
      {params['pathname'].includes('admin') ? '' : <Footer />}
=======
      {params['pathname'].includes('admin') || params['pathname'].includes('Manage') ? console.log('oke') : <Footer />}
>>>>>>> 7560dfa (fix style Qamanagement)
    </>
  );
};
export default Index;
