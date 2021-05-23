import { useEffect, useState } from "react";
import PostItem from "../PostItem";
import UserProfileInfomation from "../UserProfileInfomation";
import { UserService } from "../../services/user";
import "./style.css";

export default function Profile({ 
  id,
  history
}) {
  const [userInfo, setUserInfo] = useState({});

  useEffect(async () => {
    const response = await UserService.getUserInfoByUserId(id);
    
    if (response.data.status === 200) {
      setUserInfo(response.data.data);
    } else {
      history.push('/404-not-found');
    }
  }, [id]);

  return (
    <div className="main-content">
      <div className="container">
        <UserProfileInfomation userInfo={ userInfo } />
        <h3 className="user-posts-list-title">Danh sách bài viết của bạn</h3>
        <div className="user-posts-list">
          <div className="col-6">
            <PostItem />
          </div>
          <div className="col-6">
            <PostItem />   
          </div>
        </div>
      </div>
    </div>
  );
}
