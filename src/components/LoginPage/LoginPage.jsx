import React, { useContext, useEffect } from "react";
import style from "./LoginPage.module.scss";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";

const LoginPage = () => {
  const clientID =
    "292772389168-uo9qkm61ktardm6cvtddfdlvr8stoi64.apps.googleusercontent.com";
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useContext(AuthContext);

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    });
  }, []);

  const onLoginSuccess = (response) => {
    setAuthUser(response.profileObj);
    navigate("/main");
  };
  const onLoginFailure = (response) => {
    alert("Oops.. Something went wrong!");
  };
  const onLogoutSuccess = () => {
    setAuthUser(null);
  };
  const renderButton = () => {
    if (authUser) {
      return (
        <div className={style.content}>
          <div className={style.title}>
            <p className={style.greetings}>{`Hello, ${authUser.name}!`} </p>
          </div>
          <GoogleLogout
            clientId={clientID}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
          />
        </div>
      );
    }
    return (
      <div className={style.content}>
        <div className={style.title}>
          <p className={style.greetings}>Hello! Welcome to chat!</p>
          <p className={style.addingText}>Login to start chatting.</p>
        </div>
        <GoogleLogin
          clientId={clientID}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy="single_host_origin"
        />
      </div>
    );
  };
  return renderButton();
};

export default LoginPage;
