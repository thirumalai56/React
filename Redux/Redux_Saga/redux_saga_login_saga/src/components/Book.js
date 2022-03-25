import React from 'react';
import {Link} from 'react-router-dom';
function Book (props){
  console.log('Book component',props);
    const {book} = props;
    const {items} = props.books;
    console.log("items",items);
    return (
      props.books.totalItems ?(
       items.map((book)=>( 
      <div className="book">
        <div className="book-wrapper">
          <h1 className="book-wrapper__title">{book.volumeInfo.title}</h1>
          <h2 className="book-wrapper__subtitle">{book.volumeInfo.subtitle}</h2>
          {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
            <img
              className="book-wrapper__image"
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
          )}
          {book.volumeInfo.description && (
            <p
              className="book-wrapper__description"
              dangerouslySetInnerHTML={
                book.fullVersion
                  ? createMarkup(book.volumeInfo.description)
                  : createMarkupShorter(book.volumeInfo.description, 150)
              }
            />
          )}
          {book.fullVersion
            ? ""
            : (
              <Link to={"/book/" + book.id} className="book-wrapper__link" role="button">More info</Link>
            )}
        </div>
      </div>))) : (<div>Total Items 0</div>)
    );
  }
  export const createMarkup = (html) => {
    return {
      __html: html
    };
  };
  
  export const createMarkupShorter = (html, truncateTo) => {
    return {
      __html: html.substring(0, truncateTo) + "..."
    };
  };
  export default Book