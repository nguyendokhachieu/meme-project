import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { PostService } from "../../services/posts";

import { actShowNotificationCard } from "../../store/notifications/actions";

export default function PostItemHeader({
    post
}) 
{
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);
  const [liked, setLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);
  const [callingAPI, setCallingAPI] = useState(false);

  const likeThisPost = async () => {
    if (callingAPI) return;

    if (!user.token) {
      dispatch(actShowNotificationCard('Bạn chưa đăng nhập!'))
      return;
    }

    if (liked) {
      setCallingAPI(true);
      setLiked(false);
      setTotalLikes(totalLikes - 1);

      await PostService.unlike(user.id, post.id);

      setCallingAPI(false);
    } else {
      setCallingAPI(true);
      setLiked(true);
      setTotalLikes(totalLikes + 1);

      await PostService.like(user.id, post.id);

      setCallingAPI(false);
    }
  }

  useEffect(() => {
    async function check() {
      if (callingAPI) return;

      if (user.id && post.id) {
        setCallingAPI(true);
        const response = await PostService.checkLiked(user.id, post.id);
        
        setCallingAPI(false);
        setLiked(response.data.liked);
      }
  
      if (post) {
        setTotalLikes(Number(post.liked_count));
      }
    }

    check();
  }, [user, post]);

    return (
      <div className="post-item-footer">
        <span className="post-item-show" onClick={ likeThisPost } >
          <i className={ liked ? 'fas fa-heart post-footer-icon active' : 'fal fa-heart post-footer-icon'}></i>
          <span className={ liked ? 'count active' : 'count'}>{ totalLikes }</span>
        </span>
        <Link to={ `/post/${ post.id }` } className="post-item-show">
          <i className="fal fa-comment-dots post-footer-icon"></i>
          <span className="count">{ post.total_comments }</span>
        </Link>
      </div>
    );
}