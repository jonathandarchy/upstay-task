import { combineReducers } from "redux";

import reservations from './reservations';
import exchange from './exchange';

export default combineReducers({
    reservations,
    exchange
})