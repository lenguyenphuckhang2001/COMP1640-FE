import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

export const NotFound = () => {
  return (
    <div>
      <div className='container-error'>
        <h2>Oops! Page not found</h2>
        <h1>404</h1>
        <p>Nothing here hehehe!</p>
        <a>
          <Link to='/'>
            <p>Go back Home</p>
          </Link>
        </a>
      </div>
    </div>
  );
};
