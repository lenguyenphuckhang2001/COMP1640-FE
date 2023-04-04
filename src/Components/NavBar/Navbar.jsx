import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import './Navbar.scss';

function NavScroll() {
  function checkLogin() {
    var check = localStorage.getItem('true');
    if (check) {
      return (
        <NavLink
          style={{ textDecoration: 'none', color: ' var(--bs-navbar-brand-color)' }}
          onClick={Logout}
        >
          Logout
        </NavLink>
      );
    } else {
      return (
        <NavLink
          style={{ textDecoration: 'none', color: ' var(--bs-navbar-brand-color)' }}
          to='Account/login'
        >
          Login
        </NavLink>
      );
    }
  }
  async function Logout() {
    try {
      const res = await axios.post('/api/auth/logout');
      if (res.status == 200) {
        localStorage.clear();
        navigate('/Account/login');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
<<<<<<< HEAD
    <header>
      <nav className='container-fluid'>
        <Row>
          <div>
            <div className='row navbar '>
              <div className='col-12 col-md-2'>
                <div className='logo'>
                  <i className='icon' href=''>
                    <BsFillGearFill />
                  </i>
                  <NavLink className='text' to='/'>
                    BlueFoum
                  </NavLink>
                </div>
              </div>

              <div className='col-2 col-md-1 mb-2'>
                <div className='home'>
                  <NavLink to='/'>
                    <AiFillHome />
                  </NavLink>
                </div>
              </div>

              <div className='col-5 col-md-6'>
                <div className='search'>
                  <input placeholder='  Search for anything.....'></input>
                </div>
              </div>

              <div className='col-5 col-md-3 mb-2 '>
                <div className='list_item'>
                  <div className='post'>
                    <NavLink to='/create-post'>
                      <AiFillPlusCircle />
                    </NavLink>
                  </div>
                  <div>
                    <div className='notification'>
                      <a href='#'>
                        <IoMdNotifications />
                      </a>
                    </div>
                  </div>
                  <div className='question'>
                    <NavLink to='/question'>
                      <BsFillQuestionCircleFill />
                    </NavLink>
                  </div>
                  <div onClick={toggleDropdown} className='info'>
                    <a href='#'>
                      {' '}
                      <BsPersonCircle />
                    </a>
                  </div>
                </div>
              </div>
              {showDropdown && (
                <div className='navbar__dropdown'>
                  <NavLink className='user_item' to='Account/user-info'>
                    User-Info
                  </NavLink>
                  {checkLogin()}
                </div>
              )}
            </div>
          </div>
        </Row>
      </nav>
    </header>
=======
    <Navbar style={{ backgroundColor: '#2C74B3' }} expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>BlueFoum</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href='#action1'>
              <NavLink
                style={{ textDecoration: 'none', color: ' var(--bs-navbar-brand-color)' }}
                to='/'
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link href='#action2'>
              <NavLink
                style={{ textDecoration: 'none', color: ' var(--bs-navbar-brand-color)' }}
                to='/create-post'
              >
                Create Post
              </NavLink>
            </Nav.Link>
            <NavDropdown title='Profile' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3'>
                <NavLink
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: ' var(--bs-navbar-brand-color)',
                  }}
                  to='Account/user-info'
                >
                  User-Info
                </NavLink>
                {checkLogin()}
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href='#' disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className='d-flex'>
            <Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
            <Button style={{ color: '#fff', border: 'solid 0.5px #fff' }} variant='outline-success'>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
>>>>>>> a9f48fc (responsive navbar and footer)
  );
}

export default NavScroll;
