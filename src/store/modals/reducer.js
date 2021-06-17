import { 
    ACT_SHOW_EDIT_MODAL, 
    ACT_HIDE_EDIT_MODAL,
} from "./actions";

const initState = {
    showEditModal: false,
    postID: null,
}

export const modalsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_SHOW_EDIT_MODAL:
            return {
                ...state,
                showEditModal: true,
                postID: action.payload.postID
            }

        case ACT_HIDE_EDIT_MODAL:
            return {
                ...state,
                showEditModal: false,
                postID: null,
            }

        default:
            return state;
    }
}