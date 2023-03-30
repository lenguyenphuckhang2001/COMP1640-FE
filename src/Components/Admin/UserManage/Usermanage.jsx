import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import './Usermanage.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const Usermanage = () => {
  let params = useLocation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleEditUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditing(true);
    setEditingUser(user);
  };

  const handleDeleteUser = (id) => {
    axios.delete(`/api/users/${id}`).then(() => {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    });
  };

  return (
    <Col md={9}>
      <div className='Usermanage'>
        <h1>User Management</h1>
        <div className='add-user'>
            <button type='submit'>
            {params['pathname'].includes('createuser')  ? (
            <Link to='/Account/admin/user/'>Final create user</Link>
            ) : (
              <Link to='createuser'>Create User</Link>
            )} 
            </button>
        </div>
        <Outlet/>
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
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEditUser(user)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Col>
  );
};