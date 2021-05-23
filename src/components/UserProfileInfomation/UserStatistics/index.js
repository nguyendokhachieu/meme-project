export default function UserStatistics({ userInfo }) {
    return (
        <div className="user-info-statistic">
          <p className="statistic-item">
            <img
              src="./assets/images/article-icon.svg"
              className="statistic-item-icon post-icon"
              alt="following"
            />
            <span className="statistic-item-text">Bài viết: </span>
            <span className="statistic-item-count">{ userInfo.count_posts }</span>
          </p>
          <p className="statistic-item">
            <img
              src="./assets/images/follower.svg"
              className="statistic-item-icon follow-icon"
              alt="follower"
            />
            <span className="statistic-item-text">Theo dõi: </span>
            <span className="statistic-item-count">{ userInfo.count_follower }</span>
          </p>
          <p className="statistic-item">
            <img
              src="./assets/images/following.svg"
              className="statistic-item-icon follow-icon"
              alt="following"
            />
            <span className="statistic-item-text">Đang theo dõi: </span>
            <span className="statistic-item-count">{ userInfo.count_following }</span>
          </p>
        </div>
    );
}