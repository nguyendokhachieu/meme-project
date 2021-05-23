import { api } from "./api";

export const UserService = {
    login(username, password) {
        return api.call().post("/login", JSON.stringify({
            username,
            password,
        }), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },

    auth(token) {
        return api.call().post("/auth", null, {
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    },

    register({
        username,
        fullname,
        email,
        password,
    }) {
        return api.call().post('/register', {
            username,
            fullname,
            email,
            password,
        }, {
            method: 'POST',
            'Content-Type': 'application/json',
        })
    },

    getUserInfoByUserId(id) {
        return api.call().get('/getUserInfoByUserId', {
            params: {
                user_id: Number(id) 
            }
        })
    }
}