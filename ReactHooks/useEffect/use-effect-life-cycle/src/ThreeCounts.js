/*
    In this example, Creating 3 buttons , 
	want to execute useEffect when the second state value 
	changes.
*/
import React,{useState,useEffect} from 'react';

function ThreeCounts(){

    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);
    const [counter3,setCounter3] = useState(0);
    useEffect(()=>{
        console.log("----Component Did Mount-----");
    },[counter2]);
    return <div>
            <button onClick = {()=>setCounter1(counter1+1)}>Counter1 Clicked {counter1} Times</button>
            <br/>
            <button onClick = {()=>setCounter2(counter2+1)}>Counter2 Clicked {counter2} Times</button>
            <br/>
            <button onClick = {()=>setCounter3(counter3+1)}>Counter3 Clicked {counter3} Times</button>
        </div>
            ; 
}

export default ThreeCounts;