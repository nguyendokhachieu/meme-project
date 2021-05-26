import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostService } from "../../services/posts";

export default function PostItemHeader({
    post
}) {
  const { user } = useSelector(state => state);
  const [liked, setLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);
  const [callingAPI, setCallingAPI] = useState(false);

  const likeThisPost = async () => {
    if (!user.id) {
      return;
    }

    if (callingAPI) {
      return;
    }

    if (liked) {
      setCallingAPI(true);
      setLiked(false);
      setTotalLikes(totalLikes - 1);

      const response = await PostService.unlike(user.id, post.id);

      setCallingAPI(false);
    } else {
      setCallingAPI(true);
      setLiked(true);
      setTotalLikes(totalLikes + 1);

      const response = await PostService.like(user.id, post.id);

      setCallingAPI(false);
    }
  }

  useEffect(async () => {
    if (user.id) {
      const response = await PostService.checkLiked(user.id, post.id);

      setLiked(response.data.liked);
    }

    if (post) {
      setTotalLikes(Number(post.liked_count));
    }
  }, [user, post]);

    return (
      <div className="post-item-footer">
        <a className="post-item-show" onClick={ likeThisPost } >
          <i className={ liked ? 'fas fa-heart post-footer-icon active' : 'fal fa-heart post-footer-icon'}></i>
          <span className={ liked ? 'count active' : 'count'}>{ totalLikes }</span>
        </a>
        <a className="post-item-show">
          <i className="fal fa-comment-dots post-footer-icon"></i>
          <span className="count">{ post.total_comments }</span>
        </a>
      </div>
    );
}