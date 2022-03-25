import React from 'react';
import { connect } from 'react-redux';
import {increment,decrement } from './ActionCreators/Actions';
import { bindActionCreators } from 'redux'

class CounterActionCreators extends React.Component {
  //1 // approach 1: define action object in the component

  /*  
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }
 */
constructor(props){
    super(props);
    //Approach 5 
    this.incrementBoundAction = bindActionCreators(increment,this.props.dispatch);   
    this.decrementBoundAction = bindActionCreators(decrement,this.props.dispatch);
}

increment = () => {
   console.log(this.props);
    //this.props.incDispatch;
    //this.props.incrementDispatch();
    //Approach 4 -- Directly call the action Creator method inside dispatch method
     //this.props.dispatch(increment());
    //Approach 5 - Binding the bindActionCreator to the other function.
    this.incrementBoundAction();
  }

  decrement = () => {
    //this.props.decDispatch;
    //this.props.decrementDispatch();
    //this.props.dispatch(decrement());
    this.decrementBoundAction();
  }
  render() {
    return (
      <div>
        <h2>CounterActionCreators Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state
  };
}
//2 nd way // approach 2: use an action creator function
/*const mapToDispatch =  
    { increment,decrement
    };
*/
// 3rd Way 
/*
const mapToDispatch = dispatch=>{
    return {
        incrementDispatch : ()=> dispatch(increment()),
        decrementDispatch : ()=> dispatch(decrement())

    }

}    
*/
export default connect(mapStateToProps)(CounterActionCreators);