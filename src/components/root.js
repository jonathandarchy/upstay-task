import React from 'react';
import App from './App';
import {Provider} from 'react-redux'
import store from "@ups/store"

const Root = () => {
	return <Provider store={store}>
		<App />
	</Provider>;
};

export default Root;
