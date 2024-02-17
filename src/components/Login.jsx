// Login.js
import React from "react";
import { useNavigate } from "react-router-dom";
import icon_fb from "/icon_fb.png";
import icon_ld from "/icon_ld.png";
import icon_g from "/icon_g.png";
import "../css/pages/login.css";

const Login = () => {
  const navigateTo = useNavigate();

  const handleLogin = () => {
    navigateTo("/home");
  };

  return (
    <div className="LoginPage-mainDiv">
      <div className="LoginPage-mainBox">
        <div className="LoginPage-headerDiv">
          <h2>Log in</h2>
          <p>NonStop.io Assignments</p>
        </div>
        <div className="LoginPage-inputBoxDiv">
          <div className="InputBox-mainDiv">
            <div className="InputBox-eachDiv">
              <label>Email or phone number</label>
              <input />
            </div>
            <div className="InputBox-eachDiv">
              <label>Password</label>
              <input />
            </div>
          </div>
        </div>
        <button className="InputBox-loginBtn" onClick={handleLogin}>
          Login
        </button>
        <div className="InputBox-Or">
          <p>Or continue with</p>
        </div>
        <div className="InputBox-loginWithSocialDiv">
          <div className="socialDiv" onClick={handleLogin}>
            <img src={icon_ld} />
          </div>
          <div className="socialDiv" onClick={handleLogin}>
            <img src={icon_g} />
          </div>
          <div className="socialDiv" onClick={handleLogin}>
            <img src={icon_fb} />
          </div>
        </div>
        <div className="InputBox-dontHaveAcc">
          <p className="InputBox-dontHaveAcc-firstText">
            Don’t have an account?,
          </p>
          <p className="InputBox-dontHaveAcc-secondText">Signup</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
