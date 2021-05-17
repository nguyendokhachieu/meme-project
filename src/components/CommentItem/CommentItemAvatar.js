import { Link } from "react-router-dom";
import isUrl from "is-url";

const defaultAvatar = [
  "/assets/images/default-avatar/ava-1.png",
  "/assets/images/default-avatar/ava-2.png",
  "/assets/images/default-avatar/ava-3.png",
  "/assets/images/default-avatar/ava-4.png",
  "/assets/images/default-avatar/ava-5.png",
  "/assets/images/default-avatar/ava-6.png",
];

export default function CommentItemAvatar({ comment }) {
  const defaultAvatarIndex = Number(comment.user_id) % Number(defaultAvatar.length);

  return (
    <Link to={`/profile?id=${comment.user_id}`} className="comment-avatar-wrap">
      <img
        src={
          isUrl(comment.user_img_url)
            ? comment.user_img_url
            : defaultAvatar[defaultAvatarIndex]
        }
        alt=""
      />
    </Link>
  );
}
