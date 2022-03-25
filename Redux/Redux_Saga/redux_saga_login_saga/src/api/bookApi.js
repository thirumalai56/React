import axios, {
    AxiosError,
    AxiosResponse
  } from "axios";
  
  
  const ApiEndpointUrl = {
    GOOGLE_BOOKS_BY_QUERY:'https://www.googleapis.com/books/v1/volumes?q=',
    GOOGLE_BOOKS_RETRIEVE:'https://www.googleapis.com/books/v1/volumes'
  }
  export const fetchGoogleBooksByQuery = (bookTitle) => {
    // startIndex 1 to ..
    // maxResults 0..40
    // projection fuLL | lite
    console.log("Books Query is "+bookTitle);
    return axios.get(ApiEndpointUrl.GOOGLE_BOOKS_BY_QUERY + bookTitle + "&maxResults=40&projection=full")
      .then((response) => response.data)
      .catch((error) => {
        throw error.response.data.error.message;
      });
  };
 
  export const fetchGoogleBookRetrieve = (volumeId) => {
    return axios.get(`${ApiEndpointUrl.GOOGLE_BOOKS_RETRIEVE}/${volumeId}`)
      .then((response) => response.data)
      .catch((error) => {
        throw error.response.data.error.message;
      });
  };
    