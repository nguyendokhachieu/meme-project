import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthorization } from "./../../../hooks/useAuthorization";
import PostItem from "../../PostItem";

import { actFetchPostsByUserIdPaginationAsync } from "../../../store/posts/actions";

export default function UserPostsList() {
    const dispatch = useDispatch();
    const [hasMoreItems, setHasMoreItems] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const { auth } = useAuthorization();
    const { user, posts } = useSelector(state => state);

    const handleLoadMore = () => {
      if (isLoading) {
        return;
      }

      if (posts.user.total_user_posts <= posts.user.posts.length) {
        setHasMoreItems(false);
      }

      setIsLoading(true);

      if (auth) {
        dispatch(actFetchPostsByUserIdPaginationAsync({
            page: posts.user.page + 1,
            per_page: 2,
            user_id: Number(user.id)
        })).then(() => {
          setIsLoading(false);
        }).catch(() => {
          setIsLoading(false);
        });
      } 

    }
  
    useEffect(async () => {
        if (auth) {
            await dispatch(actFetchPostsByUserIdPaginationAsync({
                page: 1,
                per_page: 2,
                user_id: Number(user.id)
            }));
        }
    }, [auth, user]);

  return (
    <div className="main-col-4">
      <h3 className="featured-posts-header">Bài viết của bạn</h3>
      {
        !auth
          ? (
              <p className="notification">
                Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục
              </p>
            )
          : (
            posts.user.posts.length === 0 
              ? (
                  <p className="notification">
                    Bạn chưa đăng bài viết nào
                  </p>
                )
              : posts.user.posts.map(post => {
                  return <PostItem key={ post.id } post={ post } />
                }
              )
          )
      }
      <div className="load-more-btn-wrap">
        {
          hasMoreItems 
          ?   (
                  auth 
                    ? (
                      <button className="btn btn-transparent-bc" onClick={ handleLoadMore }>
                        { isLoading ? <i class="fa fa-spinner fa-spin"></i> : "Tải thêm" }
                      </button>
                    ) 
                    : null
              )
          :   null
        }
      </div>
    </div>
  );
}
