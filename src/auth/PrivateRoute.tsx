import { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { Loading } from '../components';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // If still loading authentication data, display a loading message or spinner
    return <Loading />;
  }

  return <Route path={path} element={!user ? <Navigate to="/login" /> : element} />;
};
