import { Link } from "react-router-dom";

export default function Notification() {

  return (
    <Link to="/login" className="btn header-login-btn">
      <i class="fad fa-sign-in header-btn-icon"></i>
      Đăng nhập
    </Link>
  );
}
