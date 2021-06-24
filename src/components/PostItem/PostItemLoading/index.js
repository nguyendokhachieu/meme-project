import "./post-item-loading.scss";

export default function PostItemLoading({
  noOfItems = 4,
}) 
{
  const rendered = [];
  for (let i = 0; i < noOfItems; i++) {
    rendered.push(<PIL key={ i } />);
  }
  return rendered;
}

function PIL() {
  return (
    <div className="post-item-loading">
      <div className="post-item">
        <div className="post-item-header">
          <div className="post-item-avatar-link">
            <div className="post-item-avatar"></div>
          </div>
          <div className="post-item-info">
            <div className="post-item-author">Hiếu</div>
            <span className="post-item-time-ago">
              <span>12/12/2021</span>
            </span>
          </div>
        </div>
        <div className="post-item-content">
          <p className="post-item-text">
          </p>
          <div className="post-item-image-wrap">
            <span className="post-item-image-link"></span>
          </div>
        </div>
        <div className="post-item-footer">
          <span className="post-item-show">
            <i className="fas fa-heart post-footer-icon"></i>
            <span className="count">12121</span>
          </span>
          <span className="post-item-show">
            <i className="fal fa-comment-dots post-footer-icon"></i>
            <span className="count">1211</span>
          </span>
        </div>
      </div>
    </div>
  );
}
