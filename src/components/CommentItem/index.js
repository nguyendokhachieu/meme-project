import "./style.css";

export default function CommentItem() {
  return (
    <div className="comment-item">
      <div className="comment-item-inner-wrap">
        <a href="#" className="comment-avatar-wrap">
          <img
            src="https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"
            alt=""
          />
        </a>
        <div className="comment-content">
          <p className="comment-author">
            <a className="comment-author-name" href>
              John Doe
            </a>
            <a className="comment-author-time-ago" href>
              2 giờ trước
            </a>
          </p>
          <p className="comment-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim
            ex illo at labore hic sint veritatis consectetur perspiciatis alia
          </p>
          <div className="comment-footer">
            <a href="#" className="comment-show">
              <img
                src="./assets/images/heart-icon-no-filled.svg"
                className="heart-icon"
                alt="heart-icon"
              />
              <span className="comment-count">123</span>
            </a>
            <a href="#" className="comment-show">
              <img
                src="./assets/images/comment_icon.svg"
                className="comment-icon"
                alt="comment-icon"
              />
              <span className="comment-count">123</span>
            </a>
          </div>
        </div>
      </div>
      {/**CHILDREN COMMENT ITEMS HERE */}
    </div>
  );
}
