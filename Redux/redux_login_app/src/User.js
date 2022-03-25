import React from 'react';
function User(props) {
    console.log(props);
    return <h1>Hello {props.match.params.username}!</h1>;
  }
export default User;