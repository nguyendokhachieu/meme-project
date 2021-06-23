import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function HeaderNav() {
  const { pathname } = useLocation();
  const { homepageTab: tab } = useSelector(state => state.posts);

  return (
    <ul className="header-nav">
      <li className={ pathname === '/' ? 'header-nav-item active' : 'header-nav-item' } >
        <Link className='header-nav-item-link' to="/" >
          <i className="fad fa-home nav-icon"></i>
          { tab === 'latest' ? 'Mới nhất' : 'Đang theo dõi' }
        </Link>
      </li>
      <li className={ pathname === '/categories' ? 'header-nav-item active' : 'header-nav-item' } >
        <Link className='header-nav-item-link' to="/categories" >
          <i className="fad fa-list-alt nav-icon"></i>
          Danh mục
        </Link>
      </li>
    </ul>
  );
}
