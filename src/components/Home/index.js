import "./style.css";
import PostItem from "../PostItem";
import { actFetchPostsPaginationAsync } from "./../../store/posts/actions";
import Loading from "../shared/Loading";
import { usePagination } from "../../hooks/usePagination";

export default function Home() {
  const { arrPaging, buttonLoadMore } = usePagination({ 
    per_page: 5, 
    action: actFetchPostsPaginationAsync, 
    type: 'posts'
  });

  return (
    <div className="main-content">
      <div className="container">
        <div className="col-wrap">
          <div className="main-col-8">
            <h3 className="featured-posts-header">Bài viết mới nhất</h3>
            <div className="posts-list">
              {
                arrPaging.length !== 0 
                  ? arrPaging.map((post, index) => {
                        return <PostItem key={ index } post={ post } />
                      }
                    )
                  : <div className="align-center padding-tb-2rem"><Loading /></div>
              }
            </div>
            <div className="load-more-btn-wrap">
              {
                buttonLoadMore
              }
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
