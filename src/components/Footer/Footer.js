import React from 'react';
import './Footer.css'
class Footer extends React.Component {
	constructor(){
		super();

	}
	render(){
		return(
<div>
	<footer>
		<div className= "container">
			<div>
				<ul>
				<li>All rights reserved &copy; Technocrats</li>
				</ul>
			</div>	
			<div>
			<ul>
				<li><a href="#">FaceBook</a></li>
				<li><a href="#">Twitter</a></li>
				<li><a href="#">YouTube</a></li>
				<li><a href="#">FaceBook</a></li>
			</ul>
			</div>
		</div>
	</footer>
</div>

			)
	}
}
export default Footer;