import React from "react";
import eyes_hide_icon from "../../assets/Img/icons/eye-slash.svg";
import eyes_icon from "../../assets/Img/icons/eye.svg";
const input = ({ inputType, title }) => {
  const [isShowPass, setIsShowpass] = useState(false);
  const handleShowPass = ()=>{
    setIsShowpass(true)
}
  return (
    <div className="InputComponent">
      <span>{title}</span>
      <div className="InputComponent-input">
        <input type={inputType} />
        <img src={isShowPass ? eyes_icon : eyes_hide_icon} alt={isShowPass ? 'hiện mật khẩu': 'ẩn mật khẩu'} onClick={handleShowPass}/>
      </div>
    </div>
  );
};

export default input;
