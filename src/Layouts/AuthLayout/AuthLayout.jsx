import React from "react";
import { Outlet } from "react-router-dom";
import './AuthLayout.scss'
const AuthLayout = () => {
  return (
    <div className="authLayout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
