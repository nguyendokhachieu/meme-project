import { ACT_LOGIN, ACT_AUTHORIZATION } from "./actions";

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
    last_change_password: null,
    last_login: null,
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_LOGIN:
            localStorage.setItem('tstring', action.payload.userData.token);
            
            return {
                ...state,
                token:                  action.payload.userData.token,
                id:                     action.payload.userData.id,
                name:                   action.payload.userData.name,
                username:               action.payload.userData.username,
                created_at:             action.payload.userData.created_at,
                birthday:               action.payload.userData.birthday,
                sex:                    action.payload.userData.sex,
                status:                 action.payload.userData.status,
                img_url:                action.payload.userData.img_url,
                email:                  action.payload.userData.email,
                description:            action.payload.userData.description,
                last_change_password:   action.payload.userData.last_change_password,
                last_login:             action.payload.userData.last_login,
            }
                
        case ACT_AUTHORIZATION: 
            return {
                ...state,
                token:                  action.payload.userData.token,
                id:                     action.payload.userData.user.id,
                name:                   action.payload.userData.user.name,
                username:               action.payload.userData.user.username,
                created_at:             action.payload.userData.user.created_at,
                birthday:               action.payload.userData.user.birthday,
                sex:                    action.payload.userData.user.sex,
                status:                 action.payload.userData.user.status,
                img_url:                action.payload.userData.user.img_url,
                email:                  action.payload.userData.user.email,
                description:            action.payload.userData.user.description,
                last_change_password:   action.payload.userData.user.last_change_password,
                last_login:             action.payload.userData.user.last_login,
            }
        default:
            return state;
    }
}