import "./style.css";

import { Link } from "react-router-dom";
import Input from "./../shared/Input";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  console.log(password);
  const login = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="main-content">
      <div className="container">
        <div className="col-ct-5">
          <div className="login-section">
            <h1 className="login-header">
              <Link to="/" className="login-header-link">
                MEME
              </Link>
            </h1>
            <h2 className="login-title">
              <img
                src="/assets/images/login-icon.svg"
                className="login-title-icon"
                alt="login-icon"
              />
              <span className="login-title-text">Đăng nhập</span>
            </h2>
            <form action className="form-login" onSubmit={ login } >
              <div className="form-ctl-wrap">
                <img
                  src="/assets/images/username-icon.svg"
                  className="form-control-icon"
                  alt="username-icon"
                />
                <Input 
                  type="text"
                  placeholder="Username"
                  onChange={ val => { setUsername(val) }}
                  value={ username }
                  required
                />
              </div>
              <div className="form-ctl-wrap">
                <img
                  src="/assets/images/new-password.svg"
                  className="form-control-icon"
                  alt="password-icon"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={ val => { setPassword(val) } }
                  value={ password }
                />
              </div>
              <div className="login-btn-group">
                <p className="option-register">
                  <span className="option-register-text">
                    Chưa có tài khoản?
                  </span>
                  <Link to="/register" className="option-register-btn">
                    Đăng ký một tài khoản
                  </Link>
                </p>
                <Input
                  type="submit"
                  className="btn btn-filled-bc"
                  value="Đăng nhập"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
