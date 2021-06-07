import React, {Component} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.style.scss';

class SignIn extends Component{
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}
	handleSubmit = async (event) =>{
		event.preventDefault();//doesn't allow the submit function to firing 

		const {email, password} = this.state;

		try{
			await auth.signInWithEmailAndPassword(email, password);

			this.setState({email:'', password:''});
		}catch (err){
			console.log(err);
		}
	}

	handleChange = (event) =>{
		const {value, name} = event.target//takes value and name from the event

		this.setState({ [name]:value }) //then dynamically set the state
	}

	render(){
		return(
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email or password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput 
						name='email'
						type='email' 
						value={this.state.email} 
						handleChange={this.handleChange}
						required
						label='Email'/>
					<FormInput 
						name='password' 
						type='password' 
						value={this.state.password} 
						handleChange = {this.handleChange}
						required
						label='Password'/>
						
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton 
						type='button' 
						onClick={signInWithGoogle} 
						isGoogleSignIn>{' '}Sign In With google{' '}
						</CustomButton>
					</div>
				</form>
			</div>
			);
	}
}

export default SignIn