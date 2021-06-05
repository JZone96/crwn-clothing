import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg'
/*ReactComponent is special and tells Create React App that you want a React component 
that renders an SVG, rather than its filename*/

import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import {connect} from 'react-redux'; //higher order component that let's us have access to things related to redux
//higher order component takes a component and returns the same component 'supered up'

import './header.style.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) =>(
	<div className='header'>
		<Link className='logo-container'to = '/'>
			<Logo className='logo'/>
		</Link>
		<div className='options'>
			<Link className='option'to='/shop'>
			SHOP
			</Link>
			<Link className='option'to='/contact'>
			CONTACT
			</Link>
			{
				currentUser?
				<div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
				:
				<Link className='option' to='/signin'>SIGN IN</Link>
			}
			<CartIcon />
			{
				hidden?
				null:
				<CartDropdown/>
			}
		</div>

	</div>
)

//a function that allows us to access the root reducer, that contains all the state of our application
const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) =>({//state will be the root reducer => will give use user reduce=> will gives us the INITIAL_STATE or the value passed as payload
	//currentUser: state.user.currentUser
	currentUser,
	hidden
})

export default connect(mapStateToProps)(Header);