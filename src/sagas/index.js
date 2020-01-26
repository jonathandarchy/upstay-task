import { takeLatest, all } from 'redux-saga/effects';
import { types as reservationsTypes } from '../ducks/reservations'
import { types as exchangeTypes } from '../ducks/exchange'
import * as reservationsSagas from './reservations'
import * as exchangeSagas from './exchange'

export default function* rootSaga () {
    yield all([
        // Reservations Sagas
        takeLatest(reservationsTypes.GET_ALL_RESERVATIONS_REQUEST, reservationsSagas.onGetAllReservations),
        takeLatest(reservationsTypes.LISTEN_TO_NEW_RESERVATIONS, reservationsSagas.onListenToNewReservations),
        // Exchange Sagas
        takeLatest(exchangeTypes.GET_EXCHANGE_RATES_REQUEST, exchangeSagas.onGetExchangeRates)
    ])
}