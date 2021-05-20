import { ACT_LOGIN_SUCCESSFULLY } from "./actions";

const initState = {
    token: null,
    id: null,
    name: null,
    username: null,
    created_at: null,
    birthday: null,
    sex: null,
    status: null,
    img_url: null,
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_LOGIN_SUCCESSFULLY:
            localStorage.setItem('tstring', action.payload.userData.token);
            
            return {
                ...state,
                token: action.payload.userData.token,
                id: action.payload.userData.id,
                name: action.payload.userData.name,
                username: action.payload.userData.username,
                created_at: action.payload.userData.created_at,
                birthday: action.payload.userData.birthday,
                sex: action.payload.userData.sex,
                status: action.payload.userData.status,
                img_url: action.payload.userData.img_url,
            }
                
        default:
            return state;
    }
}