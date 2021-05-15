export default function PostItemHeader({
    post
}) {
    return (
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
    );
}