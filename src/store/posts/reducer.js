import { 
    ACT_FETCH_POSTS_PAGINATION, 
    ACT_FETCH_POSTS_BY_USER_ID_PAGINATION,
    ACT_DELETE_POST, 
} from "./actions";

const initState = {
    page: 1,
    per_page: 2,
    total_posts: 0,
    posts: [],
    hasMore: true,
    user: {
        page: 1,
        per_page: 5,
        total_user_posts: 0,
        posts: [],
    },
};

export const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_DELETE_POST:
            const deletedID = action.payload.id;

            const copied = [...state.posts];
            const newList = copied.filter(post => {
                if (Number(post.id) !== Number(deletedID)) {
                    return post;
                } 
            })

            return {
                ...state,
                total_posts: state.total_posts - 1,
                posts: [
                    ...newList,
                ]
            }

        case ACT_FETCH_POSTS_PAGINATION:

            return {
                ...state,
                page: action.payload.page,
                per_page: action.payload.per_page,
                total_posts: action.payload.total_posts,
                hasMore: action.payload.hasMore,
                posts: action.payload.page === 1
                        ? action.payload.posts
                        : [    ...state.posts,
                            ...action.payload.posts,
                        ],
            }
           
        case ACT_FETCH_POSTS_BY_USER_ID_PAGINATION:

            return {
                ...state,
                user: {
                    page: action.payload.page,
                    per_page: action.payload.per_page,
                    total_user_posts: action.payload.total_user_posts,
                    posts: action.payload.page === 1
                            ? action.payload.posts
                            : [
                                ...state.user.posts,
                                ...action.payload.posts,
                            ]
                }
            }
        default:
            return state;
    }
};