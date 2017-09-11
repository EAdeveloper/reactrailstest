import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton' 
import { Base,styles }	from './Base.jsx';


export class Login extends Base{

	render(){
		return(
			<MuiThemeProvider> 
				<Formsy.Form onValid={()=> this.enableSubmitBtn()}
											onInvalid={()=> this.disableSubmitBtn()} > 
					<p>{this.state.email}</p>
					<p>{this.state.password}</p>
					<div> 
						<FormsyText
							// onChange={(e)=> this.syncEmail(e) }
							onChange={(e)=> this.syncField(e, "email") }
							name="email"
							required
							floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
							underlineFocusStyle={styles.underlineStyle}
							validations="isEmail"
							floatingLabelText="Username"
							validationError="Insert a valid E-Mail" />
					</div>
					<div> 
						<FormsyText
							// onChange={(e)=> this.syncPassword(e) }
							onChange={(e)=> this.syncField(e, "password") }
							name="password"
							required
							floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
							underlineFocusStyle={styles.underlineStyle}
							type="password"
							floatingLabelText="Password" />
					</div>
					<div> 
						<RaisedButton
							style={styles.buttonTop}
							disabled={!this.state.canSubmit}
							backgroundColor={styles.red}
							labelColor='#ffffff'
							type="submit"
							label="Login" />
						<a href='#' onClick={this.props.toggle } style={styles.leftSpace} > I have an account </a>
					</div>
				</Formsy.Form>
			</MuiThemeProvider>
		);
		
	}
}


