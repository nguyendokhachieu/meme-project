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
        <a href="#" className="comment-show like active">
          <i class="fal fa-heart icon"></i>
          <span className="count">{comment.liked_count}</span>
        </a>
        <a href="#" className="comment-show">
          <i class="fal fa-comment-dots icon"></i>
          <span className="count">123</span>
        </a>
      </div>
    </div>
  );
}
