import Notification from "./Notification";
import ProfileImage from "./ProfileImage";
import Login from "./Login";

export default function HeaderBtn() {

  return (
    <div className="header-btn-group">
      <Login />
      <Notification />      
      <ProfileImage />
    </div>
  );
}
