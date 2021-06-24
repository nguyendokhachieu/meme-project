import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostService } from "../../services/posts";
import { Link } from "react-router-dom";
import NotificationCard from "../shared/NotificationCard";

export default function PostItemHeader({
    post
}) {
  const { user } = useSelector(state => state);
  const [liked, setLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);
  const [callingAPI, setCallingAPI] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [loading, setLoading] = useState(false);

  const likeThisPost = async () => {
    if (!user.id) {
      setShowNotif(true);
      
      setTimeout(() => {
        setShowNotif(false);
      }, 5000);

      return;
    }

    if (callingAPI) {
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
      if (loading) return;

      if (user.id && post.id) {
        setLoading(true);
        const response = await PostService.checkLiked(user.id, post.id);
        
        setLoading(false);
        setLiked(response.data.liked);
      }
  
      if (post) {
        setTotalLikes(Number(post.liked_count));
      }
    }

    check();
  }, [user, post]);

    return (
      <>
        <NotificationCard 
          show={ showNotif }
          showCloseButton={ true }
          content="Bạn chưa đăng nhập, đăng nhập để thả tym bài viết này"
        />
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
      </>
    );
}