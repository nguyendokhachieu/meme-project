import { api } from "./api";

export const NotificationService = {
    get(user_id, page = 1, per_page = 8) {
        return api.call().get('/notification/get', {
            params: {
                user_id,
                page,
                per_page,
            }
        })
    },

    getAll(user_id) {
        return api.call().get('/notification/getAll', {
            params: {
                user_id,
            }
        })
    },
}