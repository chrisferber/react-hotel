import { put, takeLatest } from 'redux-saga/effects';


function* messagesSaga() {
    yield takeLatest('SELECT_MESSAGE', selectMessage);
}

function* selectMessage(action) {
    try {
        yield put({ type: 'SET_MESSAGE', payload: action.payload });
    } catch (error) {
        console.log('error in guestsSaga, selectGuest error:', error);
    }
}

export default messagesSaga;