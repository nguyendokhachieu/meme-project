import Options from "./Options";

export default function UserName({ userInfo }) {
  return (
    <div className="user-info-username">
      <h3 className="fullname">{ userInfo.name }</h3>
      <Options />
    </div>
  );
}
