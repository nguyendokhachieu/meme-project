import "./style.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthorization } from "../../hooks/useAuthorization";
import { actFetchUserCategoriesAsync } from "../../store/categories/actions";
import CategoryItem from "../shared/CategoryItem";

export default function CategoriesListByUser({ hidden }) {
  const dispatch = useDispatch();
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useAuthorization();
  const { user, categories } = useSelector(state => state);

  const handleLoadMore = () => {
    if (isLoading) {
      return;
    }

    if (categories.user.categories.length >= categories.user.total_user_categories) {
      setHasMoreItems(false);
    }

    setIsLoading(true);

    dispatch(actFetchUserCategoriesAsync({
      user_id: user.id,
      page: categories.user.page + 1,
      per_page: 5,
    })).then(() => {
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    if (auth) {
      setIsLoading(true);

      dispatch(actFetchUserCategoriesAsync({
        user_id: user.id,
        page: 1,
        per_page: 5,
      })).then(() => {
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
      });
    }
  }, [auth, user]);

  return (
    <div className={ hidden ? 'main-col-4 user-list hidden' : 'main-col-4 user-list' }>
      <h3 className="featured-posts-header">Quản lý danh mục của bạn</h3>
      {
        auth 
          ? (
            <p className="notification notification-auth">
              Danh sách các danh mục mà bạn đã sử dụng cho các bài viết của mình
            </p>
          )
          : null
      }
      {
        auth 
          ? (
            <p className="my-categories-count">
              Có tổng cộng { categories.user.total_user_categories } danh mục
            </p>
          )
          : null
      }
      {
        !auth
          ? (
            <p className="notification">
              Bạn chưa đăng nhập, xin vui lòng đăng nhập để xem danh sách các danh mục mà bạn đã sử dụng cho các bài viết của mình. 
            </p>
          )
          : categories.user.categories.length === 0 
              ? (
                <p className="notification">
                  Bạn chưa sử dụng danh mục nào cả!
                </p>
              )
              : categories.user.categories.map((cate, index) => {
                return <CategoryItem key={ cate.id ? cate.id : index } category={ cate }></CategoryItem>;
              })
      }
      <div align="center">
        {
          auth
            ? (
              hasMoreItems 
                ?   (
                        <button className="btn btn-transparent-bc" onClick={ handleLoadMore }>
                            { isLoading ? <i class="fa fa-spinner fa-spin"></i> : "Tải thêm" }
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
