import { actCreateNewComment, ACT_CREATE_A_NEW_COMMENT } from "./actions";

const initState = {
    newComment: {
        content: null, 
        user_id: null, 
        user_name: null,
        user_img_url: null, 
        created_at: null, user_name: null, 
        liked_count: 0,
    }
};

export const commentsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_CREATE_A_NEW_COMMENT:
            return {
                ...state,
                newComment: {
                    content: action.payload.content,
                    user_id: action.payload.user_id,
                    user_name: action.payload.user_name,
                    user_img_url: action.payload.user_img_url,
                    created_at: Date.now(),
                    liked_count: 0,
                }
            }
    
        default:
            return state;
    }
}