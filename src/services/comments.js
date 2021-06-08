import { api } from "./api";

export const CommentService = {
    getAllCommentsByPostId(id) {
        return api.call().get("/comment/getAllCommentsByPostId", {
            params: {
                id
            }
        })
    },

    create(content, user_id, post_id) {
        const token = localStorage.getItem('tstring');

        return api.call().post("/comment/create", JSON.stringify({
            content,
            user_id,
            post_id,
        }), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })
    }
}