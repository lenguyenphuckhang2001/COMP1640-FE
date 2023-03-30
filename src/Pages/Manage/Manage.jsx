import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import './Manage.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { Sidebar } from '../../Components/Manage/Sidebar/Sidebar';

export const QaManagement = () => {
  return (
    <Col md={{ span: 12 }}>
      <div className='row QA'>
        <div className='manage '>
          <Sidebar/>
          <div className='col-md-9 items'>
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
