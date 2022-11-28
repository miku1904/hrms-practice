import React from 'react'
import style from "./Login.module.css"
import logo from "../../assets/images/logo_white.svg"

const Login = () => {
  return (
    <div className={style.maincontain}>
      <div className={style.login}>
        <div className={style.leftsection}>
          <div className={style.logotext}>
            <div>
              <img src={logo} className={style.logo} />
            </div>
            <div className={style.hrmstext}>
              <p>
                <span>H</span>
              </p>
              <p>
                <span>R</span>
              </p>
              <p>
                <span>M</span>
              </p>
              <p>
                <span>S</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
