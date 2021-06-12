import { api } from "./api";

export const SearchService = {
    getPosts({
        q,
        page = 1,
        per_page = 8,
        order_by = 'created_at',
        order_dir = 'DESC',
    }) {
        return api.call().get('/search/posts', {
            params: {
                q,
                page,
                per_page,
                order_by,
                order_dir,
            }
        })
    },
    
    getUsers({
        q,
        page = 1,
        per_page = 8,
    }) {
        return api.call().get('/search/users', {
            params: {
                q,
                page,
                per_page,
            }
        })
    },
    
}