import { put, takeLatest } from 'redux-saga/effects';


function* guestsSaga() {
    yield takeLatest('SELECT_GUEST', selectGuest);
}

function* selectGuest(action) {
    try {
        yield put({ type: 'SET_GUEST', payload: action.payload });
    } catch (error) {
        console.log('error in guestsSaga, selectGuest error:', error);
    }
}

export default guestsSaga;