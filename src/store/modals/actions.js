export const ACT_SHOW_EDIT_MODAL = 'ACT_SHOW_EDIT_MODAL';
export const ACT_HIDE_EDIT_MODAL = 'ACT_HIDE_EDIT_MODAL';

export const ACT_SHOW_DELETE_MODAL = 'ACT_SHOW_DELETE_MODAL';
export const ACT_HIDE_DELETE_MODAL = 'ACT_HIDE_DELETE_MODAL';

export const actShowDeleteModal = (postID) => {
    return {
        type: ACT_SHOW_DELETE_MODAL,
        payload: {
            postID,
        }
    }
}

export const actHideDeleteModal = () => {
    return {
        type: ACT_HIDE_DELETE_MODAL
    }
}

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