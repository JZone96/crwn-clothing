import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, loginMethod, isGoogleSignIn, ...otherProps}) =>{

		return(
			<button onClick={loginMethod ? loginMethod : null} 
					className = {`${isGoogleSignIn? 'google-sign-in': ''} custom-button`}>
				{children}
			</button>
			);
}
	


export default CustomButton