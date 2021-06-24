export const ACT_SHOW_NOTIFICATION_CARD = 'ACT_SHOW_NOTIFICATION_CARD';
export const ACT_HIDE_NOTIFICATION_CARD = 'ACT_HIDE_NOTIFICATION_CARD';
export const ACT_CLEAR_NOTIFICATION_CARD = 'ACT_CLEAR_NOTIFICATION_CARD';

export const actShowNotificationCard = (content, showLink = false, href = '', linkContent = '') => {
    return {
        type: ACT_SHOW_NOTIFICATION_CARD,
        payload: {
            content,
            showLink,
            href,
            linkContent,
        }
    }
}

export const actHideNotificationCard = () => {
    return dispatch => {
        dispatch(actHide());
        setTimeout(() => {
            dispatch(actClear());
        }, 1);
    }
}

const actHide = () => {
    return {
        type: ACT_HIDE_NOTIFICATION_CARD 
    }
}

const actClear = () => {
    return {
        type: ACT_CLEAR_NOTIFICATION_CARD
    }
}

