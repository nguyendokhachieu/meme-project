import "./style.scss";

import { Link, useHistory } from "react-router-dom";
import Input from "./../shared/Input";
import { useState } from "react";
import { UserService } from "../../services/user";
import { actLoginSuccessfully } from "./../../store/user/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useAuthorization } from "../../hooks/useAuthorization";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasErrors, setHasErrors] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { auth } = useAuthorization();

  const login = async (e) => {
    e.preventDefault();
    
    const response = await UserService.login(username, password);

    if (response.data.status === 200) {
      dispatch(actLoginSuccessfully(response.data.user));

      setIsLoggedIn(true);   
      setHasErrors(false);   
    } else {
      setUsername('');
      setPassword('');
      setHasErrors(true);

      document.getElementById('username').focus();
    }
  }

  useEffect(() => {
    document.getElementById('username').focus();
  }, []);

  if (isLoggedIn || auth) {    
    window.setTimeout(() => {
      history.push('/');
    }, 1500);
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
            <div className={ hasErrors ? "login-error active" : "login-error" }>
              <p className="login-error-icon-wrap"><i class="fad fa-exclamation login-error-icon"></i></p>
              <p className="login-error-text">Username hoặc password không hợp lệ. Vui lòng kiểm tra lại</p>
            </div>
            <div className={ (isLoggedIn || auth) ? "login active" : "login" }>
              <p className="login-icon-wrap"><i class="fal fa-check-circle login-icon"></i></p>
              <p className="login-text">Đăng nhập thành công, đang chuyển hướng bạn đến trang chủ.</p>
            </div>
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
                  id="username"
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
