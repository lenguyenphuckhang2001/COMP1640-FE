import React, { useState } from 'react';
import './Academic.scss';

export const Academic = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editId !== null) {
      // Edit existing data
      const newData = [...data];
      const index = newData.findIndex((item) => item.id === editId);
      newData[index] = { id: editId, startDate, endDate };
      setData(newData);
      setEditId(null);
    } else {
      // Create new data
      const newData = {
        id: Date.now(),
        startDate,
        endDate,
      };
      setData([...data, newData]);
    }
    setStartDate('');
    setEndDate('');
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
    setEditId(null);
  };

  const handleEdit = (id) => {
    const item = data.find((item) => item.id === id);
    setStartDate(item.startDate);
    setEndDate(item.endDate);
    setEditId(id);
    setShowForm(true);
  };

  return (
    <div className='academic'>
      <div>
        <h1>Academic Year</h1>
        {showForm ? (
          <form onSubmit={handleSubmit}>
            <div className='date'>
              <label htmlFor='startDate'>Start Date:</label>
              <input
                type='date'
                id='startDate'
                value={startDate}
                onChange={handleStartDateChange}
              />
              <label htmlFor='endDate'>End Date:</label>
              <input type='date' id='endDate' value={endDate} onChange={handleEndDateChange} />
            </div>
            <br />
            <button type='submit'>{editId !== null ? 'Save Changes' : 'Submit'}</button>
            <button type='button' onClick={handleShowForm}>
              Cancel
            </button>
          </form>
        ) : (
          <button onClick={handleShowForm}>Create Academic</button>
        )}
        <table>
          <thead>
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
