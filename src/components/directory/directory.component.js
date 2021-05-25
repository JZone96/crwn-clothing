/*
	DIRECTORY MENU

	Directory menu will need state, because we need more than one directory, and they need to be generated
	dinamically.
	So we create a state with all the possible menu items, and we pass the sections as a props to the menu-item
	component

*/
import React, {Component} from 'react';
import './directory.style.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component{
	constructor(){
		super();
		this.state= {
			sections: [
				  {
				    title: 'hats',
				    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
				    id: 1,
				    linkUrl: 'shop/hats'
				  },
				  {
				    title: 'jackets',
				    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
				    id: 2,
				    linkUrl: 'shop/jackets'
				  },
				  {
				    title: 'sneakers',
				    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
				    id: 3,
				    linkUrl: 'shop/sneakers'
				  },
				  {
				    title: 'womens',
				    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
				    size: 'large',
				    id: 4,
				    linkUrl: 'shop/womens'
				  },
				  {
				    title: 'mens',
				    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
				    size: 'large',
				    id: 5,
				    linkUrl: 'shop/mens'
				  }
				]
		}
	}

	render(){
		{/*ES6 Spread operator, beccause we are using the same name for argument and props*/}
		return(
			<div className="directory-menu">{
				this.state.sections.map(({id, ... otherSectionprops})=>(
					<MenuItem key={id} {...otherSectionprops}/>
				
				))
			}</div>
			);
	}
}

export default Directory;