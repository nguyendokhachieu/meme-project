import { Link } from "react-router-dom";
import { useAvatarLinkSrc } from "../../hooks/useAvatarLinkSrc";

export default function CommentItemAvatar({ comment }) {
  const { link } = useAvatarLinkSrc(comment);

  return (
    <Link to={`/profile?id=${comment.user_id}`} className="comment-avatar-wrap">
      <img
        src={ link }
        alt=""
      />
    </Link>
  );
}
