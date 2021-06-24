import { 
    ACT_FETCH_ALL_CATEGORIES, 
    ACT_FETCH_CATEGORIES, 
    ACT_FETCH_USER_CATEGORIES,
    ACT_FETCH_POSTS_BY_CATEGORIES,
} from "./actions";

const initState = {
    page: 1,
    per_page: 5,
    total_categories: 0,
    categoriesPaging: [],
    categories: [],

    user: {
        page: 1,
        per_page: 5,
        total: 0,
        list: [],
        hasMore: true,
    },

    postsByCategoryId: {
        page: 1,
        per_page: 5, 
        hasMore: true,
        list: [],
        category_id: null,
    }
}

export const categoriesReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_FETCH_POSTS_BY_CATEGORIES:
            return {
                ...state,
                postsByCategoryId: {
                    page: action.payload.page,
                    per_page: action.payload.per_page,
                    hasMore: action.payload.hasMore,
                    list: action.payload.page === 1
                            ? action.payload.list
                            : [
                                ...state.postsByCategoryId.list,
                                ...action.payload.list,
                            ],
                    category_id: action.payload.category_id,
                }
            }
        case ACT_FETCH_CATEGORIES:
            return {
                ...state,
                page: action.payload.page,
                per_page: action.payload.per_page,
                total_categories: Number(action.payload.total_categories),
                categoriesPaging: action.payload.page === 1 
                                    ? action.payload.categories
                                    : [
                                        ...state.categoriesPaging,
                                        ...action.payload.categories,
                                    ]
            }
        
        case ACT_FETCH_ALL_CATEGORIES: 
            return {
                ...state,
                categories: [...action.payload.data],
            }

        case ACT_FETCH_USER_CATEGORIES:
            return {
                ...state,
                user: {
                    page: action.payload.page,
                    per_page: action.payload.per_page,
                    total: action.payload.total_user_categories,
                    list: action.payload.page === 1
                                    ? action.payload.categories
                                    : [
                                        ...state.user.list,
                                        ...action.payload.categories,
                                    ],
                    hasMore: action.payload.hasMore,
                }
            }

        default:
            return state;
    }
}