import "./comment-item-loading.scss";

export default function CommentItemLoading() {
  return (
    <div className="comment-item-loading">
      <div className="comment-item-inner-wrap">
        <a className="comment-avatar-wrap">
          <div className="img" />
        </a>
        <div className="comment-content">
          <p className="comment-author">
            <a className="comment-author-name">
              hidfhsdifhdsifnhdsfnsdkfnsdkdfsedf
            </a>
            <a className="comment-author-time-ago">10 năm trước</a>
          </p>
          <p className="comment-text">Đang tải</p>
          <div className="comment-footer">
            <a className="comment-show">
              <i className="fal fa-heart icon"></i>
              <span className="count">69</span>
            </a>
            <a href="#" className="comment-show">
              <i className="fal fa-comment-dots icon"></i>
              <span className="count">69</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
