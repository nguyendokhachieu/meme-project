import { Link } from "react-router-dom";
import isUrl from "is-url";

const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
const updateLocale = require('dayjs/plugin/updateLocale');
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

const localeObject = {
  relativeTime: {
    future: 'trong %s',
    past: '%s trước',
    s: 'vài giây',
    m: 'một phút',
    mm: '%d phút',
    h: 'một giờ',
    hh: '%d giờ',
    d: 'một ngày',
    dd: '%d ngày',
    M: 'một tháng',
    MM: '%d tháng',
    y: 'một năm',
    yy: '%d năm'
  }
}

dayjs.updateLocale('en', localeObject);

const defaultAvatar = [
  "/assets/images/default-avatar/ava-1.png",
  "/assets/images/default-avatar/ava-2.png",
  "/assets/images/default-avatar/ava-3.png",
  "/assets/images/default-avatar/ava-4.png",
  "/assets/images/default-avatar/ava-5.png",
  "/assets/images/default-avatar/ava-6.png",
];

export default function PostItemHeader({ post }) {
  const defaultAvatarIndex = Number(post.user_id) % Number(defaultAvatar.length);

  return (
    <div className="post-item-header">
      <Link
        to={`/profile?id=${post.user_id}`}
        className="post-item-avatar-link"
      >
        <img
          className="post-item-avatar"
          src={
            isUrl(post.user_img_url)
              ? post.user_img_url
              : defaultAvatar[defaultAvatarIndex]
          }
          alt="user avatar"
        />
      </Link>
      <div className="post-item-info">
        <Link to={ `/profile?id=${ post.user_id }` } className="post-item-author">
          { post.user_name }
        </Link>
        <span className="post-item-time-ago">
          <Link to={ `/post/${ post.id }` }>
            { dayjs(post.created_at).fromNow() }
          </Link>
        </span>
      </div>
    </div>
  );
}
