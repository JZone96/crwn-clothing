/*
	a reducer is a function that gets 2 proprieties:

	the last state (object) and an action (object) 

	state = {
		//like this.state in react
	}

	action = {
		type:// is a string that tells us the specific action, like "SET_CURRENT_USER"
		payload:// we can use it to do anything, contains the value to update the state
	}
*/
const INITIAL_STATE = {
	//we are declaring this, because when the app first initialize, it doesn't have any state.
	currentUser: null,
}
const userReducer = (state = INITIAL_STATE, action)=>{
	//default parameter (state = INITIAL_STATE) means if state is undefined (not null! it would be still valid), set it to INITIAL_STATE
	switch (action.type){
		case 'SET_CURRENT_USER':
			return {
				...state,
				currentUser: action.payload
			}

		default://a reducer takes ALL of the action, even the once not related to the user. if this appens, return the state as is
			return state;
	}
}

export default userReducer;