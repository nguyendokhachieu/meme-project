import { Link } from "react-router-dom";
import dayjs from "dayjs";

import Options from "./Options";

import { useDateTime } from "../../hooks/useDateTime";

export default function CommentItemContent({ 
    comment 
}) 
{
  const { timeAgo } = useDateTime(comment);

  return (
    <div className="comment-content">
      <div className="comment-author">
        <Link
          to={`/profile?id=${comment.user_id}`}
          className="comment-author-name"
        >
          {comment.user_name}
        </Link>
        <span className="comment-author-time-ago">
          { timeAgo }
          <span className="tooltip">
            { 
              dayjs(comment.created_at).format('DD ++ MM, YYYY, lúc hh - mm -- A')
              .replace('++', 'tháng')
              .replace('-', 'giờ')
              .replace('--', 'phút') 
              .replace('AM', 'sáng') 
              .replace('PM', 'chiều') 
            }
          </span>
        </span>
        <Options comment={ comment } />
      </div>
      <p className="comment-text">{comment.content}</p>
      <div className="comment-footer">
        <span className="comment-show like active">
          <i className="fal fa-heart icon"></i>
          <span className="count">{comment.liked_count}</span>
        </span>
        <span className="comment-show">
          <i className="fal fa-comment-dots icon"></i>
          <span className="count">123</span>
        </span>
      </div>
    </div>
  );
}
