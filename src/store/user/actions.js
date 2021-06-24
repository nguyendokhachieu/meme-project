import { UserService } from "../../services/user";

export const ACT_LOGIN = 'ACT_LOGIN';

export const actFetchMeAsync = () => {
    return async dispatch => {
        const token = localStorage.getItem('tstring');

        if (!token) return;

        try {
            const response = await UserService.auth(token);

            if (response.data.user && response.data.user.token) {
                dispatch(actLogin(response.data.user));
            } 
        } catch (error) {
            
        }
    }
}

export const actLoginAsync = (username, password) => {
    return async dispatch => {
        if (!username) return { ok: false };
        if (!password) return { ok: false };

        try {
            const response = await UserService.login(username, password);

            if (response.data.user.token) {
                dispatch(actLogin(response.data.user));
                
                return {
                    ok: true,
                }
            } 
        } catch (error) {
            return {
                ok: false,
            }
        }
    }
}

export const actLogin = (userData) => {
    return {
        type: ACT_LOGIN,
        payload: {
            userData,
        }
    }
}