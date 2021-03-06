import "./style.scss";

import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { actShowNotificationCard } from "../../../../../store/notifications/actions";
import { UserService } from "../../../../../services/user";

export default function ChangePassword() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const oldPassInputRef = useRef();
  
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [renewPass, setRenewPass] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [errorText, setErrorText] = useState('');

  const changePassword = async e => {
    e.preventDefault();

    if (loading) return;
    
    setLoading(true);
    
    const response = await UserService.changePassword(oldPass, newPass, renewPass);

    setLoading(false);

    if (response.data.status === 200) {
      localStorage.setItem('tstring', '');
      window.location.assign('/login');
      
      dispatch(actShowNotificationCard('Thay đổi mật khẩu thành công. Vui lòng đăng nhập lại!'));
      return;
    } 

    setHasErrors(true);
    setOldPass('');
    setNewPass('');
    setRenewPass('');
    setErrorText(response.data.message);
    oldPassInputRef.current && oldPassInputRef.current.focus();
  }

  useEffect(() => {
    oldPassInputRef.current && oldPassInputRef.current.focus();
  }, []);

  return (
    <div className="main-content">
      <div className="container">
        <div className="col-ct-5">
          <section className="change-password-section">
            <h2 className="change-password-title">
              {
                loading 
                  ? <i className="fa fa-spinner fa-spin icon"></i>
                  : <i className="far fa-exchange-alt icon"></i>
              }
              <span className="change-password-title-text">
                Thay đổi mật khẩu
              </span>
            </h2>
            { 
              hasErrors 
                ? (
                    <div className="change-password-error active">
                      <p className="change-password-error-icon-wrap"><i className="fad fa-exclamation change-password-error-icon"></i></p>
                      <p className="change-password-error-text">{ errorText }</p>
                    </div>
                )
                : null
            }
            <form className="form-change-password" onSubmit={ changePassword }>
              <div className="form-ctl-wrap">
                <i className="fal fa-unlock-alt password-icon"></i>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Mật khẩu cũ"
                  ref={ oldPassInputRef }
                  value={ oldPass }
                  onChange={ e => { setOldPass(e.target.value) } }
                  required
                />
              </div>
              <div className="form-ctl-wrap">
                <i className="fal fa-lock-alt password-icon"></i>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Mật khẩu mới"
                  value={ newPass }
                  onChange={ e => { setNewPass(e.target.value) } }
                  required
                />
              </div>
              <div className="form-ctl-wrap">
                <i className="fal fa-lock-alt password-icon"></i>
                <input
                  type="password"
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
                  className={ loading ? "btn btn-filled-bc ch-pass disabled" : "btn btn-filled-bc" }
                  value="Thay đổi"
                />
              </div>
            </form>
            <div className="route">
              <button 
                className="go-back-btn" 
                onClick={ () => { history.push('/update/privacy') }}
              >
                  Quay về <strong>Quyền riêng tư</strong>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
