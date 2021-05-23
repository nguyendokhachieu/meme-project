import "./style.scss";

export default function UserProfileInfomation() {
  return (
    <div className="user-content-loading">
      <div className="user-image-wrap">
        <a href className="user-image-wrap-link">
          <div className="user-image" />
        </a>
      </div>
      <div className="user-info">
        <div className="user-info-username">
          <h3></h3>
        </div>
        <div className="user-info-options">
      <a className="mr-1 btn btn-transparent-bc">Theo dõi</a>
      <a to="change-password" className="mr-1 btn btn-transparent-bc">
                Đổi mật khẩu
              </a>
              <a to="/update" className="btn btn-transparent-bc">
              Change Profile
              </a>
      
    </div>
    <div className="user-info-statistic">
          <p className="statistic-item">
            <span
              className="statistic-item-icon post-icon"
              alt="following"
            ></span>
            <span className="statistic-item-text"></span>
            <span className="statistic-item-count"></span>
          </p>
          <p className="statistic-item">
            <span
              className="statistic-item-icon follow-icon"
              alt="follower"
            ></span>
            <span className="statistic-item-text"></span>
            <span className="statistic-item-count"></span>
          </p>
          <p className="statistic-item">
            <span
              className="statistic-item-icon follow-icon"
              alt="follower"
            ></span>
            <span className="statistic-item-text"> </span>
            <span className="statistic-item-count"></span>
          </p>
        </div>
        <div className="user-info-description">
        </div>
      </div>
    </div>
  );
}
