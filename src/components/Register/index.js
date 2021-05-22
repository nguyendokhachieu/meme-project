import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserService } from "../../services/user";
import Input from "../shared/Input";
import "./style.css";

export default function Register() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [hasErrors, setHasErrors] = useState('hasnot'); // has, hasnot, password_mismatch
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  const register = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      setHasErrors('password_mismatch');
    } else {
      setHasErrors('hasnot');

      const response = await UserService.register({
        username,
        fullname,
        email,
        password,
      });

      if (response.data.status === 200) {
        setRedirect(true);
      } else {
        setHasErrors('has');
        setMessage(response.data.message);
      }
    }
  }

  useEffect(() => {
    redirect && (
      window.setTimeout(() => {
        history.push('/login');
      }, 1500)
    )
  }, [redirect]);

  return (
    <div className="main-content">
      <div className="container">
        <div className="col-ct-5">
          <div className="register-section">
            <h1 className="register-header">
              <Link to="/">MEME</Link>
            </h1>
            <h2 className="register-title">
              <img
                src="./assets/images/register.png"
                className="register-title-icon"
                alt="register"
              />
              <span className="register-title-text">Đăng ký một tài khoản</span>
            </h2>
            <div className={ hasErrors === 'has' ? "register-error active" : "register-error" }>
              <p className="register-error-icon-wrap"><i class="fad fa-exclamation register-error-icon"></i></p>
              <p className="register-error-text">{ message }. Vui lòng kiểm tra lại</p>
            </div>
            <div className={ hasErrors === 'password_mismatch' ? "register-error active" : "register-error" }>
              <p className="register-error-icon-wrap"><i class="fad fa-exclamation register-error-icon"></i></p>
              <p className="register-error-text">Password không hợp lệ. Vui lòng kiểm tra lại</p>
            </div>
            <div className={ redirect ? "register active" : "register" }>
              <p className="register-icon-wrap"><i class="fal fa-check-circle register-icon"></i></p>
              <p className="register-text">Đăng ký tài khoản thành công, vui lòng đăng nhập lại.</p>
            </div>
            <form className="form-register" onSubmit={ register }>
              <div className="form-ctl-wrap">
                <img
                  src="./assets/images/username-icon.svg"
                  className="form-control-icon"
                  alt="icon"
                />
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required
                  value={ username }
                  onChange={ val => { setUsername(val) } }
                />
              </div>
              <div className="form-ctl-wrap">
                <img
                  src="./assets/images/full-name.png"
                  className="form-control-icon"
                  alt="icon"
                />
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Tên hiển thị"
                  required
                  value={ fullname } 
                  onChange={ val => { setFullname(val) } }
                />
              </div>
              <div className="form-ctl-wrap">
                <img
                  src="./assets/images/email-icon.svg"
                  className="form-control-icon"
                  alt="icon"
                />
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  value={ email } 
                  onChange={ val => { setEmail(val) } }
                />
              </div>
              <div className="form-ctl-wrap">
                <img
                  src="./assets/images/new-password.svg"
                  className="form-control-icon"
                  alt="icon"
                />
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Mật khẩu"
                  required
                  value={ password }
                  onChange={ val => { setPassword(val) } }
                />
              </div>
              <div className="form-ctl-wrap">
                <img
                  src="./assets/images/new-password.svg"
                  className="form-control-icon"
                  alt="icon"
                />
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Nhập lại mật khẩu"
                  required
                  value={ rePassword }
                  onChange={ val => { setRePassword(val) } }
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
