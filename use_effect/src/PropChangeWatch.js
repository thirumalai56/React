import React, {useEffect} from 'react';
function PropChangeWatch({a,b}){

    useEffect(()=>{
        console.log("property value of a ",a );
    },[a]);

    return (
        <div>
          I've got 2 props: a={a} and b={b}
        </div>
      );
}
export default PropChangeWatch;