import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthorization } from "./../../../hooks/useAuthorization";
import PostItem from "../../PostItem";

import { actFetchPostsByUserIdPaginationAsync } from "../../../store/posts/actions";

export default function UserPostsList() {
    const dispatch = useDispatch();
    const { auth } = useAuthorization();
    const { user, posts } = useSelector(state => state);

    useEffect(() => {
        if (auth) {
            dispatch(actFetchPostsByUserIdPaginationAsync({
                page: 1,
                user_id: Number(user.id)
            }))
        }
    }, [auth]);

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
                  return <PostItem post={ post } />
                }
              )
          )
      }
    </div>
  );
}
