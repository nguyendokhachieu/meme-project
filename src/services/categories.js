import { api } from "./api";

export const CategoryService = {
    getAllCategories({
        order_by = 'name',
        order_dir = 'ASC',
    }) 
    {
        return api.call().get("/getAllCategories.php", {
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
        return api.call().get("/getCategoriesPagination.php", {
            params: {
                page,
                per_page,
                order_by,
                order_dir,
            }
        })
    }
};