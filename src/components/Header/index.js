import "./style.scss";
import { useEffect } from "react";

import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";
import HeaderBtn from "./HeaderBtn";
import HeaderMobile from "./HeaderMobile";

export default function Header() {

  useEffect(() => {
    const menuInput = document.getElementById('menu-input');
    const closeSidebar = document.getElementById('close-side-bar');

    document.addEventListener('click', (e) => {
      if (e.target.className === 'header-overlay' || e.target.className.includes('close-icon')) {
        menuInput.checked = false;
      }
    })
  }, []);
  
  return (
    <header className="header">
      <div className="container">
        <section className="header-section">
          <HeaderLogo />
          <div className="header-group">
            <HeaderNav />
            <HeaderSearch />
            <HeaderBtn />
          </div>
          <HeaderMobile />
        </section>
      </div>
    </header>
  );
}
