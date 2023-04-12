import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import { useQuery } from 'react-query';
import UserApi from '../../../Api/UserApi';
import './Usermanage.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useMutation } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Usermanage = () => {
  const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    name: '',
    phonenumber:'',
    role: 'user',
  });
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    (async () => {
      const res = await UserApi.getAll();
      setUsers(res);
    })();
  }, [refreshKey]);
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
    if (inputs.phonenumber == '') {
      xx = 2;
    }
    if (xx == 1) {
      const data = {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
        phonenumber: inputs.phonenumber,
        role: inputs.role,
      };
      mutation.mutate(data);
    }
  };
  const handleDelete = async (e) => {
    const todoToDelete = users.find((users) => users._id === e.target.id);
    const id = todoToDelete._id;
    try {
      const res = await UserApi.delete(id);
      console.log(res)
      setRefreshKey(oldKey => oldKey +1)
      const file = await ToastNotice("Dellete success");
    } catch (res) {
      const file = await ToastNotice("Dellete error");
    }
  }
  const ToastNotice = (file) => {
    toast.success(file);
  }; 
  return (
    <Col md={9}>
      <div className='Usermanage'>
        <h1>User Management</h1>
        <div className='Createuser-page'>
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
          <div className='Auth-form-container'>
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
                  <input
                    required
                    type='text'
                    name='phonenumber'
                    autoComplete='off'
                    className='input'
                    onChange={handleInput}
                  />
                  <label className='user-label'>Phone Number</label>
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
                <button type='submit'>
                    {mutation.isLoading ? 'isloading' : inputs._id !== undefined ? 'Update User' : 'Add User'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={handleDelete} id={user._id}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Col>
  );
};
