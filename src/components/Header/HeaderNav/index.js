import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useAuthorization } from "../../../hooks/useAuthorization";

export default function HeaderNav() {
  const { pathname } = useLocation();
  const { auth } = useAuthorization();
  const { id } = useSelector(state => state.user);

  return (
    <ul className="header-nav">
      <li className={ pathname === '/' ? 'header-nav-item active' : 'header-nav-item' } >
        <Link className='header-nav-item-link' to="/" >
          Mới nhất
        </Link>
      </li>
      <li className={ pathname === '/categories' ? 'header-nav-item active' : 'header-nav-item' } >
        <Link className='header-nav-item-link' to="/categories" >
          Danh mục
        </Link>
      </li>
      {
        auth 
          ? (
            <li className={ pathname === '/profile' ? 'header-nav-item active' : 'header-nav-item' } >
              <Link className='header-nav-item-link' to={ `/profile?id=${ id }` } >
                Bài viết của bạn
              </Link>
            </li>
          )
          : null
      }
    </ul>
  );
}
