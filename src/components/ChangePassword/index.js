import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserService } from "../../services/user";
import "./style.scss";

export default function ChangePassword() {
  const history = useHistory();
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [renewPass, setRenewPass] = useState('');
  const [hasErrors, setHasErrors] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [OK, setOK] = useState(false);

  const changePassword = async e => {
    e.preventDefault();

    const response = await UserService.changePassword(oldPass, newPass, renewPass);

    if (response.data.status === 404) {
      setHasErrors(true);
      setOldPass('');
      setNewPass('');
      setRenewPass('');
      setErrorText(response.data.message);
    } else {
      setHasErrors(false);
      setOK(true);
      
      localStorage.setItem('tstring', '');

      setTimeout(() => {
        history.push('/login');
      }, 2000);
    }
  }

  useEffect(() => {
    document.getElementById('oldPass').focus();
  }, []);

  return (
    <div className="main-content">
      <div className="container">
        <div className="col-ct-5">
          <section className="change-password-section">
            <h2 className="change-password-title">
              <i class="far fa-exchange-alt title-icon"></i>
              <span className="change-password-title-text">
                Thay đổi mật khẩu
              </span>
            </h2>
            { 
              hasErrors 
                ? (
                    <div className="change-password-error active">
                      <p className="change-password-error-icon-wrap"><i class="fad fa-exclamation change-password-error-icon"></i></p>
                      <p className="change-password-error-text">{ errorText }</p>
                    </div>
                )
                : null
            }
            {
              OK  
                ? (
                    <div className="change-password active">
                      <p className="change-password-icon-wrap"><i class="fal fa-check-circle change-password-icon"></i></p>
                      <p className="change-password-text">Thay đổi mật khẩu thành công. Vui lòng đăng nhập lại</p>
                    </div>
                )
                : null
            }
            <form action className="form-change-password" onSubmit={ changePassword }>
              <div className="form-ctl-wrap">
                <i class="fal fa-unlock-alt password-icon"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mật khẩu cũ"
                  id="oldPass"
                  value={ oldPass }
                  onChange={ e => { setOldPass(e.target.value) } }
                  required
                />
              </div>
              <div className="form-ctl-wrap">
                <i class="fal fa-lock-alt password-icon"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mật khẩu mới"
                  value={ newPass }
                  onChange={ e => { setNewPass(e.target.value) } }
                  required
                />
              </div>
              <div className="form-ctl-wrap">
                <i class="fal fa-lock-alt password-icon"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập lại mật khẩu mới"
                  value={ renewPass }
                  onChange={ e => { setRenewPass(e.target.value) } }
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
          </section>
        </div>
      </div>
    </div>
  );
}
