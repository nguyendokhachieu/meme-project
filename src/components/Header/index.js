import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <a href="#" className="header-logo-link">
            Meme
          </a>
        </div>
        <div className="header-group">
          <ul className="header-nav">
            <li className="header-nav-item">
              <a className="header-nav-item-link" href="#">News</a>
            </li>
            <li className="header-nav-item">
              <a className="header-nav-item-link" href="#">Tags</a>
            </li>
            <li className="header-nav-item">
              <a className="header-nav-item-link" href="#">Your posts</a>
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
            <a href="#" className="btn header-upload-btn">
              Upload
            </a>
            <a href className="btn header-login-btn">
              Login
            </a>
          </div>
        </div>
        <div className="icon-bar" id="icon-bar">
          <img src="/assets/images/bar-menu.svg" className="bar-menu-button" alt="bar-menu-button" />
        </div>
      </div>
    </header>
  );
}
