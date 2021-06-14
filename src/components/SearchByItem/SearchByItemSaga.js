import { takeLatest, call, put, all } from 'redux-saga/effects'
import {Api} from '../../utils/api';
import {CALLLIST, GETLIST} from '../../actions/actionTypes';
// const {LOG_OUT_USER, LOG_OUT, CALL_AUTH} = obj;

function* callLoginSaga({val}) {
    try {
        const { data } = yield call(Api, `/api/items/homesupplies/${val}`);
        yield put({type: GETLIST, payload: data})
    } catch (error) {
        console.log('error', error)
    }
}

export default function* loginSaga() {
    yield all([
        takeLatest(CALLLIST, callLoginSaga)
        // takeLatest(LOG_OUT, logOut),
        // takeLatest(CALL_SIGNUP, callSignUpSaga)
    ])
}
