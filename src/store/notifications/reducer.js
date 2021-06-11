import { ACT_SHOW_NOTIFICATION_CARD, ACT_HIDE_NOTIFICATION_CARD } from "./actions";

const initState = {
    show: false,
    content: '',
};

export const notificationsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_SHOW_NOTIFICATION_CARD:
            return {
                ...state,
                show: action.payload.show,
                content: action.payload.content,
            }
    
        case ACT_HIDE_NOTIFICATION_CARD:
            return {
                ...state,
                show: action.payload.show,
                content: '',
            }
    
        default:
            return state;
    }
}