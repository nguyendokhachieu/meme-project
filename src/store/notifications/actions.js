export const ACT_SHOW_NOTIFICATION_CARD = 'ACT_SHOW_NOTIFICATION_CARD';
export const ACT_HIDE_NOTIFICATION_CARD = 'ACT_HIDE_NOTIFICATION_CARD';

export const actShowNotificationCard = (content, showLink = false, href = '', linkContent = '') => {
    return {
        type: ACT_SHOW_NOTIFICATION_CARD,
        payload: {
            show: true,
            content,
            showLink,
            href,
            linkContent,
        }
    }
}

export const actHideNotificationCard = () => {
    return {
        type: ACT_HIDE_NOTIFICATION_CARD,
        payload: {
            show: false,
            content: '',
        }
    }
}