import { api } from "./api";

export const SearchService = {
    get({
        q,
        page = 1,
        per_page = 8,
        order_by = 'created_at',
        order_dir = 'DESC',
    }) {
        return api.call().get('/search/get', {
            params: {
                q,
                page,
                per_page,
                order_by,
                order_dir,
            }
        })
    },
    
}