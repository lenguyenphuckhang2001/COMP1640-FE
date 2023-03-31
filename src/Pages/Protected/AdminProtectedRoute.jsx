import React from 'react';
import { useEffect } from 'react';
import { Outlet, redirect } from 'react-router-dom';

const AdminProtectedRoute = () => {
  //check if user is admin or not
  //if not admin, redirect to home page
  //if admin, render the component
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('Information'));
    const adminRole = localData?.data.user.role;
    if (adminRole !== 'admin') {
      return redirect('/');
    }
  }, []);

  return <Outlet />;
};

export default AdminProtectedRoute;
