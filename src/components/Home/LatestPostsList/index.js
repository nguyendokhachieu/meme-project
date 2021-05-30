import PostItem from "../../PostItem";
import { useScrolledPercentage } from "../../../hooks/useScrolledPercentage";
import PostItemLoading from "../../PostItem/PostItemLoading";
import { useEffect, useState } from "react";
import { PostService } from "../../../services/posts";


export default function LatestPostsList() {
  const { scrolledPercentY } = useScrolledPercentage();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(async () => {
    if (scrolledPercentY > 88) {
      if (loading) {
        return;
      }
      
      if (!hasMore) {
        return;
      }
      setLoading(true);

      const response = await PostService.getPostsPagination({
        page: page + 1, 
        per_page: 3,
      });

      setLoading(false);
      setPage(p => p + 1);

      if (response.data.data.length <= 0) {
        setHasMore(false);
      }

      setPosts(prevPosts => {
        return [...prevPosts, ...response.data.data];
      });
    }
  }, [scrolledPercentY]);

  useEffect(async () => {
    const response = await PostService.getPostsPagination({
      page: 1,
      per_page: 3,
    });

    if (response.data.data.length) {
      setPosts(response.data.data);
    }
  }, []);
  
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
