import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Notification() {
  const { token } = useSelector(state => state.user);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    token ? setHide(true) : setHide(false);
  }, [token]);

  return (
    <>
      {
      !hide  
        ? (
          <Link to="/login" className="btn header-login-btn">
            <i className="fad fa-sign-in header-btn-icon"></i>
            Tài khoản
          </Link>
        )
        : null
      }
    </>
  );
}
