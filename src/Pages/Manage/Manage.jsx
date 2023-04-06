import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import './Manage.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { Sidebar } from '../../Components/Manage/Sidebar/Sidebar';

export const QaManagement = () => {
  return (
    <>
        <Sidebar/>
        <Outlet />
    </>
  );
};
export default QaManagement;
