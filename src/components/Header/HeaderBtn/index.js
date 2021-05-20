import { Link } from "react-router-dom";

export default function HeaderBtn() {
  return (
    <div className="header-btn-group">
      <Link to="/upload" className="btn header-upload-btn">
        Upload
      </Link>
      <Link to="/login" className="btn header-login-btn">
        Login
      </Link>
    </div>
  );
}
