import { Link } from "react-router-dom";
import { useAvatarLinkSrc } from "../../../hooks/useAvatarLinkSrc";
import { useDateTime } from "../../../hooks/useDateTime";
import "./modal-post-item.scss";

export default function ModalPostItem({
    post = {},
}) {
    const { link } = useAvatarLinkSrc(post);
    const { timeAgo } = useDateTime(post);

    if (!post) {
        return null;
    }

  return (
    <section className="modal-post-item">
      <Link to={`/post/${ post.post_id }`}>
        <div className="post-item-header">
          <Link
            to={`/profile?id=${post.user_id}`}
            className="post-item-avatar-link"
          >
            <img
              className="post-item-avatar"
              src={ link }
              alt="user avatar"
            />
          </Link>
          <div className="post-item-info">
            <Link
              to={`/profile?id=${post.user_id}`}
              className="post-item-author"
            >
              {post.name}
            </Link>
            <span className="post-item-time-ago">
              <Link to={`/post/${post.post_id}`}>{timeAgo}</Link>
            </span>
          </div>
        </div>
        <div className="post-item-content">
          <p className="post-item-text">{ post.content }</p>
          <div className="post-item-image-wrap">
            <Link to={`/post/${ post.post_id }`} className="post-item-image-link">
                {
                    post.post_img_url
                        ? (
                            <img
                                className="post-item-image"
                                src={ post.post_img_url }
                                alt="post img url"
                            />
                        )
                        : null
                }
            </Link>
          </div>
        </div>
      </Link>
    </section>
  );
}
