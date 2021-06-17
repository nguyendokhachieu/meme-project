export const ACT_SHOW_EDIT_MODAL = 'ACT_SHOW_EDIT_MODAL';
export const ACT_HIDE_EDIT_MODAL = 'ACT_HIDE_EDIT_MODAL';

export const actShowEditModal = (postID) => {
    return {
        type: ACT_SHOW_EDIT_MODAL,
        payload: {
            postID,
        }
    }
}

export const actHideEditModal = () => {
    return {
        type: ACT_HIDE_EDIT_MODAL
    }
}