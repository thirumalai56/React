import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './Top.js';
import LifeCycleDemo from './LifeCycleDemo';
import ThreeCounts from './ThreeCounts';
import Demo from './Demo';
import Users from './Users';
function App() {
  /*
 
     
 
  */
  const [toggle,setToggle] = useState(true);
  return (
    <div className="App">
      <h1> useEffect Lifecycle Demo Example </h1>
       <button onClick ={()=> setToggle(false)}>Hide LifeCycle Component</button>
      { toggle && <LifeCycleDemo/>}
      <h1> useEffect with MultipleComponents</h1> 
     <Top/>
     <ThreeCounts/>
     <Demo/>
     <Users/>
    </div>
  );
}

export default App;
