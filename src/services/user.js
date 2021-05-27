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
    },

    getListPeopleFollowYou(user_id) {
        return api.call().get('/getListPeopleFollowYou', {
            params: {
                user_id,
            }
        })
    },

    getListPeopleYouFollowing(user_id) {
        return api.call().get('/getListPeopleYouFollowing', {
            params: {
                user_id,
            }
        })
    },

    changePassword(oldPassword, newPassword, renewPassword) {
        const token = localStorage.getItem('tstring');

        const h = new Headers();
        h.append('Authorization', 'Bearer ' + token);
        h.append('Authorization', 'Basic ' + window.btoa(oldPassword.concat('.').concat(newPassword).concat('.').concat(renewPassword)));

        return api.call().post('/changepassword', null, {
            method: 'POST',
            headers: {
                    'Authorization': 'Basic ' + window.btoa(oldPassword.concat('.').concat(newPassword).concat('.').concat(renewPassword)) + ', ' 
                                    + 'Bearer ' + token,
            },
        })
    },

    isFollowing(user_id, follow_user_id) {
        return api.call().post('/isFollowing', JSON.stringify({
            user_id,
            follow_user_id,
        }), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },

    follow(user_id, follow_user_id) {
        const token = localStorage.getItem('tstring');

        return api.call().post('/follow', JSON.stringify({
            user_id, 
            follow_user_id,
        }), {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
    },

    unfollow(user_id, follow_user_id) {
        const token = localStorage.getItem('tstring');

        return api.call().post('/unfollow', JSON.stringify({
            user_id, 
            follow_user_id,
        }), {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
    }
}