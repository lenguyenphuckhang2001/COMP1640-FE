import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { BsPersonCircle } from 'react-icons/Bs';
import './QaManagement.scss'

export const QaManagement = () => {
    const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ id: 1, name: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    setItems([...items, { ...currentItem, id: currentItem.id + 1 }]);
    setCurrentItem({ id: currentItem.id + 1, name: '', description: '' });
  };

  const handleEditItem = (id) => {
    setIsEditing(true);
    const itemToEdit = items.find((item) => item.id === id);
    setCurrentItem(itemToEdit);
  };

  const handleUpdateItem = (event) => {
    event.preventDefault();
    setItems(
      items.map((item) =>
        item.id === currentItem.id ? { ...currentItem } : item
      )
    );
    setCurrentItem({ id: currentItem.id + 1, name: '', description: '' });
    setIsEditing(false);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <Col md={{ span: 6 }}>
       <div className="QA">
       <div className='info'>
          <button>
          <p className='text' >Q&A Manage</p>
          <a className='icon' href="#"><BsPersonCircle /></a>
          </button>
        </div>
      <h1>User</h1>
      <form onSubmit={isEditing ? handleUpdateItem : handleAddItem}>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={currentItem.id}
          onChange={handleInputChange}
          disabled={isEditing}
        />
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={currentItem.name}
          onChange={handleInputChange}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={currentItem.description}
          onChange={handleInputChange}
        />
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
        {isEditing && (
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        )}
      </form>
      <h3>User:</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>ID: {item.id}</span>
            <span>Name: {item.name}</span>
            <span>Description: {item.description}</span>
            <button type="button" onClick={() => handleEditItem(item.id)}>
              Edit
            </button>
            <button type="button" onClick={() => handleDeleteItem(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </Col>
   
  )
}
export default QaManagement;
