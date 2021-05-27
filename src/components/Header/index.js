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

    document.addEventListener('click', (e) => {
      if (e.target.className === 'header-overlay') {
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
