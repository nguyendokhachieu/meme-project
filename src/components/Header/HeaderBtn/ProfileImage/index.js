import { useEffect, useState } from "react";

export default function ProfileImage() {
  const [hidden, setHidden] = useState(true);

  const handleProfileClick = () => {
    setHidden(!hidden);
  };

  const handleContentClick = e => {
    const tagNamesToCloseBox = ['a'];
    tagNamesToCloseBox.includes(e.target.tagName.toLowerCase()) && setHidden(true);
    e.stopPropagation();
  }
  useEffect(() => {
    const click = (e) => {
      !hidden && setHidden(true);
    };

    document.addEventListener("click", click);

    return () => {
      document.removeEventListener("click", click);
    };
  });

  return (
    <a className="header-profile-img" onClick={ handleProfileClick }>
      <img
        className="avatar-img"
        src="assets/images/default-avatar/ava-1.png"
        alt="avatar"
      />
      <section 
        className={ hidden ? `profile-box hidden` : `profile-box` }
        onClick={ handleContentClick }
      >
        <h3 className="title">Profile</h3>
        <div className="content">fbfs Đăng xuất Bài viết mới /upload</div>
      </section>
    </a>
  );
}
