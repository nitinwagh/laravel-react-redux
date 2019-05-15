import { put, takeEvery, takeLatest, } from 'redux-saga/effects'
import { 
    REGISTER_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
} from "../actions/Auth";

export const saveUser = async (user) => {
    try {
        const response = await axios.post(`${apiUrl}/register`, user);
        return response;
    } catch (err) {
        return err;
    }
}

export function* registerUser(payload) {
    try {
        const response = yield saveUser(payload.user);
        if (response.data.status) {
            yield put({type: REGISTER_USER_SUCCESS, token_details: response.data.token_details});
        }
        yield put({type: REGISTER_USER_ERROR, error: response.data.message});
    } catch (e) {
        yield put({type: REGISTER_USER_ERROR, error: e.message});
    }
}

export const getToken = async (data) => {
    try {
        const response = await axios.post(`${apiUrl}/login`, data);
        return response;
    } catch (err) {
        return err;
    }
}

export function* loginUser(payload) {
    try {
        const response = yield getToken(payload.data);
        if (response.data.status) {
            yield put({type: LOGIN_USER_SUCCESS, token_details: response.data.token_details});
        }
        yield put({type: LOGIN_USER_ERROR, error: response.data.message});
    } catch (e) {
        yield put({type: LOGIN_USER_ERROR, error: e.message});
    }
}

export function* watchSavetUserSaga() {
    yield takeLatest(REGISTER_USER, registerUser);
    yield takeLatest(LOGIN_USER, loginUser);
}

export default watchSavetUserSaga;
