import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminProtectedRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('Information'));
    const adminRole = localData?.data?.user?.role;
    if (adminRole !== 'admin') {
      navigate('/');
    }
  }, []);

  return <Outlet />;
};

export default AdminProtectedRoute;
