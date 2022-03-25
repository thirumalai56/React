import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './styles.css';
import { connect } from 'react-redux';
class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props);
     this.state = {
        // email: 'ram@gmail.com', //
        // password: 'ram',//ram
        email : this.props.results.user.email,
        password:this.props.results.user.password,
        error: false
      };
  
     
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        
        console.log("e");
        const { email, password } = this.state;
        const { history } = this.props;
        const {location} = this.props;
        console.log('Location is ',location);
        let { from } = location.state || { from: { pathname:'/'} };
        console.log('From Kya HAI',from);
        this.setState({ error: false });
        console.log(this.state);
		if(this.isEmptyOrNull(email) && this.isEmptyOrNull(password)){
			this.setState({ error: true });
      console.log('Error Scenario covering');
      
			return;
		}
        if (!(email === 'ram@gmail.com' && password === 'ram')) {
			
          return this.setState({ error: true });
        }
    
        console.log("you're logged in. yay!" , this.props.results.user);
        
        window.localStorage.setItem("user",this.props.results.user);
        
		    console.log('from is ',from);
        history.push(from);
      }
    isEmptyOrNull(fieldVal){
		if(fieldVal ===null || fieldVal === undefined || fieldVal === ""){
			return true;
		}
		return false;
	}
      handleChange=(event) =>{
          console.log(event);
          let nam = event.target.name;
          let val = event.target.value;
          this.setState({[nam]: val});
      //  this.setState({ [name]: value });
      }
    render(){
  return (
      <div className="login-form">
            <form  onSubmit={this.onSubmit}>
            <h2 className="text-center">Log in</h2>
            <div>
                       <label htmlFor="email"><b>Email</b></label>
                     
                        <input type="text" placeholder="Enter Email" name="email" 
                        onChange={this.handleChange} value={this.state.email}
                        ></input>
                     </div>
                
                
                          <div>  
                        <label htmlFor="psw"><b>Password</b></label>
                         
                        <input type="password" placeholder="Enter Password" name="password" 
                        onChange={this.handleChange} value={this.state.password}
                        ></input>
                        </div>        
                    
                        <div>
                        <button type="submit">Login</button>
                        </div>  
					<div>
					<h3 style={{color:'red'}}>
					{this.state.error?'Enter Valid Email & Password !':''}
					</h3>
					</div>						
         </form>
         </div>);
    }
}
const select = appState => {
  return {
    results: appState
  }
}

// here we call `connect` and pass it our select function
// which in turn returns a function.
const ourWrapperFunction = connect(select)

export default ourWrapperFunction(withRouter(LoginForm));