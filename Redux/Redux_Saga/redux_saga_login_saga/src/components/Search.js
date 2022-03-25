import React from 'react';
import {useState} from 'react';
const Search = (props) => {
  const {value,setValue} =useState();
    return (
        
      <div className="search">
        <input
          name="search"
          className="search__input"
          placeholder="Search for a book"
          value={value}
        />
        <button onClick={props.handleInput}>Search</button>
      </div>
    );
  };
  
  export default Search;