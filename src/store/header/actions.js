export const ACT_SHOW_SEARCH = 'ACT_SHOW_SEARCH';
export const ACT_HIDE_SEARCH = 'ACT_HIDE_SEARCH';

export const actShowSearch = () => {
    return {
        type: ACT_SHOW_SEARCH,
    }
}

export const actHideSearch = () => {
    return {
        type: ACT_HIDE_SEARCH,
    }
}
