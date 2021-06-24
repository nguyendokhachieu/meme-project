import "./register.scss";

import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { UserService } from "../../services/user";
import { actShowNotificationCard } from "../../store/notifications/actions";
import Input from "../shared/Input";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [hasErrors, setHasErrors] = useState('hasnot'); // has, hasnot, password_mismatch
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  const { token } = useSelector(state => state.user);

  const register = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      setHasErrors('password_mismatch');
    } else {
      setHasErrors('hasnot');

      setLoading(true);
      const response = await UserService.register({
        username,
        fullname,
        password,
        rePassword
      });

      setLoading(false);
      if (response.data.status === 200) {
        setRedirect(true);
      } else {
        setHasErrors('has');
        setMessage(response.data.message);
      }
    }
  }

  useEffect(() => {
    redirect && dispatch(actShowNotificationCard('Đăng ký tài khoản thành công, vui lòng đăng nhập lại!'));
    redirect && history.push('/login');
  }, [redirect, history, dispatch]);

  useEffect(() => {
    token && dispatch(actShowNotificationCard('Bạn đã đăng nhập!'));
    token && history.push('/');
  }, [token, history, dispatch]);

  return (
    <div className="main-content">
      <div className="container">
        <div className="col-ct-5">
          <div className="register-section">
            <h1 className="register-header">
              <Link to="/">Meme</Link>
            </h1>
            <h2 className="register-title">
              {
                loading 
                ? <i className="fa fa-spinner fa-spin icon"></i>
                : <i className="fad fa-user-plus icon"></i>
              }
              <span className="register-title-text">Đăng ký một tài khoản</span>
            </h2>
            <div className={ hasErrors === 'has' ? "register-error active" : "register-error" }>
              <p className="register-error-icon-wrap"><i className="fad fa-exclamation register-error-icon"></i></p>
              <p className="register-error-text">{ message }. Vui lòng kiểm tra lại</p>
            </div>
            <div className={ hasErrors === 'password_mismatch' ? "register-error active" : "register-error" }>
              <p className="register-error-icon-wrap"><i className="fad fa-exclamation register-error-icon"></i></p>
              <p className="register-error-text">Password không hợp lệ. Vui lòng kiểm tra lại</p>
            </div>
            <form className="form-register" onSubmit={ register }>
              <div className="form-ctl-wrap">
                <i className="fad fa-user icon"></i>
                <input
                  type="text"
                  className="form-control username-input"
                  placeholder="Username"
                  required
                  value={ username }
                  onChange={ e => { setUsername(e.target.value) } }
                />
                <div className="username-tooltip tooltip">
                  Bắt đầu bằng chữ cái hoặc dấu gạch dưới, không có khoảng trắng, chiều dài từ 5 đến 31 ký tự
                </div>
              </div>
              <div className="form-ctl-wrap">
                <i className="fad fa-portrait icon"></i>
                <input
                  type="text"
                  className="form-control fullname-input"
                  placeholder="Tên hiển thị"
                  required
                  value={ fullname } 
                  onChange={ e => { setFullname(e.target.value) } }
                />
                <div className="fullname-tooltip tooltip">
                  Chỉ bao gồm chữ cái và khoảng trắng
                </div>
              </div>
              <div className="form-ctl-wrap">
                <i className="fal fa-lock-alt icon"></i>
                <input
                  type="password"
                  className="form-control password-input"
                  placeholder="Mật khẩu"
                  required
                  value={ password }
                  onChange={ e => { setPassword(e.target.value) } }
                />
                <div className="password-tooltip tooltip">
                  Mật khẩu từ 8 ký tự trở lên
                </div>
              </div>
              <div className="form-ctl-wrap">
                <i className="fal fa-lock-alt icon"></i>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập lại mật khẩu"
                  required
                  value={ rePassword }
                  onChange={ e => { setRePassword(e.target.value) } }
                />
              </div>
              <div className="register-btn-group">
                <p className="option-login">
                  <span className="option-login-text">Đã có tài khoản?</span>
                  <Link to="/login" className="option-login-btn">
                    Đăng nhập
                  </Link>
                </p>
                <Input
                  type="submit"
                  className={ loading ? "btn btn-filled-bc register-btn disabled" : "btn btn-filled-bc"}
                  value="Đăng ký"
                />
              </div>
            </form>
            <div className="route">
              <button 
                className="go-back-btn" 
                onClick={ e => { history.push('/') }}
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
