import React from 'react';
import {UserContext} from './UserContext';
function Child(){

return (
    <UserContext.Consumer>
        {
             (value)=>{
                value.setLoggedInUser("RAMESH")
                return <div> I'm the Context Value {value.user} </div>

            }
        }
    </UserContext.Consumer>    

);

}
export default Child;