import React from 'react';
import {connect} from 'react-redux';

function PizzaCounter(props){

    console.log(props);
    return <div>PIZZA Counter</div>;
}
function mapStateToProps(state){

    return {
        pizza : state.pizza
    }
}

export default connect(mapStateToProps)(PizzaCounter)