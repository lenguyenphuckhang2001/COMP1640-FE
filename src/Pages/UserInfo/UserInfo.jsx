import React, { useEffect, useState } from 'react';
import './UserInfo.scss';
import { BiLogIn, BiLogOut } from 'react-icons/Bi';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, Outlet } from 'react-router-dom';

export const UserInfo = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('Information'));
    const userData = localData?.data.user;
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <>
      <div className='Userpage-info'>
        <div className='row'>
          <div className='col-md-3'>
            <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' />
            <p>{user?.username}</p>
            <ul>
              <a href='#'>
                <i class='fa-solid fa-location-crosshairs'></i>
                {user?.address || 'No address'}
              </a>
              <a>
                <i class='fa-solid fa-envelope'></i>
                {user?.email}
              </a>
              <a>
                <i class='fa-solid fa-calendar-days'></i>
                {user?.DoB || 'No birthday'}
              </a>
            </ul>
          </div>
          <div className='col-md-8 pb'>
            <div className='post-bar'>
              <NavLink to='/Account/user-info/edit'>Edit</NavLink>
              <NavLink to='/Account/user-info/my-post'>My Post</NavLink>
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
