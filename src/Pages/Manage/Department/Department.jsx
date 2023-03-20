import React from 'react';
import './Department.scss'

export const Department = () => {
  return (

      <div className='department'>
        <div className='title'>
          <h1>Department</h1>
        </div>
        <div className='list'>
          <div>
            <label htmlFor='#'> Name</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor='#'> Description</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor='#'> Manager</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor='#'> Member</label>
            <input type='text' />
          </div>
        </div>
      </div>

  );
};
