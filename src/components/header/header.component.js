import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg'//special syntax to import svg file
import {Link} from 'react-router-dom';

import './header.style.scss';

const Header = () =>(
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
		</div>
	</div>
)

export default Header;