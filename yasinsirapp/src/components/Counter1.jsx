import React, { useState } from "react";

export const Counter1=()=>{
    const [copy,setCopy]=useState(0)
    return(
        <div>
            <h1>{copy}</h1>
            <button onClick={()=> copy < 100 && setCopy(copy+2) }>+</button>
            <button onClick={()=> copy >   0 && setCopy(copy-2)}>-</button>
        </div>
    )
}