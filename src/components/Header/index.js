import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <Link to="/" className="header-logo-link">
            Meme
          </Link>
        </div>
        <div className="header-group">
          <ul className="header-nav">
            <li className="header-nav-item">
              <Link className="header-nav-item-link" to="/">News</Link>
            </li>
            <li className="header-nav-item">
              <Link className="header-nav-item-link" to="/categories">Categories</Link>
            </li>
            <li className="header-nav-item">
              <Link className="header-nav-item-link" to="/profile?id=abcxyz">Your posts</Link>
            </li>
          </ul>
          <div className="header-search">
            <form action="#">
              <label>
                <input
                  type="search"
                  name="search-text"
                  className="form-control"
                  placeholder="Nhập từ khóa ..."
                />
                <i className="icon-search" />
              </label>
            </form>
          </div>
          <div className="header-btn-group">
            <Link to="/upload" className="btn header-upload-btn">
              Upload
            </Link>
            <Link to="/login" className="btn header-login-btn">
              Login
            </Link>
          </div>
        </div>
        <div className="icon-bar" id="icon-bar">
          <img src="/assets/images/bar-menu.svg" className="bar-menu-button" alt="bar-menu-button" />
        </div>
      </div>
    </header>
  );
}
