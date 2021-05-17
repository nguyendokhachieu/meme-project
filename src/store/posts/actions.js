import { PostService } from "./../../services/posts";

export const ACT_FETCH_POSTS_PAGINATION = 'ACT_FETCH_POSTS_PAGINATION';

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