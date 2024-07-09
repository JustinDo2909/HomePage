import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem('token')

  if (auth === null) {
    // Redirect them to the login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the children components
  return children;
};

export default PrivateRoute;