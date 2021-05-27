import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const { id } = useSelector(state => state.user);

  useEffect(() => {
    const menuInput = document.getElementById("menu-input");

    document.addEventListener("click", (e) => {
      if (e.target.className.includes("nav-item-link") || e.target.className.includes("nav-icon")) {
        menuInput.checked = false;
      }
    });
  }, []);

  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/" className={ pathname === '/' ? 'nav-item-link active' : 'nav-item-link' }>
          <i class="fad fa-home nav-icon"></i>
          Mới nhất
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/categories" className={ pathname === '/categories' ? 'nav-item-link active' : 'nav-item-link' }>
          <i class="fad fa-list-alt nav-icon"></i>
          Danh mục
        </Link>
      </li>
      {
        id
          ? (
            <li className="nav-item">
              <Link to={ `/profile?id=${ id }` } className={ pathname === '/profile' ? 'nav-item-link active' : 'nav-item-link' }>
                <i class="fad fa-user-alt nav-icon"></i>
                Profile
              </Link>
            </li>
          )
          : null
      }
    </ul>
  );
}
