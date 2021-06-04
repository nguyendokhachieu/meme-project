import Notification from "./Notification";
import NewPost from "./NewPost";
import ProfileImage from "./ProfileImage";
import Login from "./Login";

export default function HeaderBtn() {

  return (
    <div className="header-btn-group">
      <Login />
      <NewPost /> 
      <Notification />      
      <ProfileImage />
    </div>
  );
}
