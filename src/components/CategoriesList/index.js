import "./style.css";
import CategoryItem from "../shared/CategoryItem";
import CategoriesControl from "./CategoriesControl";
import { actFetchCategoriesAsync } from "./../../store/categories/actions";
import { usePagination } from "../../hooks/usePagination";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function CategoriesList() {
    let { arrPaging, totalItems, buttonLoadMore } = usePagination({ 
        per_page: 5, 
        action: actFetchCategoriesAsync, 
        type: 'categories',
    });
    
    const [typeOfShow, setTypeOfShow] = useState('page');
    const [searchString, setSearchString] = useState('');
    const allCategories = useSelector(state => state.categories.categories);

    if (typeOfShow === 'all') {
        arrPaging = allCategories;
    }

    return (
        <div className="main-col-8">
            <h3 className="featured-posts-header">Danh mục hiện có</h3>
            <CategoriesControl 
                typeOfShow={ type => { setTypeOfShow(type) } }
                onSearchString={ searchString => { setSearchString(searchString) } }
            />
            <p className="notification">
                {
                    searchString === ''
                        ? `Đang hiển thị ${ arrPaging.length }/${ totalItems } danh mục`
                        :  `Hiển thị các kết quả cho tìm kiếm '${ searchString }'`
                }
            </p>
            <div className="categories-list-wrap">
                {
                    arrPaging.length !== 0
                        ? arrPaging.filter(cate => {
                            if (searchString === '') {
                                return cate;
                            } else if (cate.name.toLowerCase().includes(searchString.toLowerCase())) {
                                return cate;
                            }
                        }).map(cate => {
                                return <CategoryItem key={ cate.id } category={ cate } />;
                            }
                        )
                        : null
                }
            </div>
            <div className="load-more-btn-wrap">
              {
                  (typeOfShow === 'page') && buttonLoadMore
              }
            </div>
          </div>
    );
}