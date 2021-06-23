import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useScrolledPercentage } from "./useScrolledPercentage";
import { actFetchPostsByFollowingUsersAsync } from "../store/posts/actions";

export function useFollowingUsersPostsScroll({
  fetch = true,
} = {}) 
{
  const dispatch = useDispatch();
  const { scrolledPercentY } = useScrolledPercentage();
  const [loading, setLoading] = useState(false);
  const { list, page, hasMore } = useSelector(state => state.posts.followings);
  const { id } = useSelector(state => state.user);

  useEffect(async () => {
    if (!fetch) return;

    if (!id) return;

    if (scrolledPercentY > 15) {
      if (loading) {
        return;
      }
      
      if (!hasMore) {
        return;
      }

      setLoading(true);

      dispatch(actFetchPostsByFollowingUsersAsync({
        user_id: id,
        page: page + 1,
        per_page: 5,
      })).finally(() => {
        setLoading(false);
      });
    }
  }, [scrolledPercentY, fetch]);

  useEffect(async () => {
    if (!fetch) return;

    if (!id) return;
    
    setLoading(true);

    dispatch(actFetchPostsByFollowingUsersAsync({
      user_id: id,
      page: 1,
      per_page: 5,
    })).finally(() => {
      setLoading(false);
    });

  }, [id, fetch]);
  
  return {
    list,
    loading,
    hasMore,
  }
}