import "./style.css";

export default function Register() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="col-ct-5">
          <div className="register-section">
            <h1 className="register-header">
              <a href>MEME</a>
            </h1>
            <h2 className="register-title">
              <img
                src="./assets/images/register.png"
                className="register-title-icon"
                alt="register"
              />
              <span className="register-title-text">Đăng ký một tài khoản</span>
            </h2>
            <form action className="form-register">
              <div className="form-ctl-wrap">
                <img
                  src="./assets/images/username-icon.svg"
                  className="form-control-icon"
                  alt="icon"
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
                  src="./assets/images/email-icon.svg"
                  className="form-control-icon"
                  alt="icon"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-ctl-wrap">
                <img
                  src="./assets/images/new-password.svg"
                  className="form-control-icon"
                  alt="icon"
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Mật khẩu"
                  required
                />
              </div>
              <div className="form-ctl-wrap">
                <img
                  src="./assets/images/new-password.svg"
                  className="form-control-icon"
                  alt="icon"
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập lại mật khẩu"
                  required
                />
              </div>
              <div className="register-btn-group">
                <p className="option-login">
                  <span className="option-login-text">Đã có tài khoản?</span>
                  <a href className="option-login-btn">
                    Đăng nhập
                  </a>
                </p>
                <input
                  type="submit"
                  className="btn btn-filled-bc"
                  value="Đăng ký"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
