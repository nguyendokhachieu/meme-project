import { ACT_LOGIN, 
         ACT_FETCH_FOLLOWING_USERS, 
         ACT_FETCH_FOLLOWERS,
         ACT_FETCH_USER_SUGGESTIONS } from "./actions";

import { ACT_HIDE_PEOPLE_MODAL } from "../modals/actions";

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

    following: {
        list: [],
        page: 1,
        per_page: 5,
        hasMore: true,
    },

    follower: {
        list: [],
        page: 1,
        per_page: 5,
        hasMore: true,
    },

    suggestions: {
        list: [],
        page: 1,
        per_page: 5,
        hasMore: true,
    }
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_FETCH_USER_SUGGESTIONS:
            return {
                ...state,
                suggestions: {
                    ...state.suggestions,
                    page: action.payload.page,
                    per_page: action.payload.per_page,
                    hasMore: action.payload.list.length === 0 ? false : true,
                    list: action.payload.page === 1
                            ? action.payload.list
                            : [
                                ...state.suggestions.list,
                                ...action.payload.list
                            ]
                }
            }

        case ACT_HIDE_PEOPLE_MODAL: 
            return {
                ...state,
                following: {
                    list: [],
                    page: 1,
                    per_page: 5,
                    hasMore: true,
                },
            
                follower: {
                    list: [],
                    page: 1,
                    per_page: 5,
                    hasMore: true,
                }
            }
            
        case ACT_FETCH_FOLLOWERS:
            return {
                ...state,
                follower: {
                    ...state.follower,
                    page: action.payload.page,
                    per_page: action.payload.per_page,
                    hasMore: action.payload.list.length === 0 ? false : true,
                    list: action.payload.page === 1
                            ? action.payload.list
                            : [
                                ...state.follower.list,
                                ...action.payload.list,
                            ]
                }
            }

        case ACT_FETCH_FOLLOWING_USERS:
            return {
                ...state,
                following: {
                    ...state.following,
                    page: action.payload.page,
                    per_page: action.payload.per_page,
                    hasMore: action.payload.list.length === 0 ? false : true,
                    list: action.payload.page === 1
                            ? action.payload.list
                            : [
                                ...state.following.list,
                                ...action.payload.list,
                            ]
                }
            }

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