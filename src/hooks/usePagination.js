import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const usePagination = ({
    per_page,
    action,
    type = 'categories',
}) => {
    let arr = [];
    let total_items = 0;

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [hasMoreItems, sethasMoreItems] = useState(true);
    const obj = useSelector(state => {
        switch (type) {
            case 'categories':
                arr = state.categories.categoriesPaging;
                total_items = state.categories.total_categories;

                return state.categories;
        
            case 'posts':
                arr = state.posts.posts;
                total_items = state.posts.total_posts;

                return state.posts;

            default:
                return null;
        }
    });
    
    const handleLoadMore = () => {
        if (isLoading) {
            return;
        }

        setIsLoading(true);

        if (arr.length !== 0 && total_items !== 0) {
            if (arr.length >= total_items) {
                sethasMoreItems(false);
            }
        }

        dispatch(action({
            page: obj.page + 1,
            per_page,
        })).then(() => {
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        setIsLoading(true);

        if (arr.length !== 0 && total_items !== 0) {
            if (arr.length >= total_items) {
                sethasMoreItems(false);
            }
        }

        dispatch(action({
            page: 1,
            per_page,
        })).then(() => {
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
        });
    }, [dispatch]);

    return {
        arrPaging: arr,
        totalItems: total_items,
        buttonLoadMore: hasMoreItems 
                            ?   (
                                    <button className="btn btn-transparent-bc" onClick={ handleLoadMore }>
                                        { isLoading ? "Đang tải" : "Tải thêm" }
                                    </button>
                                )
                            :   null,
    }
}