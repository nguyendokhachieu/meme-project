import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useScrolledPercentage } from "../hooks/useScrolledPercentage";
import { actFetchPostsPaginationAsync } from "../store/posts/actions";

export function useLatestPostsScroll({
  fetch = true,
} = {}) 
{
  const dispatch = useDispatch();
  const { scrolledPercentY } = useScrolledPercentage();
  const [loading, setLoading] = useState(false);
  const { posts, page, hasMore } = useSelector(state => state.posts);

  useEffect(() => {
    async function fetchPosts() {
      if (!fetch) return;
  
      if (scrolledPercentY > 15) {
        if (loading) {
          return;
        }
        
        if (!hasMore) {
          return;
        }
  
        setLoading(true);
  
        dispatch(actFetchPostsPaginationAsync({
          page: page + 1,
          per_page: 3,
        })).finally(() => {
          setLoading(false);
        });
      }
    }

    fetchPosts();
  }, [scrolledPercentY, fetch, dispatch, hasMore, page]);

  useEffect(() => {
    async function fetchMore() {
      if (!fetch) return;
  
      if (loading) return;
  
      setLoading(true);
  
      dispatch(actFetchPostsPaginationAsync({
        page: 1,
        per_page: 3,
      })).finally(() => {
        setLoading(false);
      });
    }

    fetchMore();
  }, [fetch, dispatch]);
  
  return {
    posts,
    loading,
    hasMore,
  }
}