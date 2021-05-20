import { Link, useLocation } from "react-router-dom";

export default function HeaderNav() {
  const { pathname } = useLocation();

  return (
    <ul className="header-nav">
      <li className={ pathname === '/' ? 'header-nav-item active' : 'header-nav-item' } >
        <Link className='header-nav-item-link' to="/" >
          News
        </Link>
      </li>
      <li className={ pathname === '/categories' ? 'header-nav-item active' : 'header-nav-item' } >
        <Link className='header-nav-item-link' to="/categories" >
          Categories
        </Link>
      </li>
      <li className={ pathname === '/profile' ? 'header-nav-item active' : 'header-nav-item' } >
        <Link className='header-nav-item-link' to="/profile?id=abcxyz" >
          Your posts
        </Link>
      </li>
    </ul>
  );
}
