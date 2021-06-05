import "./new-post.scss";
import { useEffect, useState } from "react";
import { useAuthorization } from "../../../../hooks/useAuthorization";
import { useHistory, useLocation } from "react-router";

export default function Notification() {
  const { pathname } = useLocation();
  const history = useHistory();
  const { auth } = useAuthorization();
  const [showThis, setShowThis] = useState(false);

  useEffect(() => {
    if (auth) {
      setShowThis(true);
    } else {
      setShowThis(false);
    }
  }, [auth]);

  if (!showThis) {
    return null;
  }

  return (
    <a 
      className={ pathname === '/upload' ? 'header-new-post active' : 'header-new-post' } 
      onClick={ e => { history.push('/upload') } }
    >
      <i class="fad fa-plus-circle icon"></i>
    </a>
  );
}
