/*
	this file will display the entire homepage

*/
import React from 'react';
import './homepage.style.scss'

import Directory from '../../components/directory/directory.component.js';
import MenuItem from '../../components/menu-item/menu-item.component.js';

const HomePage = () =>{
	return(
		<div className= "homepage">
			<Directory />
		</div>
		)
	
}

export default HomePage;