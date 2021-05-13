import PostItem from "../PostItem";
import "./style.css";

export default function Home() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="col-wrap">
          <div className="main-col-8">
            <h3 className="featured-posts-header">Bài viết mới nhất</h3>
            <div className="posts-list">
              
            <PostItem />
            <PostItem />

            </div>
            <div className="load-more-btn-wrap">
              <button className="btn btn-transparent-bc">Tải thêm</button>
            </div>
          </div>
          <div className="main-col-4">
            <h3 className="featured-posts-header">Bài viết của bạn</h3>
            <p className="notification">
              Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
