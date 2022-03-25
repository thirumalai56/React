import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import FunctionalCounter from './FunctionalCounter';
import CounterActionCreators from './CounterActionCreators';
function App() {
  return (
    <div className="App">
      <Counter/>
      <FunctionalCounter/>
      <CounterActionCreators/>
    </div>
  );
}

export default App;
