import React from "react";
import icon__google from '../../assets/Img/icon/google_icon.svg'
import './LoginWithGooole.scss'
const LoginWithGoogle = () => {
  return (
    <footer className="login-with-google">
      <span className="login-with">hoặc đăng nhập với</span>
      <div className="flex items-center">
        <img src={icon__google} alt="" />
        <span>Google</span>
      </div>
    </footer>
  );
};

export default LoginWithGoogle;
