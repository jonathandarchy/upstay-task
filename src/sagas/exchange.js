import { put, call } from 'redux-saga/effects';
import {
    actions as exchangesActions,
} from '../ducks/exchange'
import { getExchangeRates } from '@ups/api/exchange';


/**
 * Get root exchanges
 */
export function* onGetExchangeRates() {
    const {response, error} = yield call(getExchangeRates);

    if (response) {
        yield put(exchangesActions.getExchangeRatesSuccess(response.rates));
    }

    if (error) {
        yield put(exchangesActions.getExchangeRatesError(error));
    }
}
