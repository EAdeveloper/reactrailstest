import React from 'react';
import {blueA400} from 'material-ui/styles/colors';
import {redA400} from 'material-ui/styles/colors';


export class Base extends React.Component{ 
	constructor(props){
		super(props);
		// console.log(props);

		this.state ={
			canSubmit: true,
			email: '',
			password: '',
			passwordConfirmation: '',
			error: ''
		};

	}

	enableSubmitBtn(){
		this.setState({
			canSubmit: true
		});
	}
	disableSubmitBtn(){
		this.setState({
			canSubmit: false
		});
	}

	// syncEmail(ev){
	// 	// gets the imput
	// 	let element = ev.target;
	// 	// gets its value
	// 	let value = element.value;

	// 	//sync the object with setState
	// 	this.setState({
	// 	email: value
	// 	})
	// }
	// syncPassword(ev){
	// 	let element = ev.target;
	// 	let value = element.value;

	// 	this.setState({
	// 	password: value
	// 	})
	// }

	//symplify both method above to just one, to be able to sync any field
	syncField(ev, fieldName){
		let element = ev.target;
		let value= element.value;

		let jsonState = {};
		jsonState[fieldName] = value;
		this.setState(jsonState)
	}

}


export const styles = {
	buttonTop:{
		marginTop: '1em'
	},
	underlineStyle:{
		borderColor: blueA400,
	},
	floatingLabelFocusStyle:{
		color: blueA400,
	},
	letSpace:{
		marginLeft: '1em'
	},
	red: redA400
}