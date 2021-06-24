
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostItem from "../../PostItem";

import { actFetchPostsByUserIdPaginationAsync } from "../../../store/posts/actions";

export default function UserPostsList() 
{
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { page, list, hasMore } = useSelector(state => state.posts.user);
  const { token, id } = useSelector(state => state.user); 

  const loadMore = () => {
    if (loading) return;
    if (!token) return;
    if (!hasMore) return;

    setLoading(true);

    dispatch(actFetchPostsByUserIdPaginationAsync({
      user_id: id,
      page: page + 1,
      per_page: 5,
    })).finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    if (loading) return;
    if (!token) return;
    if (!hasMore) return;

    setLoading(true);

    dispatch(actFetchPostsByUserIdPaginationAsync({
      user_id: id,
      page: 1, 
      per_page: 5,
    })).finally(() => {
      setLoading(false);
    })
  }, [id, token, hasMore]);

  return (
    <div className="user-posts-list">
      <div className="container">
        <div className="col-wrap">
          <div className="main-col-8">
              {
                list.length !== 0
                  ? list.map(post => {
                    return <PostItem post={ post } key={ post.id } />
                  })
                  : null
              }
              {
                hasMore && (
                  <div align="center" style={{margin: "2rem 0"}}>
                    <button className="btn btn-transparent-bc" onClick={ loadMore }>
                      { loading ? <i className="fa fa-spinner fa-spin"></i> : "Tải thêm" }
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
