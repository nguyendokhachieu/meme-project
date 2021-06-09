import "./notification-item-loading.scss";

export default function NotificationItemLoading({ noOfItems = 8 }) {
  const rendered = [];

  for (let i = 0; i < noOfItems; i++) {
    rendered.push(
      <a className="notification-item-loading">
        <a className="profile-img-wrap">
          <div className="img"></div>
        </a>
        <a className="text">
          <p>Đang tải thông báo mới của bạn</p>
          <p>Đang tải</p>
        </a>
      </a>
    );
  }

  return rendered;
}
