import "./notification-card.scss";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { actHideNotificationCard } from "../../../store/notifications/actions";

export default function NotificationCard({
  show = false,
  content = "",
  showCloseButton = true,
}) 
{
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (show) {
      setHidden(false);

      window.setTimeout(() => {
        setHidden(true);
      }, 5000);
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
              dispatch(actHideNotificationCard());
            }}
          >
            <i class="fas fa-times-circle close-icon"></i>
          </div>
        ) : null}
      </div>
    </section>
  );
}
