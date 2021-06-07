import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from'../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.style.scss'

const CartIcon = ({toggleCartHidden}) =>(
	<div className='cart-icon'onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon'/>
		<span className='item-count'>0</span>
	</div>
	)

//dispatch is a function inside redux store, passed with provider in index.js
//it is the second argument of connect
//in this function we call store.dispatch to trigger a state change.
// in this case we are dispatching to the store, the action 'toggleCartHidden' in cart.action.js
// the action (with type and payload(optional)), is passed to the root.reducer.
//the root.reducer passes this action to the cart.reducer wich will return {...state, hidden:!state.hidden}
// the returning result from the cart.reducer, is used by the root.reducer to change the store
// 
const mapDispatchToProps = dispatch=>({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);
