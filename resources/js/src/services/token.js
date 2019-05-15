export function setToken(token_details){
    localStorage.setItem('token', token_details.access_token);
    localStorage.setItem('expires_in', token_details.expires_in);
    localStorage.setItem('token_type', token_details.token_type);
    return true;
}