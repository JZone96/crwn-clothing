/*
	 We need to render a previewpage like this:

	 title

	 <div></> <div></>

	 we take title and items from shop component

*/

import React from 'react';

import CollectionItem from '../collection-item/collection-item.component.js';

import './collection-preview.style.scss'

const CollectionPreview = ({title,items}) =>{
	return(
		<div className='collection-preview'>
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
			{
				/*these anonymus function calls, creates performance issues, because it gets calld every time the page rerenders*/
				items.filter((item,idx)=>idx<4)
				.map(({id, ...otherItemProps})=>{
					return(
						<CollectionItem key = {id} {...otherItemProps}/>
						);
				})
			}
			</div>
		</div>
		);
	
}

export default CollectionPreview;