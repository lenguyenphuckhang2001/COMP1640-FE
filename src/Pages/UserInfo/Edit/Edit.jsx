import React, { useEffect, useState } from 'react';
import './Edit.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import UserApi from '../../../Api/UserApi';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Edit = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    phonenumber:'',
  });
  const check = localStorage.getItem("true")
  useEffect(()=>{
    if(check){
        const data = JSON.parse(localStorage.getItem("Information"));
        (async () => {
          const res = await UserApi.getOne(data.data.user.userId);
          setInputs(res)
        })();
    }
    },[])
    const handleInput = (e) => {
      const nameInput = e.target.name;
      const value = e.target.value;
      setInputs((state) => ({ ...state, [nameInput]: value }));
    };
    console.log(inputs)
    const createPostMutation = useMutation({
      mutationFn: async (dataUser) => {
        return await UserApi.update(inputs._id,dataUser);
      },
      onSuccess: (dataUser) => {
        toast.success('🥳 Change successfully');
      },
      onError: async (error) => {
        if (error.response.status === 400 && error.response.data.error) {
          return toast.error('🥺 ' + error.response.data.error);
        }
      },
    });
    const handleSubmit = async (e) => {
      e.preventDefault();
      let xx = 1;

      if (inputs.username == '') {
        xx = 2;     
      }
      if (inputs.email == '') {
        xx = 2;
      }
      if (inputs.phonenumber == '') {
        xx = 2;
      }
      if (xx == 1) {
        const dataUser = {
          username: inputs.username,
          email: inputs.email,
          phonenumber: inputs.phonenumber,
        }
        createPostMutation.mutate(dataUser);
        // console.log(dataUser)
        // const res = await UserApi.update(inputs._id,dataUser)
        // console.log(res)
        // const file = await ToastNotice('Success change information');
      }
    };
    const ToastNotice = (file) => {
      toast.success(file);
    };
  return (
    <div className='edit-info'>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>User name:</label>
        <input type='text' value={inputs.username} name='username' required onChange={handleInput}/> 
        <label>Email:</label>
        <input type='text' required value={inputs.email} name='email' onChange={handleInput}/>
        <label>Phone number:</label>
        <input type='text' required value={inputs.phonenumber} name='phonenumber' onChange={handleInput}/>
        <button>Submit</button>
      </form>
      <div className='change-pass'>
        <Link to='/change-password'>ChangePassword</Link>
      </div>
    </div>
  );
};
