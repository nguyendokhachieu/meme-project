import { Link } from "react-router-dom";
import { useDateTime } from "../../hooks/useDateTime";

export default function CommentItemContent({ 
    comment 
}) 
{
  const { timeAgo } = useDateTime(comment);

  return (
    <div className="comment-content">
      <p className="comment-author">
        <Link
          to={`/profile?id=${comment.user_id}`}
          className="comment-author-name"
        >
          {comment.user_name}
        </Link>
        <Link className="comment-author-time-ago">
          { timeAgo }
        </Link>
      </p>
      <p className="comment-text">{comment.content}</p>
      <div className="comment-footer">
        <a href="#" className="comment-show">
          <img
            src="/assets/images/heart-icon-no-filled.svg"
            className="heart-icon"
            alt="heart-icon"
          />
          <span className="comment-count">{comment.liked_count}</span>
        </a>
        <a href="#" className="comment-show">
          <img
            src="/assets/images/comment_icon.svg"
            className="comment-icon"
            alt="comment-icon"
          />
          <span className="comment-count">123</span>
        </a>
      </div>
    </div>
  );
}
