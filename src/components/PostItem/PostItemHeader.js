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

export default function PostItemHeader({ post }) {
  const defaultAvatarIndex = Number(post.user_id) % Number(defaultAvatar.length);

  return (
    <div className="post-item-header">
      <Link
        to={`/profile?id=${post.user_id}`}
        className="post-item-avatar-link"
      >
        <img
          className="post-item-avatar"
          src={
            isUrl(post.user_img_url)
              ? post.user_img_url
              : defaultAvatar[defaultAvatarIndex]
          }
          alt="user avatar"
        />
      </Link>
      <div className="post-item-info">
        <Link to={ `/profile?id=${ post.user_id }` } className="post-item-author">
          { post.user_name }
        </Link>
        <span className="post-item-time-ago">
          <Link to="/post/abcxyz">2 giờ trước</Link>
        </span>
      </div>
    </div>
  );
}
