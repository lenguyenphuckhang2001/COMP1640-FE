import { convertLength } from '@mui/material/styles/cssUtils';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Register.scss';
import UserApi from '../../Api/UserApi';

export const Register = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    username: '',
    phonenumber: '',
    role: 'User',
  });
  // const [avatar, setAvatar] = useState();
  // const [fileAvatar, setFileAvatar] = useState();
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate)
  // const handleFile = async (e) => {
  //   const file = e.target.files[0];
  //   setFileAvatar(e.target.files[0]);
  //   const base64 = await convertBase64(file);
  //   console.log(base64)
  //   setAvatar(base64)
  // }
  // const convertBase64 = (file) =>{
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new  FileReader();
  //     fileReader.readAsDataURL(file)
  //     fileReader.onload = () => {
  //       resolve(fileReader.result)
  //       console.log(resolve)
  //     }
  //     fileReader.onerror = (error) =>{
  //       reject(error);
  //     };
  //   })
  // }
  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };

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
    if (inputs.DoB == '') {
      xx = 2;
    }
    // if (fileAvatar == undefined) {
    //   xx = 2;
    // } else {
    //   if (fileAvatar.size > 1024 * 1024) {
    //     alert('fail');
    //   } else {
    //     alert('oke');
    //   }
    // }
    if (xx == 1) {
      const data = {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
        phone: inputs.phone,
        DoB: startDate,
        // avatar: avatar,
      };
      (async () => {
    
          const res = await UserApi.register(data);
          if(res){
            console.log(res)
            navigate('/Account/login');	
          }
      })();
    }
  };
  return (
    <div className='Login-page'>
      <div className='Auth-form-container'>
        <form className='Auth-form' onSubmit={handleSubmit} enctype='multipart/form-data'>
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
              <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" maxDate={new Date()} onChange={(date) => setStartDate(date)} />
            </div>

            {/* <div className='input-group-re'>
              <input
                required
                type='file'
                name='avatar'
                autoComplete='off'
                accept='.jpg, .png, .jpqeg, .PNG, .JPG'
                className='input'
                onChange={handleFile}
              />
            </div> */}
            <div className='select-group-re'>
              <lable className='role-lable'>
                Role
                <select name='role' onChange={handleInput} value={inputs.role}>
                  <option value={"user"}>User</option>
                  <option value={"qa"}>QA</option>
                  <option value={"qa_coordinator"}>QA Coordinator</option>
                  <option value={"admin"}>Admin</option>
                </select>
              </lable>
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
