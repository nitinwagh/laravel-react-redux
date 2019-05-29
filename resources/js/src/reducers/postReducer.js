import {LOAD_POSTS_ERROR, LOAD_POSTS_LOADING, LOAD_POSTS_SUCCESS} from "../actions/Post";

export const initialState = {
    posts: [],
    loading: false,
    error: ''
};

export function postReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_POSTS_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_POSTS_SUCCESS: {
            return {
                ...state,
                posts: action.posts,
                loading: false
            }
        }
        case LOAD_POSTS_ERROR: {
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
};
