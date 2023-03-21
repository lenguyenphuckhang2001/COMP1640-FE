import { Col } from 'react-bootstrap';
import './Usermanage.scss';
import React, { useState } from 'react';

export const Usermanage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddUser = () => {
    if (!editing) {
      setUsers([...users, newUser]);
      setNewUser({ name: '', email: '' });
    } else {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = newUser;
      setUsers(updatedUsers);
      setNewUser({ name: '', email: '' });
      setEditing(false);
      setEditingIndex(null);
    }
  };
  const handleEditUser = (index) => {
    setNewUser(users[index]);
    setEditing(true);
    setEditingIndex(index);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <Col md={8}>
      <div className='Usermanage'>
        <h1>User Manage</h1>
        <form onSubmit={handleAddUser}>
          <div className='userM'>
            <div className='add-user'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              />
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </div>

            <button type='submit'>{editing ? 'Update User' : 'Add User'}</button>
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <th style={{borderRadius:'5px 0 0 5px'}}>Name</th>
              <th>Email</th>
              <th style={{borderRadius:'0 5px 5px 0'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEditUser(index)}>Edit</button>
                  <button onClick={() => handleDeleteUser(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Col>
  );
};
