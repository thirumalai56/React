import React,{useState,useEffect} from 'react';

function Top(){
    const [count,setCount] = useState(0);
    useEffect(()=>{

        console.log("TOP DidMount ");
    });

    return (
        <div>
            <button  onClick={() => setCount(count + 1)}>TOP Button {count}</button> 
            <Middle/>
        </div>
    )

}

function Middle(){
    const [count,setCount] = useState(0);
    useEffect(()=>{

        console.log("Middle DidMount ");
    });

    return (
        <div>
            <button  onClick={() => setCount(count + 1)}>Middle Button {count}</button> 
            <Bottom/>
        </div>
    );
}

function Bottom(){
    const [count,setCount] = useState(0);
    useEffect(()=>{

        console.log("Bottom DidMount ");
    });

    return (
        <div>
            <button  onClick={() => setCount(count + 1)}>Bottom Button {count}</button> 
        </div>
    );
}
export default Top;