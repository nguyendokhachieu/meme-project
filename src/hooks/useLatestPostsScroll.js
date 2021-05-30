import { useScrolledPercentage } from "../hooks/useScrolledPercentage";
import { useEffect, useState } from "react";
import { PostService } from "../services/posts";

export function useLatestPostsScroll() {
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
  
  return {
    posts,
    loading,
    hasMore,
  }
}