import "./comment-item-loading.scss";

export default function CommentItemLoading() {
  return (
    <div className="comment-item-loading">
      <div className="comment-item-inner-wrap">
        <div className="comment-avatar-wrap">
          <div className="img" />
        </div>
        <div className="comment-content">
          <p className="comment-author">
            <span className="comment-author-name">
              Loading.............................
            </span>
            <span className="comment-author-time-ago">10 năm trước</span>
          </p>
          <p className="comment-text">Đang tải</p>
          <div className="comment-footer">
            <span className="comment-show">
              <i className="fal fa-heart icon"></i>
              <span className="count">69</span>
            </span>
            <span href="#" className="comment-show">
              <i className="fal fa-comment-dots icon"></i>
              <span className="count">69</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
