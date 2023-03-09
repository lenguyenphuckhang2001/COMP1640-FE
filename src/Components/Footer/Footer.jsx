import React from 'react';
import { BsFillGearFill } from 'react-icons/Bs';
import { AiOutlineHome } from 'react-icons/Ai';
import { ImSkype } from 'react-icons/Im';
import { MdOutlineEmail } from 'react-icons/Md';
import { BiPhoneCall } from 'react-icons/Bi';
import { BsFacebook } from 'react-icons/Bs';
import { AiFillInstagram } from 'react-icons/Ai';
import { GrYoutube } from 'react-icons/Gr';
import { SiTiktok } from 'react-icons/Si';
import Row from 'react-bootstrap/Row';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='logo'>
          <BsFillGearFill />
          <p className='text'>BlueFoum</p>
        </div>
        <div className='container'>
          <div className='row footer'>
            <div className='col-12 col-md-3'>
              <div className='about'>
                <ul className='about_item'>
                  <p>ABOUT US</p>
                  <li className='footer_item'>
                    <a href='#'>About</a>
                  </li>
                  <li className='footer_item'>
                    <a href='#'>Project</a>
                  </li>
                  <li className='footer_item'>
                    <a href='#'>Blog</a>
                  </li>
                  <li className='footer_item'>
                    <a href='#'>Awards</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-12 col-md-3'>
              <div className='service'>
                <ul className='service_item'>
                  <p>SERVICE</p>
                  <li className='footer_item'>
                    <a href='#'>Writing</a>
                  </li>
                  <li className='footer_item'>
                    <a href='#'>Coding</a>
                  </li>
                  <li className='footer_item'>
                    <a href='#'>Testing</a>
                  </li>
                  <li className='footer_item'>
                    <a href='#'>Teaching</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-12 col-md-3'>
              <div className='adress'>
                <ul className='adress_item'>
                  <p>ADRESS</p>
                  <li className='footer_item'>
                    <a href='#'>
                      <p>
                        <AiOutlineHome />
                      </p>
                      Da Nang City
                    </a>
                  </li>
                  <li className='footer_item'>
                    <a href='#'>
                      <p>
                        <MdOutlineEmail />
                      </p>
                      Exmample@gmail.com
                    </a>
                  </li>
                  <li className='footer_item'>
                    <a href='#'>
                      <p>
                        <BiPhoneCall />
                      </p>
                      +84 979 822 999
                    </a>
                  </li>
                  <li className='footer_item'>
                    <a href='#'>
                      <p>
                        <ImSkype />
                      </p>
                      skype:you_online
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-12 col-md-3'>
              <div className='social'>
                <ul className='social_item'>
                  <p>SOCIAL MEDIA</p>
                  <li className='footer_item'>
                    <a href='#'>
                      <p>
                        <BsFacebook />
                      </p>
                      Facebook
                    </a>
                  </li>
                  <li className='footer_item'>
                    <a href='#'>
                      <p>
                        <AiFillInstagram />
                      </p>
                      Instagram
                    </a>
                  </li>
                  <li className='footer_item'>
                    <a href='#'>
                      <p>
                        <GrYoutube />
                      </p>
                      Youtube
                    </a>
                  </li>
                  <li className='footer_item'>
                    <a href='#'>
                      <p>
                        <SiTiktok />
                      </p>
                      Titok
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className='footer_copy'>@2023 Copyright: BlueFoum</p>
      </div>
    </footer>
  );
};

export default Footer;
