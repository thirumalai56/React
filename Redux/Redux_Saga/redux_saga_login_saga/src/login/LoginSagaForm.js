import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './styles.css';
import { connect } from 'react-redux';
import loader from '../loader.gif';
import {performLogin} from '../actions/LoginActions';

class LoginSagaForm extends React.Component {
    constructor(props) {
      super(props);
      console.log('LoginSagaForm --> ',this.props);
     this.state = {
        email : 'eve.holt@reqres.in',
        password:'cityslicka',
        error: false,
        logInClicked:false,
        errorMsg:''
      };
      this.onSubmit = this.onSubmit.bind(this);
    }
     onSubmit(e){
      e.preventDefault();  
      this.setState({logInClicked : true});
      const { email, password } = this.state;
      if(this.handleValidations()){
        return;
      }
      //this.props.dispatch(login(email,password)); 
      this.props.login(email,password);
    //  this.props.dispatch({"type":"LOGIN"});

    }
    
    handleValidations(){
    
        const { email, password } = this.state;
         if(this.isEmptyOrNull(email) && this.isEmptyOrNull(password)){
          this.setState({ error: true });
          console.log('Error Scenario covering');
          this.setState({errorMsg:'Enter valid Credintials!'});
          return true;
          }
        
    }
    
      handleChange=(event) =>{
          console.log(event);
          let nam = event.target.name;
          let val = event.target.value;
          this.setState({[nam]: val});
      }
      isEmptyOrNull(fieldVal){
        if(fieldVal ===null || fieldVal === undefined || fieldVal === ""){
          return true;
        }
        return false;
      }
    render(){
        console.log('login Saga form ',this.props);
      const { loading } = this.props.results.user;
      const loginServerError   = this.props.results.user.error;

      return (  
     
            <div className="login-form">
                  <form  onSubmit={this.onSubmit}>
                  <h2 className="text-center">Log in</h2>
                  <div>
                            <label htmlFor="email"><b>SAGA Email</b></label>
                          
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
                              <button type="submit" >
                              {loading?<img src={loader} width={20} height={20}></img>:''}Login</button>
                              </div>  
                <div>
                 
                <h3 style={{color:'red'}}>
                {this.state.error?this.state.errorMsg:''}
                {loginServerError}
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
///};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      login: (email,password) => dispatch(performLogin(email,password, ownProps)),
    };
  };

//style={{backgroundColor:'#ced4da'}}
// here we call `connect` and pass it our select function
// which in turn returns a function.
const ourWrapperFunction = connect(select,mapDispatchToProps)

export default withRouter(ourWrapperFunction(LoginSagaForm));