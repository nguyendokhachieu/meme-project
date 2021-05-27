import "./style.scss";

import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";
import HeaderBtn from "./HeaderBtn";
import HeaderMobile from "./HeaderMobile";

export default function Header() {

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
