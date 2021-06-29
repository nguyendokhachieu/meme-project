import "./posts-by-category-id.scss";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import PostItem from "../PostItem";

import { usePostsByCategoryId } from "../../hooks/usePostsByCategoryId";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { generateKeyCategoriesHash } from "../../store/categories/reducer";

export default function PostsByCategoryId({
    categoryId = null,
}) 
{
    const { scrollToTop } = useScrollToTop();
    const { categoriesHash } = useSelector(state => state.categories);
    const { list, hasMore, loading } = usePostsByCategoryId({
        category_id: categoryId
    });

    const categoryName = categoriesHash[generateKeyCategoriesHash(categoryId)] && categoriesHash[generateKeyCategoriesHash(categoryId)].name;

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="main-content">
            <div className="container">
                <section className="posts-by-category-id">
                    <div className="inner-posts-b-c-i-content">
                        <div className="title">
                            <h2>
                                Bài viết liên quan đến danh mục
                                {
                                    loading
                                        ? <span className="highlight load">Loading</span>
                                        : <span className="highlight">{ categoryName }</span>
                                }
                            </h2>
                        </div>
                        <div className="items">
                            {
                                list.length !== 0
                                    ? (
                                        list.map(post => {
                                            return <PostItem key={ post.id } post={ post } showFooter={ false } />;
                                        })
                                    )
                                    : null
                            }
                        </div>
                        {
                            !hasMore
                                ? (
                                    <div className="end">
                                        <p className="text">
                                            <i className="fad fa-empty-set icon"></i>
                                            Bạn đã lướt hết bài viết!
                                        </p>
                                    </div>
                                )
                                : loading 
                                    ? (
                                        <div className="end">
                                            <p className="text">
                                                <i className="fal fa-spinner-third fa-spin icon"></i>
                                            </p>
                                        </div>
                                    )
                                    : null
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}