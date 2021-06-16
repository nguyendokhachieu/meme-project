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
              'Thứ '.concat((dayjs(post.created_at).day() + 1).toString().concat(', ').concat(
                dayjs(post.created_at).format('DD ++ MM, YYYY, lúc hh - mm A')
                .replace('++', 'thg')
                .replace('-', 'giờ')
                .replace('AM', 'sáng') 
                .replace('PM', 'chiều') )
              ).replace('Thứ 8', 'Chủ nhật')
              
            }
          </span>
        </span>
      </div>
      <Options post={ post }/>
    </div>
  );
}
