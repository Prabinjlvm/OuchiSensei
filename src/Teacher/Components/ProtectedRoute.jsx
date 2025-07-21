import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('teacherToken');
  const isLoggedIn = !!token;
  if (!isLoggedIn) {
    return <Navigate to="/teacher-login" replace />;
  }
  return children;
} 