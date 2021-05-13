import "./style.css";

export default function PostItem() {
  return (
    <div className="post-item">
      <div className="post-item-header">
        <a href="#" className="post-item-avatar-link">
          <img
            className="post-item-avatar"
            src="https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png"
            alt=""
          />
        </a>
        <div className="post-item-info">
          <a href className="post-item-author">
            Thanos
          </a>
          <span className="post-item-time-ago">
            <a href>2 giờ trước</a>
          </span>
        </div>
      </div>
      <div className="post-item-content">
        <p className="post-item-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore
          obcaecati eum deserunt ut, aperiam quas! Placeat blanditiis
          consequatur, deserunt facere iusto amet a ad suscipit laudantium unde
          quidem perferendis!
        </p>
        <p className="post-item-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore
          obcaecati eum deserunt ut, aperiam quas! Placeat blanditiis
          consequatur, deserunt facere iusto amet a ad suscipit laudantium unde
          quidem perferendis!
        </p>
        <div className="post-item-image-wrap">
          <a className="post-item-image-link" href="bai-viet-chi-tiet.html">
            <img
              className="post-item-image"
              src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="post-item-footer">
        <a href="#" className="post-item-show">
          <img
            src="./assets/images/heart-icon-no-filled.svg"
            className="post-item-icon heart-icon"
            alt="heart-icon"
          />
          <span className="comment-count">123</span>
        </a>
        <a href="#" className="post-item-show">
          <img
            src="./assets/images/comment-icon-footer.svg"
            className="post-item-icon comment-icon"
            alt="heart-icon"
          />
          <span className="comment-count">123</span>
        </a>
      </div>
    </div>
  );
}
