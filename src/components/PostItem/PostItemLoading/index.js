import "./post-item-loading.scss";

export default function PostItemLoading() {
  return (
    <div className="post-item-loading">
      <div className="post-item">
        <div className="post-item-header">
          <a className="post-item-avatar-link">
            <div className="post-item-avatar"></div>
          </a>
          <div className="post-item-info">
            <a className="post-item-author">Hiếu</a>
            <span className="post-item-time-ago">
              <a>12/12/2021</a>
            </span>
          </div>
        </div>
        <div className="post-item-content">
          <p className="post-item-text">
              <p>Nội dung xxxxxxxxxxxxxxxxxx</p>
              <p>Nội dung đang được tải</p>
              <p>Nội dung đang load </p>
              <p>Nội dung của bài viết</p>
          </p>
          <div className="post-item-image-wrap">
            <a className="post-item-image-link"></a>
          </div>
        </div>
        <div className="post-item-footer">
          <a className="post-item-show">
            <i className="fas fa-heart post-footer-icon"></i>
            <span className="count">12121</span>
          </a>
          <a className="post-item-show">
            <i className="fal fa-comment-dots post-footer-icon"></i>
            <span className="count">1211</span>
          </a>
        </div>
      </div>
    </div>
  );
}
