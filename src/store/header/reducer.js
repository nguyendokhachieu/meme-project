import { 
    ACT_SHOW_SEARCH, 
    ACT_HIDE_SEARCH, 
} from "./actions";

const initState = {
    showSearch: false,
}

export const headerReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_SHOW_SEARCH:
            return {
                ...state,
                showSearch: true,
            }
        
        case ACT_HIDE_SEARCH:
            return {
                ...state,
                showSearch: false,
            }
        
        default:
            return state;
    }
}