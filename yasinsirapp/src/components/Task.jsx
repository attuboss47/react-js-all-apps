import React, { useState } from "react"

export const Task=()=>{
    const [color,setColor]=useState()
    // const [back,setBack]=useState()

    // const handleAdd=()=>{
    //     setBack(color)
    // }
    return(
        <div className="main">
            
            <input type="color" onChange={(e)=>setColor(e.target.value)} />
            {/* <button onClick={handleAdd}>Change</button> */}
            <div className="sub" style={{backgroundColor:color}} >

            </div>
        </div>
    )
}