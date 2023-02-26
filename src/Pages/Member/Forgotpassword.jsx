import React from 'react';
import './Forgotpassword.scss';
import { Link } from 'react-router-dom';
export const Forgotpassword = () => {
  return (
    <div className='Login-page'>
      <div className='Auth-form-container'>
        <form className='Auth-form'>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title-forgotpass'>Forgot Paswword</h3>
            <p className='fg-p'>Dont wory. We can help.</p>
            <div className='form-group'>
              <input
                type='email'
                className='form-control-fo'
                placeholder='Please fill in your email address'
              />
            </div>
            <p className='forgot-password'></p>
            <div className='fg-bt'>
              <span>
                <p>Rememberd your password?</p>
                <Link to='/login' className='fg-link'>
                  Back to login
                </Link>
              </span>
              <button type='submit' className='btn btn-primary'>
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
