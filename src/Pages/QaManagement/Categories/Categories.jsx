import React, { createContext, useState } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Col } from 'react-bootstrap';
import './Categories.scss';

export const Categories = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({
    id: 0,
    name: '',
    date: new Date(),
  });
  const [showCreateForm, setShowCreateForm] = useState(false);

  const addTodo = () => {
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
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
      setCurrentTodo(todoToEdit);
      setShowCreateForm(true);
    }
  };

  const updateTodo = () => {
    const updatedTodos = todos.map(todo =>
      todo.id === currentTodo.id ? currentTodo : todo
    );
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
    <div className='department'>
  <div className='item'>
    <div>
      <h1>Todo List</h1>
      <button onClick={() => setShowCreateForm(!showCreateForm)}>
        Create New Todo
      </button>
      {showCreateForm && (
        <div>
          <label htmlFor="name" className="todo-label">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={currentTodo.name}
            onChange={handleInputChange}
            className="todo-input"
          />
          <br />
          <label htmlFor="date" className="todo-label">Date: </label>
          <input
            type="date"
            id="date"
            name="date"
            value={currentTodo.date.toISOString().substr(0, 10)}
            onChange={event => handleDateChange(new Date(event.target.value))}
            className="todo-input"
          />
          <br />
          {currentTodo.id !== 0 ? (
            <button onClick={updateTodo}>Save Changes</button>
          ) : (
            <button onClick={addTodo}>Create New Todo</button>
          )}
          <button onClick={() => setShowCreateForm(false)}>Cancel</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>{todo.date.toDateString()}</td>
              <td>
              <button className='edit' onClick={() => editTodo(todo.id)}>Edit</button>
                <button className='del' onClick={() => deleteTodo(todo.id)}>Delete</button>
                
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
