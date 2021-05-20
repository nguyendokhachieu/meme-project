import { Link } from "react-router-dom";
import { useAuthorization } from "../../../hooks/useAuthorization";

export default function HeaderBtn() {
  const { auth } = useAuthorization();

  return (
    <div className="header-btn-group">
      {
        auth 
          ? (
            <Link to="/upload" className="btn header-upload-btn">
              <i class="fad fa-upload header-btn-icon"></i>
              Tạo bài viết mới
            </Link>
          )
          : null
      }
      {
        !auth
          ? (
            <Link to="/login" className="btn header-login-btn">
              <i class="fad fa-sign-in-alt header-btn-icon"></i>
              Đăng nhập
            </Link>
          )
          : null
      }
    </div>
  );
}
