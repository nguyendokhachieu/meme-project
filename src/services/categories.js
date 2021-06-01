import { api } from "./api";

export const CategoryService = {
    getAllCategories({
        order_by = 'name',
        order_dir = 'ASC',
    }) 
    {
        return api.call().get("/category/getAllCategories", {
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
        return api.call().get("/category/getCategoriesPagination", {
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
        return api.call().get('/category/getUserCategoriesByUserIdPagination', {
            params: {
                user_id,
                page,
                per_page,
                order_by,
                order_dir,
            }
        })
    }
};