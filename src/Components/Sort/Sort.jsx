import React from 'react';
import './Sort.scss';

export const Sort = () => {
  return (
    <div className='sort'>
        <h4 className='qtyanswer'>1 Answer</h4>
        <p>SORTED BY</p>
      <div className='form-sl'>
        <select>
          <option selected value='0'>
            Highest score(default)
          </option>
          <option value='1'>Date modified</option>
          <option value='2'>No JS</option>
          <option value='3'>Nice!</option>
        </select>
      </div>
    </div>
  );
};
