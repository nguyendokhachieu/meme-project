import { UserService } from "../../services/user";

export const ACT_LOGIN = 'ACT_LOGIN';
export const ACT_AUTHORIZATION = 'ACT_AUTHORIZATION';

export const actFetchMeAsync = () => {
    return async dispatch => {
        const token = localStorage.getItem('tstring');

        if (token) {
            const response = await UserService.auth(token);

            if (response.data.user && response.data.user.token) {
                dispatch(actLogin(response.data.user));
            } 
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

export const actAuthorization = (userData) => {
    return {
        type: ACT_AUTHORIZATION,
        payload: {
            userData,
        }
    }
}