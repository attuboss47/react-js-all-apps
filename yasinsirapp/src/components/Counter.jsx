import React, { useState } from "react";

export const Counter=()=>{
    const [count,setCount]=useState(0)
    const handleInc=()=>{
        count < 20 && setCount(count +2)
        
    }
    const handleDec=()=>{
        count > 0  && setCount(count -2)
    }
    
    return(
        <div>
            <h1>{count}</h1>
            {/* <button onClick={()=>count < 20 && setCount(count+5)}>Increament</button>
            <button onClick={()=>count > 0 && setCount(count-2)}>Decreament</button> */}
            <button onClick={handleInc}>Increament</button>
            <button onClick={handleDec}>Decreament</button>
        </div>
    )
        }