import { convertLength } from '@mui/material/styles/cssUtils';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CreateUser.scss';
import UserApi from '../../../Api/UserApi';
import { useMutation } from 'react-query';
import Error from '../../../Components/Error/Error';
import { useNavigate } from 'react-router-dom';

export const CreateUser = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    username: '',
    phonenumber: '',
    role: 'user',
  });
  const [startDate, setStartDate] = useState(new Date());
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };
  const mutation = useMutation({
    mutationFn: async (data) => {
      console.log(data)
      return await UserApi.register(data)
    },
    onError: (error) => {
        if(error){
            let errorSubmit = {};
            errorSubmit.faile = '' + error.response.data.message + '';
            console.log();
            setErrors(errorSubmit);
        }
        else{
            navigate('/Account/admin/user');
        }
      
    },

    
  })
  
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
    if (xx == 1) {
      const data = {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
        phone: inputs.phone,
        DoB: startDate,
      };
      mutation.mutate(data) 
    }

  };
  return (
    <div className='Createuser-page'>
      <div className='Auth-form-container'>
        <form className='Auth-form' onSubmit={handleSubmit} >
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Form create user</h3>
            <Error errors={errors} />
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
            <div className='input-group-re right'>
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
            <div className='input-group-re right'>
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
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
