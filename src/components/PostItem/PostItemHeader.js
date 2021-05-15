import { Link } from "react-router-dom";

export default function PostItemHeader({
    post
}) {
    return (
        <div className="post-item-header">
        <Link to={ `/profile?id=${post.user_id}` } className="post-item-avatar-link">
          <img
            className="post-item-avatar"
            src=
            {
              post.user_img_url 
                ? post.user_img_url 
                : null
            }
            alt="user avatar"
          />
        </Link>
        <div className="post-item-info">
          <Link to={ `/profile?id=${post.user_id}` } className="post-item-author">
            { post.user_name }
          </Link>
          <span className="post-item-time-ago">
            <Link to="/post/abcxyz">2 giờ trước</Link>
          </span>
        </div>
      </div>
    );
}