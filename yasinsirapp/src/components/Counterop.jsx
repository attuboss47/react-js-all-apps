import React, { useState } from "react";

export const Counterop =()=>{
    const [count,setCount]=useState(0)
   const handleAdd=()=>{
    count <30 &&  setCount(count+5)
   }
  const  handleDec=()=>{

    count >5 && setCount(count-5)
  }

    return(
        <div>
        <h1> {count}</h1>
        <button onClick={()=>count >5 && setCount(count+5)}>Inc</button> 
        <button onClick={()=>count <30 && setCount(count-5)}>Dec</button>

        {/* <button onClick={()=>handleAdd()}disabled={count===30 }>Inc+</button> */}
        {/* <button onClick={()=>handleDec()} disabled={count===5}>Dec-</button> */}
        </div>
    )
}