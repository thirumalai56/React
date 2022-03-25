import PropTypes from 'prop-types';
import React from 'react';
export default function Book(props){

    return <div>
           Book Component Details {JSON.stringify(props)}
        </div>;

}

Book.propTypes = {
  name:  PropTypes.string.isRequired,
  isbn: PropTypes.number.isRequired,
  languages:PropTypes.array.isRequired,
  publisher :PropTypes.object,
  isPublished: PropTypes.bool
}
Book.defaultProps = {

    isPublished : false
}