import CommentList from "../CommentList";
import CommentListHeader from "../CommentListHeader";
import FormAddComment from "../FormAddComment";
import PostItem from "../PostItem";
import "./style.css";

export default function DetailPost() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="col-wrap">
          <div className="main-col-8">
            <div className="posts-list">
              <PostItem />
            </div>
            <FormAddComment />
            <CommentListHeader />
            <CommentList />
          </div>
          <div className="main-col-4">
            <h3 className="featured-posts-header">Bài viết của bạn</h3>
            <p className="notification">
              Bạn chưa đăng nhập. Vui lòng đăng nhập để xem bài viết của mình
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
