import "./style.css";

export default function UserProfileInfomation() {
  return (
    <div className="user-content">
      <div className="user-image-wrap">
        <a href="#" className="user-image-wrap-link">
          <img
            src="./assets/images/default-avatar/ava-3.png"
            className="user-image"
            alt="avatar"
          />
        </a>
      </div>
      <div className="user-info">
        <div className="user-info-username">
          <h3>Hiếu Nguyễn</h3>
        </div>
        <div className="user-info-options">
          <a href="#" className="mr-1 btn btn-transparent-bc">
            Theo dõi
          </a>
          <a href="#" className="mr-1 btn btn-transparent-bc">
            Đổi mật khẩu
          </a>
          <a href="#" className="btn btn-transparent-bc">
            Change Profile
          </a>
        </div>
        <div className="user-info-statistic">
          <p className="statistic-item">
            <img
              src="./assets/images/article-icon.svg"
              className="statistic-item-icon post-icon"
              alt="following"
            />
            <span className="statistic-item-text">Bài viết: </span>
            <span className="statistic-item-count">9192</span>
          </p>
          <p className="statistic-item">
            <img
              src="./assets/images/follower.svg"
              className="statistic-item-icon follow-icon"
              alt="follower"
            />
            <span className="statistic-item-text">Theo dõi: </span>
            <span className="statistic-item-count">111</span>
          </p>
          <p className="statistic-item">
            <img
              src="./assets/images/following.svg"
              className="statistic-item-icon follow-icon"
              alt="following"
            />
            <span className="statistic-item-text">Đang theo dõi: </span>
            <span className="statistic-item-count">123</span>
          </p>
        </div>
        <div className="user-info-description">
          Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Atque libero ipsam deserunt nesciunt est! Fugit illum quam veritatis
          facere eius voluptas, non quis inventore, alias perspiciatis hic
          dignissimos, voluptate itaque. dolor sit amet, consectetur adipisicing
          elit.
        </div>
      </div>
    </div>
  );
}
