import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useScrolledPercentage } from "./useScrolledPercentage";
import { actFetchPostsByCategoryAsync } from "../store/categories/actions";

export function usePostsByCategoryId({
  fetch = true,
  category_id = null,
} = {}) 
{
  const dispatch = useDispatch();
  const { scrolledPercentY } = useScrolledPercentage();
  const [loading, setLoading] = useState(false);
  const { list, page, per_page, hasMore } = useSelector(state => state.categories.postsByCategoryId);

  useEffect(() => {
    if (!fetch) return;
    if (!hasMore) return;
    if (!category_id) return;
  
    if (scrolledPercentY > 15) {
      if (loading) return;

      setLoading(true);

      dispatch(actFetchPostsByCategoryAsync({
        id: category_id,
        page: page + 1,
        per_page
      })).finally(() => {
        setLoading(false);
      });
    }
  }, [scrolledPercentY, fetch, dispatch, hasMore, page, per_page, category_id]);

  useEffect(() => {
    if (!fetch) return;

    if (loading) return;
    // if (!hasMore) return;
    if (!category_id) return;

    setLoading(true);

    dispatch(actFetchPostsByCategoryAsync({
      id: category_id,
      page: 1,
      per_page: 5
    })).finally(() => {
      setLoading(false);
    });
  }, [fetch, dispatch, category_id]);
  
  return {
    list,
    loading,
    hasMore,
  }
}