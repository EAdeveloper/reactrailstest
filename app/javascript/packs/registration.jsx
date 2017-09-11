import React from 'react';
import ReactDOM from 'react-dom';
import WebpackerReact from 'webpacker-react';
import {Login} from 'components/registration/login';
import {Signup} from 'components/registration/signup';




class Registration extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			showLogin: true
		}

		//Reassign this.toggle to make sure is always use theses properties from this component
		this.toggle = this.toggle.bind(this);
	}

	toggle(e){
		e.preventDefault();
		this.setState({
			showLogin: !this.state.showLogin
		})
	}

	render(){
		return( 
			<div> 
				{ (!this.state.showLogin) ? 
					<Login toggle={this.toggle}/> : 
					<Signup toggle={this.toggle}/>  
				}		
			</div>
		);
	}
}
// Another way to swicht the login and signup using el operador ternario
	// { this.state.showLogin ? <Login /> :null }
	// { (!this.state.showLogin) ? <SignUp/> :null }


// document.addEventListener("DOMContentLoaded", ()=>{
// 	ReactDOM.render(<Registration/>, document.getElementById('react-container'));

// })
WebpackerReact.setup({Registration})