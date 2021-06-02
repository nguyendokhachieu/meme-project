import "./notification.scss";
import { useEffect, useState } from "react";
import { useAuthorization } from "../../../../hooks/useAuthorization";

export default function Notification() {
  const [hidden, setHidden] = useState(true);
  const { auth } = useAuthorization();
  const [showThis, setShowThis] = useState(false);

  const handleBellClick = () => {
    setHidden(!hidden);
  };

  const handleContentClick = (e) => {
    const tagNamesToCloseBox = ["a"];
    tagNamesToCloseBox.includes(e.target.tagName.toLowerCase()) &&
      setHidden(true);
    e.stopPropagation();
  };

  useEffect(() => {
    if (auth) {
      setShowThis(true);
    } else {
      setShowThis(false);
    }
  }, [auth]);

  useEffect(() => {
    const click = (e) => {
      !hidden && setHidden(true);
    };

    document.addEventListener("click", click);

    return () => {
      document.removeEventListener("click", click);
    };
  });

  if (!showThis) {
    return null;
  }

  return (
    <a className="header-notification" onClick={handleBellClick}>
      <i class="fad fa-bell icon-bell"></i>
      <section
        className={hidden ? `notification-box hidden` : `notification-box`}
        onClick={handleContentClick}
      >
        <h3 className="title">Thông báo</h3>
        <div className="content">

        </div>
      </section>
    </a>
  );
}
