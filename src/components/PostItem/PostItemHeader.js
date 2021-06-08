import { Link } from "react-router-dom";
import { useAvatarLinkSrc } from "../../hooks/useAvatarLinkSrc";
import { useDateTime } from "../../hooks/useDateTime";
import dayjs from "dayjs";
import Options from "./Options";

export default function PostItemHeader({ post }) {
  const { link } = useAvatarLinkSrc(post);
  const { timeAgo } = useDateTime(post);

  return (
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
        <Link to={ `/profile?id=${ post.user_id }` } className="post-item-author">
          { post.user_name }
        </Link>
        <span className="post-item-time-ago">
          <Link to={ `/post/${ post.id }` }>
            { timeAgo }
          </Link>
          <span className="tooltip">
            { 
              dayjs(post.created_at).format('DD ++ MM, YYYY, lúc hh - mm -- A')
              .replace('++', 'tháng')
              .replace('-', 'giờ')
              .replace('--', 'phút') 
              .replace('AM', 'sáng') 
              .replace('PM', 'chiều') 
            }
          </span>
        </span>
      </div>
      <Options post={ post }/>
    </div>
  );
}
