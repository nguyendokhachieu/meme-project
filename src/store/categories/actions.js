import { CategoryService } from "./../../services/categories";
import { PostService } from "./../../services/posts";

export const ACT_FETCH_CATEGORIES = 'ACT_FETCH_CATEGORIES';
export const ACT_FETCH_ALL_CATEGORIES = 'ACT_FETCH_ALL_CATEGORIES';
export const ACT_FETCH_USER_CATEGORIES = 'ACT_FETCH_USER_CATEGORIES';
export const ACT_FETCH_POSTS_BY_CATEGORIES = 'ACT_FETCH_POSTS_BY_CATEGORIES';
export const ACT_SELECT_ONE_CATEGORY = 'ACT_SELECT_ONE_CATEGORY';
export const ACT_REMOVE_SELECT_ONE_CATEGORY = 'ACT_REMOVE_SELECT_ONE_CATEGORY';
export const ACT_CREATE_NEW_CATEGORY = 'ACT_CREATE_NEW_CATEGORY';

export const actCreateNewCategoryAsync = (categoryText = '') => {
    return async dispatch => {
        if (!categoryText) return;

        try {
            const response = await CategoryService.createNewCategory(categoryText);

            if (response.data.created_new_category) {
                await dispatch(actFetchAllCategoriesAsync());
                dispatch(actSelectOneCategory(response.data.inserted_id));
                return { ok: true, message: '' };
            } 

            return { ok: false, message: response.data.message };
        } catch (error) {
            
        }
    }
}

export const actSelectOneCategory = (categoryId) => {
    return {
        type: ACT_SELECT_ONE_CATEGORY,
        payload: {
            categoryId,
        }
    }
}

export const actRemoveSelectOneCategory = (categoryId) => {
    return {
        type: ACT_REMOVE_SELECT_ONE_CATEGORY,
        payload: {
            categoryId,
        }
    }
}

export const actFetchPostsByCategoryAsync = (id = null, page = 1, per_page = 5) => {
    return async dispatch => {
        if (!id) return;

        try {
            const response = await PostService.getPostsByCategoryId({
                category_id: id,
                page,
                per_page,
            });

            dispatch(actFetchPostsByCategory(id, response.data.data, page, per_page, response.data.data.length === 0 ? false : true));
        } catch (error) {
            
        }
    }
}

const actFetchPostsByCategory = (category_id, list, page, per_page, hasMore) => {
    return {
        type: ACT_FETCH_POSTS_BY_CATEGORIES,
        payload: {
            category_id,
            list,
            page,
            per_page,
            hasMore,
        }
    }
}

export const actFetchUserCategoriesAsync = ({
    user_id,
    page = 1,
    per_page = 5,
    order_by = 'name',
    order_dir = 'ASC',
}) => {
    return async (dispatch) => {
        try {
            const response = await CategoryService.getUserCategoriesByUserIdPagination({
                user_id,
                page,
                per_page,
                order_by,
                order_dir,
            });
    
            dispatch(actFetchUserCategories({
                page,
                per_page,
                total_user_categories: Number(response.data.total_user_categories),
                categories: response.data.data ? response.data.data : [],
                hasMore: response.data.data.length === 0 ? false : true,
            }))
        } catch (error) {
            
        }
    }
}

const actFetchUserCategories = ({
    page,
    per_page,
    total_user_categories,
    categories,
    hasMore,
}) => {
    return {
        type: ACT_FETCH_USER_CATEGORIES,
        payload: {
            page,
            per_page,
            total_user_categories,
            categories,
            hasMore
        }
    }
}

export const actFetchAllCategoriesAsync = ({
    order_by = 'name',
    order_dir = 'ASC',
} = {}) => {
    return async (dispatch) => {
        try {
            const response = await CategoryService.getAllCategories({
                order_by,
                order_dir,
            });
    
            dispatch(actFetchAllCategories(response.data.data));
        } catch (error) {
            
        }
    }
}

export const actFetchAllCategories = (data) => {
    return {
        type: ACT_FETCH_ALL_CATEGORIES,
        payload: {
            data
        }
    }
}

export const actFetchCategoriesAsync = ({
    page = 1, 
    per_page = 5,
    order_by = 'name',
    order_dir = 'ASC',
} = {}) => {
    return async (dispatch) => {
        const response = await CategoryService.getCategoriesPagination({
            page,
            per_page,
            order_by,
            order_dir,
        });

        dispatch(actFetchCategories(response.data.data, 
                                    page, 
                                    per_page, 
                                    response.data.total_categories));
    }
}

const actFetchCategories = (categoriesArray, page, per_page, total_categories) => {
    return {
        type: ACT_FETCH_CATEGORIES,
        payload: {
            categories: categoriesArray,
            page,
            per_page,
            total_categories,
        }
    }
}