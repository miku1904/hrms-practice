import React, { useState } from "react";
import style from "./Login.module.css";
import logo from "../../assets/images/logo_white.svg";
import Input from "../../components/input/Input";
import Email from "../../assets/images/Group 4email.svg";
import Password from "../../assets/images/Group 7password.svg";
import { Login_User } from "../../redux/action/UserAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [error , setError] = useState(false)
  const [PasswordShow, setPasswordShow] = useState(false);
  const [userData, setUserdata] = useState({
    username: "",
    password: "",
  });



  function handleChange(evt) {
    const value = evt.target.value;
    setUserdata({
      ...userData,
      [evt.target.name]: value,
    });
  } 

  const showPassword = () => {
    setPasswordShow(!PasswordShow);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.username !== "" && userData.password !== "") {
      dispatch(Login_User(userData));
    }
    setError(true);
  };
  return (
    <div className={style.maincontainer}>
      <div className={style.maincontain}>
        <div className={style.login}>
          <div className={style.leftsection}>
            <div className={style.logotext}>
              <div>
                <img src={logo} className={style.logo} />
              </div>
              <div className={style.hrmstext}>
                <p>
                  <span>H</span>uman
                </p>
                <p>
                  <span>R</span>esource
                </p>
                <p>
                  <span>M</span>anagement
                </p>
                <p>
                  <span>S</span>ystem
                </p>
              </div>
            </div>
          </div>
          <div className={style.inputsection}>
            <p className={style.inputtext}>Login</p>
            <form onSubmit={handleSubmit}>
              <div className={style.inputemail}>
                <label className={style.inputlabel}>Email:</label>
                <Input
                  type="text"
                  placeholder="kenzi.lawson@example.com"
                  classname={`${style.emailInput}`}
                  handleChange={handleChange}
                  name="username"
                />
                <img src={Email} className={style.emaillogo} />
                {/* props.value === '' && props.button === true ? */}
                {userData.username === "" && error === true ? (
                   <p className={style.error}>please enter email</p>
                ) : (
                 ""
                )}
              </div>
              <div className={style.inputpassword}>
                <label className={style.passwordlabel}>Password:</label>
                <Input
                  type={PasswordShow ? "text" : "password"}
                  placeholder="********"
                  classname={`${style.passwordInput}`}
                  handleChange={handleChange}
                  name="password"
                />
                <img
                  src={Password}
                  className={style.passwordlogo}
                  onClick={showPassword}
                />
                {userData.password === "" && error === true ? (
                  <p className={style.error}>please enter password</p>
                ) : (
                  ""
                )}
              </div>
              <button className={style.loginButton}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
