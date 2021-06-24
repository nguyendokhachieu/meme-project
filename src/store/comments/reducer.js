import { 
    ACT_CREATE_A_NEW_COMMENT, 
    ACT_FETCH_ALL_COMMENTS_BY_POST_ID,
    ACT_DELETE_COMMENT,
    ACT_SORT_COMMENT,
    ACT_RESET_COUNT_TOTAL_COMMENTS,
} from "./actions";

const initState = {
    page: 1,
    per_page: 5,
    hasMore: true,
    listComment: [],
    totalComments: 0,
    newComment: {
        id: null,
        content: null, 
        user_id: null, 
        post_id: null,
        user_name: null,
        user_img_url: null, 
        created_at: null,
        liked_count: 0,
    }
};

export const commentsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_RESET_COUNT_TOTAL_COMMENTS:
            return {
                ...state,
                totalComments: 0,
            }

        case ACT_SORT_COMMENT:
            const dir = action.payload.direction;

            const newArray = state.listComment.sort((a, b) => {
                let number = a.created_at < b.created_at ? -1 : 1;
                return dir === 'desc' ? (-1) * number : number;
            })

            return {
                ...state,
                listComment: [
                    ...newArray,
                ],
            }
            
        case ACT_CREATE_A_NEW_COMMENT:
            const newCommentItem = {
                id: action.payload.id,
                content: action.payload.content,
                post_id: action.payload.post_id,
                user_id: action.payload.user_id,
                user_name: action.payload.user_name,
                user_img_url: action.payload.user_img_url,
                created_at: Date.now(),
                liked_count: 0,
            }

            return {
                ...state,
                totalComments: state.totalComments + 1,
                listComment: [
                    newCommentItem,
                    ...state.listComment,
                ],
                newComment: {
                    id: action.payload.id,
                    content: action.payload.content,
                    user_id: action.payload.user_id,
                    post_id: action.payload.post_id,
                    user_name: action.payload.user_name,
                    user_img_url: action.payload.user_img_url,
                    created_at: Date.now(),
                    liked_count: 0,
                }
            }
    
        case ACT_FETCH_ALL_COMMENTS_BY_POST_ID: 
            return {
                ...state,
                page: action.payload.page,
                per_page: action.payload.per_page,
                hasMore: action.payload.list.length === 0 ? false : true,
                totalComments: state.totalComments + action.payload.list.length || 0,
                listComment: action.payload.page === 1 
                                ? action.payload.list
                                : [
                                    ...state.listComment,
                                    ...action.payload.list,
                                ]
            }

        case ACT_DELETE_COMMENT:
            const deletedID = action.payload.id;

            const copied = [...state.listComment];
            const newListComment = copied.filter(cmt => {
                if (Number(cmt.id) !== Number(deletedID)) {
                    return cmt;
                } 

            })

            return {
                ...state,
                totalComments: state.totalComments - 1,
                listComment: [
                    ...newListComment,
                ]
            }

        default:
            return state;
    }
}