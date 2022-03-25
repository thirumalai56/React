import React  from "react";
import Child from "./Child";
class App extends React.Component{
    state = {
       name : "angular"
    };
    constructor(){
        console.log("parent class constructor");
        super();
        //constructor will execute at booting time   Ex.  > yarn start
        //constructor will execute only once
        //in general, we will use constructor for initilization purpose
        //react library provides "state" , "props" ,.....
        //in order to use above state or props, we need to call super class constructor
        //this constructor is recomended to define state of component
        this.state = {
           name : "react"
        };
    };
    componentWillMount(){
        //componentWillMount life cycle hook will execute after constructor
        //it will execute only once
        //this life cycle recomended to change the state  
		//(scenarion : when ever component receives props)
        //this life cycle hook recomended to set global parameters 
		//(Ex. window width, window height,......)
        console.log("parent class componentWillMount");
        if(window.innerWidth<800){
          this.setState({
              innerWidth : window.innerWidth
          })
        };
    };

    render(){
        //render() function will execute after componentWillMount
        //when ever change detected in "state", automatically render() function will execute
        //this life cycle hook is the "mandatory life cycle hook"
        //never try to change the state in render() function
        console.log("parent render")
        return(
          <div>
              <p>{this.state.name}</p>
              <br></br><br></br>
              <p>{this.state.innerWidth}</p>
              <br></br>
              
              <Child name={this.state.name}></Child>
              <br></br>
              <button onClick={this.changeState}>Change </button>
              
          </div>
        )
    };


    changeState = ()=>{
        this.setState({
          name : "reactjs"
        })
    };



    componentDidMount(){
        //if component rendered successfully, then only this life cycle hook will execute
        //in general, we are using this life cycle hook to make asynchronous calls
        //order of execution also from child to parents
        //this life cycle hook used to "change the state"
        console.log("parent componentDidMount");       //Initial Execution   
                                                      /*
                                                            parent class constructor
                                                            parent class componentWillMount
                                                            parent render
                                                            parent componentDidMount
                                                      */

                                                      /*
                                                            with button click
                                                            ------------------
                                                            parent render
                                                      */

                                                      /*
                                                            if child component exist
                                                            ------------------------
                                                            parent class constructor
                                                            parent class componentWillMount
                                                            parent render

                                                            child component constuctor
                                                            child component componentWillMount
                                                            child component render

                                                            child componentDidMount
                                                            parent componentDidMount
                                                      */

                                                      /*
                                                                if state changes
                                                                ----------------
                                                                parent render
                                                                child component render
                                                      */
    };

    componentWillReceiveProps(){
        //if component receives any props, then this life cycle hook will execute
        console.log("parent componentWillReceiveProps");;
    };

    shouldComponentUpdate(){
        return true;
    }

    componentWillUpdate(){

    }
    componentDidUpdate(){

    };
    componentWillUnmount(){

    };


};
export default App;