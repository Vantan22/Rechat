import React, { useState } from "react";
import "./LoginPage.scss";
import icon_tv from "../../assets/Img/icon/tv.svg";
import InputComponent from "../../components/input/Input";
import personden from "../../assets/Img/womanden.svg";
import persontrang from "../../assets/Img/womantrang.svg";
import LoginWithGoogle from "../../components/loginGoogle/LoginWithGoogle";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [isPersonEye, setIsPersonEye] = useState(false);
  const handleLogin = (e) => {

    console.log(e);
  };
  const handlePasswordShow = (e) => {
    setIsPersonEye(e);
  };
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  return (
    <div id="Login" className="LoginPage">
      <div className="LoginPage-wrapper">
        <div className="LoginPage-left-content">
          <header>
            <img src={icon_tv} alt="" />
            <h1>Đăng Nhập</h1>
          </header>
          <main>
            <form onSubmit={handleSubmit(handleLogin)} method="post">
              <InputComponent inputType="text" title="Tài khoản" inputValue={...register('userName',{ required: true })}/>
              <InputComponent
                inputType="password"
                title="Mật khẩu"
                passwordIsShow={handlePasswordShow}
                inputValue={...register('password',{ required: true })}
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
          <span className="chao-mung-tro-lai">Chào mừng trở lại</span>
          <img src={isPersonEye ? persontrang : personden} alt="" />
          <div className="dang-ki-o-day ">
            <span>Đăng ký ở đây nè</span>
            <Link>Đăng Ký</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
