import Logo from "./Logo";
import Nav from "./Nav";
import ButtonGroup from "./ButtonGroup";
import Control from "./Control";

export default function HeaderMobile() {
  return (
    <>
      <Control />
      <div className="side-bar">
        <div className="side-bar-wrap">
          <span id="close-side-bar" className="close-side-bar">
            <i className="fad fa-arrow-alt-circle-left close-icon"></i>
            <span className="tooltip">Đóng lại</span>
          </span>
          <Logo />
          <Nav />
          <ButtonGroup />
        </div>
      </div>
    </>
  );
}
