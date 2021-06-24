import { ACT_LOGIN } from "./actions";

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
                
        default:
            return state;
    }
}