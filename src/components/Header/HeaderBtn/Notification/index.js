import { useEffect, useState } from "react";

export default function Notification() {
  const [hidden, setHidden] = useState(true);

  const handleBellClick = () => {
    setHidden(!hidden);
  };

  const handleContentClick = e => {
    const tagNamesToCloseBox = ['a'];
    tagNamesToCloseBox.includes(e.target.tagName.toLowerCase()) && setHidden(true);
    e.stopPropagation();
  }
  useEffect(() => {
    const click = (e) => {
      !hidden && setHidden(true);
    };

    document.addEventListener("click", click);

    return () => {
      document.removeEventListener("click", click);
    };
  });

  return (
    <>
      <a className="header-notification" onClick={handleBellClick}>
        <i class="fad fa-bell icon-bell"></i>
        <section
          className={hidden ? `notification-box hidden` : `notification-box`}
          onClick={ handleContentClick }
        >
          <h3 className="title">Thông báo</h3>
          <div className="content">
            <a>categories</a>
          </div>
        </section>
      </a>
    </>
  );
}
