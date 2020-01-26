import { put, call } from 'redux-saga/effects';
import {
    actions as reservationsActions
} from '@ups/ducks/reservations';
import {getAllReservations} from '@ups/api/reservations';
import startListeningToReservations from '@ups/socket';

/**
 * Get reservations request saga
 */
export function* onGetAllReservations() {
    const {reservations, error} = yield call(getAllReservations);

    if (reservations) {
        // make reservations a keyed object
        let reservationsObj = reservations.reduce((obj, item) => {
            obj[item['uuid']] = item
            return obj
        }, {});

        yield put(reservationsActions.getAllReservationsSuccess(reservationsObj));
    }

    if (error) {
        yield put(reservationsActions.getAllReservationsError(error));
    }
}

export function* onListenToNewReservations() {
    yield call(startListeningToReservations);
}