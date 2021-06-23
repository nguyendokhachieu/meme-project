import { useEffect } from "react";
import { useAuthorization } from "../../../../hooks/useAuthorization";
import { Link } from "react-router-dom";

export default function ButtonGroup() {
  const { auth } = useAuthorization();

  const handleLogout = () => {
    localStorage.setItem('tstring', '');
    localStorage.setItem('home-tab', 'latest');
    
    window.location.reload();
  }

  useEffect(() => {
    const menuInput = document.getElementById("menu-input");

    document.addEventListener("click", (e) => {
      if (e.target.className.includes("btn-item") || e.target.className.includes("nav-icon")) {
        menuInput.checked = false;
      }
    });
  }, []);

  return (
    <div className="btn-group">
      {
        auth 
          ? (
            <Link to="/upload" className="btn btn-item">
              <i class="fad fa-upload nav-icon"></i>
              Bài viết mới
            </Link>
          )
          : null
      }
      {
        !auth
          ? (
            <Link to="/login" className="btn btn-item">
              <i class="fad fa-sign-in nav-icon"></i>
              Đăng nhập / Đăng ký
            </Link>
          )
          : null
      }
      {
        auth  
          ? (
            <a className="btn btn-item" onClick={ handleLogout }>
              <i class="fal fa-sign-out nav-icon"></i>
              Đăng xuất
            </a>
          )
          : null
      }
    </div>
  );
}
