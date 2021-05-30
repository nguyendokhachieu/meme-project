import PostItem from "../../PostItem";
import PostItemLoading from "../../PostItem/PostItemLoading";
import { useLatestPostsScroll } from "../../../hooks/useLatestPostsScroll";

export default function LatestPostsList() {
  const {
    posts,
    loading,
    hasMore,
  } = useLatestPostsScroll();
  
  return (
    <div className="main-col-8">
      <h3 className="featured-posts-header">Bài viết mới nhất</h3>
      <div className="posts-list">
        {
          posts.length !== 0 
            ? (
              posts.map((post, index) => {
                return <PostItem key={index} post={post} />;
              })
            ) 
            : <PostItemLoading />
          }
          {
            loading 
            ? <PostItemLoading noOfItems={ 2 } />
            : null
          }
          {
            !hasMore 
              ? (
                <div className="end-of-list">
                  <i class="fad fa-times-circle end-icon"></i>
                  Không còn bài viết để hiển thị
                </div>
              )
              : null
          }
      </div>
    </div>
  );
}
