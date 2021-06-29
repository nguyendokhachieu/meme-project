import { 
    ACT_FETCH_ALL_CATEGORIES, 
    ACT_FETCH_CATEGORIES, 
    ACT_FETCH_USER_CATEGORIES,
    ACT_FETCH_POSTS_BY_CATEGORIES,
    ACT_SELECT_ONE_CATEGORY,
    ACT_REMOVE_SELECT_ONE_CATEGORY,
    ACT_FETCH_CATEGORIES_BY_POST_ID,
    ACT_CLEAR_CATEGORIES_BY_POST_ID,
} from "./actions";

import { ACT_DELETE_POST, ACT_EDIT_POST } from "../posts/actions";

export const generateKeyCategoriesHash = (id) => `category-id-${id}`;

const initState = {
    total_categories: 0,
    categories: [],
    categoriesHash: {},

    selectedUpload: {
        list: [],
    },

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
    },

    categoriesByPostId: {
        list: [],
    }
}

export const categoriesReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_EDIT_POST: 
            const editID = action.payload.id;
            
            return {
                ...state,
                postsByCategoryId: {
                    list: state.postsByCategoryId.list.map(post => {
                            if (Number(post.id) === Number(editID)) {
                                return {
                                    ...post,
                                    img_url: action.payload.newImgUrl 
                                                ? action.payload.newImgUrl 
                                                : action.payload.deleteCurrentImage 
                                                    ? null 
                                                    : post.img_url,
                                    content: action.payload.newContent,
                                }
                            } 

                            return post;
                        }
                    )
                }
            }


        case ACT_DELETE_POST:
            const deletedPostId = action.payload.id;

            return {
                ...state,
                postsByCategoryId: {
                    list: state.postsByCategoryId.list.filter(post => {
                        return post.id !== deletedPostId && post;
                    })
                }
            }

        case ACT_CLEAR_CATEGORIES_BY_POST_ID:
            return {
                ...state,
                categoriesByPostId: {
                    list: [],
                }
            }

        case ACT_FETCH_CATEGORIES_BY_POST_ID: 
            return {
                ...state,
                categoriesByPostId: {
                    list: action.payload.list,
                }
            }

        case ACT_SELECT_ONE_CATEGORY:
            return {
                ...state,
                selectedUpload: {
                    ...state.selectedUpload,
                    list: [
                        ...state.selectedUpload.list,
                        action.payload.categoryId
                    ]
                }
            }

        case ACT_REMOVE_SELECT_ONE_CATEGORY: 
            const deletedCategoryId = action.payload.categoryId;
            const copied = state.selectedUpload.list;
            const newArr = [];

            copied.filter(cid => {
                cid !== deletedCategoryId && newArr.push(cid);
                return cid !== deletedCategoryId;
            });

            return {
                ...state,
                selectedUpload: {
                    ...state.selectedUpload,
                    list: [
                        ...newArr,
                    ]
                }
            }

        case ACT_FETCH_POSTS_BY_CATEGORIES:
            return {
                ...state,
                postsByCategoryId: {
                    ...state.postsByCategoryId,
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
            const hashObj = {};

            action.payload.data.forEach(item => {
                const key = generateKeyCategoriesHash(item.id);
                const value = item;

                hashObj[key] = value;
            });

            return {
                ...state,
                categories: action.payload.data,
                categoriesHash: hashObj,

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