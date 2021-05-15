import "./style.css";

import { Link } from "react-router-dom";

export default function Login() {
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
                src="./assets/images/login-icon.svg"
                className="login-title-icon"
                alt="login-icon"
              />
              <span className="login-title-text">Đăng nhập</span>
            </h2>
            <form action className="form-login">
              <div className="form-ctl-wrap">
                <img
                  src="./assets/images/username-icon.svg"
                  className="form-control-icon"
                  alt="username-icon"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="form-ctl-wrap">
                <img
                  src="./assets/images/new-password.svg"
                  className="form-control-icon"
                  alt="password-icon"
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
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
                <input
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
