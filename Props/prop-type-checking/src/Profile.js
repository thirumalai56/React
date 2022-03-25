import React from 'react';
import PropTypes from 'prop-types';
export default function Profile(props){
  return <div><h1> Profile</h1>
        <p> Name : {props.name} </p>
        <p> Emails :{props.emails} </p>
  </div> ;

}
Profile.propTypes = {
    name : nameCheck,
    emails: PropTypes.arrayOf(validateEmailProp)
}

function nameCheck(props,propName,componentName){

    console.log(props,propName,componentName);
    
    if(props[propName]){
        let {name} = props; 
        if(typeof name ==='string'){
            return name.length <6 ? new Error(`${propName} in ${componentName} must have more than 6 Characters`) :null;
        }
    }else {
        return new Error(`${propName} in ${componentName} is Mandatory`);
    }
}

function validateEmailProp(propValue, key , commponentName,location,propFullName){
    let array = [];
    console.log(propValue, key , commponentName,location,propFullName);
    for(let email of propValue ){
        console.log(email);
    if(!validateEmail(email)){
       array.push(`${email} is not a valid Email Address in ${commponentName}`);
        }
    }
    if(array.length ==0)
        return null;
    return new Error(array);
}

function validateEmail(emailVal) {
    console.log(emailVal);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailVal.match(mailformat)) {
        console.log("Valid email address!");

        return true;
    }
    else {
        console.log("You have entered an invalid email address!");

        return false
    }
}