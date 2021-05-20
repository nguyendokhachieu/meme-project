export const ACT_LOGIN_SUCCESSFULLY = 'ACT_LOGIN_SUCCESSFULLY';

export const actLoginSuccessfully = (userData) => {
    return {
        type: ACT_LOGIN_SUCCESSFULLY,
        payload: {
            userData,
        }
    }
}