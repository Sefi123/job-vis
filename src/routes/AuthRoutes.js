import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      {/* <Route path="/reset-password" element={<ForgotPassword />} />
      <Route path="/forgot-Password" element={<ResetPassword />} />
      <Route path="/confirm-for-verification" element={<ConfirmEmail />} />
      <Route path="/confirm" element={<ConfirmPage />} /> */}
    </Routes>
  )
}

export default AuthRoutes