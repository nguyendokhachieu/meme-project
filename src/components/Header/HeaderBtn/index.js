import Notification from "./Notification";
import NewPost from "./NewPost";
import ProfileImage from "./ProfileImage";
import Login from "./Login";
import Search from "./Search";

export default function HeaderBtn() {

  return (
    <div className="header-btn-group">
      <Login />
      <Search />
      <NewPost /> 
      <Notification />      
      <ProfileImage />
    </div>
  );
}
