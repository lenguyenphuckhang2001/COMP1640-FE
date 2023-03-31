import React, { useState } from 'react';
import { BsFillGearFill, BsFillQuestionCircleFill, BsPersonCircle } from 'react-icons/Bs';
import { AiFillHome, AiFillPlusCircle } from 'react-icons/Ai';
import { IoMdNotifications } from 'react-icons/Io';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';
import axios from 'axios';
import UserApi from '../../Api/UserApi';

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const navigate = useNavigate();

  function checkLogin() {
    var check = localStorage.getItem('true');
    if (check) {
      return (
        <NavLink className='login' onClick={Logout}>
          Logout
        </NavLink>
      );
    } else {
      return (
        <NavLink className='login' to='Account/login'>
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
  );
};
export default Navbar;
