import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthorization } from "../../../../hooks/useAuthorization";

export default function Notification() {
  const { auth } = useAuthorization();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    auth ? setHide(true) : setHide(false);
  }, [auth]);

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
