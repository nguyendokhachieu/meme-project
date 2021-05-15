import { PostService } from "./../../services/posts";

export const ACT_FETCH_POSTS_PAGINATION = 'ACT_FETCH_POSTS_PAGINATION';

export const actFetchPostsPaginationAsync = ({
    page = 1,
    per_page = 2,
    order_by = 'created_at',
    order_dir = 'DESC',
} = {}) =>  
{
    return async (dispatch) => {
        const response = await PostService.getPostsPagination({
            page,
            per_page,
            order_by,
            order_dir,
        });

        dispatch(actFetchPostsPagination({
            page,
            per_page,
            posts: response.data.data,
        }));
    }
}

const actFetchPostsPagination = ({
    page = 1,
    per_page = 2,
    posts = [],
}) => {
    return {
        type: ACT_FETCH_POSTS_PAGINATION, 
        payload: {
            page,
            per_page,
            posts,
        }
    }
}