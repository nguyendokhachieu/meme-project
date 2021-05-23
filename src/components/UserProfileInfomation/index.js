import "./style.css";
import UserAvatar from "./UserAvatar";
import UserName from "./UserName";
import UserOptions from "./UserOptions";
import UserStatistics from "./UserStatistics";
import UserDescription from "./UserDescription";

export default function UserProfileInfomation({
  userInfo
}) {

  return (
    <div className="user-content">
      <UserAvatar userInfo={ userInfo } />
      <div className="user-info">
        <UserName userInfo={ userInfo } />
        <UserOptions userInfo={ userInfo } />
        <UserStatistics userInfo={ userInfo } />
        <UserDescription userInfo={ userInfo } />
      </div>
    </div>
  );
}
