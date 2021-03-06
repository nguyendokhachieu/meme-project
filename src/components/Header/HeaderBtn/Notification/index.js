import "./notification.scss";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import NotificationItem from "./NotificationItem";
import NotificationItemLoading from "./NotificationItem/NotificationItemLoading";
import { NotificationService } from "../../../../services/notifications";

export default function Notification() {
  const [hidden, setHidden] = useState(true);
  const [showThis, setShowThis] = useState(false);
  const { id, token } = useSelector(state => state.user);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBellClick = () => {
    setHidden(!hidden);
  };

  const handleContentClick = (e) => {
    const tagNamesToCloseBox = ["a", "img"];
    tagNamesToCloseBox.includes(e.target.tagName.toLowerCase()) &&
      setHidden(true);
    e.stopPropagation();
  };

  useEffect(() => {
    if (token) {
      setShowThis(true);
    } else {
      setShowThis(false);
    }
  }, [token]);

  useEffect(() => {
    async function getNotifications() {
      if (!hidden) {
        setLoading(true);
        const response = await NotificationService.get(id);

        setLoading(false);
        setList(response.data.data || []);
      }
    };

    getNotifications();
  }, [hidden, id])

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
    <div className="header-notification" onClick={handleBellClick}>
      <i className="fad fa-bell icon-bell"></i>
      <section
        className={hidden ? `notification-box hidden` : `notification-box`}
        onClick={handleContentClick}
      >
        <h3 className="title">
          Thông báo
          <Link to="/notifications" className="see-all">Xem tất cả</Link>
        </h3>
        <div className="content">
          {
            loading 
              ? <NotificationItemLoading noOfItems={ 8 } />
              : list.length === 0 
                ? <div className="empty"><i className="fad fa-empty-set icon"></i>Bạn chưa có thông báo nào</div>
                : (
                  list.map(item => {
                    return <NotificationItem notification={ item } key={ item } />
                  })
                )
          }          
        </div>
      </section>
    </div>
  );
}
