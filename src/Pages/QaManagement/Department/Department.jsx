import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Col } from 'react-bootstrap';
import './Department.scss';

export const Department = () => {

  // crud department
  const [items, setItems] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const addItem = () => {
    // Check if all fields are filled in
    if (!id || !name || !date) {
      alert('Please fill in all fields');
      return;
    }
    if (!id) {
      alert('Require ID');
      return;
    }
    if (!name) {
      alert('Require Name');
      return;
    }
    if (!date) {
      alert('Require Date');
      return;
    }

    const newItem = {
      id: id,
      name: name,
      date: date,
    };
    setItems([...items, newItem]);
    setId('');
    setName('');
    setDate('');
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  //crud Q&A Coordinator

  

  //tag input
  const [tags, setTags] = useState([]);

  function handleChange(tags) {
    setTags(tags);
  }

  return (
    <div className='department'>
      <div className='row '>
      <div className='col-md-6 '>
        <div className='crud-department'>
        <h2>Create Department</h2>
        <div className='item'>
          <div className='id'>
            <label>ID:</label>
            <input type='id' value={id} onChange={handleIdChange} />
          </div>
          <div className='name'>
            <label>Name:</label>
            <input type='name' value={name} onChange={handleNameChange} />
          </div>
        </div>
        <div className='date'>
          <label>Date:</label>
          <input type='date' value={date} onChange={handleDateChange} />
        </div>
        <div className='add-item'>
          <button onClick={addItem}>Add Item</button>
        </div>
        <table>
          <thead>
            <tr>
              <th style={{ borderRadius: '5px 0px 0px 5px' }}>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th style={{ borderRadius: '0px 5px 5px 0px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>
                  <button onClick={() => deleteItem(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <div className='col-md-6'>
        <h2>Q&A Coordinator</h2>
      </div>
      {/* tag input */}
      <div className='col-md-12'>
      <div className='tag-input'>
      <TagsInput value={tags} onChange={handleChange} />
    </div>
      </div>
    </div>
    </div>
  );
};
