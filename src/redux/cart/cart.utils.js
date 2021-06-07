/*utility function allow us to keep our files clean 
and organize function that we may need in multiple files in one location*/

export const addItemToCart = (cartItems, cartItemToAdd) =>{
	//checks if the cartItemToAdd exsists into our cart
	const existingCartItem = cartItems.find(cartItem=> cartItem.id === cartItemToAdd.id);

	if (existingCartItem){
		//map returns a new array. we need to return new version of array to make react rerender the component
		return cartItems.map(cartItem=> 
			cartItem.id === cartItemToAdd.id 
			? {...cartItem, quantity: cartItem.quantity+1}
			: cartItem
			)
	}

	//
	return[...cartItems, {...cartItemToAdd, quantity: 1}]
}