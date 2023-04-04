import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useState } from 'react';

import './Footer.scss';

export const Footer = () => {
  // Define the subscribed state and its setter using the useState hook
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Define the handleSubscribe function that will be called when the Subscribe button is clicked
  const handleSubscribe = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    // Set the subscribed state to true
    setSubscribed(true);
  };
  return (
    <MDBFooter className='text-center' color='white' style={{ backgroundColor: '#54B4D3' }}>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color='light' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color='light' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color='light' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color='light' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color='light' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color='light' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <>
            {!subscribed ? (
              <form>
                <MDBRow className='d-flex justify-content-center'>
                  <MDBCol size='auto'>
                    <p className='pt-2'>
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </MDBCol>

                  <MDBCol md='5' start>
                    <MDBInput
                      contrast
                      type='email'
                      label='Email address'
                      className='mb-2'
                      id='email-input'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                  </MDBCol>

                  <MDBCol size='auto'>
                    <MDBBtn
                      outline
                      color='light'
                      type='button'
                      className='mb-4'
                      onClick={handleSubscribe}
                    >
                      Subscribe
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </form>
            ) : (
              <h3 style={{ color: '#880000' }}>Thank you for subscribing!</h3>
            )}
          </>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat
            quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum
            corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>
        <section className='list_item'>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>COMPANY</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Become a Teacher
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>LINKS</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Courses
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Event
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    FAQs
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>SUPPORT</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Forums
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Language Packs
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Release Status
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>RECOMMEND</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    WordPress
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    LearnPress
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    WooCommerce
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    bbPress
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='#'>
          BlueFoum
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
