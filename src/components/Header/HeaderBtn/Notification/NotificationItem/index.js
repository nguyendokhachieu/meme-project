import "./notification-item.scss";
import { Link } from "react-router-dom";
import { useAvatarLinkSrc } from "../../../../../hooks/useAvatarLinkSrc";
import { useDateTime } from "../../../../../hooks/useDateTime";

export default function NotificationItem({ notification = {} }) {
  const { link } = useAvatarLinkSrc({
    user_id: notification.created_user_id,
    user_img_url: notification.img_url,
  });

  const { timeAgo } = useDateTime(notification);

  if (!notification) {
    return null;
  }

  return (
    <Link
      to={
        Number(notification.type) === 1
          ? `/profile?id=${notification.created_user_id}`
          : `/post/${notification.post_id}`
      }
      className="item"
    >
      <a className="profile-img-wrap">
        <img src={link} alt="ava" />
      </a>
      <a className="text">
        {notification.content}
        <a className="date">{timeAgo}</a>
      </a>
    </Link>
  );
}
