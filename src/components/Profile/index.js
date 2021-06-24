import "./style.scss";

import { useEffect, useState } from "react";

import UserProfileLoading from "../UserProfileInfomation/UserProfileLoading";
import UserProfileInfomation from "../UserProfileInfomation";
import ProfileDropView from "./ProfileDropView";
import UserPostsList from "./UserPostsList";

import { UserService } from "../../services/user";

import { useScrollToTop } from "../../hooks/useScrollToTop";

export default function Profile({ 
  id,
  history
}) 
{
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const { scrollToTop } = useScrollToTop();

  useEffect(() => {
    async function get() {
      setLoading(true);
  
      const response = await UserService.getUserInfoByUserId(id);
  
      if (response) setLoading(false);
  
      if (response.data.status === 200) {
        setUserInfo(response.data.data);
      } else {
        history.push('/404-not-found');
      }
    }

    get();
  }, [id, history]);

  useEffect(() => {
    scrollToTop();
  }, [])

  return (
    <div className="main-content">
      <ProfileDropView loading={ loading } userInfo={ userInfo } />
      <div className="container">
        <section className="profile-section">
          {
            loading
              ? <UserProfileLoading />
              : <UserProfileInfomation userInfo={ userInfo } />
          }
          <h3 className="user-posts-list-title">Danh sách bài viết</h3>
            <UserPostsList />
        </section>
      </div>
    </div>
  );
}
