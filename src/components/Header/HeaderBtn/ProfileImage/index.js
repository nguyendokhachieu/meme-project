import "./profile-image.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAvatarLinkSrc } from "../../../../hooks/useAvatarLinkSrc";
import { useAuthorization } from "../../../../hooks/useAuthorization";
import { Link } from "react-router-dom";

export default function ProfileImage() {
  const [hidden, setHidden] = useState(true);
  const { user } = useSelector(state => state);
  const { link } = useAvatarLinkSrc({ user_id: user.id, user_img_url: user.img_url });
  const { auth } = useAuthorization();
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
    if (auth) {
      setShowThis(true);
    } else {
      setShowThis(false);
    }
  }, [auth]);

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
    <a className="header-profile-img" onClick={ handleProfileClick }>
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
            <Link to={ `/profile?id=${ user.id }` } className="profile-link-wrap">
              <a className="profile-img-wrap">
                <img src={ link } className="profile-img" alt="ava" />
              </a>
              <a className="info">
                <a className="name">{ user.name }</a>
              </a>
            </Link>
          </div>
          <div className="profile-link">
            <Link to="/upload" className="upload-link">
              <i className="fad fa-plus-circle icon"></i>
              <a className="text">Bài viết mới</a>
            </Link>
          </div>
          <a className="logout-link" onClick={ handleLogout }>
            <i className="fad fa-sign-out icon"></i>
            <a className="text">Đăng xuất</a>
          </a>
        </div>
      </section>
    </a>
  );
}
