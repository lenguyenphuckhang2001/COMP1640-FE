import { convertLength } from '@mui/material/styles/cssUtils';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CreateUser.scss';
import UserApi from '../../../Api/UserApi';
import { useMutation } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CreateUser = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    name: '',
    role: 'user',
  });
  const [startDate, setStartDate] = useState(new Date());
  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };
  const mutation = useMutation({
    mutationFn: async (data) => {
      return await UserApi.register(data);
    },
    onError: async (error) => {
      const toastError = await ToastError(error.response.data.message);
    },
    onSuccess: async () => {
      const toastSuccess = await ToastSucces();
    },
  });
  const ToastError = (file) => {
    toast.success(file);
  };
  const ToastSucces = (file) => {
    toast.success('Success create user');
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
    if (inputs.name == '') {
      xx = 2;
    }
    if (inputs.DoB == '') {
      xx = 2;
    }
    if (xx == 1) {
      const data = {
        username: inputs.name,
        email: inputs.email,
        password: '3213123cxz',
        role: inputs.role,
      };
      mutation.mutate(data);
    }
  };
  return (
    <div className='Createuser-page'>
      <div className='Auth-form-container'>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
        <form className='Auth-form' onSubmit={handleSubmit}>
          <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Form create user</h3>
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
            <div className='input-group-re'>
              <DatePicker
                selected={startDate}
                dateFormat='dd/MM/yyyy'
                maxDate={new Date()}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className='select-group-re'>
              <lable className='role-lable'>
                Role :
                <select name='role' onChange={handleInput} value={inputs.role}>
                  <option value={'user'}>User</option>
                  <option value={'qa'}>QA</option>
                  <option value={'qa_coordinator'}>QA Coordinator</option>
                  <option value={'admin'}>Admin</option>
                </select>
              </lable>
            </div>
            <div className='sm-regis'>
              <button type='submit' className='btn btn-primary'>
                {mutation.isLoading ? 'isloading' : 'Create user'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
