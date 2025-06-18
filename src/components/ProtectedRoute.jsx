// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/auth';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = getCurrentUser();

  if (!user) return <Navigate to="/login" />;
  if (!allowedRoles.includes(user.rol)) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
