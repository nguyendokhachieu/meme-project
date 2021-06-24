import "./style.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actFetchUserCategoriesAsync } from "../../store/categories/actions";
import CategoryItem from "../shared/CategoryItem";

export default function CategoriesListByUser({ hidden }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const { token, id } = useSelector(state => state.user);
  const { page, per_page, list, hasMore, total } = useSelector(state => state.categories.user);

  const loadMore = () => {
    if (isLoading) return;
    if (!token) return;
    if (!hasMore) return;

    setIsLoading(true);

    dispatch(actFetchUserCategoriesAsync({
      user_id: id,
      page: page + 1,
      per_page,
    })).finally(() => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    if (isLoading) return;
    if (!token) return;

    setIsLoading(true);

    dispatch(actFetchUserCategoriesAsync({
      user_id: id,
      page: 1,
      per_page: 5,
    })).finally(() => {
      setIsLoading(false);
    });
  }, [token, id, dispatch]);

  return (
    <div className={ hidden ? 'main-col-4 user-list hidden' : 'main-col-4 user-list' }>
      <h3 className="featured-posts-header">Danh mục của bạn</h3>
      {
        token 
          ? (
            <p className="notification notification-auth">
              Danh sách các danh mục mà bạn đã sử dụng cho các bài viết của mình
            </p>
          )
          : null
      }
      {
        token 
          ? (
            <p className="my-categories-count">
              Có tổng cộng { total } danh mục
            </p>
          )
          : null
      }
      {
        !token
          ? (
            <p className="notification">
              Bạn chưa đăng nhập, xin vui lòng đăng nhập để xem danh sách các danh mục bạn đã sử dụng. 
            </p>
          )
          : total === 0 
              ? (
                <p className="notification">
                  Bạn chưa sử dụng danh mục nào cả!
                </p>
              )
              : list.map(category => {
                return <CategoryItem key={ category.id } category={ category } />;
              })
      }
      <div className="load-more" align="center">
        {
          token
            ? (
              hasMore 
                ?   (
                        <button 
                          className={ isLoading ? "btn load-btn disabled" : "btn load-btn" } 
                          onClick={ loadMore }
                        >
                            { isLoading ? <i className="fa fa-spinner fa-spin"></i> : "Xem thêm" }
                        </button>
                    )
                :   null
            ) 
            : null
        }
      </div>
    </div>
  );
}
