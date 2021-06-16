import { 
    ACT_SHOW_EDIT_MODAL, 
    ACT_HIDE_EDIT_MODAL,
} from "./actions";

const initState = {
    showEditModal: false,
}

export const modalsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_SHOW_EDIT_MODAL:
            return {
                ...state,
                showEditModal: true,
            }

        case ACT_HIDE_EDIT_MODAL:
            return {
                ...state,
                showEditModal: false,
            }

        default:
            return state;
    }
}