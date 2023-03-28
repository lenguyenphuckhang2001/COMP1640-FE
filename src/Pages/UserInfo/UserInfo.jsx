import React from 'react';
import './UserInfo.scss';
import { BiLogIn, BiLogOut } from 'react-icons/Bi';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, Outlet } from 'react-router-dom';

export const UserInfo = () => {
  return (
    <>
      <div className='Userpage-info'>
        <div className='row'>
          <div className='col-md-3'>
            <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' />
            <p>John Handsome</p>
            <ul>
              <a href='#'>
                <i class='fa-solid fa-location-crosshairs'></i>23 Jump Street
              </a>
              <a href='#'>
                <i class='fa-solid fa-envelope'></i>john123@gmail.com
              </a>
              <a href='#'>
                <i class='fa-solid fa-calendar-days'></i>23/3/2001
              </a>
              <a href='#'>
                <i class='fa-solid fa-signs-post'></i>1.5k posts
              </a>
            </ul>
          </div>
          <div className='col-md-8 pb'>
            <div className='post-bar'>
              <NavLink to='/Account/user-info/edit'>Edit</NavLink>
              <NavLink to='/Account/user-info/history'>History</NavLink>
              <NavLink to='/Account/user-info/saved'>Saved</NavLink>
            </div>
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
