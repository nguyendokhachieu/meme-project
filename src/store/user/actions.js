export const ACT_LOGIN_SUCCESSFULLY = 'ACT_LOGIN_SUCCESSFULLY';
export const ACT_AUTHORIZATION = 'ACT_AUTHORIZATION';

export const actLoginSuccessfully = (userData) => {
    return {
        type: ACT_LOGIN_SUCCESSFULLY,
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