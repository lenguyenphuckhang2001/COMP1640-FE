import React from 'react';
import { useState, useEffect } from 'react';
import { AiFillMail } from 'react-icons/Ai';
import { RiLockPasswordLine } from 'react-icons/Ri';
import './Login.scss';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Error from '../../Components/Error/Error';
import UserApi from '../../Api/UserApi';
// import Cookies from 'js-cookie';
import axios from 'axios';
export const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errorSubmit = {};
    let flag = true;
    let xx = 1;

    if (inputs.email == '') {
      flag = false;
      xx = 2;
      errorSubmit.email = 'Vui long nhap email';
    }
    if (inputs.password == '') {
      flag = false;
      xx = 2;
      errorSubmit.password = 'Vui long nhap pass';
    }
    if (!flag) {
      setErrors(errorSubmit);
    }
    if (xx == 1) {
      const data = {
        email: inputs.email,
        password: inputs.password,
      };

      try {
        const res = await axios.post('/api/auth/login', data);
        if (res) {
          localStorage.setItem('Information', JSON.stringify(res));
          localStorage.setItem('true', JSON.stringify(true));
          navigate('/');
        }
        return res;
      } catch (e) {
        errorSubmit.faile = '' + e.response.data + '';
        console.log(e);
        setErrors(errorSubmit);
      }
    }
  };
  return (
    <div className='Login-page'>
      <div className='Auth-form-container'>
        <form className='Auth-form' onSubmit={handleSubmit}>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Log In</h3>
            <div className='Error-form'>
              <Error errors={errors} />
            </div>
            <div className='form-group'>
              <label className='label-login'>Email</label>
              <span className='icon'>
                <AiFillMail color='white' />{' '}
              </span>
              <a>|</a>
              <input
                type='email'
                className='form-controler'
                placeholder='Email'
                name='email'
                onChange={handleInput}
              />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <span className='icon'>
                <RiLockPasswordLine color='white' />
              </span>
              <a>|</a>
              <input
                type='password'
                className='form-controler'
                placeholder='Password'
                name='password'
                onChange={handleInput}
              />
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
      </div>
    </div>
  );
};
