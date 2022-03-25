import React,{Component} from 'react';
export default class Greeting extends Component{
    static defaultProps = {
        name:'GuestDs'    
    }
    render(){
        return (
        <div>
            <h1> Good Morning {this.props.name}!</h1>
        </div> );   
    }
}
/*
Greeting.defaultProps = {
    name:'GuestD'
}
*/