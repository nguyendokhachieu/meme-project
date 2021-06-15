import { 
    ACT_SHOW_LOADING, 
    ACT_HIDE_LOADING,
} from "./actions";

const initState = {
    show: false,
}

export const loadingReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_SHOW_LOADING:
            return {
                ...state,
                show: true,
            }

        case ACT_HIDE_LOADING:
            return {
                ...state,
                show: false,
            }

        default:
            return state;
    }
}