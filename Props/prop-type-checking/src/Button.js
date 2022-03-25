import PropTypes from 'prop-types';
import React from 'react';
import colorsMap from './Colors';
export default function Button(props){
    console.log('colorsMap',colorsMap);
    console.log(props);
    return (
        <button disabled = {!props.isEnable} 
                type="button"
                style={{backgroundColor:colorsMap.get(props.color)}}
                  >{props.buttonText}</button>
    )

}

/*
colorsMap.set('primary','#F79F1F'); //key,value
colorsMap.set('secondary','#EA2027');
colorsMap.set('success','#D980FA');
colorsMap.set('warning','#833471');
colorsMap.set('danger','#6F1E51');
colorsMap.set('info','#0652DD');
*/
Button.propTypes = {
 
  buttonText: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Array.from(colorsMap.keys())).isRequired

}
Button.defaultProps = {
    isEnable : true
}