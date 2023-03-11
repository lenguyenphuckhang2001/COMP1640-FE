import React from 'react';
import './ChangePassword.scss';
import { Col } from 'react-bootstrap';

export const ChangePassword = () => {
  return (
    <Col md={{ span: 6, offset:3 }}>
      <div className='change-password'>
        <h2>Change Password</h2>
        <form>
          <label>Current password:</label>
          <input type='Password' required />
          <label>New password:</label>
          <input type='Password' required />
          <label>Confirm password:</label>
          <input type='Password' required />
          <button>Change</button>
        </form>
      </div>
    </Col>
  );
};
