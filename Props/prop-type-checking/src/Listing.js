import React from 'react';
import PropTypes from 'prop-types';
export default function Listing(props){
    console.log(props);
  return (<div>
            {props.listItem}
            {props.children[0]}
      </div>)
}
Listing.propTypes = {
    listItem : PropTypes.element
}