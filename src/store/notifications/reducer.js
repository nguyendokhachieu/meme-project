import { 
    ACT_SHOW_NOTIFICATION_CARD, 
    ACT_HIDE_NOTIFICATION_CARD,
    ACT_CLEAR_NOTIFICATION_CARD,
} from "./actions";

const initState = {
    show: false,
    content: '',
    showLink: false,
    href: '',
    linkContent: '',
};

export const notificationsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_SHOW_NOTIFICATION_CARD:
            return {
                ...state,
                show: true,
                content: action.payload.content,
                showLink: action.payload.showLink,
                href: action.payload.href,
                linkContent: action.payload.linkContent,
            }
    
        case ACT_HIDE_NOTIFICATION_CARD:
            return {
                ...state,
                show: false,
            }
    
        case ACT_CLEAR_NOTIFICATION_CARD:
            return {
                ...state,
                show: false,
                content: '',
                showLink: false,
                href: '',
                linkContent: '',
            }
    
        default:
            return state;
    }
}