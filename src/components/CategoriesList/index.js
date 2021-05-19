import "./style.css";
import CategoryItem from "../shared/CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actFetchCategoriesAsync } from "./../../store/categories/actions";
import { useState } from "react";

export default function CategoriesList() {
    const [isLoading, setIsLoading] = useState(false);
    const [hasMoreCategories, setHasMoreCategories] = useState(true);
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    const handleLoadMore = () => {
        if (isLoading) {
            return;
        }

        setIsLoading(true);

        if (categories.categoriesPaging.length >= categories.total_categories) {
            setHasMoreCategories(false);
        }

        dispatch(actFetchCategoriesAsync({
            page: categories.page + 1
        })).then(() => {
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        setIsLoading(true);

        if (categories.categoriesPaging.length >= categories.total_categories) {
            setHasMoreCategories(false);
        }

        dispatch(actFetchCategoriesAsync({
            page: 1
        })).then(() => {
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
        });
    }, [dispatch]);

    return (
        <div className="main-col-8">
            <h3 className="featured-posts-header">Danh mục hiện có</h3>
            <p className="notification">
                Đang hiển thị { categories.categoriesPaging.length }/{ categories.total_categories } danh mục
            </p>
            <div className="categories-list-wrap">
                {
                    categories.categoriesPaging.length !== 0
                        ? categories.categoriesPaging.map((cate, index) => {
                                return <CategoryItem key={ cate.id } category={ cate } />;
                            }
                        )
                        : null
                }
            </div>
            <div className="load-more-btn-wrap">
              {
                  hasMoreCategories 
                    ?   (
                            <button className="btn btn-transparent-bc" onClick={ handleLoadMore }>
                                {
                                    isLoading ? "Đang tải" : "Tải thêm"
                                }
                            </button>
                        )
                    : null
              }
            </div>
          </div>
    );
}