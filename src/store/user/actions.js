import { UserService } from "../../services/user";

export const ACT_LOGIN = 'ACT_LOGIN';

export const ACT_FETCH_FOLLOWING_USERS = 'ACT_FETCH_FOLLOWING_USERS';
export const ACT_FETCH_FOLLOWERS = 'ACT_FETCH_FOLLOWERS';

export const actFetchFollowersAsync = ({
    user_id = null,
    page = 1,
    per_page = 5,
}) => {
    return async dispatch => {
        if (!user_id) return;

        try {
            const response = await UserService.getListPeopleFollowYou({
                user_id,
                page,
                per_page,
            });

            if (response.data.status === 200) {
                dispatch(actFetchFollowers({
                    list: response.data.data || [],
                    page,
                    per_page,
                }));

                return { ok: true };
            }

            return { ok: false };
        } catch (error) {
            return { ok: false };
        }
    }
}

export const actFetchFollowers = ({
    list = [],
    page,
    per_page,
}) => {
    return {
        type: ACT_FETCH_FOLLOWERS,
        payload: {
            list,
            page,
            per_page,
        }
    }
}

export const actFetchFollowingUsersAsync = ({
    user_id = null,
    page = 1,
    per_page = 5,
}) => {
    return async dispatch => {
        if (!user_id) return;

        try {
            const response = await UserService.getListPeopleYouFollowing({
                user_id,
                page,
                per_page,
            });

            if (response.data.status === 200) {
                dispatch(actFetchFollowingUsers({
                    list: response.data.data || [],
                    page,
                    per_page,
                }));

                return { ok: true };
            }

            return { ok: false };
        } catch (error) {
            return { ok: false };
        }
    }
}

export const actFetchFollowingUsers = ({
    list = [],
    page,
    per_page,
}) => {
    return {
        type: ACT_FETCH_FOLLOWING_USERS,
        payload: {
            list,
            page,
            per_page,
        }
    }
}

export const actRegisterAsync = ({
    username = '',
    fullname = '',
    password = '',
    rePassword = '',
} = {}) => 
{
    return async () => {
        if (!username) return;
        if (!fullname) return;
        if (!password) return;
        if (!rePassword) return;
        if (password !== rePassword) return;

        try {
            const response = await UserService.register({
                username,
                fullname,
                password,
                rePassword
              });

            if (response.data.status === 200) {
                return { ok: true, message: '' };
            }

            return { ok: false, message: response.data.message };
        } catch (error) {
            
        }
    }   
}

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