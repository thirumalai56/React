import React  from "react";
class Child extends React.Component{
    constructor(){
        super();
        console.log("child component constuctor");
    };
    componentWillMount(){
        console.log("child component componentWillMount");
    };
    render(){
        console.log("child component render")
        return(
            <div>Child Component Data....{this.props.name}</div>
        )
    }
    componentDidMount(){
        console.log("child componentDidMount");
    };

    componentWillReceiveProps(){
        //if component receives any props, then this life cycle hook will execute
        console.log("child componentWillReceiveProps");;
    };

    shouldComponentUpdate(){
        return true;
    }
};
export default Child;