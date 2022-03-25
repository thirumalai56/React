import React from 'react';
import { connect } from 'react-redux';
import { getNews,getUsers } from './Actions';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
let Button=({getUsers})=>{
    console.log(getUsers);
  return (<button onClick={getUsers}>Press to see news</button>)
}
const mapDispatchToProps = {
     getUsers: getUsers,
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;