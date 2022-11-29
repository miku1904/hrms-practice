import React, { useState } from "react";
import style from "./Login.module.css";
import logo from "../../assets/images/logo_white.svg";
import Input from "../../components/input/Input";
import Email from "../../assets/images/Group 4email.svg";
import Password from "../../assets/images/Group 7password.svg";

const Login = () => {
  const [userData, setUserdata] = useState({
    username: "",
    password: "",
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setUserdata({
      ...userData,
      [evt.target.name]: value
    });
  }
  console.log(userData);

  const handleSubmit = (event) => {
    event.preventDefault();
    
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
                  placeholder="Email"
                  classname={`${style.emailInput}`}
                  handleChange={handleChange}
                  name="username"
                />
                <img src={Email} className={style.emaillogo} />
              </div>
              <div className={style.inputpassword}>
                <label className={style.passwordlabel}>Password:</label>
                <Input
                  type="text"
                  placeholder="Password"
                  classname={`${style.passwordInput}`}
                  handleChange={handleChange}
                  name="password"
                />
                <img src={Password} className={style.passwordlogo} />
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
