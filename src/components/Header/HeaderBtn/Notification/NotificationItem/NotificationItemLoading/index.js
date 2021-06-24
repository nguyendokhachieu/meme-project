import "./notification-item-loading.scss";

export default function NotificationItemLoading({ noOfItems = 8 }) {
  const rendered = [];

  for (let i = 0; i < noOfItems; i++) {
    rendered.push(
      <span className="notification-item-loading" key={ i }>
        <span className="profile-img-wrap">
          <div className="img"></div>
        </span>
        <span className="text">
          <p>Đang tải thông báo mới của bạn</p>
          <p>Đang tải</p>
        </span>
      </span>
    );
  }

  return rendered;
}
