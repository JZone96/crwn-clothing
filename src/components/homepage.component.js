/*
	We need to build a clothing website.
	in this file, we will create the homepage, with a header and a menu.
	-homepage:
	-menu: 5 blocks that will allow the user to shop hats, jackets, sneakers, womens clothes and mens clothes

	Using a functional component, because we don't need to store any state in here for now


*/
import React from 'react';
import './homepage.style.scss'

const HomePage = () =>{
	return(
		<div className= "homepage">
			<div className="directory-menu">
				<div className="menu-item">
					<div className="content">
						<h1 className="title">HATS</h1>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>

				<div className="menu-item">
					<div className="content">
						<h1 className="title">JACKETS</h1>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>	

				<div className="menu-item">
					<div className="content">
						<h1 className="title">SNEAKERS</h1>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>	

				<div className="menu-item">
					<div className="content">
						<h1 className="title">WOMANS</h1>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>	

				<div className="menu-item">
					<div className="content">
						<h1 className="title">MANS</h1>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>		
			</div>
		</div>
		)
	
}

export default HomePage;