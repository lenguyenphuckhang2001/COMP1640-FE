import React, { useState } from 'react';
import { useEffect } from 'react';
import './Categories.scss';
import TagApi from '../../../Api/TagApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col } from 'react-bootstrap';

export const Categories = () => {
  const [todos, setTodos] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
  });
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    (async () => {
      const res = await TagApi.getAll();
      setTodos(res);
    })();
  }, [refreshKey]);

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let xx = 1;
    console.log(inputs);
    if (inputs.name == '') {
      xx = 2;
      const file = await ToastNotice('Please enter name');
    }
    if (inputs.description == '') {
      xx = 2;
      const file = await ToastNotice('Please enter description');
    }
    if (xx == 1) {
      const file = await ToastNotice('Success create tag');
      if (inputs._id !== undefined) {
        const id = inputs._id;
        const data = {
          name: inputs.name,
          description: inputs.description,
        };
        const res = await TagApi.update(id, data);
        setRefreshKey((oldKey) => oldKey + 1);
        console.log(res);
        console.log(inputs);
      } else {
        const data = {
          name: inputs.name,
          description: inputs.description,
        };
        const res = await TagApi.create(data);
        setRefreshKey((oldKey) => oldKey + 1);
        console.log(res);
      }
    }
  };

  const deleteTodo = async (e) => {
    const todoToDelete = todos.find((todo) => todo._id === e.target.id);
    if (todoToDelete) {
      const id = todoToDelete._id;
      try {
        const res = await TagApi.delete(id);
        setRefreshKey((oldKey) => oldKey + 1);
        const file = await ToastNotice(res.message);
      } catch (res) {
        const file = await ToastNotice(res.response.data.error.message);
      }
    }
    const file = await ToastNotice();
  };

  const ToastNotice = (file) => {
    toast.success(file);
  };

  const handleEdit = (e) => {
    const todoToEdit = todos.find((todo) => todo._id === e.target.id);
    if (todoToEdit) {
      setInputs(todoToEdit);
      setShowCreateForm(true);
    }
  };
  const handleReturn = (e) => {
    if (inputs) {
      setInputs({});
      setShowCreateForm(false);
    }
  };
  return (
    <Col md={9}>
      {' '}
      <div className='categories'>
        <div className='crud_categories'>
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
          />
          <div>
            <h1>Categories</h1>
            <button onClick={() => setShowCreateForm(!showCreateForm)}>
              Create New Categories
            </button>
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
                    {inputs._id !== undefined ? 'Update Categories' : 'Add categories'}
                  </button>
                  <button onClick={handleReturn}>Cancel</button>
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
                      <button className='del' id={todo._id} onClick={deleteTodo}>
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
    </Col>
  );
};
