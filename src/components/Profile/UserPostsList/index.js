
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostItem from "../../PostItem";

import { actFetchPostsByUserIdPaginationAsync } from "../../../store/posts/actions";

export default function UserPostsList({
  user_id = null,
}) 
{
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { page, list, hasMore } = useSelector(state => state.posts.user);

  const loadMore = () => {
    if (loading) return;
    if (!hasMore) return;
    if (!user_id) return;

    setLoading(true);

    dispatch(actFetchPostsByUserIdPaginationAsync({
      user_id,
      page: page + 1,
      per_page: 5,
    })).finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    if (loading) return;
    if (!user_id) return;

    setLoading(true);

    dispatch(actFetchPostsByUserIdPaginationAsync({
      user_id,
      page: 1, 
      per_page: 5,
    })).finally(() => {
      setLoading(false);
    })
  }, [user_id, hasMore]);

  return (
    <div className="user-posts-list">
      <div className="container">
        <div className="col-wrap">
          <div className="main-col-8">
              {
                list.length !== 0 && (
                  list.map(post => {
                    return <PostItem post={ post } key={ post.id } />
                  })
                )
              }
              {
                !loading && list.length === 0 && (
                  <div className="empty">
                      Không có bài viết nào!
                    </div>
                )
              }
              {
                loading && (
                  <div className="empty">
                    <span><i className="fal fa-spinner-third fa-spin icon"></i></span>
                    Đang tải
                  </div>
                )
              }
              {
                hasMore && (
                  <div align="center" style={{margin: "2rem 0"}}>
                    <button className="btn btn-transparent-bc" onClick={ loadMore }>
                      Tải thêm bài viết
                    </button>
                  </div>
                )
              }
          </div>
          <div className="main-col-4"></div>
        </div>
      </div>
  </div>
  );
}
