import "./style.scss";

import UserAvatar from "./UserAvatar";
import UserName from "./UserName";
import UserOptions from "./UserOptions";
import UserStatistics from "./UserStatistics";
import UserDescription from "./UserDescription";
import { useState } from "react";

export default function UserProfileInfomation({
  userInfo
}) {
  const [countFollowed, setCountFollowed] = useState('');

  if (!userInfo) return;

  return (
    <div className="user-content">
      <UserAvatar userInfo={ userInfo } />
      <div className="user-info">
        <UserName userInfo={ userInfo } />
        <UserOptions 
          userInfo={ userInfo } 
          setCountFollowed={ val => { setCountFollowed(val) } }
        />
        <UserStatistics 
          userInfo={ userInfo } 
          countFollowed={ countFollowed }
        />
        <UserDescription userInfo={ userInfo } />
      </div>
    </div>
  );
}
