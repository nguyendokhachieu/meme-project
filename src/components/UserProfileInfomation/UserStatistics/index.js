export default function UserStatistics({ userInfo }) {
    return (
        <div className="user-info-statistic">
          <p className="statistic-item">
            <i class="fad fa-newspaper"></i>
            <span className="statistic-item-text">Bài viết: </span>
            <span className="statistic-item-count">{ userInfo.count_posts }</span>
          </p>
          <p className="statistic-item">
            <i class="fal fa-user-friends"></i> 
            <span className="statistic-item-text">Theo dõi: </span>
            <span className="statistic-item-count">{ userInfo.count_follower }</span>
          </p>
          <p className="statistic-item">
            <i class="fal fa-user-plus"></i>
            <span className="statistic-item-text">Đang theo dõi: </span>
            <span className="statistic-item-count">{ userInfo.count_following }</span>
          </p>
        </div>
    );
}