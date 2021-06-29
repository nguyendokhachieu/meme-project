import { api } from "./api";

export const CategoryService = {
    getAllCategories({
        order_by = 'name',
        order_dir = 'ASC',
    }) 
    {
        return api.call().get("/category/get/all", {
            params: {
                order_by,
                order_dir,
            }
        })
    },

    getCategoriesPagination({
        page = 1,
        per_page = 5,
        order_by = 'name',
        order_dir = 'ASC',
    }) 
    {
        return api.call().get("/category/get/get", {
            params: {
                page,
                per_page,
                order_by,
                order_dir,
            }
        })
    },

    getUserCategoriesByUserIdPagination({
        user_id, 
        page = 1,
        per_page = 5,
        order_by = 'name',
        order_dir = 'ASC',
    }) {
        return api.call().get('/category/get/user', {
            params: {
                user_id,
                page,
                per_page,
                order_by,
                order_dir,
            }
        })
    },

    createNewCategory(content) {
        const token = localStorage.getItem('tstring');

        return api.call().post('/category/create', JSON.stringify({
            name: content
        }), {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + unescape(encodeURIComponent(token)),
                'Content-Type': 'application/json',
            }
        })
    },

    getPostCategories(post_id) {
        return api.call().get('/category/get/post', {
            params: {
                post_id,
            }
        })
    }
};