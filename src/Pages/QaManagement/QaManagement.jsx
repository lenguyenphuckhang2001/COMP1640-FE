import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import './QaManagement.scss'
import { NavLink, Outlet } from 'react-router-dom';

export const QaManagement = () => {
    
  return (
    <Col md={{ span: 6 }}>
      <div className='QA'>
      <div className='title'>
          <h3>Q&A Management</h3>
        </div>
        <div className="row">
          <div className="col-md-2">
          <div>
            <div>
            <NavLink to='department'>Department</NavLink>
            </div>
            <div>
            <NavLink to='categories'>Categories</NavLink>
            </div>
           <div>
           <NavLink to='downloadData'>Download Data</NavLink>
           </div>
           <div>
           <NavLink to='statistical'>Statistical</NavLink>
           </div>
           <div>
           <NavLink to='academic'>Academic Year</NavLink>
           </div>
          </div>
          </div>
        </div>
          <main>
            <Outlet />
          </main>
      </div>
    </Col>
   
  )
}
export default QaManagement;
