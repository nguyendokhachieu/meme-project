import "./user-item.scss";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { Link } from "react-router-dom";

import { useAvatarLinkSrc } from "../../../hooks/useAvatarLinkSrc";
import { UserService } from "../../../services/user";
import { actShowNotificationCard } from "../../../store/notifications/actions";

export default function UserItem({
  user = null,
}) 
{
  const { link } = useAvatarLinkSrc({
    user_id: user ? user.id : 1,
    user_img_url: user ? user.img_url : '',
  });

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { token, id } = useSelector(state => state.user);
  const [following, setFollowing] = useState(false);

  const follow = async () => {
    if (!token) return;
    if (!user) return;
    if (loading) return;

    setLoading(true);

    const response = await UserService.follow(id, user.id);

    setLoading(false);

    response.data.follow && dispatch(actShowNotificationCard(`Theo dõi ${ user.name }`)) && setFollowing(true);
    !response.data.follow && dispatch(actShowNotificationCard(`Có lỗi xảy ra!`));
  }

  if (!user) return null;

  return (
    <div className="suggest-user-item" title={ user.name }>
      <Link to={ `/profile?id=${ user.id }` } className="avatar-link-wrap">
        <img src={ link } alt="avatar" />
      </Link>
      <Link to={ `/profile?id=${ user.id }` } className="user-info">
        <h5 className="user-info-name">{ user.name }</h5>
        <h6 className="user-info-username">@{ user.username }</h6>
      </Link>
      <div className="buttons">
        <button className={ following ? "button scale following" : "button scale" } onClick={ follow }>
        {
          loading 
            ? <i className="fal fa-spinner-third fa-spin icon"></i>
            : following
              ? <i className="fal fa-user-check icon following"></i>
              : <i className="fas fa-user-plus icon"></i>
        }
        </button>
        <>
          {
            // !following 
            // ? <button className="button"><i className="fad fa-minus-circle icon icon-light"></i></button>
            // : null
          }
        </>
      </div>
    </div>
  );
}
