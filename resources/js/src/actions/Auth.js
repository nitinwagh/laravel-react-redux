export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export const saveUser = (user) => ({
   type: REGISTER_USER,
   user
});

export const loginUser = (data) => ({
   type: LOGIN_USER,
   data
});

export function setToken(token_details){
   localStorage.setItem('token', token_details.access_token);
   localStorage.setItem('expires_in', token_details.expires_in);
   localStorage.setItem('token_type', token_details.token_type);
   return true;
}