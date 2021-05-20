import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";
import HeaderBtn from "./HeaderBtn";

import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <HeaderLogo />
        <div className="header-group">
          <HeaderNav />
          <HeaderSearch />
          <HeaderBtn />
        </div>
        <div className="icon-bar" id="icon-bar">
          <img src="/assets/images/bar-menu.svg" className="bar-menu-button" alt="bar-menu-button" />
        </div>
      </div>
    </header>
  );
}
