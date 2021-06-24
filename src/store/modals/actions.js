export const ACT_SHOW_EDIT_MODAL = 'ACT_SHOW_EDIT_MODAL';
export const ACT_HIDE_EDIT_MODAL = 'ACT_HIDE_EDIT_MODAL';

export const ACT_SHOW_DELETE_POST_MODAL = 'ACT_SHOW_DELETE_POST_MODAL';
export const ACT_HIDE_DELETE_POST_MODAL = 'ACT_HIDE_DELETE_POST_MODAL';

export const ACT_SHOW_DELETE_COMMENT_MODAL = 'ACT_SHOW_DELETE_COMMENT_MODAL';
export const ACT_HIDE_DELETE_COMMENT_MODAL = 'ACT_HIDE_DELETE_COMMENT_MODAL';

export const ACT_SHOW_CATEGORY_POST_MODAL = 'ACT_SHOW_CATEGORY_POST_MODAL';
export const ACT_HIDE_CATEGORY_POST_MODAL = 'ACT_HIDE_CATEGORY_POST_MODAL';

export const actShowCategoryPostModal = (id) => {
    return {
        type: ACT_SHOW_CATEGORY_POST_MODAL,
        payload: {
            id,
        }
    }
}

export const actHideCategoryPostModal = () => {
    return {
        type: ACT_HIDE_CATEGORY_POST_MODAL,
    }
}

export const actShowDeleteCommentModal = (commentID, comment_user_id) => {
    return {
        type: ACT_SHOW_DELETE_COMMENT_MODAL,
        payload: {
            commentID,
            comment_user_id
        }
    }
}

export const actHideDeleteCommentModal = () => {
    return {
        type: ACT_HIDE_DELETE_COMMENT_MODAL
    }
}

export const actShowDeletePostModal = (postID) => {
    return {
        type: ACT_SHOW_DELETE_POST_MODAL,
        payload: {
            postID,
        }
    }
}

export const actHideDeletePostModal = () => {
    return {
        type: ACT_HIDE_DELETE_POST_MODAL
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