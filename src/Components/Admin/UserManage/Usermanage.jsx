import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import './Usermanage.scss';

export const Usermanage = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editing, setEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    if (editing) {
      axios
        .put(`http://localhost:3000/api/users${editingUser.id}`, { name, email })
        .then((response) => {
          const updatedUsers = users.map((user) => {
            if (user.id === response.data.id) {
              return response.data;
            }
            return user;
          });
          setUsers(updatedUsers);
          setEditing(false);
          setEditingUser(null);
          setName('');
          setEmail('');
        });
    } else {
      axios.post('http://localhost:3000/api/users', { name, email }).then((response) => {
        setUsers([...users, response.data]);
        setName('');
        setEmail('');
      });
    }
  };

  const handleEditUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditing(true);
    setEditingUser(user);
  };

  const handleDeleteUser = (id) => {
    axios.delete(`/api/users/${id}`).then(() => {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    });
  };

  return (
    <Col md={9}>
      <div className='Usermanage'>
        <h1>User Management</h1>
        <div className='add-user'>
          <form onSubmit={handleAddUser}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type='submit'>{editing ? 'Update User' : 'Add User'}</button>
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEditUser(user)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Col>
  );
};

// import React, { useState, useEffect } from 'react';
// import UserApi from '../../../Api/UserApi';
// import './Usermanage.scss';

// function Useranage() {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

  // useEffect(() => {
  //   setIsLoading(true);
  //   UserApi.getOne()
  //     .then((response) => {
  //       setUsers(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setIsLoading(false);
  //     });
  // }, []);

//   useEffect(() => {
//     (async () => {
//       const response = await UserApi.getOne();
//       console.log('🚀 ~ file: Home.jsx:8 ~ response:', response);
//       setData(response);
//     })();
//   }, []);

//   const handleDelete = (userId) => {
//     setIsLoading(true);
//     UserApi.delete(userId)
//       .then(() => {
//         setUsers(users.filter((user) => user._id !== userId));
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setIsLoading(false);
//       });
//   };

//   const renderUsers = () => {
//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     if (error) {
//       return <p>{error}</p>;
//     }

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>
//                 <button onClick={() => handleDelete(user._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div>
//       <h1>User Management</h1>
//       <button>Add User</button>
//       {renderUsers()}
//     </div>
//   );
// }

// export default Usermanage;
