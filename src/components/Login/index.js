import "./style.scss";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { actShowNotificationCard } from "../../store/notifications/actions";
import { actLoginAsync } from "../../store/user/actions";

import Input from "./../shared/Input";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [hasErrors, setHasErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  const { token } = useSelector(state => state.user); 

  const login = e => {
    e.preventDefault();

    if (loading) return;
    if (token) return;

    setHasErrors(false); 
    setLoading(true);

    dispatch(actLoginAsync(username, password)).then(res => {
      setLoading(false);

      if (res.ok) {
        history.push('/');
        dispatch(actShowNotificationCard('Đăng nhập thành công!'));
      } else {
        setUsername('');
        setPassword('');
        setHasErrors(true);

        document.getElementById('username').focus();
      }
    });
  }

  useEffect(() => {
    document.getElementById('username').focus();
  }, []);

  if (token) {    
    history.push('/');
    dispatch(actShowNotificationCard("Đăng nhập thành công!"));
  }

  return (
    <div className="main-content">
      <div className="container">
        <div className="col-ct-5">
          <div className="login-section">
            <h1 className="login-header">
              <Link to="/" className="login-header-link">
                Meme
              </Link>
            </h1>
            <h2 className="login-title">
              {
                loading 
                  ? <i className="fa fa-spinner fa-spin icon"></i>
                  : <i className="fad fa-sign-in icon"></i>
              }
              <span className="login-title-text">Đăng nhập</span>
            </h2>
            <div className={ hasErrors ? "login-error active" : "login-error" }>
              <p className="login-error-icon-wrap"><i className="fad fa-exclamation login-error-icon"></i></p>
              <p className="login-error-text">Username hoặc password không hợp lệ. Vui lòng kiểm tra lại</p>
            </div>
            <form className="form-login" onSubmit={ login } >
              <div className="form-ctl-wrap">
                <i className="fad fa-user icon"></i>
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
                <i className="fal fa-lock-alt icon"></i>
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
                  className={ loading ? 'btn btn-filled-bc login-btn disabled' : 'btn btn-filled-bc'}
                  value="Đăng nhập"
                />
              </div>
            </form>
            <div className="route">
              <button 
                className="go-back-btn" 
                onClick={ () => { history.push('/') }}
              >
                  Quay về trang chủ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
