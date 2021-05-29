import "./category-list.scss";
import CategoryItem from "../shared/CategoryItem";
import CategoryItemLoading from "../shared/CategoryItem/CategoryItemLoading";
import CategoriesControl from "./CategoriesControl";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function CategoriesList({
    loading,
    hidden,
}) 
{
    const [searchString, setSearchString] = useState('');
    const { categories } = useSelector(state => state.categories);

    return (
        <div className={ hidden ? 'main-col-8 general-list hidden' : 'main-col-8 general-list' }>
            <h3 className="featured-posts-header">Danh mục hiện có</h3>
            <CategoriesControl onSearchString={ searchString => { setSearchString(searchString) } } />
            <p className="notification">
                {
                    searchString === ''
                        ? `Đang hiển thị tất cả danh mục hiện có`
                        :  `Hiển thị các kết quả cho tìm kiếm '${ searchString }'`
                }
            </p>
            <div className="categories-list-wrap">
                {
                    !loading 
                        ? (
                            categories.length !== 0
                            ? categories.filter(cate => {
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
                        )
                        : <CategoryItemLoading noOfItems={ 33 } />
                }
            </div>
          </div>
    );
}