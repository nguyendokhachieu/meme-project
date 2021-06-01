import { NavHashLink } from 'react-router-hash-link';
import "./update-profile-side-bar.scss";

export default function SideBar() {
  return (
      <div className="update-profile-side-bar">
        <div className="side-bar-wrap">
          <h3 className="title">Thông tin cá nhân</h3>
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
