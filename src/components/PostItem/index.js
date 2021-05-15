import { Link } from "react-router-dom";
import "./style.css";

export default function PostItem({
  post
}) 
{
  if (!post) {
    return null;
  }

  return (
    <div className="post-item">
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
      <div className="post-item-content">
        <p className="post-item-text">
          { post.content }
        </p>
        <div className="post-item-image-wrap">
          <Link to="/post/abcxyz" className="post-item-image-link">
            <img
              className="post-item-image"
              src=
              {
                post.img_url
                  ? post.img_url
                  : null
              }
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="post-item-footer">
        <a href="#" className="post-item-show">
          <img
            src="/assets/images/heart-icon-no-filled.svg"
            className="post-item-icon heart-icon"
            alt="heart-icon"
          />
          <span className="comment-count">{ post.liked_count }</span>
        </a>
        <a href="#" className="post-item-show">
          <img
            src="/assets/images/comment-icon-footer.svg"
            className="post-item-icon comment-icon"
            alt="heart-icon"
          />
          <span className="comment-count">{ post.total_comments }</span>
        </a>
      </div>
    </div>
  );
}
