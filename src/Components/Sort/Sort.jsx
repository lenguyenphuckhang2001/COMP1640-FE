import React from 'react';
import './Sort.scss';

export const Sort = ({ commentsNumber }) => {
  return (
    <div className='sort'>
      <h4 className='qtyanswer'>{commentsNumber} Answer</h4>
      <p>SORTED BY</p>
      <div className='form-sl'>
        <select>
          <option selected value='0'>
            Highest score(default)
          </option>
          <option value='1'>Date modified(newleast)</option>
          <option value='2'>Date modified(oldiest)</option>
          <option value='3'>No JS</option>
          <option value='4'>Nice!</option>
        </select>
      </div>
    </div>
  );
};
