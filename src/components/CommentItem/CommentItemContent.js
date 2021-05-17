import { Link } from "react-router-dom";

const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");
const updateLocale = require("dayjs/plugin/updateLocale");
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

const localeObject = {
  relativeTime: {
    future: "trong %s",
    past: "%s trước",
    s: "vài giây",
    m: "một phút",
    mm: "%d phút",
    h: "một giờ",
    hh: "%d giờ",
    d: "một ngày",
    dd: "%d ngày",
    M: "một tháng",
    MM: "%d tháng",
    y: "một năm",
    yy: "%d năm",
  },
};

dayjs.updateLocale("en", localeObject);

export default function CommentItemContent({ 
    comment 
}) 
{
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
          {dayjs(comment.created_at).fromNow()}
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
