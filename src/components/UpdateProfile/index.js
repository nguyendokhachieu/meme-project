import "./update-profile.scss";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import SideBar from "./SideBar";
import RightContent from "./RightContent";
import NotificationCard from "../shared/NotificationCard";

export default function UpdateProfile() {
  const { token } = useSelector(state => state.user);
  const [show, setShow] = useState(false);
  const [toggleSidebar, setToggleSideBar] = useState(true);

  useEffect(() => {
    if (!token) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [token]);

  return (
    <div className="main-content">
      {
        show 
          ? (
            <NotificationCard 
              content="Bạn chưa đăng nhập"
              showCloseButton={ false }
              show={ show }
            />
          )
          : null
      } 
      <div className="update-profile-wrap">
        <div className={ toggleSidebar ? 'left-nav-bar' : 'left-nav-bar hide' }>
          <SideBar toggleSideBar={ val => { setToggleSideBar(val) } } />
        </div>
        <div className={ toggleSidebar ? 'right-content' : 'right-content hide' }>
          <RightContent />
        </div>
      </div>
    </div>
  );
}