/*
	functions that returns objects in the correct format

	action = {
		type:// is a string that talls us the action to to, like "SET_CURRENT_USER"
		payload:// we can use it to do anything
	}
*/

export const setCurrentUser = user =>({
	type: 'SET_CURRENT_USER',
	payload: user
})