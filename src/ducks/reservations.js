/**
 * Using duck pattern
 * https://github.com/erikras/ducks-modular-redux
 */

/**
 * Types
 * @type {{GET_ALL_RESERVATIONS_REQUEST: string, PUSH_RESERVATION: string, LISTEN_TO_NEW_RESERVATIONS: string, GET_ALL_RESERVATIONS_SUCCESS: string, GET_ALL_RESERVATIONS_ERROR: string, SET_LISTENER_STATUS: string}}
 */
export const types = {
    GET_ALL_RESERVATIONS_REQUEST: 'RESERVATIONS/GET_ALL_RESERVATIONS_REQUEST',
    GET_ALL_RESERVATIONS_SUCCESS: 'RESERVATIONS/GET_ALL_RESERVATIONS_SUCCESS',
    GET_ALL_RESERVATIONS_ERROR: 'RESERVATIONS/GET_ALL_RESERVATIONS_ERROR',
    PUSH_RESERVATION: 'RESERVATIONS/PUSH_RESERVATION',
    SET_LISTENER_STATUS: 'RESERVATIONS/SET_LISTENER_STATUS',
    LISTEN_TO_NEW_RESERVATIONS: 'RESERVATIONS/LISTEN_TO_NEW_RESERVATIONS'
};

/**
 * Initial state
 * @type {{isListening: boolean, listenerError: null, isFetching: boolean, error: null, items: null}}
 */
export const initialState = {
    items: null,
    isFetching: false,
    isListening: false,
    error: null,
    listenerError: null
};

/**
 * Reducer
 * @param state
 * @param action
 * @returns {({isListening: boolean, listenerError: null, isFetching: boolean, error: null, items: null}&{items: null})|({isListening: boolean, listenerError: null, isFetching: boolean, error: null, items: null}&{isFetching: boolean})|({isListening: boolean, listenerError: null, isFetching: boolean, error: null, items: null}&{isFetching: boolean, error: *})|({isListening: boolean, listenerError: null, isFetching: boolean, error: null, items: null}&{isListening: *})|{isListening: boolean, listenerError: null, isFetching: boolean, error: null, items: null}|({isListening: boolean, listenerError: null, isFetching: boolean, error: null, items: null}&{isFetching: boolean, items: *})}
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "RESERVATIONS/GET_ALL_RESERVATIONS_REQUEST" : {
            return {
                ...state,
                isFetching: true
            }
        }
        case "RESERVATIONS/GET_ALL_RESERVATIONS_SUCCESS" : {
            return {
                ...state,
                isFetching: false,
                items: action.payload,
            }
        }
        case "RESERVATIONS/GET_ALL_RESERVATIONS_ERROR" : {
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        }
        case "RESERVATIONS/PUSH_RESERVATION" : {
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.uuid]: action.payload
                }
            }
        }
        case "RESERVATIONS/SET_LISTENER_STATUS" : {
            return {
                ...state,
                isListening: action.payload.status,
                ...(action.payload.err && {listenerError: action.payload.err})
            }
        }
        default : {
            return { ...state }
        }
    }
};

/**
 * Actions
 * @type {{pushReservation: (function(*): {payload: *, type: string}), listenToNewReservations: (function(*): {payload: *, type: string}), setListenerStatus: (function(*): {payload: *, type: string}), getAllReservationsRequest: (function(*): {payload: *, type: string}), getAllReservationsSuccess: (function(*): {payload: *, type: string}), getAllReservationsError: (function(*): {payload: *, type: string})}}
 */
export const actions = {
    getAllReservationsRequest: (payload) => ({ type: types.GET_ALL_RESERVATIONS_REQUEST, payload}),
    getAllReservationsSuccess: (payload) => ({ type: types.GET_ALL_RESERVATIONS_SUCCESS, payload}),
    getAllReservationsError: (payload) => ({ type: types.GET_ALL_RESERVATIONS_ERROR, payload}),
    pushReservation: (payload) => ({ type: types.PUSH_RESERVATION, payload}),
    setListenerStatus: (payload) => ({ type: types.SET_LISTENER_STATUS, payload}),
    listenToNewReservations: (payload) => ({ type: types.LISTEN_TO_NEW_RESERVATIONS, payload})
};

export default reducer