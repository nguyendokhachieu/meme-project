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
    }
}