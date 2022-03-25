import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function Child2(){

    let context = useContext(UserContext);
    context.setLoggedInUser("NEW_USER");
    return (<h1> logged In User {context.user}</h1>);
}
export default Child2;
