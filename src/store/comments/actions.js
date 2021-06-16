import { CommentService } from "../../services/comments";
import { actShowNotificationCard } from "../notifications/actions";

export const ACT_CREATE_A_NEW_COMMENT = 'ACT_CREATE_A_NEW_COMMENT';
export const ACT_FETCH_ALL_COMMENTS_BY_POST_ID = 'ACT_FETCH_ALL_COMMENTS_BY_POST_ID';
export const ACT_DELETE_COMMENT = 'ACT_DELETE_COMMENT';
export const ACT_SORT_COMMENT = 'ACT_SORT_COMMENT';
export const ACT_RESET_COUNT_TOTAL_COMMENTS = 'ACT_RESET_COUNT_TOTAL_COMMENTS';

export const actResetCountTotalComments = () => {
    return {
        type: ACT_RESET_COUNT_TOTAL_COMMENTS,
    }
}

export const actSortComment = (direction = 'desc') => {
    return {
        type: ACT_SORT_COMMENT,
        payload: {
            direction,
        }
    }
}

export const actDeleteComment = (id) => {
    return {
        type: ACT_DELETE_COMMENT,
        payload: {
            id,
        }
    }
}

export const actFetchAllCommentsByPostIdAsync = (id, page = 1, per_page = 5) => {
    return async (dispatch) => {
        try {
            const response = await CommentService.getAllCommentsByPostId(id, page, per_page);

            dispatch(actFetchAllCommentsByPostId(response.data.data, page, per_page));
        } catch (error) {
            console.log(error);
        }
    }
}

const actFetchAllCommentsByPostId = (data, page, per_page) => {
    return {
        type: ACT_FETCH_ALL_COMMENTS_BY_POST_ID,
        payload: {
            list: data,
            page,
            per_page
        }
    }
}

export const actCreateNewCommentAsync = (content, user_id, post_id, user_img_url, created_at, user_name, liked_count = 0) => {
    return async dispatch => {
        try {
            let id = new Date().getTime();
            id = Math.round(id / 100000000 * Math.random());

            const response = await CommentService.create(id, content, user_id, post_id);

            if (response.data.created_new_comment) {
                dispatch(actCreateNewComment(id, content, user_id, post_id, user_img_url, created_at, user_name, liked_count));   
            } else {
                dispatch(actShowNotificationCard(response.data.message));
            }
        } catch (error) {
            
        }
    }
}

export const actCreateNewComment = (id, content, user_id, post_id, user_img_url, created_at, user_name, liked_count = 0) => {
    return {
        type: ACT_CREATE_A_NEW_COMMENT,
        payload: {
            id,
            content,
            user_id,
            post_id,
            user_img_url,
            created_at,
            user_name,
            liked_count,
        }
    }
}