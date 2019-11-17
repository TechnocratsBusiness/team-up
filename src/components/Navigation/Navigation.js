import React from 'react';
import Home from './components/Home/Home.js';
import SignIn from './components/SignIn/SignIn.js'
import SignUp from './components/SignUp/SignUp.js'
import About from './components/About/About.js'
class Navigation extends React.Component {
	constructor(){
		super();
		this.state = {

		}
	}
	render(){
		return(
			<div>
			{/*<Home />
			<SignIn />
			<SignUp />
			<About />*/}
		{/*Use the state to select which component should be rendered */}
			</div>

			)
	}



}
export default Navigation;
