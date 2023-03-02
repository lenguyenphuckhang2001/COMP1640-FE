import React from 'react';
import { AiFillMail } from 'react-icons/Ai';
import { RiLockPasswordLine } from 'react-icons/Ri';
import './Login.scss';
import { NavLink } from 'react-router-dom';
export const Login = () => {
  return (
    <div className='Login-page'>
      <div className='Auth-form-container'>
        <form className='Auth-form'>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Log In</h3>
            <div className='form-group'>
              <label className='label-login'>Email</label>
              <span className='icon'>
                <AiFillMail color='white' />{' '}
              </span>
              <a>|</a>
              <input type='email' className='form-controler' placeholder='Email' />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <span className='icon'>
                <RiLockPasswordLine color='white' />
              </span>
              <a>|</a>
              <input type='password' className='form-controler' placeholder='Password' />
            </div>
            <p className='forgot-password'>
              <NavLink to='/Account/forgotpass'>Forgot Password</NavLink>
            </p>
            <div className='d-lg'>
              <button type='submit' className='btn btn-primary'>
                Log in
              </button>
            </div>
          </div>
        </form>
        <p className='register'>
          Don’t have an account? <NavLink to='/Account/register'>Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
};
