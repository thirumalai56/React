import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Book from './Book';
import Listing from './Listing';
import Button from './Button';
import Profile from './Profile';
function App() {
  const date = new Date();
  const strDate = date.toLocaleString();
  return (
    <div className="App">
      <Greeting />
      <Greeting name="Raghavan"/>
      <Book name="React-CookBook" 
            isbn={121212} 
            languages ={['Telugu','English','Hindi']}
            publisher = {{
                name:'OXFord Publications',
                'date':{strDate}

            }}
            isPublished />
       <Book name="Angular-CookBook" isbn={89898989} languages ={['Telugu','English','Hindi']} />     
       <Listing listItem = {<ul> <li>React Element PropTypes example</li> </ul>}>
            <Greeting />
            <Greeting name="React Child Element"/>
       </Listing>
       <Button buttonText="CUSTOM BUTTON" color="secondary"></Button>

       <Profile name="Rag" emails = {['em1','em2']}/>
    </div>
  );
}

export default App;
