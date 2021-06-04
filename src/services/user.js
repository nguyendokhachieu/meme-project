import { api } from "./api";

export const UserService = {
    login(username, password) {
        return api.call().post("/user/login", null, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + window.btoa(username.concat('.').concat(password))
            }
        })
    },

    auth(token) {
        return api.call().post("/user/auth", null, {
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
        password,
        rePassword,
    }) {
        return api.call().post('/user/register', null, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + window.btoa(username.concat('.').concat(unescape(encodeURIComponent(fullname))).concat('.').concat(password).concat('.').concat(rePassword)),
            }
        })
    },

    getUserInfoByUserId(id) {
        return api.call().get('/user/getUserInfoByUserId', {
            params: {
                user_id: Number(id) 
            }
        })
    },

    getListPeopleFollowYou(user_id) {
        return api.call().get('/user/getListPeopleFollowYou', {
            params: {
                user_id,
            }
        })
    },

    getListPeopleYouFollowing(user_id) {
        return api.call().get('/user/getListPeopleYouFollowing', {
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

        return api.call().post('/user/changepassword', null, {
            method: 'POST',
            headers: {
                    'Authorization': 'Basic ' + window.btoa(oldPassword.concat('.').concat(newPassword).concat('.').concat(renewPassword)) + ', ' 
                                    + 'Bearer ' + token,
            },
        })
    },

    isFollowing(user_id, follow_user_id) {
        return api.call().post('/user/isFollowing', JSON.stringify({
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

        return api.call().post('/user/follow', JSON.stringify({
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

        return api.call().post('/user/unfollow', JSON.stringify({
            user_id, 
            follow_user_id,
        }), {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
    },

    update(formDataObject) {
        const token = localStorage.getItem('tstring');

        return api.call().post('/user/update', formDataObject, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data',
            }
        })
    }
}