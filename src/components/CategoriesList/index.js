import "./style.css";
import CategoryItem from "../shared/CategoryItem";
import { actFetchCategoriesAsync } from "./../../store/categories/actions";
import { usePagination } from "../../hooks/usePagination";

export default function CategoriesList() {
    const { arrPaging, totalItems, buttonLoadMore } = usePagination({
                                                                        per_page: 5,
                                                                        action: actFetchCategoriesAsync,
                                                                        type: 'categories',
    });

    return (
        <div className="main-col-8">
            <h3 className="featured-posts-header">Danh mục hiện có</h3>
            <p className="notification">
                Đang hiển thị { arrPaging.length }/{ totalItems } danh mục
            </p>
            <div className="categories-list-wrap">
                {
                    arrPaging.length !== 0
                        ? arrPaging.map(cate => {
                                return <CategoryItem key={ cate.id } category={ cate } />;
                            }
                        )
                        : null
                }
            </div>
            <div className="load-more-btn-wrap">
              {
                  buttonLoadMore
              }
            </div>
          </div>
    );
}