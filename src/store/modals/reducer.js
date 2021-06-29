import { 
    ACT_SHOW_EDIT_MODAL, 
    ACT_HIDE_EDIT_MODAL,
    ACT_SHOW_DELETE_POST_MODAL,
    ACT_HIDE_DELETE_POST_MODAL,
    ACT_SHOW_DELETE_COMMENT_MODAL,
    ACT_HIDE_DELETE_COMMENT_MODAL,
    ACT_SHOW_POST_CATEGORIES_MODAL,
    ACT_HIDE_POST_CATEGORIES_MODAL,
} from "./actions";

const initState = {
    showEditModal: false,
    showDeleteModal: false,

    postID: null,

    showDeleteCommentModal: false,
    commentID: null,
    comment_user_id: null,

    showPostCategoriesModal: false,
}

export const modalsReducer = (state = initState, action) => {
    switch (action.type) {

        case ACT_SHOW_POST_CATEGORIES_MODAL:
            return {
                ...state,
                showPostCategoriesModal: true,
                postID: action.payload.postID,
            }

        case ACT_HIDE_POST_CATEGORIES_MODAL:
            return {
                ...state,
                showPostCategoriesModal: false,
                postID: null,
            }
    
        case ACT_SHOW_DELETE_COMMENT_MODAL:
            return {
                ...state,
                showDeleteCommentModal: true,
                commentID: action.payload.commentID,
                comment_user_id: action.payload.comment_user_id,
            }

        case ACT_HIDE_DELETE_COMMENT_MODAL:
            return {
                ...state,
                showDeleteCommentModal: false,
                commentID: null,
                comment_user_id: null,

            }

        case ACT_SHOW_DELETE_POST_MODAL:
            return {
                ...state,
                showDeleteModal: true,
                postID: action.payload.postID
            }

        case ACT_HIDE_DELETE_POST_MODAL:
            return {
                ...state,
                showDeleteModal: false,
                postID: null,
            }

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