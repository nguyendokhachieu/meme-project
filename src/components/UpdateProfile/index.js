import "./update-profile.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actShowNotificationCard, actHideNotificationCard } from "../../store/notifications/actions";

import SideBar from "./SideBar";
import RightContent from "./RightContent";

export default function UpdateProfile() {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.user);
  const [toggleSidebar, setToggleSideBar] = useState(true);
  
  useEffect(() => {
    !token && dispatch(actShowNotificationCard('Đang xử lý'));
    token && dispatch(actHideNotificationCard());
  }, [token]);

  useEffect(() => {
    document.body.classList.add('disabled-body-scroll');
    return () => document.body.classList.remove('disabled-body-scroll');
  }, []);

  return (
    <div className="main-content">
      <div className="update-profile-wrap">
        <div className={ toggleSidebar ? 'left-nav-bar' : 'left-nav-bar hide' }>
          <SideBar toggleSideBar={ val => setToggleSideBar(val) } />
        </div>
        <div className={ toggleSidebar ? 'right-content' : 'right-content hide' }>
          <RightContent />
        </div>
      </div>
    </div>
  );
}