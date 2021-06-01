import { useEffect, useState } from "react";
import "./notification-card.scss";

export default function NotificationCard({
  show = false,
  content = "",
  showCloseButton = true,
}) {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (show) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }, [show]);

  return (
    <section
      className={hidden ? `notification-card hidden` : `notification-card`}
    >
      <div className="inner-card">
        <div className="content">{content}</div>
        {showCloseButton ? (
          <div
            className="close-button"
            onClick={(e) => {
              setHidden(true);
            }}
          >
            <i class="fas fa-times-circle close-icon"></i>
          </div>
        ) : null}
      </div>
    </section>
  );
}
