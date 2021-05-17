import { CommentService } from "../../services/comments"

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