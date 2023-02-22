import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
export const Register = () => {
  return (
    <div className='Login-page'>
      <div className='Auth-form-container'>
        <form className='Auth-form'>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Register</h3>
            <div className='input-group'>
              <input required type='text' name='text' autoComplete='off' className='input' />
              <label className='user-label'>Name</label>
            </div>
            <div className='input-group'>
              <input required type='email' name='email' autoComplete='off' className='input' />
              <label className='user-label'>Email</label>
            </div>
            <div className='input-group'>
              <input required type='password' name='password' autoComplete='off' className='input' />
              <label className='user-label'>Password</label>
            </div>
            <div className='input-group'>
              <input required type='password' name='confirmpassword' autoComplete='off' className='input' />
              <label className='user-label'>Confirm Password</label>
            </div>
            <div className='sm-regis'>
              <button type='submit' className='btn btn-primary'>
                Register
              </button>
            </div>
          </div>
        </form>
        <p className='register'>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
