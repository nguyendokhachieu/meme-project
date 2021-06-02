import "./notification.scss";
import { useEffect, useState } from "react";
import { useAuthorization } from "../../../../hooks/useAuthorization";
import { useSelector } from "react-redux";
import NotificationItem from "./NotificationItem";
import { NotificationService } from "../../../../services/notifications";
import { Link } from "react-router-dom";

export default function Notification() {
  const [hidden, setHidden] = useState(true);
  const { auth } = useAuthorization();
  const [showThis, setShowThis] = useState(false);
  const { id } = useSelector(state => state.user);
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
    if (auth) {
      setShowThis(true);
    } else {
      setShowThis(false);
    }
  }, [auth]);

  useEffect(async () => {
      if (!hidden) {
        setLoading(true);
        const response = await NotificationService.get(id);

        setLoading(false);
        setList(response.data.data || []);
      }
  }, [hidden])

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
        <h3 className="title">
          Thông báo
          <Link to="/notifications" className="see-all">Xem tất cả</Link>
        </h3>
        <div className="content">
          {
            loading 
              ? <div className="empty"><i class="fad fa-spinner icon"></i>Đang tải</div>
              : list.length === 0 
                ? <div className="empty"><i class="fad fa-empty-set icon"></i>Bạn chưa có thông báo nào</div>
                : (
                  list.map(item => {
                    return <NotificationItem notification={ item } key={ item } />
                  })
                )
          }          
        </div>
      </section>
    </a>
  );
}
