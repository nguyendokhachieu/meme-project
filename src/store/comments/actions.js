import { CommentService } from "../../services/comments"

export const ACT_CREATE_A_NEW_COMMENT = 'ACT_CREATE_A_NEW_COMMENT';

export const actFetchAllCommentsByPostId = (id) => {
    return async () => {
        try {
            const response = await CommentService.getAllCommentsByPostId(id);

            return response.data.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export const actCreateNewComment = (content, user_id, user_img_url, created_at, user_name, liked_count = 0) => {
    return {
        type: ACT_CREATE_A_NEW_COMMENT,
        payload: {
            content,
            user_id,
            user_img_url,
            created_at,
            user_name,
            liked_count,
        }
    }
}