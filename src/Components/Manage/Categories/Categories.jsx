import React, { useState } from 'react';
import { useEffect } from 'react';
import './Categories.scss';
import TagApi from '../../../Api/TagApi';

export const Categories = () => {
  const [todos, setTodos] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
  });
  useEffect(() => {
    (async () => {
      const res = await TagApi.getAll();
      setTodos(res);
    })();
  }, [todos]);

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let xx = 1;
    console.log(inputs)
    if (inputs.name == '') {
        xx = 2;   
    }
    if (inputs.description == '') {
        xx = 2;
    }
    if (xx == 1) {
      if(inputs._id !== ''){
        const id = inputs._id
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

  const deleteTodo = async (e) => {
    const todoToDelete = todos.find((todo) => todo._id === e.target.id);
    if(todoToDelete){
      const id = todoToDelete._id
      const res = await TagApi.delete(id);
      console.log(res);
    }
  };

  const handleEdit = (e) => {
    const todoToEdit = todos.find((todo) => todo._id === e.target.id);
    if(todoToEdit){
       setInputs(todoToEdit)
       setShowCreateForm(true);
    }
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
                  value={inputs.name}
                />
                <br />
                <label htmlFor='name' className='todo-label'>
                  Description categories
                </label>
                <textarea name='description' onChange={handleInput} value={inputs.description} />
                <br />
                <button type='submit'>
                {inputs._id !== undefined ? ('Update Categories') : ('Add categories')}
                </button>
        
              </form>tt
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
                      id={todo._id}
                      onClick={deleteTodo}>
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
