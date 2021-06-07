import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, onClick, isGoogleSignIn, inverted,...otherProps}) =>{

		return(
			<button 
			onClick={onClick ? onClick : null} 
			className = {`${inverted? 'inverted': ''} ${isGoogleSignIn? 'google-sign-in': ''} custom-button`}>
				{children}
			</button>
			);
}
	


export default CustomButton