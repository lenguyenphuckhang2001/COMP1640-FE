import React, { useState } from 'react';
import './QaManage.scss';

export const QaManage = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({
    id: 0,
    name: '',
    date: new Date(),
  });
  const [showCreateForm, setShowCreateForm] = useState(false);

  const addTodo = () => {
    if (!currentTodo.name) {
      alert('Please enter name');
      return;
    }
    const newTodo = {
      ...currentTodo,
      id: todos.length + 1,
    };
    setTodos([...todos, newTodo]);
    setCurrentTodo({
      id: 0,
      name: '',
      date: new Date(),
    });
    setShowCreateForm(false);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setCurrentTodo(todoToEdit);
      setShowCreateForm(true);
    }
  };

  const updateTodo = () => {
    const updatedTodos = todos.map((todo) => (todo.id === currentTodo.id ? currentTodo : todo));
    setTodos(updatedTodos);
    setCurrentTodo({
      id: 0,
      name: '',
      date: new Date(),
    });
    setShowCreateForm(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTodo({
      ...currentTodo,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setCurrentTodo({
      ...currentTodo,
      date,
    });
  };

  return (
    <div className='QaManage'>
      <div className='crud_QaManage'>
        <div>
          <h1>Q&A Management</h1>
          <button className='create' onClick={() => setShowCreateForm(!showCreateForm)}>
            Create Department
          </button>
          {showCreateForm && (
            <div>
              <label htmlFor='name' className='todo-label'>
                Name:{' '}
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={currentTodo.name}
                onChange={handleInputChange}
                className='todo-input'
              />
              <br />
              <label htmlFor='date' className='todo-label'>
                Date:{' '}
              </label>
              <input
                type='date'
                id='date'
                name='date'
                value={currentTodo.date.toISOString().substr(0, 10)}
                onChange={(event) => handleDateChange(new Date(event.target.value))}
                className='todo-input-date'
              />
              <br />
              {currentTodo.id !== 0 ? (
                <button onClick={updateTodo}>Update</button>
              ) : (
                <button onClick={addTodo}>Add Item</button>
              )}
              <button onClick={() => setShowCreateForm(false)}>Cancel</button>
            </div>
          )}
          <table>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td style={{ borderRadius: '5px 0 0 5px' }}>{todo.id}</td>
                  <td>{todo.name}</td>
                  <td>{todo.date.toDateString()}</td>
                  <td style={{ borderRadius: '0 5px 5px 0 ' }}>
                    <button className='edit' onClick={() => editTodo(todo.id)}>
                      Edit
                    </button>
                    <button className='del' onClick={() => deleteTodo(todo.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
