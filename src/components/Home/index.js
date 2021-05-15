import "./style.css";
import PostItem from "../PostItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchPostsPaginationAsync } from "./../../store/posts/actions";

export default function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);
  
  useEffect(() => {
    dispatch(
      actFetchPostsPaginationAsync({
        page: 1, 
        per_page: 3,
      })
    );
  }, [dispatch]);

  return (
    <div className="main-content">
      <div className="container">
        <div className="col-wrap">
          <div className="main-col-8">
            <h3 className="featured-posts-header">Bài viết mới nhất</h3>
            <div className="posts-list">
              {
                posts.length !== 0 
                  ? posts.map((post, index) => {
                        return <PostItem key={ index } post={ post } />
                      }
                    )
                  : null //loading
              }
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
