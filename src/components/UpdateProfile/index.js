import "./update-profile.scss";
import SideBar from "./SideBar";
import RightContent from "./RightContent";
import NotificationCard from "../shared/NotificationCard";
import { useAuthorization } from "../../hooks/useAuthorization";
import { useEffect, useState } from "react";

export default function UpdateProfile() {
  const { auth } = useAuthorization();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!auth) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [auth]);

  return (
    <div className="main-content">
      <NotificationCard 
        content="Bạn chưa đăng nhập"
        showCloseButton={ false }
        show={ show }
      /> 
      <div className="update-profile-wrap">
        <div className="left-nav-bar">
          <SideBar />
        </div>
        <div className="right-content">
          <RightContent />
        </div>
      </div>
    </div>
  );
}

/**
 * <div className="change-profile-section">
            <h1 className="change-profile-header">
              <Link to={ `/profile?id=1` } className="profile-fullname">
                Hiếu Nguyễn
              </Link>
            </h1>
            <div className="profile-img-wrap">
              <img
                src="./assets/images/default-avatar/ava-1.png"
                className="profile-img"
                alt="user-avatar"
              />
            </div>
            <h2 className="change-profile-title">
              <i class="fad fa-user-cog user-icon"></i>
              <span className="change-profile-title-text">
                Cập nhật thông tin cá nhân
              </span>
            </h2>
            <form action className="form-change-profile">
              <div className="form-ctl-wrap">
                <i class="fad fa-user form-control-icon"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Họ và tên"
                  required
                />
              </div>
              <div className="form-ctl-wrap">
                <i class="fad fa-venus-mars form-control-icon"></i>
                <select name="sex" id="sex" className="form-control">
                  <option value={2}>Chọn giới tính</option>
                  <option value={0}>Nữ</option>
                  <option value={1}>Nam</option>
                </select>
              </div>
              <div className="form-ctl-wrap form-file-wrap">
                <i class="fad fa-cloud-upload-alt form-control-icon"></i>
                <label className="label-text label-text-file" htmlFor="file">
                  Tải lên ảnh đại diện mới
                </label>
                <input type="file" name="file" id="file" className="btn" />
              </div>
              <div className="form-ctl-wrap">
                <textarea
                  type="text"
                  name="caption"
                  id="caption"
                  className="form-control textarea-form"
                  placeholder="Mô tả ngắn về bạn"
                  rows={9}
                  defaultValue={""}
                />
              </div>
              <div className="change-profile-btn-group">
                <input
                  type="submit"
                  className="btn btn-filled-bc"
                  value="Cập nhật thông tin"
                />
              </div>
            </form>
          </div>
 */
