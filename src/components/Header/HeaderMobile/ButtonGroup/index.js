import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ButtonGroup() {
  const { token } = useSelector(state => state.user);

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
        token 
          ? (
            <Link to="/upload" className="btn btn-item">
              <i className="fad fa-upload nav-icon"></i>
              Bài viết mới
            </Link>
          )
          : null
      }
      {
        !token
          ? (
            <Link to="/login" className="btn btn-item">
              <i className="fad fa-sign-in nav-icon"></i>
              Đăng nhập / Đăng ký
            </Link>
          )
          : null
      }
      {
        token  
          ? (
            <span className="btn btn-item" onClick={ handleLogout }>
              <i className="fal fa-sign-out nav-icon"></i>
              Đăng xuất
            </span>
          )
          : null
      }
    </div>
  );
}
