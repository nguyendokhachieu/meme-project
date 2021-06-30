import "./modal-user-item.scss";
import { useAvatarLinkSrc } from "../../../../hooks/useAvatarLinkSrc";
import { Link } from "react-router-dom";

export default function ModalUserItem({
  user,
  closeModal=function(){},
}) {
  const { link } = useAvatarLinkSrc(user);

  const handleCloseModal = () => {
    closeModal(true);
  }

  return (
    <Link to={ `/profile?id=${ user.user_id }` } className="user-item" onClick={ handleCloseModal } >
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
