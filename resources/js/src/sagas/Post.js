import { put, takeEvery, takeLatest, } from 'redux-saga/effects'
import {LOAD_POSTS_ERROR, LOAD_POSTS_LOADING, LOAD_POSTS_SUCCESS} from "../actions/Post";

export const getPost = async () => {
    try {
        const response = await axios.get(`${apiUrl}/users`);
        return response;
    } catch (err) {
        return err;
    }
}

export function* fetchPost() {
    try {
        const response = yield getPost();
        if (response.data.status) {
            yield put({type: LOAD_POSTS_SUCCESS, posts: response.data.users});
        }
        yield put({type: LOAD_POSTS_ERROR, error: response.data.message});
    } catch (e) {
        yield put({type: LOAD_POSTS_ERROR, error: e.message});
    }
}

export function* watchFetchPostSaga() {
    yield takeEvery(LOAD_POSTS_LOADING, fetchPost);
}

export default watchFetchPostSaga;
