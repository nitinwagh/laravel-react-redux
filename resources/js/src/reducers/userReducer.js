import {
    REGISTER_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS
} from "../actions/Auth";

export const initialState = {
    token_details: {},
    loading: false,
    error: '',
    isAuthenticated: localStorage.getItem('access_token')
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
        case LOGIN_USER: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case REGISTER_USER_SUCCESS: {
            const token_details = action.token_details;
            localStorage.setItem('access_token', token_details.access_token);
            localStorage.setItem('token_type', token_details.token_type);
            localStorage.setItem('expires_in', token_details.expires_in);
            return {
                ...state,
                token_details,
                loading: false,
                isAuthenticated: true
            }
        }
        case LOGIN_USER_SUCCESS: {
            const token_details = action.token_details;
            localStorage.setItem('access_token', token_details.access_token);
            localStorage.setItem('token_type', token_details.token_type);
            localStorage.setItem('expires_in', token_details.expires_in);
            return {
                ...state,
                token_details,
                loading: false,
                isAuthenticated: true
            }
        }
        case LOGIN_USER_ERROR: {
            localStorage.clear();
            return {
                ...state,
                loading: false,
                error: action.error,
                isAuthenticated: false
            };
        }
        case REGISTER_USER_ERROR: {
            localStorage.clear();
            return {
                ...state,
                loading: false,
                error: action.error,
                isAuthenticated: false
            };
        }
        default: {
            return state;
        }
    }
};
