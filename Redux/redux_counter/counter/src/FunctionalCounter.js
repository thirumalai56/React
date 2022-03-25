import React from 'react';
import { connect } from 'react-redux';

function FunctionalCounter(props){
    console.log(props);
    return <div>
            FunctionalCounter{props.count}
       </div>;

}

function mapStateToProps(state){

    return {count:state};
}
export default connect(mapStateToProps)(FunctionalCounter)