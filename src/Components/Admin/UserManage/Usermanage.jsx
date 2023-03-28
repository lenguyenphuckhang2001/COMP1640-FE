import { Col } from 'react-bootstrap';
import './Usermanage.scss';
import React, { useState } from 'react';

export const Usermanage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddUser = (e) => {
    e.preventDefault();
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

  return (
    <Col md={8}>
      <div className='Usermanage'>
        <h1>User Manager</h1>
        <form onSubmit={handleAddUser}>
          <div className='userM'>
            <div className='add-user'>
            </div>

            <button type='submit'>{editing ? 'Update User' : 'Add User'}</button>
          </div>
        </form>
      </div>
    </Col>
  );
};
