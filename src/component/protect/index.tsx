import React from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';

interface PrivateRouteProps {
    element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const token = localStorage.getItem('token'); // Ambil token dari localStorage

    // Jika tidak ada token, arahkan ke halaman login
    return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
