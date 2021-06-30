import "./side-bar.scss";
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

import { useWindowSize } from "../../../hooks/useWindowSize"; 

export default function SideBar({
  toggleSideBar = function() {},
}) 
{
  const [toggleSidebar, setToggleSideBar] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 767) {
      setToggleSideBar(false);
      toggleSideBar(false);

      return;
    } 

    // setToggleSideBar(true);
    // toggleSideBar(true);
  }, [width, toggleSideBar]);

  return (
      <div className={ toggleSidebar ? 'update-profile-side-bar' : 'update-profile-side-bar hide' }>
        <div className="side-bar-wrap">
          <h3 className="title">
            <span className={ toggleSidebar ? 'text' : 'text hide' }>Tài khoản</span>
            <input type="checkbox" hidden id="userInfo-toggle" />
            <label 
              htmlFor="userInfo-toggle" 
              className="userInfo-toggle" 
              onClick={ () => { toggleSideBar(!toggleSidebar); setToggleSideBar(prev => !prev);  } }
            >
              <i className="far fa-bars toggle-icon"></i>
            </label>
          </h3>
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                to="/update/general"
                activeClassName="active"
                className="nav-item-link"
              >
                <i className="fad fa-list-alt icon"></i>
                <span className="text">Thông tin chung</span>
              </NavLink>
              <NavLink
                to="/update/privacy"
                activeClassName="active"
                className="nav-item-link"
              >
                <i className="fad fa-user-shield icon"></i>
                <span className="text">Quyền riêng tư</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/update/profile"
                activeClassName="active"
                className="nav-item-link"
              >
                <i className="fad fa-list-alt icon"></i>
                <span className="text">Trang cá nhân</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
  );
}
