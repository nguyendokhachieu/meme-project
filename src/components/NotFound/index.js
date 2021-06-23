import "./not-found.scss";
import { Link } from "react-router-dom";

export default function NotFound({
  uploadDisabled = false,
}) {
  return (
    <div className="main-content">
      <div className="container">
        <section className="not-found-section">
          <div className="inner-wrapper">
            <div className="not-found-landing-page">
              <h1 className="not-found-title">
                {
                  uploadDisabled 
                    ? "Bạn chưa đăng nhập, vui lòng đăng nhập để đăng bài"
                    : "Trang này không tồn tại hoặc không có nội dung"
                }
              </h1>
              <p className="not-found-desc">Chúng tôi hiện chưa thể xử lý yêu cầu này ngay bây giờ</p>
              {
                uploadDisabled
                  ? (
                    <div align="center">
                      <div className="btn-wrap">
                        <Link to="/login" className="btn">Đăng nhập</Link>
                      </div>
                      <div className="btn-wrap">
                        <span className="has-no-account">Chưa có tài khoản?</span>
                        <Link to="/register" className="btn btn-no-border">Đăng ký một tài khoản</Link>
                      </div>
                      <div align="center" className="or-text">Hoặc</div>
                    </div>
                  )
                  : null
              }
              <Link to="/" className="not-found-link">Trở về trang chủ</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
