import React from "react";
import { Outlet } from "react-router-dom";
import "./AuthLayout.scss";
import icon__google from "../../assets/Img/icon/google_icon.svg";
const AuthLayout = () => {
  return (
    <div className="authLayout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
