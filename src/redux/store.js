/*
	add middleware that can intercepts action before the enter the reducers, display them and 
	pass them out to the reducers.
*/
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

// it will spread the value inside the middleware 
const store = createStore(rootReducer, applyMiddleware(...middlewares))/*spreads all the values in the middleware array into the function. if we need more middleware, we can just add it to the array*/

export default store