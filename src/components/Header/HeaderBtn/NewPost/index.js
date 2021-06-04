import "./new-post.scss";
import { useEffect, useState } from "react";
import { useAuthorization } from "../../../../hooks/useAuthorization";
import { useHistory } from "react-router";

export default function Notification() {
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
    <a className="header-new-post" onClick={ e => { history.push('/upload') } }>
      <i class="fad fa-plus-circle icon"></i>
    </a>
  );
}
