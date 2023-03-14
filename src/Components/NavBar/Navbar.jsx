import React, { useState } from 'react';
import { BsFillGearFill, BsFillQuestionCircleFill, BsPersonCircle } from 'react-icons/Bs';
import { AiFillHome, AiFillPlusCircle } from 'react-icons/Ai';
import { IoMdNotifications } from 'react-icons/Io';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import './Navbar.scss';

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <header>
      <nav className='container-fluid'>
        <Row>
          <div>
            <div className='row navbar '>
              <div className='col-12 col-md-2'>
                <div className='logo'>
                 
                  <a className='icon' href="#"><BsFillGearFill /></a>
                    <a className='text' href="#">BlueFoum</a>
                 
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
                  <input placeholder='&#xf002;  Search for anything.....'></input>
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
                      <a href="#"><IoMdNotifications /></a>
                    </div>
                  </div>
                  <div className='question'>
                    <NavLink to='/question'>
                      <BsFillQuestionCircleFill />
                    </NavLink>
                  </div>
                  <div onClick={toggleDropdown} className='info'>
                 <a href="#"> <BsPersonCircle /></a>
                  </div>
                </div>
              </div>
            {showDropdown && (
              <div className="navbar__dropdown">
                <NavLink className='user_item' to='Account/user-info'>User-Info</NavLink>
                <NavLink className='login' to='Account/login'>Login</NavLink>
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
