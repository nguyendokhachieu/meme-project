import "./new-post.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";

export default function Notification() {
  const { pathname } = useLocation();
  const history = useHistory();
  const [showThis, setShowThis] = useState(false);
  const { token } = useSelector(state => state.user);

  useEffect(() => {
    if (token) {
      setShowThis(true);
    } else {
      setShowThis(false);
    }
  }, [token]);

  if (!showThis) {
    return null;
  }

  return (
    <span
      className={ pathname === '/upload' ? 'header-new-post active' : 'header-new-post' } 
      onClick={ e => { history.push('/upload') } }
    >
      <i className="fad fa-plus-circle icon"></i>
    </span>
  );
}
