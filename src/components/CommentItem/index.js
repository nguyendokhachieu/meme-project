import "./style.css";

import CommentItemAvatar from "./CommentItemAvatar";
import CommentItemContent from "./CommentItemContent";

export default function CommentItem({
  comment
}) 
{
  if (!comment) {
    return null;
  }

  return (
    <div className="comment-item">
      <div className="comment-item-inner-wrap">
        <CommentItemAvatar comment={ comment } />
        <CommentItemContent comment={ comment } />
      </div>
      {/**CHILDREN COMMENT ITEMS HERE */}
    </div>
  );
}
