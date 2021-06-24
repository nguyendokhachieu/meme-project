import { useAvatarLinkSrc } from "../../../hooks/useAvatarLinkSrc";

export default function UserAvatar({
    userInfo
}) {
  const { link } = useAvatarLinkSrc(userInfo);

  return (
    <div className="user-image-wrap">
      <div className="user-image-wrap-link">
        <img src={ link } className="user-image" alt="avatar" />
      </div>
    </div>
  );
}
