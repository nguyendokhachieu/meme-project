import { api } from "./api";

export const CommentService = {
    getAllCommentsByPostId(id, page = 1, per_page = 5) {
        return api.call().get("/comment/get", {
            params: {
                id,
                page,
                per_page,
            }
        })
    },

    create(id, content, user_id, post_id) {
        const token = localStorage.getItem('tstring');

        return api.call().post("/comment/create", JSON.stringify({
            id,
            content,
            user_id,
            post_id,
        }), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + unescape(encodeURIComponent(token)),
            }
        })
    },

    delete(comment_id) {
        const token = localStorage.getItem('tstring');

        return api.call().post("/comment/delete", JSON.stringify({
            comment_id
        }), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + unescape(encodeURIComponent(token)),
            }
        })
    }
}