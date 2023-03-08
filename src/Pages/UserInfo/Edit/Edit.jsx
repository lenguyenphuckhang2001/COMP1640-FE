import React, { useEffect } from 'react';
import './Edit.scss';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

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
    </div>
  );
};
