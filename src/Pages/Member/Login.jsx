import React from 'react';
import { AiFillMail} from 'react-icons/Ai';
import { RiLockPasswordLine} from 'react-icons/Ri';
import './Login.scss';
import { Link } from 'react-router-dom';
export const Login = () => {
  return (
    <div className='Login-page'>
      <div className='Auth-form-container'>
        <form className='Auth-form'>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Log In</h3>
            <div className='form-group mt-3'>
              <label>Email</label>
              <span className='icon'><AiFillMail color="white"/>  </span>
              <a>|</a>
              <input type='email' className='form-control mt-1' placeholder='Email' />
            </div>
            <div className='form-group mt-3'>
              <label>Password</label>
              <span className='icon'><RiLockPasswordLine color="white"/></span>
              <a>|</a>
              <input type='password' className='form-control mt-1' placeholder='Password' />
            </div>
            <p className='forgot-password text-right mt-2'>
              Forgot password?
            </p>
            <div className='d-grid gap-2 mt-3'>
              <button type='submit' className='btn btn-primary'>
                Log in
              </button>
            </div>
          </div>
        </form>
        <p className='register'>
            Don’t have an account? <a>Sign Up</a>
        </p>
      </div>
    </div>
  );
};
