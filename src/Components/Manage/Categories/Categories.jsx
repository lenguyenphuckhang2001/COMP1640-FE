import React, { useState } from 'react';
import { useEffect } from 'react';
import './Categories.scss';
import TagApi from '../../../Api/TagApi';
import { Link, Outlet, useLocation } from 'react-router-dom';
export const Categories = () => {
  const [todos, setTodos] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
  });
  const [currentTodo, setCurrentTodo] = useState({
    _id:'',
    name: '',
    description: '',
  });
  useEffect(() => {
    (async () => {
      const res = await TagApi.getAll();
      setTodos(res);
    })();
  }, []);
  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let xx = 1;
    console.log(inputs)
    console.log(currentTodo._id)
    if (inputs.name == '') {
      if(currentTodo.name !== ''){
        inputs.name = currentTodo.name
      }
      else{
        xx = 2;
      }
      
    }
    if (inputs.description == '') {
      if(currentTodo.description !== ''){
        inputs.description = currentTodo.description
      }
      else{
        xx = 2;
      }
    }
    if (xx == 1) {
      if(currentTodo._id !== ''){
        const id = currentTodo._id
        const data = {
        name: inputs.name,
        description: inputs.description,
        };
        const res = await TagApi.update(id, data);
        console.log(res);
      }
      else{
        const data = {
          name: inputs.name,
          description: inputs.description,
          };
          const res = await TagApi.create(data);
          console.log(res);
      }
      
    }
  };

  // const deleteTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  const handleEdit = (e) => {
    const todoToEdit = todos.find((todo) => todo._id === e.target.id);
    if(todoToEdit){
       setCurrentTodo(todoToEdit)
       setShowCreateForm(true);
    }
   
  };

  const updateTodo = () => {
    // const updatedTodos = todos.map((todo) => (todo.id === currentTodo.id ? currentTodo : todo));
    // setTodos(updatedTodos);
    // setCurrentTodo({
    //   id: 0,
    //   name: '',
    //   date: new Date(),
    // });
    // setShowCreateForm(false);
  };

  return (
    <div className='categories'>
      <div className='crud_categories'>
        <div>
          <h1>Categories</h1>
          <button onClick={() => setShowCreateForm(!showCreateForm)}>Create New Categories</button>
          {showCreateForm && (
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor='name' className='todo-label'>
                  Name categories:{' '}
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  onChange={handleInput}
                  className='todo-input'
                  defaultValue={currentTodo.name}
                />
                <br />
                <label htmlFor='name' className='todo-label'>
                  Description categories
                </label>
                <textarea name='description' onChange={handleInput} defaultValue={currentTodo.description} />
                <br />
                {currentTodo._id !== '' ? (<button type='submit'>Update</button>) : (<button type='submit'>Add categories</button>)}
              </form>
            </div>
          )}
          <table>
            <thead>
              <tr>
                <th style={{ borderRadius: '5px 0 0 5px' }}>Number</th>
                <th>Name</th>
                <th>Date</th>
                <th style={{ borderRadius: '0 5px 5px 0 ' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, key) => (
                <tr className='column'>
                  <td>{key + 1}</td>
                  <td>{todo.name}</td>
                  <td>{todo.updatedAt.substring(0, 10)}</td>
                  <td>
                    <button className='edit' onClick={handleEdit} id={todo._id}>
                      Edit
                    </button>
                    <button
                      className='del'
                      // onClick={() =>
                      //   (todo.id)}
                    >
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
