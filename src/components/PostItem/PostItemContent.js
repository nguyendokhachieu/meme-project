import { Link } from "react-router-dom";

export default function PostItemHeader({
    post
}) {
    return (
        <div className="post-item-content">
        <p className="post-item-text">
          { post.content }
        </p>
        <div className="post-item-image-wrap">
          <Link to={ `/post/${ post.id }` } className="post-item-image-link">
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
    );
}