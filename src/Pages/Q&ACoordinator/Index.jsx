import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainDash } from '../../Components/QACoordinator/MainDashQA/MainDash';
import { Sidebar } from '../../Components/QACoordinator/SidebarQA/Sidebar';
import { Usermanage } from '../../Components/Admin/UserManage/Usermanage';
export const QACoordinatorDashboard = () => {
  return (
    <>
      <Sidebar />
      <MainDash />
      <Usermanage/>
      <Outlet />
    </>
  );
};
