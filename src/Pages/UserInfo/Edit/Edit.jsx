import React from 'react';
import './Edit.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, NavLink, Outlet } from 'react-router-dom';

export const Edit = () => {
  return (
    <div className='edit-info'>
      <h2>Edit Profile</h2>
      <form>
        <label>First Name:</label>
        <input type='text' required />
        <label>Last Name:</label>
        <input type='text' required />
        <label>Email:</label>
        <input type='text' required />
        <label>Address:</label>
        <input type='text' required />
        <label>Day of Birth:</label>
        <input type='text' required />
        <button>Submit</button>
      </form>
      <div className='change-pass'>
        <Link to='/change-password'>ChangePassword</Link>
      </div>
    </div>
  );
};
