export default function UserDescription({
    userInfo
}) {

  return (
    <div className="user-info-description">
      { userInfo.description }
    </div>
  );
}
