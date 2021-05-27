export default function HeaderMobile() {
  return (
    <>
      <label htmlFor="menu-input" className="menu-input-label">
        <i class="fad fa-bars menu-input-icon"></i>
      </label>
      <input type="checkbox" hidden className="menu-input" id="menu-input" />
      <div className="header-overlay"></div>
      <div className="side-bar">
        <div className="side-bar-wrap">
          <h1 className="side-bar-page-title">
            <a className="title-link">MEME</a>
          </h1>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-item-link active">
                <i class="fad fa-home nav-icon"></i>
                Mới nhất
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link">
                <i class="fad fa-list-alt nav-icon"></i>
                Danh mục
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link">
                <i class="fad fa-user-alt nav-icon"></i>
                Profile
              </a>
            </li>
          </ul>
          <div className="btn-group">
            <a className="btn btn-item">
              <i class="fad fa-upload nav-icon"></i>
              Bài viết mới
            </a>
            <a className="btn btn-item">
              <i class="fad fa-sign-in nav-icon"></i>
              Đăng nhập
            </a>
            <a className="btn btn-item">
              <i class="fal fa-sign-out nav-icon"></i>
              Đăng xuất
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
