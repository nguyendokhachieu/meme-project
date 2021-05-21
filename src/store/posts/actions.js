import { PostService } from "./../../services/posts";

export const ACT_FETCH_POSTS_PAGINATION = 'ACT_FETCH_POSTS_PAGINATION';
export const ACT_FETCH_POSTS_BY_USER_ID_PAGINATION = 'ACT_FETCH_POSTS_BY_USER_ID_PAGINATION';

export const actFetchPostsByUserIdPaginationAsync = ({
    user_id, 
    page = 1, 
    per_page = 5, 
    order_by = 'created_at', 
    order_dir ='DESC',
}) => {

    return async (dispatch) => {
        try {
            const response = await PostService.getPostsByUserIdPagination({
                user_id, 
                page, 
                per_page, 
                order_by, 
                order_dir,
            });
            console.log();

            dispatch(actFetchPostsByUserIdPagination({
                page,
                per_page,
                total_user_posts: Number(response.data.total_user_posts),
                posts: !response.data.data ? [] : response.data.data,
            }))
        } catch (error) {
            
        }
    }
}

const actFetchPostsByUserIdPagination = ({
    page,
    per_page,
    total_user_posts,
    posts
}) => {
    return {
        type: ACT_FETCH_POSTS_BY_USER_ID_PAGINATION,
        payload: {
            page,
            per_page,
            total_user_posts,
            posts,
        }
    }
}

export const actFetchDetailPostAsync = (id) => {
    return async () => {
        try {
            const response = await PostService.getDetailPostById(id);

            return response.data.data[0];
        } catch (error) {
            console.log(error);
        }
    }
}

export const actFetchPostsPaginationAsync = ({
    page = 1,
    per_page = 2,
    order_by = 'created_at',
    order_dir = 'DESC',
} = {}) =>  
{
    return async (dispatch) => {
        try {
            const response = await PostService.getPostsPagination({
                page,
                per_page,
                order_by,
                order_dir,
            });
    
            dispatch(actFetchPostsPagination({
                page,
                per_page,
                total_posts: response.data.total_posts,
                posts: response.data.data,
            }));
        } catch (error) {
            console.log(error);
        }
    }
}

const actFetchPostsPagination = ({
    page = 1,
    per_page = 2,
    total_posts = 0,
    posts = [],
}) => {
    return {
        type: ACT_FETCH_POSTS_PAGINATION, 
        payload: {
            page,
            per_page,
            total_posts,
            posts,
        }
    }
}