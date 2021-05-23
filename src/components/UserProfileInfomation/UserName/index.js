export default function UserName({ userInfo }) {
  return (
    <div className="user-info-username">
      <h3>{ userInfo.name }</h3>
    </div>
  );
}
