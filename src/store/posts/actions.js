import { PostService } from "./../../services/posts";

export const ACT_FETCH_POSTS_PAGINATION = 'ACT_FETCH_POSTS_PAGINATION';
export const ACT_FETCH_POSTS_BY_USER_ID_PAGINATION = 'ACT_FETCH_POSTS_BY_USER_ID_PAGINATION';
export const ACT_DELETE_POST = 'ACT_DELETE_POST';
export const ACT_EDIT_POST = 'ACT_EDIT_POST';
export const ACT_FETCH_DETAIL_POST = 'ACT_FETCH_DETAIL_POST';
export const ACT_CLEAR_DETAIL_POST = 'ACT_CLEAR_DETAIL_POST';
export const ACT_FETCH_SAVED_POSTS = 'ACT_FETCH_SAVED_POSTS';
export const ACT_DELETE_SAVED_POSTS = 'ACT_DELETE_SAVED_POSTS';
export const ACT_FETCH_POSTS_BY_FOLLOWING_USERS = 'ACT_FETCH_POSTS_BY_FOLLOWING_USERS';
export const ACT_SET_HOMEPAGE_TABS = 'ACT_SET_HOMEPAGE_TABS';

export const actSetHomePageTabs = (tabName) => {    
    return {
        type: ACT_SET_HOMEPAGE_TABS,
        payload: {
            tabName,
        }
    }
}

export const actFetchPostsByFollowingUsersAsync = ({
    user_id = null,
    page = 1,
    per_page = 5,
    order_by = 'created_at',
    order_dir = 'DESC',
} = {}) =>  
{
    return async (dispatch) => {
        try {
            if (!user_id) return;
            
            const response = await PostService.getPostsByFollowingsPagination({
                user_id,
                page,
                per_page,
                order_by,
                order_dir,
            });

            await dispatch(actFetchPostsByFollowingUsers({
                user_id,
                page,
                per_page,
                total_posts: response.data.total_posts,
                list: response.data.data,
                hasMore: response.data.data.length === 0 ? false : true,
            }));

        } catch (error) {
            console.log(error);
        }
    }
}

const actFetchPostsByFollowingUsers = ({
    user_id,
    page = 1,
    per_page = 5,
    total_posts = 0,
    list = [],
    hasMore = true,
}) => {
    return {
        type: ACT_FETCH_POSTS_BY_FOLLOWING_USERS, 
        payload: {
            user_id,
            page,
            per_page,
            total_posts,
            list,
            hasMore,
        }
    }
}

export const actFetchSavedPostsAsync = ({
    page = 1,
    per_page = 5,
    order_by = 'latest_saved',
    order_dir = 'desc',
}) => {
    return async dispatch => {
        try {
            const response = await PostService.getListSavedPosts({
                page,
                per_page,
                order_by,
                order_dir,
            })

            dispatch(actFetchSavedPosts(page, per_page, response?.data.data || []));
        } catch (error) {
            
        }
    }
}

const actFetchSavedPosts = (page, per_page, list) => {
    return {
        type: ACT_FETCH_SAVED_POSTS,
        payload: {
            page,
            per_page,
            list,
        }
    }
}

export const actDeleteSavedPost = post_id => {
    return {
        type: ACT_DELETE_SAVED_POSTS,
        payload: {
            post_id,
        }
    }
}

export const actEditPost = (id, newImgUrl, newContent, deleteCurrentImage, isDetailPostPage, isProfilePage) => {
    return {
        type: ACT_EDIT_POST,
        payload: {
            id, 
            newContent,
            newImgUrl,
            deleteCurrentImage,
            isDetailPostPage,
            isProfilePage,
        }
    }
}

export const actDeletePost = (id, isProfilePage) => {
    return {
        type: ACT_DELETE_POST,
        payload: {
            id,
            isProfilePage,
        }
    }
}

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
                hasMore: response.data.data.length === 0 ? false : true, 
            }))
        } catch (error) {
            
        }
    }
}

const actFetchPostsByUserIdPagination = ({
    page,
    per_page,
    total_user_posts,
    posts, 
    hasMore,
}) => {
    return {
        type: ACT_FETCH_POSTS_BY_USER_ID_PAGINATION,
        payload: {
            page,
            per_page,
            total_user_posts,
            posts,
            hasMore,
        }
    }
}

export const actFetchDetailPostAsync = (id) => {
    return async (dispatch) => {
        try {
            const response = await PostService.getDetailPostById(id);

            if (response.data.data.length !== 0) {
                dispatch(actFetchDetailPost(response.data.data[0]));
            }

            return response.data.data[0];
        } catch (error) {
            console.log(error);
        }
    }
}

const actFetchDetailPost = (post) => {
    return {
        type: ACT_FETCH_DETAIL_POST,
        payload: {
            post
        }
    }
}

export const actClearDetailPost = () => {
    return {
        type: ACT_CLEAR_DETAIL_POST,
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

            await dispatch(actFetchPostsPagination({
                page,
                per_page,
                total_posts: response.data.total_posts,
                posts: response.data.data,
                hasMore: response.data.data.length === 0 ? false : true,
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
    hasMore = true,
}) => {
    return {
        type: ACT_FETCH_POSTS_PAGINATION, 
        payload: {
            page,
            per_page,
            total_posts,
            posts,
            hasMore,
        }
    }
}