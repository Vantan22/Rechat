import React, { useState } from "react";
import eyes_hide_icon from "../../assets/Img/icon/eye-slash.svg";
import eyes_icon from "../../assets/Img/icon/eye.svg";
const InputComponent = ({ inputType, title, passwordIsShow, inputValue }) => {
  const [isShowPass, setIsShowpass] = useState(false);
  const handleShowPass = () => {
    setIsShowpass(!isShowPass);
    passwordIsShow(!isShowPass);
  };
  return (
    <div className="InputComponent">
      <span>{title}</span>
      <div className="InputComponent-input">
        <input
          {...inputValue}
          type={isShowPass ? "text" : inputType}
          className="input input-primary"
        />
        {inputType === "password" && (
          <img
            className="pointer"
            src={isShowPass ? eyes_hide_icon : eyes_icon}
            alt={isShowPass ? "hiện mật khẩu" : "ẩn mật khẩu"}
            onClick={handleShowPass}
          />
        )}
      </div>
    </div>
  );
};

export default InputComponent;
