import React, { useState } from "react";
import "./LoginPage.scss";
import icon_tv from "../../assets/Img/icon/tv.svg";
import InputComponent from "../../components/input/Input";
import personden from "../../assets/Img/womanden.svg";
import persontrang from "../../assets/Img/womantrang.svg";
import LoginWithGoogle from "../../components/loginGoogle/LoginWithGoogle";

const LoginPage = () => {
  const [isPersonEye, setIsPersonEye] = useState(false);
  const handLogin = (e) => {
    e.preventDefault();
  };
  const handlePasswordShow = (e) => {
    setIsPersonEye(e);
  };
  return (
    <div id="Login" className="LoginPage">
      <div className="LoginPage-wrapper">
        <div className="LoginPage-left-content">
          <header>
            <img src={icon_tv} alt="" />
            <h1>Đăng Nhập</h1>
          </header>
          <main>
            <form onSubmit={handLogin}>
              <InputComponent inputType="text" title="Tài khoản" />
              <InputComponent
                inputType="password"
                title="Mật khẩu"
                passwordIsShow={handlePasswordShow}
              />
              <span className="forgotpass">Quên mật khẩu</span>
              <button type="submit" className="btn-login">
                Đăng nhập
              </button>
            </form>
          </main>
          <LoginWithGoogle />
        </div>
        <div className="LoginPage-right-content">
          <span>Chào mừng trở lại</span>
          <img src={isPersonEye ? persontrang : personden} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
