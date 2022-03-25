import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './styles.css';
import { connect } from 'react-redux';
import login from '../thunks/LoginThunk';
import loader from '../loader.gif';
import { resolve } from 'url';
class LoginThunkForm extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props);
     this.state = {
        email : '',
        password:'',
        error: false,
        logInClicked:false,
        errorMsg:''
      };
      this.onSubmit = this.onSubmit.bind(this);
    }
   async  onSubmit(e){
    // this.setState({logInClicked : true});
        await e.preventDefault();
        let result = "";
        try{
          result = await this.handleValidations();
        }catch(e){
          return false;
        }
        await  this.setState({logInClicked : true}) ;
        await  this.props.dispatch(login(result.email,result.password)); 
        await  this.reset();
        await  this.handleRedirectAfterLogin(); 
        
       console.log('props in The On Submit',this.props);     
    }
    reset(){
      this.setState({logInClicked : false});
      this.setState({ error: false });
    }
    handleValidations(){
     return new Promise((resolve,reject)=>{
      const { email, password } = this.state;
         if(this.isEmptyOrNull(email) && this.isEmptyOrNull(password)){
          this.setState({ error: true });
          console.log('Error Scenario covering');
          this.setState({errorMsg:'Enter valid Credintials !'});
          this.setState({logInClicked : false});
          reject( new Error( 'Failed in Validations'));
        }
        resolve( {email,password});
      });
    }
    handleRedirectAfterLogin(){
      console.log('Render method',this.props);
      const { history } = this.props;
      const {location} = this.props;
      console.log('Location is ',location);
      let { from } = location.state || { from: { pathname:'/'} };
      console.log('From Kya HAI',from); 
      console.log("you're logged in. yay!" , this.props.results.user);
      const {error,loaded} = this.props.results.user;
      if(!this.isEmptyOrNull(error)){
         console.log('error in External Service',error);
          this.setState({errorMsg:'Please try after Some Time!'});
           return ;
      } 
      console.log('from is ',from);
      const {user:{token:tokenVal}} = this.props.results.user; 
      console.log('token Value is -->',tokenVal);
     if(loaded && (!this.isEmptyOrNull(tokenVal))){
        console.log('Called here')
        window.localStorage.setItem("user",tokenVal);
        history.push(from);
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
      
      return (  
     
            <div className="login-form">
                  <form  onSubmit={this.onSubmit}>
                  <h2 className="text-center">Log in</h2>
                  <div>
                            <label htmlFor="email"><b>Thunk Email</b></label>
                          
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
                              {this.state.logInClicked?<img src={loader} width={20} height={20}></img>:''}Login</button>
                              </div>  
                <div>
                 
                <h3 style={{color:'red'}}>
                {this.state.error?this.state.errorMsg:''}
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
//style={{backgroundColor:'#ced4da'}}
// here we call `connect` and pass it our select function
// which in turn returns a function.
const ourWrapperFunction = connect(select)

export default ourWrapperFunction(withRouter(LoginThunkForm));