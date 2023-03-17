import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainDash } from '../../Components/Admin/MainDash/MainDash';
import { Sidebar } from '../../Components/Admin/Sidebar/Sidebar';
export const Admin = () => {
  return (
    <>
        <Sidebar/>
        <Outlet/>
    </>
  );
};
