export const ACT_SHOW_EDIT_MODAL = 'ACT_SHOW_EDIT_MODAL';
export const ACT_HIDE_EDIT_MODAL = 'ACT_HIDE_EDIT_MODAL';

export const ACT_SHOW_DELETE_POST_MODAL = 'ACT_SHOW_DELETE_POST_MODAL';
export const ACT_HIDE_DELETE_POST_MODAL = 'ACT_HIDE_DELETE_POST_MODAL';

export const ACT_SHOW_DELETE_COMMENT_MODAL = 'ACT_SHOW_DELETE_COMMENT_MODAL';
export const ACT_HIDE_DELETE_COMMENT_MODAL = 'ACT_HIDE_DELETE_COMMENT_MODAL';

export const ACT_SHOW_POST_CATEGORIES_MODAL = 'ACT_SHOW_POST_CATEGORIES_MODAL'; // show single post has categories added
export const ACT_HIDE_POST_CATEGORIES_MODAL = 'ACT_HIDE_POST_CATEGORIES_MODAL';

export const ACT_SHOW_PEOPLE_MODAL = 'ACT_SHOW_PEOPLE_MODAL'; 
export const ACT_HIDE_PEOPLE_MODAL = 'ACT_HIDE_PEOPLE_MODAL';

export const actShowPeopleModal = ({
    user_id,
    type,
}) => {
    return {
        type: ACT_SHOW_PEOPLE_MODAL,
        payload: {
            user_id,
            type,
        }
    }
}

export const actHidePeopleModal = () => {
    return {
        type: ACT_HIDE_PEOPLE_MODAL,
    }
}

export const actShowPostCategoriesModal = postID => {
    return {
        type: ACT_SHOW_POST_CATEGORIES_MODAL,
        payload: {
            postID,
        }
    }
}

export const actHidePostCategoriesModal = () => {
    return {
        type: ACT_HIDE_POST_CATEGORIES_MODAL,
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