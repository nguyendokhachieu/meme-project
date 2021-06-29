import "./user-item.scss";

import { useAvatarLinkSrc } from "../../../../../hooks/useAvatarLinkSrc";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actHidePeopleModal } from "../../../../../store/modals/actions";

export default function UserItem({
  user,
}) 
{
  const dispatch = useDispatch();
  const { link } = useAvatarLinkSrc(user);

  return (
    <Link to={ `/profile?id=${ user.user_id }` } className="modal-user-item" onClick={ () => dispatch(actHidePeopleModal()) }>
      <div className="avatar-link-wrap">
        <img src={ link } alt="avatar" />
      </div>
      <div className="user-info">
        <h5 className="user-info-name">{ user.name }</h5>
        <h6 className="user-info-username">@{ user.username }</h6>
      </div>
    </Link>
  );
}
