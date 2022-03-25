import * as React from "react";
import { connect } from "react-redux";
import Book from './Book';
function BooksData(props) {
  console.log('BooksData ',props.books);
    if (props.books && props.books.totalItems === 0 && !props.books.items) {
      return  <div className="error">Books Not Found</div>;
    }
    props.books.book.items.items.map((book)=>{
      console.log(book);
    });
    return props.books.error
    ? <div className="error">{props.book.error}</div>
    : <Book books={props.books.book.items}/>;

  }
 

const mapStateToProps = (state) => ({
  books:state,
  error:state 
});

export default connect(mapStateToProps)(BooksData);

/*


 */     