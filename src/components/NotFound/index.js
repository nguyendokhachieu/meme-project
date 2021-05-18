import "./style.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="main-content">
      <div className="container">
        <div class="inner-wrapper">
          <div class="not-found-landing-page">
            <h1 className="not-found-title">Trang này không tồn tại hoặc không có nội dung</h1>
            <p className="not-found-desc">Chúng tôi hiện chưa thể xử lý yêu cầu này ngay bây giờ</p>
            <Link to="/" className="not-found-link">Trở về trang chủ</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
