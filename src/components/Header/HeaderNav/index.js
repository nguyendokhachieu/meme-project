import { Link, useLocation } from "react-router-dom";

export default function HeaderNav() {
  const { pathname } = useLocation();

  return (
    <ul className="header-nav">
      <li className={ pathname === '/' ? 'header-nav-item active' : 'header-nav-item' } >
        <Link className='header-nav-item-link' to="/" >
          <i class="fad fa-home nav-icon"></i>
          Mới nhất
        </Link>
      </li>
      <li className={ pathname === '/categories' ? 'header-nav-item active' : 'header-nav-item' } >
        <Link className='header-nav-item-link' to="/categories" >
          <i class="fad fa-list-alt nav-icon"></i>
          Danh mục
        </Link>
      </li>
    </ul>
  );
}
