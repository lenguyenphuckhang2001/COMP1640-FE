import React from 'react';
import { useState } from 'react';
import { AiFillMail } from 'react-icons/Ai';
import { RiLockPasswordLine } from 'react-icons/Ri';
import './Login.scss';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Error from '../../Components/Error/Error';
import UserApi from '../../Api/UserApi';
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

  const handleSubmit = (e) => {
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
      setErrors({});
      const data = {
        email: inputs.email,
        password: inputs.password,
      };
      (async () => {
        const res = await UserApi.login(data);
        if(res){
          console.log(res)
        }
        else{
          console.log(res.response)
        }
      })();
    }
  };
  return (
    <div className='Login-page'>
      <div className='Auth-form-container'>
        <form className='Auth-form' onSubmit={handleSubmit}>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Log In</h3>
            <div className='Error-form'>
            <Error errors={errors}/>
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
