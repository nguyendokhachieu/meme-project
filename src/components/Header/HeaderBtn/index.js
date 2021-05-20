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
              Upload
            </Link>
          )
          : null
      }
      {
        !auth
          ? (
            <Link to="/login" className="btn header-login-btn">
              Login
            </Link>
          )
          : null
      }
    </div>
  );
}
