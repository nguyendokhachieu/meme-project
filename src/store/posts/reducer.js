import { ACT_FETCH_POSTS_PAGINATION } from "./actions";

const initState = {
    page: 1,
    per_page: 2,
    posts: [],
};

export const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_FETCH_POSTS_PAGINATION:
            return {
                ...state,
                page: action.payload.page,
                per_page: action.payload.per_page,
                posts: action.payload.page === 1
                        ? action.payload.posts
                        : [ ...state.posts,
                            ...action.payload.posts
                        ],
            }
                
        default:
            return state;
    }
};