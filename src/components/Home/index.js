import "./style.css";
import PostItem from "../PostItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchPostsPaginationAsync } from "./../../store/posts/actions";
import Loading from "../shared/Loading";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state);

  const handleLoadMore = (e) => {
    if (isLoading) {
      return;
    }
    
    setIsLoading(true);

    if (posts.posts.length !== 0 && posts.total_posts !== 0) {
      if (posts.posts.length >= posts.total_posts) {
        setHasMorePosts(false);
      }
    }
    
    dispatch(
      actFetchPostsPaginationAsync({
        page: posts.page + 1, 
        per_page: 5,
      })
      ).then(() => {
        setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    });
  }
  
  useEffect(() => {
    setIsLoading(true);

    if (posts.posts.length !== 0 && posts.total_posts !== 0) {
      if (posts.posts.length >= posts.total_posts) {
        setHasMorePosts(false);
      }
    }

    dispatch(
      actFetchPostsPaginationAsync({
        page: 1, 
        per_page: 5,
      })
      ).then(() => {
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    });

  }, [dispatch]);

  return (
    <div className="main-content">
      <div className="container">
        <div className="col-wrap">
          <div className="main-col-8">
            <h3 className="featured-posts-header">Bài viết mới nhất</h3>
            <div className="posts-list">
              {
                posts.posts.length !== 0 
                  ? posts.posts.map((post, index) => {
                        return <PostItem key={ index } post={ post } />
                      }
                    )
                  : <div className="align-center padding-tb-2rem"><Loading /></div>
              }
            </div>
            <div className="load-more-btn-wrap">
              {
                hasMorePosts && (
                  <button className="btn btn-transparent-bc" onClick={ handleLoadMore }>
                    {
                      isLoading ? "Đang tải" : "Tải thêm"
                    }
                  </button>
                )
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
