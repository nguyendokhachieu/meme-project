import { api } from "./api";

export const CommentService = {
    getAllCommentsByPostId(id) {
        return api.call().get("/getAllCommentsByPostId", {
            params: {
                id
            }
        })
    }
}