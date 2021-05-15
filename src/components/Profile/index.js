import PostItem from "../PostItem";
import UserProfileInfomation from "../UserProfileInfomation";
import "./style.css";

export default function Profile() {
  return (
    <div className="main-content">
      <div className="container">
        <UserProfileInfomation />
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
