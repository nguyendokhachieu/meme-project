import { api } from "./api";

export const PostService = {
    getAllPosts({
        order_by = 'created_at',
        order_dir = 'DESC',
    } = {}) 
    {
        return api.call().get("/getAllPosts", {
            params: {
                order_by,
                order_dir,
            }
        })
    },

    getPostsPagination({
        page = 1,
        per_page = 2,
        order_by = 'created_at',
        order_dir = 'DESC',
    } = {}) 
    {
        return api.call().get("/getPostsPagination", {
            params: {
                page,
                per_page,
                order_by,
                order_dir,
            }
        })
    },

    getDetailPostById(id) {
        return api.call().get("/getDetailPostById", {
            params: {
                id
            }
        })
    },

    getPostsByUserIdPagination({
        user_id, 
        page = 1, 
        per_page = 5, 
        order_by = 'created_at', 
        order_dir ='DESC',
    }) {
        return api.call().get("/getPostsByUserIdPagination", {
            params: {
                user_id, 
                page, 
                per_page, 
                order_by, 
                order_dir,
            }
        })
    },

    upload(formDataObject) {
        const token = localStorage.getItem('tstring');
        
        return api.call().post('/upload', formDataObject, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data',
            }
        });
    },

    checkLiked(user_id, post_id) {
        return api.call().post('/checkLiked', JSON.stringify({
            user_id,
            post_id,
        }), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },

    like(user_id, post_id) {
        return api.call().post('/like', JSON.stringify({
            user_id,
            post_id,
        }), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },

    unlike(user_id, post_id) {
        return api.call().post('/unlike', JSON.stringify({
            user_id,
            post_id,
        }), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },

    countLike(post_id) {
        return api.call().post('/countLike', JSON.stringify({
            post_id,
        }), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
}