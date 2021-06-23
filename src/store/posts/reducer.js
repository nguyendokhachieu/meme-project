import { 
    ACT_FETCH_POSTS_PAGINATION, 
    ACT_FETCH_POSTS_BY_USER_ID_PAGINATION,
    ACT_DELETE_POST,
    ACT_EDIT_POST, 
    ACT_FETCH_DETAIL_POST,
    ACT_CLEAR_DETAIL_POST,
    ACT_FETCH_SAVED_POSTS,
    ACT_DELETE_SAVED_POSTS,
} from "./actions";

const initState = {
    page: 1,
    per_page: 2,
    total_posts: 0,
    posts: [],
    hasMore: true,

    user: {
        page: 1,
        per_page: 5,
        total_user_posts: 0,
        posts: [],
    },

    detailPost: {
        content: null,
        created_at: null,
        id: null,
        img_url: null,
        liked_count: 0,
        liked_count_1: 0,
        status: 1,
        total_comments: 0,
        total_comments_1: 0,
        user_id: null,
        user_img_url: null,
        user_name: null,
    },

    save: {
        page: 1,
        per_page: 5,
        hasMore: true,
        list: [],
    }
};

export const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_DELETE_SAVED_POSTS:
            const deletedSavedID = action.payload.post_id;

            return {
                ...state,
                save: {
                    list: state.save.list.filter(post => {
                        return post.id !== deletedSavedID && post;
                    })
                }
            }

        case ACT_FETCH_SAVED_POSTS:
            return {
                ...state,
                save: {
                    page: action.payload.page, 
                    per_page: action.payload.per_page,
                    hasMore: action.payload.list.length > 0 ? true : false,
                    list: action.payload.list,

                }
            }

        case ACT_CLEAR_DETAIL_POST:
            return {
                ...state,
                detailPost: {
                    content: null,
                    created_at: null,
                    id: null,
                    img_url: null,
                    liked_count: 0,
                    liked_count_1: 0,
                    status: 1,
                    total_comments: 0,
                    total_comments_1: 0,
                    user_id: null,
                    user_img_url: null,
                    user_name: null,
                }
            }

        case ACT_FETCH_DETAIL_POST:
            return {
                ...state,
                detailPost: {
                    content: action.payload.post.content,
                    created_at: action.payload.post.created_at,
                    id: action.payload.post.id,
                    img_url: action.payload.post.img_url,
                    liked_count: action.payload.post.liked_count,
                    liked_count_1: 0,
                    status: action.payload.post.status,
                    total_comments: action.payload.post.total_comments,
                    total_comments_1: 0,
                    user_id: action.payload.post.user_id,
                    user_img_url: action.payload.post.user_img_url,
                    user_name: action.payload.post.user_name,
                }
            }

        case ACT_EDIT_POST: 
            const editID = action.payload.id;
            const isDetailPostPage = action.payload.isDetailPostPage;

            return {
                ...state,
                posts: state.posts.map(post => {
                        if (Number(post.id) === Number(editID)) {
                            return {
                                ...post,
                                img_url: action.payload.newImgUrl 
                                            ? action.payload.newImgUrl 
                                            : action.payload.deleteCurrentImage 
                                                ? null 
                                                : post.img_url,
                                content: action.payload.newContent,
                            }
                        } 

                        return post;
                    }
                ),
                detailPost: isDetailPostPage && {
                    ...state.detailPost,
                    img_url: action.payload.newImgUrl 
                                ? action.payload.newImgUrl 
                                : action.payload.deleteCurrentImage 
                                    ? null 
                                    : state.detailPost.img_url,
                    content: action.payload.newContent,
                },
                user: {
                    posts: action.payload.isProfilePage && state.user.posts.map(post => {
                        if (Number(post.id) === Number(editID)) {
                            return {
                                ...post,
                                img_url: action.payload.newImgUrl 
                                            ? action.payload.newImgUrl 
                                            : action.payload.deleteCurrentImage 
                                                ? null 
                                                : post.img_url,
                                content: action.payload.newContent,
                            }
                        } 

                        return post;
                    }
                )
                }
            }

        case ACT_DELETE_POST:
            const deletedID = action.payload.id;

            const copied = action.payload.isProfilePage ? [...state.user.posts] : [...state.posts];
            const newList = copied.filter(post => {
                if (Number(post.id) !== Number(deletedID)) {
                    return post;
                } 
            })

            return {
                ...state,
                total_posts: state.total_posts - 1,
                posts: [
                    ...newList,
                ],
                user: {
                    total_user_posts: state.user.total_user_posts - 1,
                    posts: [
                        ...newList,
                    ]
                }
            }

        case ACT_FETCH_POSTS_PAGINATION:

            return {
                ...state,
                page: action.payload.page,
                per_page: action.payload.per_page,
                total_posts: action.payload.total_posts,
                hasMore: action.payload.hasMore,
                posts: action.payload.page === 1
                        ? action.payload.posts
                        : [    ...state.posts,
                            ...action.payload.posts,
                        ],
            }
           
        case ACT_FETCH_POSTS_BY_USER_ID_PAGINATION:

            return {
                ...state,
                user: {
                    page: action.payload.page,
                    per_page: action.payload.per_page,
                    total_user_posts: action.payload.total_user_posts,
                    posts: action.payload.page === 1
                            ? action.payload.posts
                            : [
                                ...state.user.posts,
                                ...action.payload.posts,
                            ]
                }
            }
        default:
            return state;
    }
};