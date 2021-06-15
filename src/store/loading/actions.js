export const ACT_SHOW_LOADING = 'ACT_SHOW_LOADING';
export const ACT_HIDE_LOADING = 'ACT_HIDE_LOADING';

export const actShowLoading = () => {
    return {
        type: ACT_SHOW_LOADING,
    }
}

export const actHideLoading = () => {
    return {
        type: ACT_HIDE_LOADING,
    }
}