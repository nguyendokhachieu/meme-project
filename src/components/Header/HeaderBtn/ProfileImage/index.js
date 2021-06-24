import "./profile-image.scss";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useAvatarLinkSrc } from "../../../../hooks/useAvatarLinkSrc";

export default function ProfileImage() {
  const [hidden, setHidden] = useState(true);
  const { token, img_url, id, name } = useSelector(state => state.user);
  const { link } = useAvatarLinkSrc({ user_id: id, user_img_url: img_url });
  const [showThis, setShowThis] = useState(false);

  const handleLogout = () => {
    localStorage.setItem('tstring', '');
    localStorage.setItem('home-tab', 'latest');

    window.location.reload();
  }

  const handleProfileClick = () => {
    setHidden(!hidden);
  };

  const handleContentClick = e => {

    const tagNamesToCloseBox = ['a', 'i'];
    tagNamesToCloseBox.includes(e.target.tagName.toLowerCase()) && setHidden(true);
    e.stopPropagation();
  }

  useEffect(() => {
    if (token) {
      setShowThis(true);
    } else {
      setShowThis(false);
    }
  }, [token]);

  useEffect(() => {
    const click = (e) => {
      !hidden && setHidden(true);
    };

    document.addEventListener("click", click);

    return () => {
      document.removeEventListener("click", click);
    };
  });

  if (!showThis) {
    return null;
  }

  return (
    <div className="header-profile-img" onClick={ handleProfileClick }>
      <img
        className="avatar-img"
        src={ link }
        alt="avatar"
      />
      <section 
        className={ hidden ? `profile-box hidden` : `profile-box` }
        onClick={ handleContentClick }
      >
        <div className="content">
          <div className="profile-link">
            <Link to={ `/profile?id=${ id }` } className="profile-link-wrap">
              <div className="profile-img-wrap">
                <img src={ link } className="profile-img" alt="ava" />
              </div>
              <div className="info">
                <span className="name">{ name }</span>
              </div>
            </Link>
          </div>
          <div className="profile-link">
            <Link to="/upload" className="upload-link">
              <i className="fad fa-plus-circle icon"></i>
              <span className="text">Bài viết mới</span>
            </Link>
          </div>
          <div className="logout-link" onClick={ handleLogout }>
            <i className="fad fa-sign-out icon"></i>
            <span className="text">Đăng xuất</span>
          </div>
        </div>
      </section>
    </div>
  );
}
