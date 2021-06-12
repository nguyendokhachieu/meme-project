import { api } from "./api";

export const UserService = {
    login(username, password) {
        return api.call().post("/user/login", null, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Basic ' + window.btoa(username.concat('.').concat(password)),
                'Authorization': 'Basic ' + window.btoa(unescape(encodeURIComponent(username)).concat('.').concat(unescape(encodeURIComponent(password))))
            }
        })
    },

    auth(token) {
        return api.call().post("/user/auth", null, {
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + unescape(encodeURIComponent(token)),
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
                'Authorization': 'Basic ' + window.btoa(unescape(encodeURIComponent(username)).concat('.').concat(unescape(encodeURIComponent(fullname))).concat('.').concat(unescape(encodeURIComponent(password))).concat('.').concat(unescape(encodeURIComponent(rePassword)))),
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

        return api.call().post('/user/changepassword', null, {
            method: 'POST',
            headers: {
                    'Authorization': 'Basic ' + window.btoa(unescape(encodeURIComponent(oldPassword)).concat('.').concat(unescape(encodeURIComponent(newPassword))).concat('.').concat(unescape(encodeURIComponent(renewPassword)))) + ', ' 
                                    + 'Bearer ' + unescape(encodeURIComponent(token)),
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
                'Authorization': 'Bearer ' + unescape(encodeURIComponent(token)),
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
                'Authorization': 'Bearer ' + unescape(encodeURIComponent(token)),
            }
        })
    },

    update(formDataObject) {
        const token = localStorage.getItem('tstring');

        return api.call().post('/user/update', formDataObject, {
            headers: {
                'Authorization': 'Bearer ' + unescape(encodeURIComponent(token)),
                'Content-Type': 'multipart/form-data',
            }
        })
    }
}