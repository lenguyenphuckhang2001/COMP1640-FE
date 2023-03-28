import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
export const Register = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    username: '',
    DoB: '',
    phonenumber: '',
    role: '',
    avatar: '',
  });
  const [file, setFile] = useState();
  const [avatar, setAvatar] = useState();
  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };
  function handleFile(e) {
    setFile(e.target.files);
    let reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target.result)
      setAvatar(e.target.reasult);
      setFile(file[0]);
    };
    reader.readAsDataURL(file[0]);
  }
  console.log(file)
  console.log(avatar)
  const handleSubmit = (e) => {
    e.preventDefault();

    let xx = 1;
    if (inputs.email == '') {
      xx = 2;
    }
    if (inputs.password == '') {
      xx = 2;
    }
    if (inputs.phone == '') {
      xx = 2;
    }
    if (inputs.address == '') {
      xx = 2;
    }
    if (inputs.name == '') {
      xx = 2;
    }
    if (file == undefined) {
      xx = 2;
    } else {
      if (file[0].size > 1024 * 1024) {
        alert('fail');
      } else {
        alert('oke');
      }
    }

    if (xx == 1) {
      const data = {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
        phone: inputs.phone,
        DoB: inputs.Dob,
        avatar: avatar,
      };
      console.log(data);
    }
  };
  return (
    <div className='Login-page'>
      <div className='Auth-form-container'>
        <form className='Auth-form' onSubmit={handleSubmit}>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Register</h3>
            <div className='input-group-re'>
              <input
                required
                type='text'
                name='name'
                autoComplete='off'
                className='input'
                onChange={handleInput}
              />
              <label className='user-label'>Name</label>
            </div>
            <div className='input-group-re'>
              <input
                required
                type='email'
                name='email'
                autoComplete='off'
                className='input'
                onChange={handleInput}
              />
              <label className='user-label'>Email</label>
            </div>
            <div className='input-group-re'>
              <input
                required
                type='password'
                name='password'
                autoComplete='off'
                className='input'
                onChange={handleInput}
              />
              <label className='user-label'>Password</label>
            </div>
            <div className='input-group-re'>
              <input
                required
                type='password'
                name='confirmpassword'
                autoComplete='off'
                className='input'
                onChange={handleInput}
              />
              <label className='user-label'>Confirm Password</label>
            </div>
            <div className='input-group-re'>
              <input
                required
                type='phone'
                name='phone'
                autoComplete='off'
                className='input'
                onChange={handleInput}
              />
              <label className='user-label'>Phone number</label>
            </div>
            <div className='input-group-re'>
              <input
                required
                type='date'
                name='dob'
                autoComplete='off'
                className='input'
                onChange={handleInput}
              />
            </div>
            <div className='select-group-re'>
              <lable className='role-lable'>
                Role
                <select name='role'>
                  <option value={0}>User</option>
                  <option value={1}>QA</option>
                  <option value={2}>Admin</option>
                </select>
              </lable>
            </div>
            <div className='input-group-re'>
              <input
                required
                type='file'
                name='avatar'
                autoComplete='off'
                accept='.jpg, .png, .jpqeg, .PNG, .JPG'
                className='input'
                onChange={handleFile}
              />
            </div>
            <div className='sm-regis'>
              <button type='submit' className='btn btn-primary'>
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
