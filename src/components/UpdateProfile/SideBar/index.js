import "./side-bar.scss";
import { useEffect, useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
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

    setToggleSideBar(true);
    toggleSideBar(true);
  }, [width]);

  return (
      <div className={ toggleSidebar ? 'update-profile-side-bar' : 'update-profile-side-bar hide' }>
        <div className="side-bar-wrap">
          <h3 className="title">
            <span className={ toggleSidebar ? 'text' : 'text hide' }>Tài khoản</span>
            <input type="checkbox" hidden id="userInfo-toggle" />
            <label 
              htmlFor="userInfo-toggle" 
              className="userInfo-toggle" 
              onClick={ e => { toggleSideBar(!toggleSidebar); setToggleSideBar(prev => !prev); } }
            >
              <i class="far fa-bars icon"></i>
            </label>
          </h3>
          <ul className="nav">
            <li className="nav-item">
              <NavHashLink
                smooth
                to="/update#01-general"
                activeClassName="active"
                className="nav-item-link"
              >
                <i class="fad fa-list-alt nav-icon"></i>
                <span className="text">Thông tin chung</span>
              </NavHashLink>
            </li>
          </ul>
        </div>
      </div>
  );
}
