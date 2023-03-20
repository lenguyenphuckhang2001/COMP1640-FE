import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import './Manage.scss';
import { NavLink, Outlet } from 'react-router-dom';

export const QaManagement = () => {
  return (
    <Col md={{ span: 12 }}>
      <div className='row QA'>  
        <div className='manage '>
          <div className='col-md-2 list_item'>
            <ul>
            <li>
              <NavLink to='QaManagement'>Q&A Management</NavLink>
            </li>
            <li>
              <NavLink to='department'>Department</NavLink>
            </li>
            <li>
              <NavLink to='QaCoordinator'>Q&A Coordinator</NavLink>
            </li>
            <li>
              <NavLink to='categories'>Categories</NavLink>
            </li>

            <li>
              <NavLink to='downloadData'>Download Data</NavLink>
            </li>

            <li>
              <NavLink to='statistical'>Statistical</NavLink>
            </li>

            <li>
              <NavLink to='academic'>Academic Year</NavLink>
            </li>
            </ul>
          </div>         
          <div className='col-md-10 items'>
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default QaManagement;
