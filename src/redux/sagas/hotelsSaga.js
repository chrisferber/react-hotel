import { put, takeLatest } from 'redux-saga/effects';


function* hotelsSaga() {
    yield takeLatest('SELECT_HOTEL', selectHotel);
}

function* selectHotel(action) {
    try {
        yield put({ type: 'SET_HOTEL', payload: action.payload });
    } catch (error) {
        console.log('error in hotelsSaga, hotelGuest error:', error);
    }
}

export default hotelsSaga;