/*
	MENU ITEM
	No need for state now, we only need props from directory 

	We take props from directory, and use them to display the menu section

	withRouter() is a higher order component, wich takes as argument a component, and returns that same component, but with 
  "Route" props

*/
import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.style.scss'

const MenuItem = ({title,imageUrl,size,linkUrl,history,match}) =>{
{/*match.url === localhost:3000 and linkUrl === linkUrl in directory component (http://localhost:3000/shop/hats)*/}
	return(
		<div className={`${size} menu-item`} onClick = {()=> history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);