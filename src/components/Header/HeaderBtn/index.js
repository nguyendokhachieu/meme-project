import { Link } from "react-router-dom";
import { useAuthorization } from "../../../hooks/useAuthorization";

export default function HeaderBtn() {
  const { auth } = useAuthorization();

  const handleLogout = () => {
    localStorage.setItem('tstring', '');

    window.location.reload();
  }

  return (
    <div className="header-btn-group">
      {
        auth 
          ? (
            <Link to="/upload" className="btn header-upload-btn">
              <i class="fad fa-upload header-btn-icon"></i>
              Mới
            </Link>
          )
          : null
      }
      {
        !auth
          ? (
            <Link to="/login" className="btn header-login-btn">
              <i class="fad fa-sign-in header-btn-icon"></i>
              Đăng nhập
            </Link>
          )
          : null
      }
      {
        auth
          ? (
            <button className="btn header-login-btn log-out-btn" onClick={ handleLogout }>
              <i class="fal fa-sign-out header-btn-icon log-out-icon"></i>
              <div className="tooltip-logout">Đăng xuất</div>
            </button>
          )
          : null
      }
    </div>
  );
}
