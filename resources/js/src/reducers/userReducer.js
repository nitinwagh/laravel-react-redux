import {REGISTER_USER_ERROR, REGISTER_USER, REGISTER_USER_SUCCESS} from "../actions/Auth";

export const initialState = {
    token_details: {},
    loading: false,
    error: ''
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                token_details: action.token_details,
                loading: false
            }
        }
        case REGISTER_USER_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
};
