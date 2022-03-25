import * as React from "react";
import { connect } from "react-redux";
import "./booksearch.css";
import {
  bindActionCreators,
  Dispatch
} from "redux";
import { googleBooksByQuery } from "../actions/bookActions";
import BooksData from './BooksData';

function SearchPage(props)  {
  const [value,setValue] = React.useState('');
  const onClick =()  => {
    props.actions.googleBooksByQuery(value);
  }

  const handleInput = (event)=>{
    setValue(event.target.value);
  }
    return (
      <div>
      
        <h1 className="app__title">Find a book</h1>
      
        <div className="search">
        <input
          name="search"
          className="search__input"
          placeholder="Search for a book"
          value={value}
          onChange = {handleInput}
        />
        <button onClick={()=>onClick()}>Search</button>
        <BooksData/>
      </div>
        
      </div>
    );
  
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({googleBooksByQuery}, dispatch)
});

export default connect(null, mapDispatchToProps)(SearchPage);
