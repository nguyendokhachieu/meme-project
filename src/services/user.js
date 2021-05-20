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
    }
}