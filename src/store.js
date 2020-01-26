import { applyMiddleware, createStore, compose } from "redux"
import reducer from "./ducks"
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware( sagaMiddleware );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Creates the store with saga middleware and redux dev tools
 * @type {Store<S>}
 */
const store = createStore(
    reducer,
    composeEnhancers(middleware)
);

/**
 * Run saga
 */
sagaMiddleware.run(sagas);

export default store
