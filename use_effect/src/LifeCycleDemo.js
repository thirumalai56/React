import React,{useEffect} from 'react';

function LifeCycleDemo(){
    useEffect(()=>{
        console.log("---Component Did Mount---");
        return ()=>{
            console.log("---Component Will Unmount----");
        }
    }
  );
  return <h1>I'm a LifeCycle Component</h1>;
}

export default LifeCycleDemo;