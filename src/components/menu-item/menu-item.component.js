/*
	MENU ITEM
	No need for state now, we only need props from directory 

	We take props from directory, and use them to display the menu section


*/
import React from 'react';
import './menu-item.style.scss'

const MenuItem = ({title,imageUrl,size}) =>{
	return(
		<div className={`${size} menu-item`}>
			<div className='background-image' style = {{
			backgroundImage:`url(${imageUrl})`
		}}
		/>{/*the image will change dinamically, as well as the className, that can be "large menu-item*/}
				<div className="content">
					<h1 className="title">{title.toUpperCase()}</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
		</div>
		);
}

export default MenuItem;