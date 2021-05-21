import { CategoryService } from "./../../services/categories";

export const ACT_FETCH_CATEGORIES = 'ACT_FETCH_CATEGORIES';
export const ACT_FETCH_ALL_CATEGORIES = 'ACT_FETCH_ALL_CATEGORIES';
export const ACT_FETCH_USER_CATEGORIES = 'ACT_FETCH_USER_CATEGORIES';

export const actFetchUserCategoriesAsync = ({
    user_id,
    page = 1,
    per_page = 5,
    order_by = 'name',
    order_dir = 'ASC',
}) => {
    return async (dispatch) => {
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
        }))
    }
}

const actFetchUserCategories = ({
    page,
    per_page,
    total_user_categories,
    categories,
}) => {
    return {
        type: ACT_FETCH_USER_CATEGORIES,
        payload: {
            page,
            per_page,
            total_user_categories,
            categories,
        }
    }
}

export const actFetchAllCategoriesAsync = ({
    order_by = 'name',
    order_dir = 'ASC',
} = {}) => {
    return async (dispatch) => {
        const response = await CategoryService.getAllCategories({
            order_by,
            order_dir,
        });

        dispatch(actFetchAllCategories(response.data.data));
    }
}

const actFetchAllCategories = (data) => {
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