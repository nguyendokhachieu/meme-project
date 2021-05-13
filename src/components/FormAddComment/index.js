import "./style.css";

export default function FormAddComment() {
  return (
    <div className="add-comment-wrap">
      <div className="add-comment">
        <form action className="form-change-profile">
          <div className="form-ctl-wrap">
            <img
              src="./assets/images/comment_icon.svg"
              className="comment-icon"
              alt="comment-icon"
            />
            <input
              type="text"
              className="form-control comment-input"
              placeholder="Thêm một bình luận"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}
