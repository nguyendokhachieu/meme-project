import "./style.css";

export default function ChangePassword() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="col-ct-5">
          <div className="change-password-section">
            <h2 className="change-password-title">
              <img
                src="./assets/images/change_password_icon.svg"
                className="change-password-title-svg"
                alt="change-password"
              />
              <span className="change-password-title-text">
                Thay đổi mật khẩu
              </span>
            </h2>
            <form action className="form-change-password">
              <div className="form-ctl-wrap">
                <img
                  src="./assets/images/old-password.svg"
                  className="password-icon"
                  alt="old-password"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mật khẩu cũ"
                  required
                />
              </div>
              <div className="form-ctl-wrap">
                <img
                  src="./assets/images/new-password.svg"
                  className="password-icon"
                  alt="old-password"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mật khẩu mới"
                  required
                />
              </div>
              <div className="form-ctl-wrap">
                <img
                  src="./assets/images/new-password.svg"
                  className="password-icon"
                  alt="old-password"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập lại mật khẩu mới"
                  required
                />
              </div>
              <div className="change-password-btn-group">
                <input
                  type="submit"
                  className="btn btn-filled-bc"
                  defaultValue="Thay đổi"
                  value="Thay đổi"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
