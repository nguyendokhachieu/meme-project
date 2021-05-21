import { 
    ACT_FETCH_ALL_CATEGORIES, 
    ACT_FETCH_CATEGORIES, 
    ACT_FETCH_USER_CATEGORIES } from "./actions";

const initState = {
    page: 1,
    per_page: 5,
    total_categories: 0,
    categoriesPaging: [],
    categories: [],
    user: {
        page: 1,
        per_page: 5,
        total_user_categories: 0,
        categories: [],
    }
}

export const categoriesReducer = (state = initState, action) => {
    switch (action.type) {
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
                    total_user_categories: action.payload.total_user_categories,
                    categories: action.payload.page === 1
                                    ? action.payload.categories
                                    : [
                                        ...state.user.categories,
                                        ...action.payload.categories,
                                    ]
                }
            }

        default:
            return state;
    }
}