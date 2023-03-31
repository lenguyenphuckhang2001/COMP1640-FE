import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const customId = 'custom-id-yes';

  const [isLogin, setIsLogin] = useState(() => {
    const token = localStorage.getItem('true');
    if (token) {
      return true;
    } else {
      return false;
    }
  });

  //   console.log('🚀 ~ file: ProtectedRoute.jsx:10 ~ ProtectedRoute ~ isLogin:', isLogin);
  useEffect(() => {
    if (!isLogin) {
      toast.info('👺 You need to login to access this page', {
        toastId: customId,
      });
      navigate('/Account/login');
    }
  }, []);
  return <Outlet />;
};

export default ProtectedRoute;
