/*
	 rapresents all the state of our application
	 the code that combines all of our states together
	 it's an overall reducer, based on all the reducers that pulls in
*/

import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({//giant obj with all the reducers
	user: userReducer, // sets the user, with the current return from the user.reducer.js file
	cart: cartReducer
})