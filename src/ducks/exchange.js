/**
 * Using duck pattern
 * https://github.com/erikras/ducks-modular-redux
 */

import config from '@ups/config'

/**
 * Types
 * @type {{GET_EXCHANGE_RATES_REQUEST: string, CHANGE_CURRENCY: string, GET_EXCHANGE_RATES_SUCCESS: string, GET_EXCHANGE_RATES_ERROR: string}}
 */
export const types = {
    GET_EXCHANGE_RATES_REQUEST: 'EXCHANGE/GET_EXCHANGE_RATES_REQUEST',
    GET_EXCHANGE_RATES_SUCCESS: 'EXCHANGE/GET_EXCHANGE_RATES_SUCCESS',
    GET_EXCHANGE_RATES_ERROR: 'EXCHANGE/GET_EXCHANGE_RATES_ERROR',
    CHANGE_CURRENCY: 'EXCHANGE/CHANGE_CURRENCY',
};

/**
 * Initial state
 * @type {{selectedCurrency: string, rates: null, isFetching: boolean, error: null}}
 */
export const initialState = {
    rates: null,
    selectedCurrency: config.defaultCurrency,
    isFetching: false,
    error: null,
};

/**
 * Reducer
 * @param state
 * @param action
 * @returns {({selectedCurrency: string, rates: null, isFetching: boolean, error: null}&{rates: *, isFetching: boolean})|({selectedCurrency: string, rates: null, isFetching: boolean, error: null}&{selectedCurrency: *})|({selectedCurrency: string, rates: null, isFetching: boolean, error: null}&{isFetching: boolean})|({selectedCurrency: string, rates: null, isFetching: boolean, error: null}&{isFetching: boolean, error: *})|{selectedCurrency: string, rates: null, isFetching: boolean, error: null}}
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "EXCHANGE/GET_EXCHANGE_RATES_REQUEST" : {
            return {
                ...state,
                isFetching: true
            }
        }
        case "EXCHANGE/GET_EXCHANGE_RATES_SUCCESS" : {
            return {
                ...state,
                isFetching: false,
                rates: action.payload
            }
        }
        case "EXCHANGE/GET_EXCHANGE_RATES_ERROR" : {
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        }
        case "EXCHANGE/CHANGE_CURRENCY" : {
            return {
                ...state,
                selectedCurrency: action.payload
            }
        }
        
        default : {
            return { ...state }
        }
    }
};

/**
 * Actions
 * @type {{changeCurrency: (function(*): {payload: *, type: string}), getExchangeRatesRequest: (function(*): {payload: *, type: string}), getExchangeRatesError: (function(*): {payload: *, type: string}), getExchangeRatesSuccess: (function(*): {payload: *, type: string})}}
 */
export const actions = {
    getExchangeRatesRequest: (payload) => ({ type: types.GET_EXCHANGE_RATES_REQUEST, payload}),
    getExchangeRatesSuccess: (payload) => ({ type: types.GET_EXCHANGE_RATES_SUCCESS, payload}),
    getExchangeRatesError: (payload) => ({ type: types.GET_EXCHANGE_RATES_ERROR, payload}),
    changeCurrency: (payload) => ({ type: types.CHANGE_CURRENCY, payload}),
};


export default reducer